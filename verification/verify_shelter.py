from playwright.sync_api import sync_playwright, expect
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # Load local index.html
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # Wait for page load
        page.wait_for_load_state("networkidle")

        # 1. Click on "Pillars" section link or scroll to it (interactive check)
        # Actually we need to click the "OUTLAST" pillar card to open the grid
        print("Navigating to OUTLAST pillar...")
        outlast_card = page.locator('.pillar-card[data-pillar="outlast"]')
        outlast_card.scroll_into_view_if_needed()
        outlast_card.click()

        # 2. Wait for the Grid View modal to open
        modal_content = page.locator('#modal-content-box')
        expect(modal_content).to_be_visible()
        expect(modal_content).to_have_class(re.compile(r'grid-view'))

        # 3. Click on the "Shelter" sub-topic card
        print("Clicking on Shelter sub-topic...")
        shelter_card = page.locator('.sub-topic-card', has_text="Shelter")
        shelter_card.click()

        # 4. Wait for Full Page modal transition
        # The class 'grid-view' should be removed and 'full-page-content' added
        expect(modal_content).to_have_class(re.compile(r'full-page-content'))

        # 5. Verify Content matches the new HTML
        # Check for unique elements from the new code
        print("Verifying content...")
        expect(page.locator('.shelter-title')).to_contain_text("The Jungle Does Not Forgive")
        expect(page.locator('.shelter-warning-title')).to_contain_text("Case File: The Pitfall")

        # Verify Image exists
        expect(page.locator('.shelter-case-img')).to_be_visible()

        # 6. Take Screenshot of the top (Hero + Cautionary Tale)
        print("Taking screenshot...")
        page.screenshot(path="verification/verify_shelter_top.png", full_page=False)

        # 7. Scroll down to Blueprint
        blueprint_section = page.locator('#blueprint')
        blueprint_section.scroll_into_view_if_needed()
        page.wait_for_timeout(500) # Wait for smooth scroll
        page.screenshot(path="verification/verify_shelter_blueprint.png")

        browser.close()

if __name__ == "__main__":
    import re
    run()
