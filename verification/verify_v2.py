from playwright.sync_api import sync_playwright, expect
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        page.goto(f"file://{os.path.abspath('index.html')}")
        page.wait_for_load_state("networkidle")

        # 1. Verify Home Section Title (Massive Text)
        home_title = page.locator("#home .massive-title")
        expect(home_title).to_be_visible()
        # Check for image clipping CSS (computed style)
        color = home_title.evaluate("element => getComputedStyle(element).color")
        print(f"Home Title Color: {color}")
        # Note: 'rgba(0, 0, 0, 0)' is transparent, which confirms text-fill-color/color: transparent

        page.screenshot(path="verification/v2_home.png")
        print("Home screenshot taken.")

        # 2. Verify Phases Carousel
        phases_section = page.locator("#phases")
        phases_section.scroll_into_view_if_needed()
        expect(page.locator("#phases .timeline-card").first).to_be_visible()

        # Click Next Arrow
        page.locator("#next-phase").click()
        page.wait_for_timeout(500) # Wait for scroll
        page.screenshot(path="verification/v2_phases_scroll.png")
        print("Phases scroll screenshot taken.")

        # 3. Verify Full Page Modal (Pregame)
        page.locator("#pregame").scroll_into_view_if_needed()
        # Click a card in pregame
        page.locator("#pregame .clickable-card").first.click()

        modal_overlay = page.locator("#modal-overlay")
        # Check if class list contains 'full-page'. exact=False allows other classes like 'modal-overlay active'
        # But to_have_class expects exact list or regex.
        # Simplest is to get attribute.
        classes = modal_overlay.get_attribute("class")
        assert "full-page" in classes
        expect(modal_overlay).to_be_visible()

        # Verify Back Button is visible
        back_btn = page.locator("#modal-back-btn")
        expect(back_btn).to_be_visible()

        page.screenshot(path="verification/v2_full_modal.png")
        print("Full page modal screenshot taken.")

        # Close modal
        back_btn.click()
        # Wait for transition (CSS 0.3s)
        page.wait_for_timeout(500)
        expect(modal_overlay).not_to_be_visible()

        # 4. Verify Popup Modal (Pillars) - Regression Test
        page.locator("#pillars").scroll_into_view_if_needed()
        page.locator("[data-pillar='outwit']").click()

        classes = modal_overlay.get_attribute("class")
        assert "full-page" not in classes
        expect(modal_overlay).to_be_visible()

        # Back button should NOT be visible (or effectively hidden via CSS, though in DOM it might be there but display:none)
        # We can check display style
        back_btn_display = back_btn.evaluate("element => getComputedStyle(element).display")
        if back_btn_display == 'none':
            print("Back button is correctly hidden for popup.")
        else:
             print(f"Warning: Back button display is {back_btn_display}")

        page.screenshot(path="verification/v2_popup_modal.png")
        print("Popup modal screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run()
