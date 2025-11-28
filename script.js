document.addEventListener('DOMContentLoaded', () => {
    // --- Data for Pillars (Popup Modals) ---
    const pillarsData = {
        outwit: {
            title: "OUTWIT",
            items: ["Advantages & Twists", "The Huddle Test", "Tribal Council", "Common Mistakes"]
        },
        outplay: {
            title: "OUTPLAY",
            items: ["Return to the Old School", "Physical", "Swimming", "Puzzles"]
        },
        outlast: {
            title: "OUTLAST",
            items: ["Fire", "Shelter", "Self Care", "Food"]
        }
    };

    // --- Modal Elements ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContentBox = document.getElementById('modal-content-box');
    const modalTitle = document.getElementById('modal-title');
    const modalList = document.getElementById('modal-list');
    const modalText = document.getElementById('modal-text');
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

        if (type === 'popup') {
            // Pillars Logic
            const pillarKey = card.getAttribute('data-pillar');
            const data = pillarsData[pillarKey];

            modalContentBox.classList.add('popup');
            modalTitle.textContent = data ? data.title : title;

            if (data && data.items) {
                data.items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    modalList.appendChild(li);
                });
            }
        } else if (type === 'full') {
            // Full Page Logic
            modalOverlay.classList.add('full-page');
            modalContentBox.classList.add('full-page-content');
            modalTitle.textContent = title;

            // For now, use the paragraph text from the card or a placeholder
            const cardDesc = card.querySelector('p');
            const descText = cardDesc ? cardDesc.textContent : "Detailed content for this section goes here.";

            modalText.textContent = descText;
            // You could add more complex content injection here later
        }
    }

    // --- Close Modal Function ---
    function closeModal() {
        modalOverlay.classList.remove('active');
        // Wait for transition to finish before cleaning up classes (optional, but cleaner)
        setTimeout(() => {
            modalOverlay.classList.remove('full-page');
            modalContentBox.classList.remove('popup', 'full-page-content');
        }, 300);
    }

    // --- Event Listeners for Modals ---
    clickableCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    closeModalBtn.addEventListener('click', closeModal);
    backBtn.addEventListener('click', closeModal);

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

    console.log("Survivor Web Guide Loaded - v2");
});
