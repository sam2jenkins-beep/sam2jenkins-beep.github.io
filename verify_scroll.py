
from playwright.sync_api import sync_playwright
import time

def verify_scroll():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local index.html
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        # Function to test a modal
        def test_modal(trigger_selector, modal_name, content_id):
            print(f"\n--- Testing {modal_name} ---")

            # Click the card to open modal
            # "Realities" has data-content-id="realities"
            # "Final 48" has data-content-id="final48"

            selector = f'[data-content-id="{content_id}"]'
            try:
                page.click(selector)
            except Exception as e:
                print(f"Error clicking {modal_name}: {e}")
                return

            # Wait for modal to be active
            page.wait_for_selector("#modal-overlay.active")
            time.sleep(1) # Allow transition

            # Get modal content element
            modal_content_handle = page.locator("#modal-content-box")

            # Get dimensions
            scroll_height = modal_content_handle.evaluate("el => el.scrollHeight")
            client_height = modal_content_handle.evaluate("el => el.clientHeight")
            scroll_top = modal_content_handle.evaluate("el => el.scrollTop")

            print(f"Scroll Height: {scroll_height}")
            print(f"Client Height: {client_height}")
            print(f"Initial Scroll Top: {scroll_top}")

            if scroll_height > client_height:
                print("Result: Content EXCEEDS viewport height (Scrollable).")

                # Attempt to scroll
                modal_content_handle.evaluate("el => el.scrollTop = 500")
                time.sleep(0.5)
                new_scroll_top = modal_content_handle.evaluate("el => el.scrollTop")
                print(f"New Scroll Top: {new_scroll_top}")

                if new_scroll_top > 0:
                    print("Scroll Success: Position updated.")
                else:
                    print("Scroll FAILURE: Position did not update.")
            else:
                print("Result: Content FITS within viewport height (Not Scrollable).")
                print("WARNING: Content might be cut off if it's supposed to be longer.")

            # Take screenshot
            page.screenshot(path=f"verify_{content_id}.png")
            print(f"Screenshot saved to verify_{content_id}.png")

            # Close modal
            page.click(".back-button")
            time.sleep(0.5)

        # Test "Realities of Reality TV"
        test_modal('[data-content-id="realities"]', "Realities of Reality TV", "realities")

        # Test "Final 48 Hours"
        test_modal('[data-content-id="final48"]', "Final 48 Hours", "final48")

        browser.close()

if __name__ == "__main__":
    verify_scroll()
