from playwright.sync_api import sync_playwright

def verify_accordion_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        # Locate About section
        about_section = page.locator("#about")
        about_section.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)

        # 1. Verify "Spine" State (Default)
        # Check if text is vertical (we can't easily check rendered pixels for rotation in headless without OCR,
        # but we can check the computed style via JS)
        card_h3 = page.locator(".accordion-card h3").first
        writing_mode = card_h3.evaluate("el => getComputedStyle(el).writingMode")

        print(f"Default Writing Mode: {writing_mode}")
        if writing_mode != "vertical-rl":
            print("FAIL: Text is not vertical in default state.")
        else:
            print("PASS: Text is vertical-rl in default state.")

        page.screenshot(path="verification/accordion_spine_view.png")
        print("Spine view screenshot taken.")

        # 2. Verify Expanded State
        # Hover second card
        cards = page.locator(".accordion-card")
        second_card = cards.nth(1)
        second_card.hover()
        page.wait_for_timeout(800) # Wait for transition

        # Check writing mode again (should be horizontal)
        second_card_h3 = second_card.locator("h3")
        expanded_writing_mode = second_card_h3.evaluate("el => getComputedStyle(el).writingMode")

        print(f"Expanded Writing Mode: {expanded_writing_mode}")
        if expanded_writing_mode != "horizontal-tb":
            print("FAIL: Text did not revert to horizontal on hover.")
        else:
            print("PASS: Text is horizontal-tb on hover.")

        page.screenshot(path="verification/accordion_spine_expanded.png")
        print("Expanded spine view screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_accordion_layout()
