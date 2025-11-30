
from playwright.sync_api import sync_playwright
import time

def verify_mobile_scroll():
    with sync_playwright() as p:
        # Use iPhone 12 Pro emulation
        iphone_12 = p.devices['iPhone 12 Pro']
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(**iphone_12)
        page = context.new_page()

        # Load the local index.html
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        def test_modal(modal_name, content_id):
            print(f"\n--- Testing {modal_name} on Mobile ---")

            # Click the card to open modal
            selector = f'[data-content-id="{content_id}"]'
            try:
                # Ensure the element is in view before clicking
                page.locator(selector).scroll_into_view_if_needed()
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

            print(f"Scroll Height: {scroll_height}")
            print(f"Client Height: {client_height}")

            if scroll_height > client_height:
                print("Result: Content EXCEEDS viewport height (Scrollable).")

                # Attempt to scroll to the very bottom
                modal_content_handle.evaluate("el => el.scrollTop = el.scrollHeight")
                time.sleep(1)

                final_scroll_top = modal_content_handle.evaluate("el => el.scrollTop")
                print(f"Final Scroll Top: {final_scroll_top}")

                # Take screenshot at the BOTTOM
                page.screenshot(path=f"mobile_verify_{content_id}_bottom.png")
                print(f"Screenshot saved to mobile_verify_{content_id}_bottom.png")

                # Scroll back to top for standard screenshot
                modal_content_handle.evaluate("el => el.scrollTop = 0")
                time.sleep(0.5)
            else:
                print("Result: Content FITS within viewport height (Not Scrollable).")

            page.screenshot(path=f"mobile_verify_{content_id}_top.png")
            print(f"Screenshot saved to mobile_verify_{content_id}_top.png")

            # Close modal
            page.click(".back-button")
            time.sleep(0.5)

        # Test "Realities of Reality TV"
        test_modal("Realities of Reality TV", "realities")

        # Test "Final 48 Hours"
        test_modal("Final 48 Hours", "final48")

        browser.close()

if __name__ == "__main__":
    verify_mobile_scroll()
