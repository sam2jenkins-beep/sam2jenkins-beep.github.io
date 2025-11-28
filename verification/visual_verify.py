from playwright.sync_api import sync_playwright

def verify_visuals():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("file:///app/index.html")

        # Take screenshot of Home
        page.screenshot(path="verification/screenshot_home.png")

        # Scroll to About
        page.locator("#about").scroll_into_view_if_needed()
        page.wait_for_timeout(1000) # wait for snap
        page.screenshot(path="verification/screenshot_about.png")

        # Scroll to End Game
        page.locator("#endgame").scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/screenshot_endgame.png")

        browser.close()

if __name__ == "__main__":
    verify_visuals()