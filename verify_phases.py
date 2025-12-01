import re
from playwright.sync_api import sync_playwright

def verify_phases():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("file:///app/index.html")
        page.wait_for_load_state("networkidle")

        print("Verifying #phases section...")

        # 1. Verify Font Family (Computed Style)
        # Check the section container and a few children
        phases_section = page.locator("#phases")
        font_family = phases_section.evaluate("el => getComputedStyle(el).fontFamily")
        print(f"Font Family of #phases: {font_family}")

        if "Arial" not in font_family and "sans-serif" not in font_family:
             print("ERROR: Font family does not seem to be Arial.")
        else:
             print("SUCCESS: Font family appears correct.")

        # Check an H3 header inside
        h3 = page.locator("#phases h3").first
        h3_font = h3.evaluate("el => getComputedStyle(el).fontFamily")
        print(f"Font Family of #phases h3: {h3_font}")

        # 2. Verify Text Content
        # We'll check for the existence of the specific titles
        titles = [
            "Day 1 - The Marooning",
            "The Pre-Merge Gauntlet",
            "The Merge & Chaos",
            "The Post-Merge Arena",
            "The Endgame Gauntlet",
            "Conclusion"
        ]

        content = page.content()
        all_titles_found = True
        for title in titles:
            if title in content:
                print(f"Found title: {title}")
            else:
                print(f"ERROR: Title '{title}' not found!")
                all_titles_found = False

        if all_titles_found:
            print("SUCCESS: All card titles found.")

        # 3. Verify Images (Placeholders)
        # Check for 4 images with class 'phase-deco-img' and check border-radius
        images = page.locator(".phase-deco-img")
        count = images.count()
        print(f"Found {count} phase decoration images.")

        if count == 4:
            # Check border radius of the first one
            radius = images.first.evaluate("el => getComputedStyle(el).borderRadius")
            print(f"Border Radius of first image: {radius}")
            if radius == "0px":
                print("SUCCESS: Images are square (border-radius: 0px).")
            else:
                print(f"ERROR: Images might not be square. Radius: {radius}")
        else:
            print(f"ERROR: Expected 4 images, found {count}")

        browser.close()

if __name__ == "__main__":
    verify_phases()