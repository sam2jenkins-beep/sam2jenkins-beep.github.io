from playwright.sync_api import sync_playwright, expect
import os

def verify_fire_section():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate a desktop viewport
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()

        # Load the local index.html file
        # Assuming the app is served locally or accessible via file protocol.
        # Since this is a static site (index.html, script.js), file protocol works best.
        page.goto(f"file://{os.getcwd()}/index.html")
        page.wait_for_load_state("networkidle")

        # 1. Click "OUTLAST" card in Pillars section to open Grid View
        # Need to find the "OUTLAST" card. It should be in #pillars section.
        # Based on previous memory/context, it's a card with data-pillar="outlast" or similar text.
        # Let's try finding it by text first as it's most robust.
        outlast_card = page.get_by_text("OUTLAST", exact=True)
        # Or look for the specific card structure if text is ambiguous (e.g. inside h3)
        if not outlast_card.is_visible():
            # Try scrolling to pillars section first?
            page.locator("#pillars").scroll_into_view_if_needed()
            outlast_card = page.locator(".pillar-card").filter(has_text="OUTLAST")

        outlast_card.click()

        # 2. Wait for the Modal to open (Grid View)
        # The modal content box gets class 'grid-view'
        expect(page.locator("#modal-content-box")).to_have_class(re.compile(r"grid-view"))

        # 3. Click "Fire" sub-topic
        # This will be a .sub-topic-card inside #modal-grid
        fire_card = page.locator(".sub-topic-card").filter(has_text="Fire")
        fire_card.click()

        # 4. Wait for Full Page Modal
        # The modal overlay gets 'full-page' class
        expect(page.locator("#modal-overlay")).to_have_class(re.compile(r"full-page"))

        # 5. Verify the Image is Present and Visible
        # We inserted an img with src="assets/fire_guide.png"
        fire_img = page.locator('img[src="assets/fire_guide.png"]')
        expect(fire_img).to_be_visible()

        # 6. Take Screenshot
        page.screenshot(path="verification/fire_section_verified.png")
        print("Verification successful. Screenshot saved to verification/fire_section_verified.png")

        browser.close()

if __name__ == "__main__":
    import re
    verify_fire_section()
