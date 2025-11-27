from playwright.sync_api import sync_playwright
import os
import sys

def verify_day1_content():
    print("Starting verification of 'Day 1: USA vs. QC' content...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Construct the absolute file path
        file_path = "file://" + os.path.abspath("index.html")

        page.goto(file_path)
        page.wait_for_load_state("networkidle")

        # 1. Verify Reader Container Width (Approximate via computed style)
        print("Checking reader container width...")
        # Since we're in headless with default viewport, we can just check if max-width is applied.
        container_max_width = page.evaluate("() => getComputedStyle(document.querySelector('.reader-container')).maxWidth")
        if container_max_width != "1100px":
            print(f"FAIL: .reader-container max-width is {container_max_width}, expected 1100px")
            sys.exit(1)
        print("PASS: Reader container width increased.")

        # 2. Open 'Meta Game' category
        print("Opening 'Meta Game' category...")
        page.locator("h3", has_text="META GAME").click()
        page.wait_for_selector("#category-view.active")

        # 3. Click 'DAY 1: USA VS. QC' button
        # Button text comes from JS object title
        print("Clicking 'DAY 1: USA VS. QC' button...")
        page.locator("#category-list button", has_text="DAY 1: USA VS. QC").click()
        page.wait_for_selector("#reader-view.active")

        # 4. Verify Content
        print("Verifying content and structure...")
        reader_body = page.locator("#reader-body")

        # Check for main header (rendered as uppercase by CSS)
        actual_header = reader_body.locator(".day1-header h1").inner_text()
        expected_header = "DAY 1: USA VS. QC"
        if actual_header != expected_header:
            print(f"FAIL: Main header text mismatch. Expected '{expected_header}', got '{actual_header}'")
            sys.exit(1)

        # Check for container and cards
        cards = reader_body.locator(".day1-card")
        if cards.count() != 2:
            print(f"FAIL: Expected 2 cards, found {cards.count()}")
            sys.exit(1)

        # Check specific content fragments - taking into account CSS uppercase
        text = reader_body.inner_text()
        # Note: inner_text() returns the rendered text. The h2s are uppercase. The p tags are not.
        checks = [
            "SURVIVOR USA (MODERN ERA): DAY 1 STRATEGIC BLUEPRINT",
            "SURVIVOR QUÉBEC: DAY 1 STRATEGIC BLUEPRINT",
            "Cognitive Load: High",
            "Cognitive Load: Reduced"
        ]

        for check in checks:
            if check not in text:
                print(f"FAIL: Missing text fragment: '{check}'")
                # Debug: print a chunk of text to see what it looks like
                print(f"Sample text content: {text[:200]}...")
                sys.exit(1)

        print("PASS: Content verified.")

        # 5. Verify Background Styles (Computed)
        print("Checking background styles...")
        # Check USA card (first one) has a background image (gradient) and specific border color
        usa_card = cards.nth(0)
        usa_bg = usa_card.evaluate("element => getComputedStyle(element).backgroundImage")
        usa_border = usa_card.evaluate("element => getComputedStyle(element).borderTopColor")

        if "gradient" not in usa_bg:
             print(f"FAIL: USA card missing gradient background. Got: {usa_bg}")
             sys.exit(1)
        if usa_border != "rgb(54, 35, 255)": # #3623ff
             print(f"FAIL: USA card border color mismatch. Got {usa_border}")
             sys.exit(1)

        # Check QC card
        qc_card = cards.nth(1)
        qc_border = qc_card.evaluate("element => getComputedStyle(element).borderTopColor")
        if qc_border != "rgb(253, 60, 152)": # #fd3c98
             print(f"FAIL: QC card border color mismatch. Got {qc_border}")
             sys.exit(1)

        print("PASS: Styles verified.")

        browser.close()
        print("ALL CHECKS PASSED.")

if __name__ == "__main__":
    verify_day1_content()
