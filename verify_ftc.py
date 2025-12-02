
import os
import re
from playwright.sync_api import sync_playwright, expect

def test_ftc_modal():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a large viewport to see the 2-column layout
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        # 1. Load the page
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        # 2. Locate the Final Tribal Council card
        # It's in #endgame and has text "Final Tribal Council"
        ftc_card = page.locator("#endgame .clickable-card").filter(has_text="Final Tribal Council")
        expect(ftc_card).to_be_visible()

        # 3. Click it
        ftc_card.click()

        # 4. Wait for modal overlay to be active
        modal_overlay = page.locator("#modal-overlay")
        expect(modal_overlay).to_have_class(re.compile(r"active"))

        # 5. Check for key content
        # Headline
        headline = page.locator("h2", has_text="The Survivor Winner's Compendium")
        expect(headline).to_be_visible()

        # Structure Section
        structure_header = page.locator("h4", has_text="The Rhetorical Blueprint")
        expect(structure_header).to_be_visible()

        # Todd Section
        todd_header = page.locator("h4", has_text="The FTC GOAT")
        expect(todd_header).to_be_visible()

        # Iframe
        iframe = page.locator("iframe[src*='youtube.com']")
        expect(iframe).to_be_visible()

        # 6. Take Screenshot of the full modal content
        # We target the .ftc-container inside the modal
        # Scroll to top first
        page.locator("#modal-content-box").evaluate("element => element.scrollTop = 0")

        # Take screenshot
        page.screenshot(path="verification/verify_ftc_modal.png")

        print("FTC Modal verification successful. Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    if not os.path.exists("verification"):
        os.makedirs("verification")
    test_ftc_modal()
