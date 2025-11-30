from playwright.sync_api import sync_playwright

def verify_phases():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Navigate to the local file
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        # Scroll to phases section
        page.locator("#phases").scroll_into_view_if_needed()
        page.wait_for_timeout(1000)

        # Take screenshot of the phases section
        page.locator("#phases").screenshot(path="verify_phases_redesign.png")
        print("Screenshot saved to verify_phases_redesign.png")

        # Verify Content in the first card (Day 1)
        first_card = page.locator(".timeline-card").nth(0)

        # Check Title Font Family (approximate check via computed style)
        title = first_card.locator("h3")
        font_family = title.evaluate("element => getComputedStyle(element).fontFamily")
        print(f"Title Font Family: {font_family}")

        # Check if 'Arial' is in the font stack
        if "Arial" in font_family or "sans-serif" in font_family:
             print("PASS: Title font appears to be Arial/sans-serif.")
        else:
             print(f"FAIL: Title font is {font_family}")

        # Check content exists
        text_content = first_card.inner_text()
        if "Day 1 - The Marooning" in text_content and "The Sprint:" in text_content:
            print("PASS: First card content verified.")
        else:
            print("FAIL: First card content mismatch.")
            print(f"Content found: {text_content}")

        browser.close()

if __name__ == "__main__":
    verify_phases()
