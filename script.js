document.addEventListener('DOMContentLoaded', () => {
    // --- Data for Pillars (Grid + Deep Linking) ---
    const pillarsData = {
        outwit: {
            title: "OUTWIT",
            items: [
                { title: "Advantages & Twists", content: "Details on idols, advantages, and twists." },
                { title: "The Huddle Test", content: "How to survive the huddle." },
                { title: "Tribal Council", content: "Navigating the vote." },
                { title: "Common Mistakes", content: "What not to do." }
            ]
        },
        outplay: {
            title: "OUTPLAY",
            items: [
                { title: "Return to the Old School", content: "Old school tactics." },
                { title: "Physical", content: "Winning challenges." },
                { title: "Swimming", content: "Water survival." },
                { title: "Puzzles", content: "Mastering puzzles." }
            ]
        },
        outlast: {
            title: "OUTLAST",
            items: [
                { title: "Fire", content: "Making fire is life." },
                { title: "Shelter", content: "Building a home." },
                { title: "Self Care", content: "Taking care of your body." },
                { title: "Food", content: "Finding sustenance." }
            ]
        }
    };

    // --- Modal Elements ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContentBox = document.getElementById('modal-content-box');
    const modalTitle = document.getElementById('modal-title');
    const modalList = document.getElementById('modal-list');
    const modalText = document.getElementById('modal-text');
    const modalGrid = document.getElementById('modal-grid');
    const closeModalBtn = document.querySelector('.close-modal');
    const backBtn = document.getElementById('modal-back-btn');
    const clickableCards = document.querySelectorAll('.clickable-card');

    // --- Open Modal Function ---
    function openModal(card) {
        const type = card.getAttribute('data-modal-type');
        const title = card.querySelector('h3').textContent;

        // Reset Modal State
        modalOverlay.className = 'modal-overlay active';
        modalContentBox.className = 'modal-content';
        modalList.innerHTML = '';
        modalText.textContent = '';
        modalGrid.innerHTML = '';

        if (type === 'pillars-grid') {
            // Pillars Intermediate Grid View
            const pillarKey = card.getAttribute('data-pillar');
            const data = pillarsData[pillarKey];

            modalContentBox.classList.add('grid-view'); // Special width
            modalTitle.textContent = data ? data.title : title;

            if (data && data.items) {
                data.items.forEach(item => {
                    const gridCard = document.createElement('div');
                    gridCard.className = 'sub-topic-card';
                    gridCard.textContent = item.title;
                    gridCard.addEventListener('click', () => openSubTopicModal(item));
                    modalGrid.appendChild(gridCard);
                });
            }
        } else if (type === 'full') {
            // Full Page Logic (Standard)
            modalOverlay.classList.add('full-page');
            modalContentBox.classList.add('full-page-content');
            modalTitle.textContent = title;

            const cardDesc = card.querySelector('p');
            const descText = cardDesc ? cardDesc.textContent : "Detailed content for this section goes here.";
            modalText.textContent = descText;
        }
    }

    // --- Open Sub-Topic Modal (Full Page) ---
    function openSubTopicModal(item) {
        // Transition from Grid to Full Page
        // We can just re-style the current modal or close and reopen.
        // Let's modify current state to look like full page.

        // First, clear the grid
        modalGrid.innerHTML = '';
        modalContentBox.classList.remove('grid-view');

        // Add Full Page classes
        modalOverlay.classList.add('full-page');
        modalContentBox.classList.add('full-page-content');

        // Set Content
        modalTitle.textContent = item.title;
        modalText.textContent = item.content; // This is where the deep content goes

        // Note: Back button logic.
        // If we want Back to go to Grid, we need state management.
        // For now, Back closes the overlay as per prompt "Back button... of the overlay".
        // If we want to support nested navigation, we'd need a stack.
        // Requirement: "When the user clicks on one of these... trigger the Full Page Overlay Modal"
        // Requirement: "Replace... 'X' close button... with a prominent '← BACK' button"
        // The previous implementation closed the modal on Back. Keeping that consistent.
    }

    // --- Close Modal Function ---
    function closeModal() {
        modalOverlay.classList.remove('active');
        // Wait for transition to finish before cleaning up classes
        setTimeout(() => {
            modalOverlay.classList.remove('full-page');
            modalContentBox.classList.remove('popup', 'full-page-content', 'grid-view');
            modalGrid.innerHTML = ''; // Clean grid
        }, 300);
    }

    // --- Event Listeners for Modals ---
    clickableCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    closeModalBtn.addEventListener('click', closeModal);
    backBtn.addEventListener('click', closeModal); // Currently just closes, could be enhanced

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // --- Phases Carousel Logic ---
    const phasesContainer = document.getElementById('phases-scroll');
    const prevBtn = document.getElementById('prev-phase');
    const nextBtn = document.getElementById('next-phase');

    if (phasesContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            phasesContainer.scrollBy({
                left: -phasesContainer.clientWidth,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            phasesContainer.scrollBy({
                left: phasesContainer.clientWidth,
                behavior: 'smooth'
            });
        });
    }

    console.log("Survivor Web Guide Loaded - v3");
});
