document.addEventListener('DOMContentLoaded', () => {
    // Data for Pillars
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

    // Modal Elements
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalList = document.getElementById('modal-list');
    const closeModalBtn = document.querySelector('.close-modal');
    const pillarCards = document.querySelectorAll('.pillar-card');

    // Open Modal Function
    function openModal(pillar) {
        const data = pillarsData[pillar];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalList.innerHTML = ''; // Clear previous items

        data.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            modalList.appendChild(li);
        });

        modalOverlay.classList.remove('hidden');
    }

    // Close Modal Function
    function closeModal() {
        modalOverlay.classList.add('hidden');
    }

    // Event Listeners
    pillarCards.forEach(card => {
        card.addEventListener('click', () => {
            const pillarType = card.getAttribute('data-pillar');
            openModal(pillarType);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Close on outside click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
            closeModal();
        }
    });

    console.log("Survivor Web Guide Loaded");
});
