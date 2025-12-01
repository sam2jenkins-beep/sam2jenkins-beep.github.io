from playwright.sync_api import sync_playwright

def verify_gift_card():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        # Navigate to the page
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        print("Verifying 'A Gift' card...")

        # Locate the 'A Gift' card
        # Based on index.html, it's the first .accordion-card
        gift_card = page.locator(".accordion-card").nth(0)

        # Hover to expand
        gift_card.hover()

        # Wait for transition (approx 0.5s in CSS)
        page.wait_for_timeout(1000)

        # Check if content is visible
        content_locator = gift_card.locator(".content")
        is_visible = content_locator.is_visible()
        print(f"Content visible: {is_visible}")

        # Check for scrolling.
        # The content has overflow-y: hidden (implied) or auto.
        # We can check scrollHeight vs clientHeight of the card or content.

        # We want to ensure the .accordion-card itself does not have a scrollbar active.
        # But wait, .accordion-card has `overflow-y: auto; /* Failsafe */` in CSS.
        # So we check if scrollHeight > clientHeight.

        overflow_info = gift_card.evaluate("""el => {
            return {
                scrollHeight: el.scrollHeight,
                clientHeight: el.clientHeight,
                hasOverflow: el.scrollHeight > el.clientHeight + 1 // +1 for float tolerance
            }
        }""")

        print(f"Scroll info: {overflow_info}")

        if overflow_info['hasOverflow']:
            print("WARNING: The card has a vertical scrollbar!")
        else:
            print("SUCCESS: The card fits content without scrolling.")

        # Take a screenshot
        page.screenshot(path="gift_card_verification.png")
        print("Screenshot saved to gift_card_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_gift_card()