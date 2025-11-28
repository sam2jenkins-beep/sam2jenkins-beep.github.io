from playwright.sync_api import sync_playwright, expect
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        page.goto(f"file://{os.path.abspath('index.html')}")
        page.wait_for_load_state("networkidle")

        # Screenshot the home section
        page.screenshot(path="verification/home_screenshot.png")
        print("Home screenshot taken.")

        # Verify title
        expect(page).to_have_title("Survivor Web Guide")

        # Check if sections exist
        sections = ["home", "about", "notebooklm", "pregame", "metagame", "phases", "pillars", "endgame"]
        for section in sections:
            expect(page.locator(f"#{section}")).to_be_visible()
            print(f"Section #{section} is visible.")

        # Interact with Modal
        # Scroll to pillars section to ensure it's in view (optional but good for screenshots)
        page.locator("#pillars").scroll_into_view_if_needed()

        # Click OUTWIT card
        page.locator("[data-pillar='outwit']").click()

        # Check if modal is visible
        modal = page.locator("#modal-overlay")
        expect(modal).to_be_visible()
        expect(page.locator("#modal-title")).to_have_text("OUTWIT")

        # Screenshot the modal
        page.screenshot(path="verification/modal_screenshot.png")
        print("Modal screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run()
