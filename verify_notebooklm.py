
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Desktop Verification
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1920, "height": 1080})
        await page.goto("file:///app/index.html")
        await page.wait_for_load_state("networkidle")

        # Locate the NotebookLM section
        section = page.locator("#notebooklm")
        await section.scroll_into_view_if_needed()
        # Wait a bit for any smooth scrolling/animations
        await asyncio.sleep(1)

        # Take screenshot of the instructions card specifically
        instructions_card = page.locator("#notebooklm .split-left")
        await instructions_card.screenshot(path="notebooklm_desktop_after.png")

        # Check for overflow (simple heuristic: scrollHeight > clientHeight)
        is_overflowing = await instructions_card.evaluate("el => el.scrollHeight > el.clientHeight")
        print(f"Desktop Overflowing: {is_overflowing}")

        await browser.close()

        # Mobile Verification (iPhone 12 Pro)
        iphone = p.devices['iPhone 12 Pro']
        browser = await p.chromium.launch()
        context = await browser.new_context(**iphone)
        page = await context.new_page()

        await page.goto("file:///app/index.html")
        await page.wait_for_load_state("networkidle")

        section = page.locator("#notebooklm")
        await section.scroll_into_view_if_needed()
        await asyncio.sleep(1)

        instructions_card = page.locator("#notebooklm .split-left")
        await instructions_card.screenshot(path="notebooklm_mobile_after.png")

        is_overflowing = await instructions_card.evaluate("el => el.scrollHeight > el.clientHeight")
        print(f"Mobile Overflowing: {is_overflowing}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
