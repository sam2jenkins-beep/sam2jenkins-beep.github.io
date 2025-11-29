from playwright.sync_api import sync_playwright, expect
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        page.goto(f"file://{os.path.abspath('index.html')}")
        page.wait_for_load_state("networkidle")

        # 1. Verify Image Removal (About & Phases)
        # Check About section cards for img tags
        about_images = page.locator("#about .card img")
        count = about_images.count()
        print(f"Images in About section: {count}")
        assert count == 0, "About section should not have images"

        # Check Phases section cards for img tags
        phases_images = page.locator("#phases .timeline-card img")
        count = phases_images.count()
        print(f"Images in Phases section: {count}")
        assert count == 0, "Phases section should not have images"

        # 2. Verify NotebookLM Link
        notebook_link = page.locator("#notebooklm a")
        href = notebook_link.get_attribute("href")
        expected_url = "https://notebooklm.google.com/notebook/b89282b3-22b0-424e-9647-f2e699a3756f"
        print(f"Notebook Link: {href}")
        assert href == expected_url, "NotebookLM link is incorrect"

        # 3. Verify Pillars Interaction (Deep Linking)
        page.locator("#pillars").scroll_into_view_if_needed()

        # Click OUTWIT (Open Grid)
        page.locator("[data-pillar='outwit']").click()

        # Verify Grid is visible
        modal_content = page.locator("#modal-content-box")
        # Check if it has grid-view style (width) or just check content
        # We check for sub-topic cards
        sub_topics = page.locator(".sub-topic-card")
        expect(sub_topics.first).to_be_visible()
        print("Pillars Grid is visible.")

        page.screenshot(path="verification/v3_pillars_grid.png")

        # Click a Sub-Topic (e.g., "Advantages & Twists")
        sub_topics.filter(has_text="Advantages & Twists").click()

        # Verify Full Page Overlay
        modal_overlay = page.locator("#modal-overlay")
        classes = modal_overlay.get_attribute("class")
        assert "full-page" in classes, "Should transition to full page overlay"

        # Verify Back Button
        back_btn = page.locator("#modal-back-btn")
        expect(back_btn).to_be_visible()

        # Verify Title changed to sub-topic
        expect(page.locator("#modal-title")).to_have_text("Advantages & Twists")

        page.screenshot(path="verification/v3_pillars_deep_link.png")
        print("Pillars Deep Link verified.")

        # Close
        back_btn.click()
        # Wait for transition (CSS 0.3s)
        page.wait_for_timeout(500)

        # Verify classes are removed, which means it's closed
        classes = modal_overlay.get_attribute("class")
        assert "active" not in classes

        browser.close()

if __name__ == "__main__":
    run()
