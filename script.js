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

    const final48Content = `
        <div class="newspaper-container">
            <header class="newspaper-header">
                <h2 class="newspaper-headline">The Final 48 Hours</h2>
                <h3 class="newspaper-subhead">Shutting Down Systems for Survival Success</h3>
                <div class="newspaper-byline">
                    <div>By Health & Strategy Correspondent</div>
                    <div>Montreal, QC</div>
                    <div>Pre-Game Intelligence</div>
                </div>
            </header>

            <div class="newspaper-body">
                <div class="newspaper-columns">
                    <img src="assets/newspaper1.jpeg" class="newspaper-img float-left" alt="Newspaper Photo 1">

                    <p class="dateline"><strong>MONTREAL—</strong>With mere hours remaining before contestants are dropped into a 42-day crucible of starvation, social warfare, and tropical exposure, preparation must shift from broad training to surgical system shutdown. The 48 hours before the game begins—often spent in quarantine—are not for cramming, but for metabolic stabilization.</p>

                    <p>The objective is simple: Reduce all non-critical systemic demands to maximize the body's scarce physical and cognitive capital for Day 1.</p>

                    <h3>Metabolic Shutdown</h3>
                    <p>The final two days are dedicated to reaching a metabolic "zero-state."</p>

                    <h4>1. Controlled Detox</h4>
                    <p><strong>Caffeine Reset:</strong> The contestant should be fully off caffeine. The final 48 hours serve to clear the last physiological remnants, avoiding withdrawal headaches during the first three critical days.</p>
                    <p><strong>Digital Fast:</strong> A strict digital black-out must be maintained. The goal is to break the dopamine feedback loop and force the brain to re-attune its observation skills.</p>

                    <img src="assets/newspaper2.jpeg" class="newspaper-img float-right" alt="Newspaper Photo 2">

                    <h4>2. Hydration Loading</h4>
                    <p><strong>Pre-Load Water:</strong> Maintain constant, forced hydration. The body must be fully saturated to buffer the impact of the immediate tropical heat.</p>
                    <p><strong>Mineral Stabilization:</strong> Consume a final intake of salts. This ensures maximum fluid retention before the rapid depletion of island sweating begins.</p>

                    <h3>Physical Final Checks</h3>
                    <p>The greatest risk is a preventable injury that cripples a player early.</p>

                    <h4>1. Meticulous Foot Care</h4>
                    <p><strong>Final Skin Audit:</strong> Inspect feet for blisters or cuts. Apply antiseptic to seal the skin barrier against immediate tropical infections.</p>
                    <p><strong>Nail Hygiene:</strong> Trim toenails short and smooth to prevent snags during early physical challenges.</p>

                    <h4>2. Ergonomics Reset</h4>
                    <p><strong>Practice Ergonomics:</strong> Mentally drill the habit of lifting with the legs. This must be automatic to prevent the musculoskeletal trauma that leads to med-evacs.</p>
                    <p><strong>Mindful Pacing:</strong> Practice the "Working Smart" model. Avoid any unnecessary exertion in the final 48 hours to conserve every calorie.</p>

                    <h3>Psychological Stabilization</h3>
                    <p>The mental crucible is about to begin. Lock down the blueprint.</p>

                    <h4>1. Finalizing the Narrative</h4>
                    <p><strong>Backwards Induction:</strong> Review strategy based on the Final Tribal Council. Have the clear justification for every planned move memorized.</p>
                    <p><strong>Embrace Paranoia:</strong> Acknowledge that paranoia is an engineered symptom. Develop a mental cue to compartmentalize these feelings.</p>

                    <h4>2. Systemic Boundaries</h4>
                    <p><strong>Compartmentalize Crew:</strong> Treat the crew as mute signals. Focus entirely on observing camera focus for game clues.</p>
                    <p><strong>The Vulnerability Paradox:</strong> Vow to avoid oversharing. Sensitive emotional confessions will be withheld to prevent strategic targeting.</p>
                </div>
            </div>
        </div>
    `;

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

            // Check for Custom Content by ID
            const contentId = card.getAttribute('data-content-id');
            if (contentId === 'final48') {
                modalTitle.style.display = 'none'; // Hide default title for newspaper layout
                modalText.innerHTML = final48Content; // Inject HTML
            } else {
                modalTitle.style.display = 'block';
                modalTitle.textContent = title;

                const cardDesc = card.querySelector('p');
                const descText = cardDesc ? cardDesc.textContent : "Detailed content for this section goes here.";
                modalText.textContent = descText;
            }
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
