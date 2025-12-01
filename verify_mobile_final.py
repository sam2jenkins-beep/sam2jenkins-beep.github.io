
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        # iPhone 12 Pro emulation
        iphone_12 = p.devices['iPhone 12 Pro']
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(**iphone_12)
        page = context.new_page()

        # Load local file
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        print("Navigating to NotebookLM section...")
        page.evaluate("document.getElementById('notebooklm').scrollIntoView()")
        page.wait_for_timeout(1000)

        # Check for overflow
        print("Checking for text overflow in NotebookLM card...")
        # Select the text container
        text_container = page.locator("#notebooklm .split-left p").first.locator("..") # parent div

        overflow = page.evaluate("""
            const el = document.querySelector('#notebooklm .split-left');
            el.scrollHeight > el.clientHeight;
        """)

        print(f"Has Overflow: {overflow}")

        # Take screenshot of the NotebookLM section
        page.locator("#notebooklm").screenshot(path="verify_mobile_notebooklm.png")
        print("Screenshot saved: verify_mobile_notebooklm.png")

        browser.close()

if __name__ == "__main__":
    run()
