
import os
from playwright.sync_api import sync_playwright

def verify_content_bug():
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

        # Check for text "[Image of Panama climate map]"
        content = page.content()
        if "[Image of Panama climate map]" in content:
            print("BUG VERIFIED: Placeholder text '[Image of Panama climate map]' found in rendered content.")
        else:
            print("Bug not found.")

        browser.close()

if __name__ == "__main__":
    verify_content_bug()
