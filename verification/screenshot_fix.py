
import os
from playwright.sync_api import sync_playwright

def screenshot_content():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})

        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")
        page.wait_for_load_state("networkidle")

        # Navigate to Outlast -> Destination Panama
        page.click("div[onclick=\"openCategory('outlast')\"]")
        page.wait_for_selector("text=DESTINATION: PANAMA")
        page.click("text=DESTINATION: PANAMA")

        page.wait_for_selector("#reader-view.active")

        # Scroll down to where the image is
        # The image follows "Filming Period"
        element = page.locator("text=Filming Period")
        element.scroll_into_view_if_needed()

        # Take screenshot of the reader view content
        page.screenshot(path="verification/fixed_content_visible.png")
        print("Screenshot taken.")

        browser.close()

if __name__ == "__main__":
    screenshot_content()
