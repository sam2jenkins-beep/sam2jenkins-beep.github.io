
import os
import re
from playwright.sync_api import sync_playwright, expect

def test_ftc_mobile():
    with sync_playwright() as p:
        # iPhone 12 Pro dimensions
        iphone_12 = p.devices['iPhone 12 Pro']
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(**iphone_12)
        page = context.new_page()

        # 1. Load the page
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        # 2. Open FTC Modal
        # Scroll to endgame
        endgame = page.locator("#endgame")
        endgame.scroll_into_view_if_needed()

        ftc_card = page.locator("#endgame .clickable-card").filter(has_text="Final Tribal Council")
        ftc_card.click()

        # 3. Verify Columns Stack
        # In mobile, .ftc-split-layout should have grid-template-columns: 1fr (computed)
        # But we can easier check if elements are stacked vertically.
        # Let's verify visibility and take a screenshot.

        modal_content = page.locator("#modal-content-box")
        expect(modal_content).to_be_visible()

        # Take screenshot of top
        page.screenshot(path="verification/mobile_ftc_top.png")

        # Scroll down
        modal_content.evaluate("element => element.scrollTop = 1000")
        page.screenshot(path="verification/mobile_ftc_middle.png")

        print("Mobile FTC verification successful.")

        browser.close()

if __name__ == "__main__":
    test_ftc_mobile()
