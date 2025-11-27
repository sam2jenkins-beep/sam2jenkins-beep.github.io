from playwright.sync_api import sync_playwright
import os

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Construct the absolute file path
        file_path = "file://" + os.path.abspath("index.html")

        page.goto(file_path)
        page.wait_for_load_state("networkidle")

        # Take a full page screenshot
        page.screenshot(path="verification/verification.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    main()
