from playwright.sync_api import sync_playwright
import os

def screenshot_day1():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800}) # Desktop view

        file_path = "file://" + os.path.abspath("index.html")
        page.goto(file_path)
        page.wait_for_load_state("networkidle")

        print("Navigating to Day 1 content...")
        page.locator("h3", has_text="META GAME").click()
        page.wait_for_selector("#category-view.active")

        page.locator("#category-list button", has_text="DAY 1: USA VS. QC").click()
        page.wait_for_selector("#reader-view.active")

        # Wait a bit for any transitions
        page.wait_for_timeout(1000)

        # Take screenshot of the reader view
        screenshot_path = "day1_usa_vs_qc.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    screenshot_day1()
