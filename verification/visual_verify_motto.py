from playwright.sync_api import sync_playwright

def verify_visuals():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("file:///app/index.html")

        # Scroll to Motto
        page.locator("#motto").scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/screenshot_motto_default.png")

        # Hover over Outwit (Card 1)
        page.locator(".hub-card").nth(0).hover()
        page.wait_for_timeout(500) # wait for transition
        page.screenshot(path="verification/screenshot_motto_hover_1.png")

        # Hover over Outplay (Card 2)
        page.locator(".hub-card").nth(1).hover()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/screenshot_motto_hover_2.png")

        browser.close()

if __name__ == "__main__":
    verify_visuals()