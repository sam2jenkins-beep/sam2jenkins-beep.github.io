import re
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("file://" + "/app/index.html")

        # 1. HTML Structure Check
        sections = page.locator("section")
        count = sections.count()
        if count != 8:
            print(f"FAILED: Expected 8 sections, found {count}")
        else:
            print("PASSED: 8 sections found.")

        expected_ids = ["home", "about", "notebooklm", "info", "phases", "motto", "endgame", "extras"]
        expected_titles = ["Home", "About", "NotebookLM", "Info", "Phases", "Motto", "End Game", "Extras"]

        for i, section_id in enumerate(expected_ids):
            section = page.locator(f"#{section_id}")
            if not section.count():
                print(f"FAILED: Section with ID '{section_id}' not found.")
                continue

            # Check Title
            title = section.locator("h1").inner_text()
            if title != expected_titles[i]:
                 print(f"FAILED: Expected title '{expected_titles[i]}' for section '{section_id}', found '{title}'")
            else:
                 print(f"PASSED: Title '{title}' correct for section '{section_id}'.")

            # Check Placeholder
            content = section.locator("p").inner_text()
            if "Content coming soon." not in content:
                print(f"FAILED: Placeholder text missing in section '{section_id}'.")

        # 2. CSS Check (Computed Styles)
        main_locator = page.locator("main")
        scroll_snap_type = main_locator.evaluate("element => getComputedStyle(element).scrollSnapType")

        if "y mandatory" in scroll_snap_type or "block mandatory" in scroll_snap_type:
             print(f"PASSED: Main container has scroll-snap-type: {scroll_snap_type}")
        else:
             print(f"FAILED: Main container missing scroll-snap-type 'y mandatory'. Found: {scroll_snap_type}")

        section_home = page.locator("#home")
        scroll_snap_align = section_home.evaluate("element => getComputedStyle(element).scrollSnapAlign")
        if "start" in scroll_snap_align:
             print(f"PASSED: Section has scroll-snap-align: {scroll_snap_align}")
        else:
             print(f"FAILED: Section missing scroll-snap-align 'start'. Found: {scroll_snap_align}")

        # 3. JS Check (Console Log) - Playwright can capture console messages but here we just check if script is loaded
        # Ideally we'd attach a console listener, but simple file check is okay for now.
        scripts = page.locator("script[src='script.js']")
        if scripts.count():
            print("PASSED: script.js is linked.")
        else:
            print("FAILED: script.js is not linked.")

        browser.close()

if __name__ == "__main__":
    verify()