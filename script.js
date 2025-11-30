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

    const realitiesContent = `
        <div class="newspaper-container">
            <header class="newspaper-header">
                <h2 class="newspaper-headline">The Reality Star Manifesto</h2>
                <h3 class="newspaper-subhead">Survivor Protocol For The Unseen Reality</h3>
                <div class="newspaper-byline">
                    <div>Unknown Author</div>
                    <div>Reporting from an Unknown Location</div>
                    <div>//</div>
                </div>
            </header>

            <div class="newspaper-body">
                <div class="newspaper-columns">
                    <p>Competitive reality TV is not a game; it is an engineered conflict designed to break you. Read this and prepare for war.</p>

                    <h3>01. THE LOGISTICAL CAGE</h3>
                    <p>The production team has constructed a highly polished prison. Your existence is non-private, non-spontaneous, and entirely controlled.</p>

                    <h4>24/7 SURVEILLANCE</h4>
                    <p>You are a goldfish in an engineered bowl. Dedicated camera crews are "a few feet away" at all times. Abandon the illusion of privacy immediately.</p>

                    <h4>MUTE INTELLIGENCE</h4>
                    <p>Watch where the glass points. If the crew suddenly focuses, an Idol is being hunted. Use their silence as a tactical scout.</p>

                    <p><strong>STRICT PROTOCOL:</strong> If you attempt to speak to a crew member, their mandated response will be an "awkward silence." This is designed to maximize your isolation.</p>

                    <img src="assets/manifesto.jpeg" class="newspaper-img-center" alt="Manifesto">

                    <h3>02. COGNITIVE WARFARE</h3>
                    <p>Your strategic mind will be running on deficit, paranoia will be your constant companion, and your primary enemy will be your own depleted psyche.</p>

                    <div class="stat-box">
                        <span class="stat-number">100%</span>
                        <span class="stat-label">Projected Burnout Rate</span>
                    </div>

                    <p>Strategic errors are not mistakes; they are the planned side-effect of engineered caloric collapse.</p>

                    <h4>THE VULNERABILITY PARADOX</h4>
                    <p>Under stress, players "trauma dump" deep personal details to build rapport.</p>
                    <p><strong>THE RISK:</strong> This is frequently misinterpreted by tribemates as pure manipulation. Oversharing makes you a target. Silence is safer.</p>

                    <h3>03. THE EXECUTIONER'S STAGE</h3>
                    <p>Tribal Council is not a vote; it is a lengthy, high-surveillance public interrogation. BE READY TO ENTERTAIN. You don’t need to be anybody but yourself, but you do need to be able to speak in a way editors will feel obligated to include you in the edit.</p>
                    <p><strong>THE RISK:</strong> Don’t let yourself show your hand by overhearing at tribal just because the host keeps pushing you. It’s his job to pull info out of you, but it’s your job to stay in the game!</p>

                    <h4>Prepare for a Marathon</h4>
                    <p>The televised segment lasts minutes, but the interrogation lasts hours. The sustained scrutiny will exploit every mental weakness.</p>

                    <h4>Host Asymmetry</h4>
                    <p>The Host is an active strategic threat. They use producer intel to ask surgically precise questions designed to expose alliances.</p>

                    <h4>Deliver or Die</h4>
                    <p>Tribal is heavily redacted. If you do not deliver clear, dramatic rhetoric, you are strategically irrelevant—a silent ghost in the final cut. Think Purple Kelly.</p>
                </div>
            </div>
        </div>
    `;

    const survivorsContent = `
        <div class="case-studies-grid">
            <!-- Case Study 1: Andre -->
            <div class="case-study-card">
                <h2>Case Study: The "Professional Contestant" Approach</h2>
                <img src="assets/andre.jpeg" alt="Andre - Survivor Quebec" class="case-study-img">
                <p><strong>Subject:</strong> André (Survivor Québec Season 2)<br>
                <strong>Core Philosophy:</strong> Transitioning from "Superfan" to "High-Performance Athlete," treating the game not as an adventure, but as a vocation requiring specific technical training.</p>

                <h3 class="neon-blue">I. Physical Conditioning (Functional Utility)</h3>
                <p><strong>Objective:</strong> Mitigate biological failure points to maintain cognitive function.</p>
                <ul>
                    <li><strong>Metabolic Simulation:</strong> Utilized CrossFit/AMRAP (As Many Reps As Possible) to train decision-making while at near-maximum heart rate, simulating the stop-start nature of immunity challenges.</li>
                    <li><strong>Biomechanical Mimicry:</strong> Replaced gym isolation exercises with "awkward object" training (sandbags, logs) and isometrics (static holds) to replicate the specific physical demands of tribal challenges.</li>
                    <li><strong>Hardening:</strong> Deliberately slept outdoors in adverse weather to acclimate circadian rhythms, preventing the "culture shock" and sleep deprivation that typically hamper players in the first 72 hours.</li>
                </ul>

                <h3 class="neon-blue">II. Strategic Focus (Game Theory)</h3>
                <p><strong>Objective:</strong> Remove emotion to view the game as a solveable logic puzzle.</p>
                <ul>
                    <li><strong>Asset Acquisition:</strong> Abandoned random searching for "Grid Searching" and pattern recognition, analyzing production tendencies for hiding idols (e.g., unique trees, rock formations).</li>
                    <li><strong>Communication Architecture:</strong> Practiced "Claim, Evidence, Reasoning" rhetorical structures to prepare for Final Tribal Council, ensuring game moves could be explained clearly to a Jury.</li>
                    <li><strong>Ego Management:</strong> Prepared specifically for the "aftercare" of blindsided allies to manage bitterness and secure jury votes.</li>
                </ul>

                <h3 class="neon-blue">III. Survival Skills (Energy Economics)</h3>
                <p><strong>Objective:</strong> Minimize caloric deficit to preserve mental energy for strategy.</p>
                <ul>
                    <li><strong>Technical Mastery:</strong> Mastered friction fire-making (bow drill) in wet/windy conditions to establish immediate value to the tribe and ensure survival without a flint.</li>
                    <li><strong>Botanical Intelligence:</strong> Memorized the specific flora of the filming location (Philippines) to instantly distinguish high-calorie resources (taro, coconut) from low-value fillers or toxic threats.</li>
                </ul>
            </div>

            <!-- Case Study 2: Parvati -->
            <div class="case-study-card">
                <h2>Case Study: The "Social Manipulator" Approach</h2>
                <img src="assets/parvati.jpeg" alt="Parvati Shallow" class="case-study-img">
                <p><strong>Subject:</strong> Parvati Shallow (Survivor Legend)<br>
                <strong>Core Philosophy:</strong> Psychological warfare and "Visual Branding." She treats the game as a sociological experiment, combining Machiavellian strategy with a meticulously curated character archetype.</p>

                <h3 class="neon-pink">I. Strategic Preparation (Psychological Warfare)</h3>
                <p><strong>Objective:</strong> Master the "Social Hack" to control outcomes without absorbing emotional damage.</p>
                <ul>
                    <li><strong>The Syllabus:</strong> Cited Robert Greene’s The 48 Laws of Power as essential pre-game reading. She studied manipulation as an academic subject rather than relying solely on intuition.</li>
                    <li><strong>Emotional Compartmentalization:</strong> Internalized the distinction between "Real Life" and "The Game." This allowed her to betray allies and "throw people under the bus" without hesitation, viewing these actions as game mechanics rather than moral failings.</li>
                    <li><strong>Fluid Adaptability:</strong> Trained herself to be non-dogmatic with alliances. Unlike players who stick to a "ride or die" mentality, Parvati prepared to shift loyalties instantly based on the immediate power vacuum.</li>
                </ul>

                <h3 class="neon-pink">II. Wardrobe Engineering (The Visual Meta)</h3>
                <p><strong>Objective:</strong> Balance physiological survival needs with Production’s desired visual storytelling.</p>
                <ul>
                    <li><strong>Archetype Alignment:</strong> Understood that Production casts for specific roles (in her case, "The Flirt"). She cooperated with their requests for "sexy" clothing to secure her spot, acknowledging that branding is part of the game.</li>
                    <li><strong>Iterative Equipment Learning:</strong>
                        <ul>
                            <li>Phase 1 (Cook Islands): Failure. Wore basic tank/shorts and froze.</li>
                            <li>Phase 2 (Micronesia): Adaptation. Switched to long pants and long sleeves (which doubled as a dress).</li>
                            <li>Phase 3 (HvV): Optimization. Focused on fabric technology, specifically seeking "quick-dry" materials after realizing previous layers retained moisture too long.</li>
                        </ul>
                    </li>
                    <li><strong>The "Weight Loss" Hack:</strong> Deliberately selected string bikinis rather than clasps, allowing her to tie them tighter as she rapidly lost body mass, preventing wardrobe malfunctions.</li>
                </ul>

                <h3 class="neon-pink">III. Social Dynamics (Jury Management)</h3>
                <p><strong>Objective:</strong> Weaponize charm to mitigate the fallout of betrayal.</p>
                <ul>
                    <li><strong>The "Black Widow" Effect:</strong> Perfected the art of the blindside where the victim is charmed rather than insulted. She prepared to maintain relationships while cutting them, ensuring that the people she voted out would still respect her gameplay.</li>
                    <li><strong>Jury Curating:</strong> Focused on "aftercare." She understood that a winning game requires the people you defeat to feel outwitted, not bullied.</li>
                </ul>
            </div>

            <!-- Case Study 3: Justine -->
            <div class="case-study-card">
                <h2>Case Study: The "Technical Tactician" Approach</h2>
                <img src="assets/justine.jpeg" alt="Justine - Survivor Quebec" class="case-study-img">
                <p><strong>Subject:</strong> Justine (Survivor Québec Season 3)<br>
                <strong>Core Philosophy:</strong> Skill Specialization and Risk Mitigation. She treats the game as a series of technical hurdles to be cleared via expertise (puzzles) while using other players as defensive buffers.</p>

                <h3 class="neon-orange">I. Intellectual Specialization (The "Closer" Role)</h3>
                <p><strong>Objective:</strong> Guarantee Immunity wins by mastering the final stage of challenges.</p>
                <ul>
                    <li><strong>The Puzzle Vault:</strong> Systematically memorized solutions and mechanics for recurring franchise puzzles (Tower of Hanoi, slide puzzles, Tangrams), effectively pre-solving the game's hardest cognitive tasks.</li>
                    <li><strong>Stress inoculation:</strong> Practiced logic problems immediately following anaerobic exercise to train the brain to function under "race pace" heart rates.</li>
                    <li><strong>Resource Allocation:</strong> Developed a heuristic for assigning tribe roles, ensuring she could position herself on the puzzle (the "glory position") or identify who to pair with for maximum efficiency.</li>
                </ul>

                <h3 class="neon-orange">II. Social Engineering (The Shield Strategy)</h3>
                <p><strong>Objective:</strong> Lower personal threat level by hiding behind "bigger targets."</p>
                <ul>
                    <li><strong>Defensive Alignment:</strong> Prioritized early alliances with "Meat Shields"—players with high physical strength or loud personalities who would naturally attract votes before her.</li>
                    <li><strong>Active Listening:</strong> Weaponized silence. By listening more than speaking, she gathers data on alliance cracks without ever being the one to spread a rumor, keeping her "threat level" low.</li>
                    <li><strong>The Pivot:</strong> Established a mental trigger for the Merge, shifting from "Team Loyalty" to "Mercenary Adaptability" to cut her shields once individual immunity made them dangerous opponents.</li>
                </ul>

                <h3 class="neon-orange">III. Physical Durability (Static Endurance)</h3>
                <p><strong>Objective:</strong> Outlast opponents in "Willpower" challenges.</p>
                <ul>
                    <li><strong>Stabilizer Isolation:</strong> Focused on core density and balance (slacklining, yoga) specifically for the "stand still and hold this" challenges common in the post-merge game.</li>
                    <li><strong>Dissociative Meditation:</strong> Trained mind-body control to lower heart rate and manage pain during long-duration static holds.</li>
                </ul>
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
            } else if (contentId === 'realities') {
                modalTitle.style.display = 'none';
                modalText.innerHTML = realitiesContent;
            } else if (contentId === 'survivors-prep') {
                modalTitle.style.display = 'none';
                modalText.innerHTML = survivorsContent;
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
