import pytest
from playwright.sync_api import sync_playwright

def test_notebooklm_layout():
    with sync_playwright() as p:
        # Desktop Test
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        # Navigate to NotebookLM section
        page.eval_on_selector("#notebooklm", "e => e.scrollIntoView()")

        # Get element info for the instructions card (split-left)
        # We need to check if the CONTENT fits in the CONTAINER
        # The container is .split-left.
        # Check if scrollHeight > clientHeight

        split_left = page.locator("#notebooklm .split-left")

        desktop_scroll_height = split_left.evaluate("e => e.scrollHeight")
        desktop_client_height = split_left.evaluate("e => e.clientHeight")

        print(f"Desktop (1920x1080) - ScrollHeight: {desktop_scroll_height}, ClientHeight: {desktop_client_height}")

        if desktop_scroll_height > desktop_client_height + 2: # Tolerance
            print("Desktop FAILED: Content overflows container")
        else:
            print("Desktop PASSED: Content fits")

        # Mobile Test
        iphone_12 = p.devices['iPhone 12 Pro']
        context = browser.new_context(**iphone_12)
        page_mobile = context.new_page()
        page_mobile.goto("file:///app/index.html")
        page_mobile.wait_for_load_state("networkidle")

        page_mobile.eval_on_selector("#notebooklm", "e => e.scrollIntoView()")

        split_left_mobile = page_mobile.locator("#notebooklm .split-left")

        # On mobile, the container might be auto height, but the SECTION is 100vh fixed.
        # If the section overflows, we have a problem.
        section = page_mobile.locator("#notebooklm")
        section_scroll = section.evaluate("e => e.scrollHeight")
        section_client = section.evaluate("e => e.clientHeight")

        print(f"Mobile (iPhone 12) - Section ScrollHeight: {section_scroll}, Section ClientHeight: {section_client}")

        if section_scroll > section_client + 2:
             print("Mobile FAILED: Section content overflows viewport")
        else:
             print("Mobile PASSED: Section content fits")

        browser.close()

if __name__ == "__main__":
    test_notebooklm_layout()
