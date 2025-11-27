import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Construct an absolute file path
        file_path = os.path.abspath('index.html')

        await page.goto(f'file://{file_path}')
        await page.wait_for_load_state("networkidle")

        # Ensure the verification directory exists
        os.makedirs('/home/jules/verification', exist_ok=True)

        await page.screenshot(path='/home/jules/verification/verification_after_merge.png')
        await browser.close()
        print("Screenshot taken successfully.")

if __name__ == '__main__':
    asyncio.run(main())
