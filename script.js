document.addEventListener('DOMContentLoaded', () => {
    // --- Content for Tribal Council (Dossier Theme) ---
    const advantagesContent = `
        <div class="theme-neon-bright">
            <header style="text-align: center; margin-bottom: 3rem;">
                <h2>Survivor Québec Ecosystem</h2>
                <span class="subtitle">Strategic Hybrid Model // Survival + Strategy + Honor</span>
                <p>It adopts the structural mechanics of modern Survivor US (advantages, twists) but retains the endurance elements of Australian Survivor (42-day duration, larger casts) and a unique cultural "Jury Honor Index" where social integrity often outweighs pure tactical aggression.</p>
            </header>

            <!-- Season 1 -->
            <div class="season-section s1-theme">
                <div class="season-header">
                    Season 1 (2023)
                    <span class="season-tag">Foundational</span>
                </div>
                <p style="font-style: italic; margin-bottom: 1rem;">Twist Profile: Redemption Island & Traditional Idols.</p>

                <ul class="twist-list">
                    <li class="twist-item"><strong>Redemption Island:</strong> Voted-out contestants compete in duels to return. Nicolas Brunette used this to build an underdog story and win.</li>
                    <li class="twist-item"><strong>Hidden Immunity Idols (HII):</strong> Hard to find (camouflaged). Standard protection (play before votes read).</li>
                    <li class="twist-item"><strong>Extra Vote:</strong> Cast two ballots. Used by Sandrine.</li>
                </ul>

                <div class="strategy-box">
                    <h4>Strategic Application</h4>
                    <p><strong>Meat Shield Strategy:</strong> Do not fear voting out physical players early; if they go to Redemption, they eliminate others.</p>
                    <p><strong>Jury Management:</strong> Use Redemption Island time to bond with future jurors outside the game stress.</p>
                    <p><strong>The "Cringe" Warning:</strong> Do not over-complicate idol plays with theatrics (like Karine). The jury values "respectable strategy".</p>
                </div>
            </div>

            <!-- Season 2 -->
            <div class="season-section s2-theme">
                <div class="season-header">
                    Season 2 (2024)
                    <span class="season-tag">Deception</span>
                </div>
                <p style="font-style: italic; margin-bottom: 1rem;">Twist Profile: High-Variance Advantages & The Bluff Meta.</p>

                <ul class="twist-list">
                    <li class="twist-item"><strong>Choose Your Champion (CYC):</strong> Bet on immunity winner for safety. Used by André for the "Ultimate Bluff".</li>
                    <li class="twist-item"><strong>Safety Without Power:</strong> Leave Tribal immediately (no vote, no risk). A survival tool, not a winning tool.</li>
                    <li class="twist-item"><strong>Vote Steal:</strong> Block a vote and cast a second one. Best used to break deadlocks.</li>
                </ul>

                <div class="strategy-box" style="border-color: #2980b9;">
                    <h4>Strategic Application</h4>
                    <p><strong>Information Asymmetry:</strong> Use complex advantages to create "informational fog." Dictate voting lines by bluffing about how an advantage works.</p>
                    <p><strong>Concentration of Power:</strong> Hoarding advantages (like André) raises threat level. Mechanics without social integration leads to a 0-vote finalist spot.</p>
                </div>
            </div>

            <!-- Season 3 -->
            <div class="season-section s3-theme">
                <div class="season-header">
                    Season 3 (2025)
                    <span class="season-tag">Chaos</span>
                </div>
                <p style="font-style: italic; margin-bottom: 1rem;">Twist Profile: Forced Volatility & Tribal Disruption.</p>

                <ul class="twist-list">
                    <li class="twist-item"><strong>Tribal Remaniement:</strong> Dissolving 2 tribes into 3 to break early alliances.</li>
                    <li class="twist-item"><strong>Cross-Tribal Elimination:</strong> Reward winner eliminates a player from losing tribe directly (no vote).</li>
                    <li class="twist-item"><strong>Kidnap / Player Steal:</strong> Winning tribe steals a player, altering numbers instantly.</li>
                    <li class="twist-item"><strong>Past Votes Tie-Breaker:</strong> Ties broken by "Past Votes" count. <strong>Critical Change.</strong></li>
                </ul>

                <div class="strategy-box" style="border-color: #c0392b;">
                    <h4>Strategic Application</h4>
                    <p><strong>Clean Sheet Protocol:</strong> Receiving "throwaway" votes is catastrophic for the tie-breaker. Refuse split votes on yourself.</p>
                    <p><strong>Kidnap Lobbying:</strong> If on the bottom, signal willingness to defect so the other tribe "steals" you.</p>
                    <p><strong>The "Necessity" Narrative:</strong> Frame betrayals as reactions to chaos (like Geneviève) rather than malicious plotting.</p>
                </div>
            </div>

            <!-- Summary Guide -->
            <h3 style="margin: 3rem 0 1.5rem 0; text-align: center;">Summary Strategy Guide</h3>
            <div class="summary-guide">
                <div class="guide-card">
                    <h4>1. The "Honor" Constraint</h4>
                    <div class="data-point">Data: Juries punish overt coercion.</div>
                    <p>Mask aggression. Frame blindsides as "protecting the tribe" or "loyalty," never as "resume building."</p>
                </div>
                <div class="guide-card">
                    <h4>2. Mastering the Daily Edit</h4>
                    <div class="data-point">Data: 5 episodes/week exposes fake personas.</div>
                    <p>You cannot hide a villain edit. Contribute visibly to camp life (shelter, fire) to build a "provider" shield.</p>
                </div>
                <div class="guide-card">
                    <h4>3. The Bluff Economy</h4>
                    <div class="data-point">Data: André’s S2 bluff.</div>
                    <p>If you find an advantage, create a public narrative around it. Lie about its powers to create a "safety bubble."</p>
                </div>
                <div class="guide-card">
                    <h4>4. Tie-Breaker Awareness</h4>
                    <div class="data-point">Data: Past Votes rule.</div>
                    <p>Aggressively target the player with the highest "past vote" count in deadlocks. Protect your own "clean sheet."</p>
                </div>
            </div>

            <!-- Meat Shield 2.0 & Drills -->
             <div style="margin-top: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div class="season-section" style="border-color: #333;">
                    <h3>Meat Shield 2.0</h3>
                    <p><strong>The Expansion:</strong> Instead of voting out the challenge beast, weaponize their ego. Keep them to win tribal immunity, then blindside them when the Redemption/Return mechanic is closed.</p>
                    <p style="margin-top: 1rem;"><strong>The "Champion" Bluff:</strong> Change one variable when explaining an advantage. <br><em>Real:</em> "Safe if I predict correctly." <br><em>Lie:</em> "Safe if I place a bet."</p>
                </div>

                <div class="drill-container">
                    <h3>Final Prep Drills</h3>
                    <div class="drill-card">
                        <h4>Drill A: "Why Me?"</h4>
                        <p>Pitch bonds, not moves. "I nurtured the tribe when morale was low." Targets the Honor Index.</p>
                    </div>
                    <div class="drill-card">
                        <h4>Drill C: The "Cringe" Check</h4>
                        <p>Before playing an Idol: "If I make a speech, will the jury roll their eyes?" If yes, sit down and play it quietly.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    const tribalContent = `
        <div class="dossier-container theme-tribal">
            <header class="dossier-header">
                <span class="stamp-classified">CLASSIFIED</span>
                <h2>MISSION BRIEF: TRIBAL COUNCIL</h2>
                <div class="dossier-meta">
                    <span>CLEARANCE: LEVEL 5</span>
                    <span>//</span>
                    <span>SUBJECT: PSYCHOLOGICAL WARFARE</span>
                </div>
            </header>

            <div class="dossier-tabs">
                <button class="dossier-tab-btn active" data-tab="tribal-1">BEHIND THE CURTAIN</button>
                <button class="dossier-tab-btn" data-tab="tribal-2">A DIFFERENT BEAST</button>
                <button class="dossier-tab-btn" data-tab="tribal-3">DIPLOMAT'S HANDBOOK</button>
            </div>

            <div class="dossier-content">
                <!-- Tab 1 -->
                <div id="tribal-1" class="dossier-tab-pane active">
                    <h3>The Reality of Tribal Council: What You See vs. What You Feel</h3>
                    <div class="dossier-split">
                        <div class="dossier-text">
                            <p>On TV, Tribal Council is a slick, 10-minute dramatic climax. In person? It is a grueling, psychological endurance test. While the broadcast shows a quick vote, the actual filming can last two to three hours.</p>
                            <h4>The Atmosphere</h4>
                            <p>The set is a theatrical production stage designed to intimidate. You are surrounded by:</p>
                            <ul>
                                <li><strong>The Interrogator:</strong> The host (Jeff Probst or Patrice Bélanger) isn't just asking questions; they are armed with "asymmetrical information"—production secrets about who has idols and who is lying. They will dig until you crack.</li>
                                <li><strong>The "Invisible" Crew:</strong> Up to 12 cameras, including jibs and dollies, are cross-shooting from the shadows to catch every eye roll and bead of sweat.</li>
                                <li><strong>The Pressure:</strong> You are exhausted, paranoid, and subjected to a public interrogation where you must lie effectively to the host while keeping your story straight with your alliance.</li>
                            </ul>
                        </div>
                        <div class="dossier-media">
                            <img src="assets/tribalcouncilfiles.jpeg" alt="Tribal Council Set" class="dossier-img">
                            <span class="img-caption">FIG A.1: THE STAGE OF ISOLATION</span>
                        </div>
                    </div>
                </div>

                <!-- Tab 2 -->
                <div id="tribal-2" class="dossier-tab-pane">
                    <h3>Survivor Québec vs. The US Era: The Hybrid Model</h3>
                    <p>Don't mistake Survivor Québec (SQ) for the modern US format. SQ blends the ruthless efficiency of the "New Era" with the grueling endurance of Old School Survivor.</p>

                    <div class="comparison-grid">
                        <div class="comp-card">
                            <h4>The Marathon</h4>
                            <p>Unlike the 26-day sprint of the US version, SQ demands 39–44 days of survival.</p>
                        </div>
                        <div class="comp-card">
                            <h4>The Spotlight</h4>
                            <p>With a daily broadcast schedule (Quotidiennes), your game is under a microscope. This magnified scrutiny leads to a "Jury Honor Index"—Quebec juries prioritize social integrity and emotional transparency over pure cutthroat strategy.</p>
                        </div>
                        <div class="comp-card">
                            <h4>The Physics</h4>
                            <p>SQ challenges are brutal. Modeled closer to Australian Survivor, they demand high physical strength and "maximal effort," whereas the US version often leans on puzzles and balance.</p>
                        </div>
                        <div class="comp-card">
                            <h4>The Chaos</h4>
                            <p>Expect structural "Category IV" advantages (like Cross-Tribal Elimination) that don't just shift a vote—they break the game.</p>
                        </div>
                    </div>

                    <div class="img-placeholder">
                        <span>[INFOGRAPHIC: 26 DAYS (US) VS 40+ DAYS (SQ)]</span>
                    </div>
                </div>

                <!-- Tab 3 -->
                <div id="tribal-3" class="dossier-tab-pane">
                    <h3>The Diplomat’s Handbook: Winning the Vote</h3>
                    <p>Preparation is Power. Walking into Tribal Council without preparation is a death sentence. Success in Quebec isn't just about quick wit; it's about rigorous training.</p>

                    <ul class="strategy-list">
                        <li>
                            <strong>Physical Mastery:</strong> Don't just learn to make fire—master it until you can do it in the rain. Practice knot tying and isometric grip strength so you have the option to play the game.
                        </li>
                        <li>
                            <strong>Narrative Control:</strong> You are a diplomat on an unstable stage. You must frame your backstabs as "necessary defense" rather than malice. The Quebec jury votes with their heart as much as their head; if you break the social contract without a narrative of honor, you lose the million.
                        </li>
                        <li>
                            <strong>Emotional Armor:</strong> Voting someone out can be gut-wrenching ("m’arrachait le cœur"). You must prepare for "emotional overload" and maintain a calm facade while the host actively tries to expose your secrets.
                        </li>
                        <li>
                            <strong>The Bottom Line:</strong> You must be ready to improvise when a crisis erupts, but your survival hinges on the quality of your "dossier"—the trust you built before you sat down.
                        </li>
                    </ul>

                    <div class="img-placeholder">
                        <span>[IMAGE: TORCH FIRE FOCUS]</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // --- Content for Common Mistakes (Hazard Theme) ---
    const mistakesContent = `
        <div class="dossier-container theme-hazard">
            <header class="dossier-header">
                <span class="stamp-warning">WARNING</span>
                <h2>HAZARD REPORT: COMMON MISTAKES</h2>
                <div class="dossier-meta">
                    <span>SEVERITY: CRITICAL</span>
                    <span>//</span>
                    <span>STATUS: ACTIVE THREAT</span>
                </div>
            </header>

            <div class="dossier-tabs">
                <button class="dossier-tab-btn active" data-tab="mistake-1">FATAL ERRORS</button>
                <button class="dossier-tab-btn" data-tab="mistake-2">HALL OF SHAME</button>
                <button class="dossier-tab-btn" data-tab="mistake-3">DECODING THE META</button>
            </div>

            <div class="dossier-content">
                <!-- Tab 1 -->
                <div id="mistake-1" class="dossier-tab-pane active">
                    <h3>The "How to Lose" Handbook – 5 Fatal Errors</h3>
                    <p class="intro-alert"><strong>DON'T BE A STATISTIC.</strong> Most players don't lose because they were outplayed; they lose because they beat themselves.</p>

                    <div class="error-list">
                        <div class="error-item">
                            <h4>1. The Gratuitous Betrayal</h4>
                            <p>Blindsiding someone just to make a "Big Move" usually creates a bitter jury.</p>
                            <p class="case-note"><strong>Case Note:</strong> Boston Rob (All-Stars) played a dominant game but lost because his betrayals were seen as personal and unnecessary.</p>
                        </div>
                        <div class="error-item">
                            <h4>2. Killing the Meat Shield</h4>
                            <p>Eliminating big physical threats too early leaves you exposed.</p>
                            <p class="case-note"><strong>Masterclass:</strong> Jeremy Collins (Cambodia) kept Joe Anglim in the game to ensure no one was looking at him.</p>
                        </div>
                        <div class="error-item">
                            <h4>3. The "Goat" Delusion</h4>
                            <p>Bringing a "weak" player to the end often backfires if you misread their social standing.</p>
                            <p class="case-note"><strong>The Blunder:</strong> Russell Hantz (HvV) lost to Sandra because juries vote for respect, not just strategy.</p>
                        </div>
                         <div class="error-item">
                            <h4>4. The Pocketed Idol</h4>
                            <p>Going home with an idol in your pocket usually happens around Episode 11.</p>
                            <p class="case-note"><strong>Horror Story:</strong> James Clement (China) was voted out with two idols because he felt "safe."</p>
                        </div>
                        <div class="error-item">
                            <h4>5. The Dictator</h4>
                            <p>Drawing lines in the sand too early paints a target on your back. Be useful, not bossy.</p>
                        </div>
                    </div>

                    <div class="dossier-media">
                        <img src="assets/common.jpeg" alt="Survivor Graveyard" class="dossier-img">
                        <span class="img-caption">FIG B.1: THE SURVIVOR GRAVEYARD</span>
                    </div>
                </div>

                <!-- Tab 2 -->
                <div id="mistake-2" class="dossier-tab-pane">
                    <h3>Hall of Shame & Hidden Mechanics</h3>
                    <p>Survivor history is paved with players who made choices that haunt them to this day. Learn from the best (and worst).</p>

                    <div class="shame-grid">
                        <div class="shame-card">
                            <h4>The Golden Rule</h4>
                            <p>Never, under any circumstances, give up Individual Immunity.</p>
                            <div class="shame-moment">
                                <strong>THE MOMENT:</strong> Erik Reichenbach (Micronesia) gave his necklace to Natalie at Final 5. Voted out immediately.
                            </div>
                        </div>
                        <div class="shame-card">
                            <h4>The Greed Trap</h4>
                            <p>Never prioritize comfort over safety.</p>
                            <div class="shame-moment">
                                <strong>THE MOMENT:</strong> Ulong Tribe (Palau) lost immunity trying to carry luxury rewards while the other tribe just took the paddles.
                            </div>
                        </div>
                        <div class="shame-card">
                            <h4>The "Face Off" Trap</h4>
                            <p>Challenges like "Touchy Subjects" are designed to hurt feelings. Don't mock the bottom players.</p>
                            <div class="shame-moment">
                                <strong>THE HACK:</strong> The Rotu Four fell apart because they revealed their pecking order.
                            </div>
                        </div>
                         <div class="shame-card">
                            <h4>The Car Curse</h4>
                            <p>Historically, no player who won the "Car Reward" ever went on to win the game.</p>
                            <div class="shame-moment">
                                <strong>THE MOMENT:</strong> Yau-Man (Fiji) gave his truck to Dreamz for safety. Dreamz reneged and voted him out.
                            </div>
                        </div>
                    </div>

                    <div class="img-placeholder">
                        <span>[IMAGE: SPLIT SCREEN - ERIK & TRUCK]</span>
                    </div>
                </div>

                <!-- Tab 3 -->
                <div id="mistake-3" class="dossier-tab-pane">
                    <h3>Decoding the Survivor Québec Meta (S1–S3)</h3>
                    <p>Survivor Québec (SQ) is a volatile hybrid of "Old School" ethics and "New Era" chaos.</p>

                    <div class="meta-section">
                        <h4>The Jury Honor Index (JHI)</h4>
                        <p>Unlike the US version, SQ juries heavily punish arrogance (surconfiance).</p>
                        <p><strong>Example:</strong> Nicolas Brunette (S1) won by proving he was an "incredible human." S3 players were punished for poor social judgment.</p>
                    </div>

                    <div class="meta-section">
                        <h4>The Deception Dividend</h4>
                        <p>The best move in SQ history wasn't playing an advantage—it was lying about one.</p>
                        <p><strong>Moment:</strong> André (S2) used the "Choose Your Champion" bluff to manipulate the entire vote.</p>
                    </div>

                    <div class="meta-section">
                        <h4>Twist Volatility</h4>
                        <p>Prepare for "Category IV" twists that break the format. Example: Cross-Tribal Elimination (S3).</p>
                    </div>

                    <div class="meta-section">
                        <h4>The Endgame</h4>
                        <p>SQ does not guarantee a fire-making challenge at Final 4. Tie-breakers in S2 and S3 involved Trivia/Past Votes.</p>
                    </div>

                     <div class="img-placeholder">
                        <span>[IMAGE: ANDRÉ & SCROLL DIAGRAM]</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // --- Shelter Content (Protocol II) ---
    const shelterContent = `
        <!-- Hero Section -->
        <header class="shelter-hero">
            <div class="shelter-hero-content">
                <div class="shelter-badge">Protocol II: Engineering</div>
                <h1 class="shelter-title">The Jungle Does Not <span class="text-red-highlight">Forgive</span></h1>
                <p class="shelter-quote">
                    "In the tropics, a shelter is not just a bed. It is a machine for fighting heat, dampness, and despair."
                </p>
                <a href="#blueprint" class="shelter-btn">
                    View The Blueprint <span class="icon-unicode">▼</span>
                </a>
            </div>
        </header>

        <!-- The Cautionary Tale -->
        <section class="shelter-section-dark">
            <div class="shelter-split">
                <div class="shelter-col-half">
                    <div class="shelter-alert-box">
                        <h2 class="shelter-warning-title">
                            <span class="icon-unicode">☠</span> Case File: The Pitfall
                        </h2>
                        <img src="assets/Rupert.jpeg" alt="Rupert Boneham" class="shelter-case-img">
                        <p class="text-slate-200 leading-relaxed mb-4">
                            <strong>Subject:</strong> Rupert Boneham, <em>Survivor: Pearl Islands</em>.
                        </p>
                        <p class="text-slate-300 leading-relaxed">
                            He tried to fight hydrology. He dug a pit into the beach, violating the prime directive of coastal survival. The result? A rising water table and storm runoff turned his shelter into a swimming pool. The tribe spent a miserable night in standing water.
                        </p>
                    </div>
                </div>
                <div class="shelter-col-half">
                    <h3 class="shelter-lesson-title">The Lesson</h3>
                    <p class="text-slate-300 mb-6" style="font-size: 1.125rem;">
                        Digging down in the tropics is an invitation to disaster.
                        <span style="color: #fbbf24; font-weight: bold; display: block; margin-top: 0.5rem;">The surface of the earth must never be broken.</span>
                    </p>
                    <ul class="shelter-lesson-list">
                        <li class="shelter-lesson-item">
                            <span class="icon-unicode" style="color: #ef4444; font-size: 1.2rem;">✕</span>
                            <span>No protection from tidal intrusion.</span>
                        </li>
                        <li class="shelter-lesson-item">
                            <span class="icon-unicode" style="color: #ef4444; font-size: 1.2rem;">✕</span>
                            <span>Zero airflow promotes heat stress.</span>
                        </li>
                        <li class="shelter-lesson-item">
                            <span class="icon-unicode" style="color: #ef4444; font-size: 1.2rem;">✕</span>
                            <span>Guarantee of dampness and shivering.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- The Solution -->
        <section id="blueprint" class="shelter-section-slate">
            <div style="max-width: 72rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 class="shelter-lesson-title" style="font-size: 2.25rem;">The Architect's Code</h2>
                    <p class="text-slate-400" style="max-width: 42rem; margin: 1rem auto; font-size: 1.25rem;">To survive, we do not dig. We elevate. Follow these four immutable laws of tropical engineering.</p>
                </div>

                <div class="shelter-grid-4">

                    <!-- Rule 1 -->
                    <div class="shelter-card">
                        <div class="shelter-card-badge">Priority 1</div>
                        <div class="shelter-card-icon"><span class="icon-unicode">☰</span></div>
                        <h3 class="shelter-lesson-title" style="font-size: 1.25rem; margin-bottom: 0.75rem;">The 6-Inch Rule</h3>
                        <p class="shelter-card-label">ELEVATION</p>
                        <p class="text-slate-200">
                            Never sleep on the ground. Build a platform minimum <strong>6 inches</strong> high. This is your shield against flooding, insects, and crawling pests.
                        </p>
                    </div>

                    <!-- Rule 2 -->
                    <div class="shelter-card">
                        <div class="shelter-card-badge">Priority 2</div>
                        <div class="shelter-card-icon"><span class="icon-unicode">❄</span></div>
                        <h3 class="shelter-lesson-title" style="font-size: 1.25rem; margin-bottom: 0.75rem;">The Debris Mattress</h3>
                        <p class="shelter-card-label">INSULATION</p>
                        <p class="text-slate-200">
                            The ground steals 80% of your body heat. Add <strong>6-12 inches</strong> of dry compacted leaves on your platform to stop the energy drain.
                        </p>
                    </div>

                    <!-- Rule 3 -->
                    <div class="shelter-card">
                        <div class="shelter-card-badge">Priority 3</div>
                        <div class="shelter-card-icon"><span class="icon-unicode">△</span></div>
                        <h3 class="shelter-lesson-title" style="font-size: 1.25rem; margin-bottom: 0.75rem;">The Steep Pitch</h3>
                        <p class="shelter-card-label">GEOMETRY</p>
                        <p class="text-slate-200">
                            Water is heavy. Build your A-frame at a minimum <strong>45-degree angle</strong>. This forces rapid runoff before water can soak through.
                        </p>
                    </div>

                    <!-- Rule 4 -->
                    <div class="shelter-card">
                        <div class="shelter-card-badge">Priority 4</div>
                        <div class="shelter-card-icon"><span class="icon-unicode">≋</span></div>
                        <h3 class="shelter-lesson-title" style="font-size: 1.25rem; margin-bottom: 0.75rem;">Shingle & Shield</h3>
                        <p class="shelter-card-label">TECHNIQUE</p>
                        <p class="text-slate-200">
                            Layer thatch tip-down like shingles. Position the opening parallel to the wind to prevent rain from driving into your sanctuary.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <!-- The Stealth Benefit -->
        <section class="shelter-section-dark">
            <div class="shelter-emerald-box">
                <h2 class="text-emerald" style="font-size: 1.875rem; margin-bottom: 1.5rem;">The Stealth Advantage</h2>
                <p class="text-slate-300" style="font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
                    A properly engineered shelter is a "set it and forget it" asset. While others struggle with daily repairs and wet clothes, the wise architect rests. You expend fewer calories on shivering and fewer calories on maintenance, preserving your energy for the game itself.
                </p>
                <div class="shelter-pill-emerald">
                    <span class="icon-unicode" style="margin-right: 0.5rem;">✔</span> STATUS: OPTIMIZED
                </div>
            </div>
        </section>

        <footer class="shelter-footer">
            <p>TROPICAL SHELTER ENGINEERING PROTOCOLS // DO NOT DIG DOWN</p>
        </footer>
    `;

    // --- Self Care Content ---
    const selfCareContent = `
        <div class="huddle-blog-post">
            <h2 class="huddle-title">Surviving the Body: The Ultimate Self-Care & Hygiene Handbook</h2>
            <p class="huddle-subtitle">In Survivor, your body is your most valuable alliance member. If it fails, you go home—medically evacuated or voted out because you became a liability. This guide outlines the essential protocols for hygiene, health, and metabolic preservation.</p>

            <h3 class="neon-heading">I. Personal Hygiene Protocols</h3>
            <p>Hygiene isn’t just about comfort; it is about preventing social alienation and infection.</p>

            <h4>1. Oral Care: The "Bush Dentist"</h4>
            <p>You will lose your toothbrush, but you cannot lose your teeth. Bad breath can actually be a subtle social disadvantage in close-quarters camp life.</p>
            <ul>
                <li><strong>The Ash Technique:</strong> Hardwood ash (white ash from a completely burned log) is basic and abrasive. Dip a wet finger in the ash and scrub your teeth. It neutralizes acid and scrubs away plaque. Rinse thoroughly.</li>
                <li><strong>The Sand Scrub:</strong> Use extremely fine sand mixed with water for a heavy-duty scrub. Warning: Do not do this daily, as it can damage enamel over time.</li>
                <li><strong>The Twig Floss:</strong> Find a fibrous twig (like a young sapling) and chew the end until it frays into a brush-like texture. Use this to scrub crevices.</li>
            </ul>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Turn oral care into a social activity. "Going to clean my teeth by the water" is a non-threatening excuse to leave a tense conversation or to pull an ally aside for a 'private' chat under the guise of hygiene.</p>

            <h4>2. Bathing & Scent Management</h4>
            <ul>
                <li><strong>The Ocean Bath:</strong> Saltwater is cleansing but drying. You must rinse off daily to prevent pore-clogging sweat and dirt buildup.</li>
                <li><strong>Exfoliation Station:</strong> Use a "sugar scrub" method but with sand. Rubbing fine sand over your arms and legs removes dead skin cells and dirt.</li>
                <li><strong>The "Survivor Stink":</strong> Accept that you will smell. Everyone will smell.</li>
            </ul>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Do not be the person who complains about the smell. However, be the person who tries to stay clean. Players who are visibly filthy are often subconsciously perceived as lazy or chaotic. A "clean" appearance (even if it's an illusion) projects control.</p>

            <h4>3. Bathroom Etiquette & "The Aqua-Dump"</h4>
            <p><strong>The Aqua-Dump:</strong> This is the gold standard of Survivor hygiene. Wading out into the ocean (waist deep) to relieve yourself ensures the tide washes waste away immediately. It is cleaner than a latrine and prevents camp smells.</p>
            <ul>
                <li><strong>Technique:</strong> Hold onto a stable rock or maintain a wide stance. Do not remove shorts entirely; just displace them.</li>
                <li><strong>The Latrine:</strong> If you must go on land, dig a hole far from camp.</li>
            </ul>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Never break the sanitation zone rules. If you urinate near the shelter or food, you will become a pariah. Use bathroom trips as a way to look for Hidden Immunity Idols without raising suspicion.</p>

            <h4>4. The Medical Box (The Sanctuary)</h4>
            <p>This is the only place with modern amenities.</p>
            <p><strong>Inventory:</strong> Feminine hygiene products, birth control, contact solution, sunscreen, insect repellent.</p>
            <p><strong>Protocol:</strong> Apply sunscreen and bug spray every single time you visit. Do not ration it.</p>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> The medical box is a "camera-free" zone (usually). Use this 2-3 minute window to drop the game persona, take a deep breath, and reset your face. It is your only moment of true privacy.</p>

            <h3 class="neon-heading">II. Physical Health & Injury Prevention</h3>
            <p>Small cuts become big evacuations in the tropics. Paranoia regarding health is a survival trait.</p>

            <h4>1. Water Purification</h4>
            <p><strong>The Golden Rule:</strong> If it touches the ground, it is poison.</p>
            <ul>
                <li><strong>Boiling:</strong> A rolling boil for 1 minute is non-negotiable for well/river water.</li>
                <li><strong>Rainwater:</strong> Prioritize collecting rainwater. It requires no fire and no cooling time.</li>
            </ul>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Volunteer to be the "Water Keeper." Keeping the fire going and the water boiled is a high-value tribe contribution that keeps you busy but close to camp (where the conversations happen).</p>

            <h4>2. Foot Care (The Mobility Mandate)</h4>
            <p><strong>Shoe Discipline:</strong> Never walk barefoot. Coral cuts contain marine bacteria that cause rapid infection. Thorns in the jungle lead to swelling.</p>
            <p><strong>Wet/Dry Cycle:</strong> Your feet will be wet 90% of the time. You must let them dry out at night. If you sleep with wet socks, you risk trench foot (tissue rot).</p>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Wear sneakers in the water during challenges. You may lose swimming speed, but you gain traction on slippery platforms and protection against hidden rocks. A toe injury can take you out of an immunity challenge; sneakers prevent that.</p>

            <h4>3. Infection Control</h4>
            <p><strong>The "Pimple" Danger:</strong> In a calorie-deficient state, your immune system effectively shuts down. A mosquito bite can become a staph infection in 48 hours.</p>
            <p><strong>Action Plan:</strong> Treat every scratch with the antiseptic found in the medical kit. Keep wounds covered.</p>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Do not hide injuries, but do not exaggerate them. If you look "broken," tribes view you as weak. If you look "responsible" by treating a wound, you look professional.</p>

            <h3 class="neon-heading">III. Metabolic Management & Shelter</h3>
            <p>The game is a marathon run by starving people. Energy economics is key.</p>

            <h4>1. Pre-Game Body Prep</h4>
            <ul>
                <li><strong>The Buffer:</strong> Gain 10–15 lbs of fat before flying out. This is not "getting out of shape"; it is packing a lunchbox you wear on your hips. This fat protects your brain function when the starvation sets in.</li>
                <li><strong>Caffeine Detox:</strong> Wean off coffee 3 weeks prior. You cannot afford a caffeine withdrawal migraine on Day 2 when you are trying to build a shelter.</li>
            </ul>

            <h4>2. Energy Conservation (The 70% Rule)</h4>
            <p><strong>Work Smart:</strong> Never do heavy lifting alone.</p>
            <p><strong>Social Blending:</strong> You must be seen working, but you should not be the "workhorse." The workhorse burns 3000 calories a day on a 200 calorie diet and crashes by Day 15.</p>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Aim for "visible maintenance" tasks—tending the fire, weaving palm fronds, or stirring rice. These are low-calorie activities that keep you in the center of the camp socially.</p>

            <h4>3. Shelter Engineering</h4>
            <ul>
                <li><strong>Elevation:</strong> Build the sleeping platform at least 6 inches off the ground. This creates an air gap (insulation) and keeps you away from crawling insects and ground moisture.</li>
                <li><strong>Roofing:</strong> A 45-degree angle is necessary for tropical rain. Anything flatter will leak.</li>
            </ul>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> Be involved in the shelter build. If you help build it, you have "ownership" of a spot. Secure a spot in the middle. The edges get wet; the middle stays dry and warm.</p>

            <h3 class="neon-heading">IV. Mental Health & Nervous System Regulation</h3>
            <p>The game puts you in a permanent "Fight/Flight" state. You must manually override this.</p>

            <h4>1. Nervous System Regulation</h4>
            <ul>
                <li><strong>Box Breathing:</strong> Inhale 4, Hold 4, Exhale 4, Hold 4. Do this before every challenge and before Tribal Council. It forces your heart rate down, stopping the "shaky hand" syndrome during puzzles.</li>
                <li><strong>Grounding:</strong> When paranoia hits, find 5 things you see, 4 you feel, 3 you hear. This pulls you out of the "future-tripping" game spiral.</li>
            </ul>

            <h4>2. Emotional Duality</h4>
            <p><strong>Honesty vs. Strategy:</strong> You must lie about the vote, but tell the truth about your feelings. If you are sad, say you are sad.</p>
            <p class="huddle-key-rule"><strong>Strategic Advantage:</strong> People forgive liars; they do not forgive robots. Showing vulnerability (crying about home, admitting fear) makes you a human being that the jury wants to reward, even if you cut their throats strategically later.</p>
        </div>
    `;

    // --- Data for Pillars (Grid + Deep Linking) ---
    const pillarsData = {
        outwit: {
            title: "OUTWIT",
            items: [
                { title: "Advantages & Twists", content: advantagesContent },
                {
                    title: "The Huddle Test",
                    content: `
                    <div class="huddle-blog-post">
                        <h2 class="huddle-title">Winning the Last Minute Whisper War</h2>
                        <h3 class="huddle-subtitle">The "Live Tribal" Phenomenon</h3>

                        <p>Modern Survivor has evolved past the era where the vote is locked before the torches are lit. The "Live Tribal" is the moment where the plan disintegrates—usually triggered by a leaked secret, a misspoken word, or a revealed advantage.</p>
                        <p>This is not just noise; it is a real-time market crash of trust. The Huddle Test is your ability to navigate this crash without going broke.</p>

                        <h3 class="neon-heading">I. The Anatomy of the Huddle</h3>
                        <p>To win the whisper war, you must identify which phase of the chaos is occurring.</p>
                        <ul>
                            <li><strong>The Catalyst:</strong> Someone feels unsafe and whispers to a neighbor.</li>
                            <li><strong>The Contagion:</strong> Paranoia spreads. Even secure players stand up.</li>
                            <li><strong>The Huddle:</strong> Discrete conversations merge into a group huddle.</li>
                            <li><strong>The Settlement:</strong> The group sits. The vote is locked or anxiety peaks.</li>
                        </ul>
                        <p class="huddle-key-rule"><strong>KEY RULE:</strong> Never remain seated if the majority of the tribe stands up. Even if you are safe, sitting signals you are out of the loop or stubbornly opposed to the consensus.</p>

                        <h3 class="neon-heading">II. Strategic Positioning</h3>
                        <p>Your role depends entirely on your position in the hierarchy.</p>

                        <h4>A. The Architect (The Leader)</h4>
                        <p><strong>Goal:</strong> Containment. Do not initiate whispering. Use the <em>Anchor Technique</em>: Keep body language open but firm. Repeat: "It’s still [Name]. Stick to the plan." <strong>Risk:</strong> Appearing too authoritarian.</p>

                        <h4>B. The Target (The Bottom)</h4>
                        <p><strong>Goal:</strong> Disruption. You must trigger the whisper. Use the <em>"Grenade" Technique</em>: Whisper a believable lie to the bottom of the majority: "They are splitting the vote on you just in case."</p>

                        <h4>C. The Swing (The Middle)</h4>
                        <p><strong>Goal:</strong> Leverage. Stand in the middle. Use the <em>"Bid War" Technique</em>: Look visibly conflicted. Extract a promise for the next round in exchange for your vote right now.</p>

                        <h3 class="neon-heading">III. Mechanics of the Whisper</h3>
                        <ul>
                            <li><strong>The Physical Block:</strong> Position your shoulder to block the line of sight of the enemy. Prevent lip-reading.</li>
                            <li><strong>The Performative Whisper:</strong> Cover your mouth and say nothing important (e.g., "Is that a spider?"). Make the other alliance panic.</li>
                            <li><strong>Lip Reading Defense:</strong> Hand-over-mouth is mandatory. High-def cameras capture everything.</li>
                        </ul>

                        <h3 class="neon-heading">IV. Psychological Management</h3>
                        <p><strong>Combating "FOMO":</strong> If you don't know the plan, look at the person you trust most. Mirror their vote.</p>
                        <p><strong>The Eye Contact Check:</strong></p>
                        <ul>
                            <li>Steady gaze + nod = Plan unchanged.</li>
                            <li>Darting eyes + avoidance = Plan shifted (You might be the target).</li>
                        </ul>

                        <div class="huddle-checklist">
                            <h3>SUMMARY CHECKLIST</h3>
                            <ul>
                                <li>✔ Did I cover my mouth?</li>
                                <li>✔ Did I stand up when the majority stood up?</li>
                                <li>✔ Did I verify the target name with two people?</li>
                                <li>✔ Did I maintain eye contact with my #1 ally?</li>
                            </ul>
                        </div>
                        <p class="huddle-outro">The winning move isn't always changing the vote; it's ensuring you are on the right side of the chaos.</p>
                    </div>
                    `
                },
                { title: "Tribal Council", content: tribalContent },
                { title: "Common Mistakes", content: mistakesContent },
                {
                    title: "Puzzles",
                    content: `
                    <div class="dossier-container theme-tribal" id="puzzle-dossier-root">
                        <header class="dossier-header">
                            <span class="stamp-classified">CLASSIFIED</span>
                            <h2>PUZZLE INTELLIGENCE REPORT: SURVIVOR QUÉBEC</h2>
                            <div class="dossier-meta">
                                <span>FOCUS: ARCHETYPES & PHYSIOLOGY</span>
                                <span>//</span>
                                <span>META: NOOVO EDITION</span>
                            </div>
                        </header>

                        <div class="dossier-tabs">
                            <button class="dossier-tab-btn active" data-tab="puzzle-1">THE BRIEFING</button>
                            <button class="dossier-tab-btn" data-tab="puzzle-2">ARCHETYPES</button>
                            <button class="dossier-tab-btn" data-tab="puzzle-3">PROTOCOLS</button>
                        </div>

                        <div class="dossier-content">
                            <!-- Tab 1: THE BRIEFING -->
                            <div id="puzzle-1" class="dossier-tab-pane active">
                                <h3>The Québec Context: "The Red Zone" Solve</h3>
                                <div class="dossier-text">
                                    <p>In the US version, puzzles often stand alone. In Survivor Québec, puzzles are almost exclusively <strong>Physiological Threshold Tests</strong>.</p>

                                    <h4>The "Relay" Factor</h4>
                                    <p>Survivor Québec challenges are longer and more physical than the US "New Era." By the time you reach the puzzle station, you are in the <strong>"Red Zone"</strong> (maximum heart rate).</p>

                                    <h4>The Implications</h4>
                                    <p>You are not solving with your IQ; you are solving with your Endurance. The blood has left your frontal cortex (logic center) to fuel your muscles.</p>

                                    <div style="background: rgba(255, 0, 0, 0.2); border-left: 4px solid red; padding: 1rem; margin: 1rem 0;">
                                        <strong>EXECUTION RULE:</strong> You must pause for 5–10 seconds upon arriving at the station. Do not touch a piece until you have taken three deep "reset" breaths. If you start moving pieces while gasping, you will miss obvious connections.
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 2: ARCHETYPES (Interactive) -->
                            <div id="puzzle-2" class="dossier-tab-pane">
                                <h3>Puzzle Archetypes: The "Noovo" Standard</h3>
                                <p>Based on the Banijay format used by Noovo, these are the four specific puzzle types you must master. Select a module below to access the strategy guide.</p>

                                <!-- Sub-Navigation for Archetypes -->
                                <div class="dossier-tabs" style="border-bottom: none; margin-bottom: 1rem; gap: 0.5rem;">
                                    <button class="dossier-tab-btn puzzle-nav-btn active" data-puzzle-type="slide">SLIDE PUZZLE</button>
                                    <button class="dossier-tab-btn puzzle-nav-btn" data-puzzle-type="vertical">VERTICAL ASSEMBLY</button>
                                    <button class="dossier-tab-btn puzzle-nav-btn" data-puzzle-type="floor">FLOOR ASSEMBLY</button>
                                    <button class="dossier-tab-btn puzzle-nav-btn" data-puzzle-type="scramble">WORD SCRAMBLE</button>
                                </div>

                                <!-- Container for Dynamic Puzzle HTML Injection -->
                                <div id="archetype-display-area">
                                    <!-- Default Content (Slide Puzzle) -->
                                    ${slidePuzzleHTML}
                                </div>
                            </div>

                            <!-- Tab 3: PROTOCOLS -->
                            <div id="puzzle-3" class="dossier-tab-pane">
                                <h3>Island Execution: Advanced Tactics</h3>

                                <h4>The "Quiet Eye" (Focus Gating)</h4>
                                <p>Ghyslain (S2) demonstrated this perfectly. When chaos is happening around you (shouting teammates, Patrice Bélanger’s commentary):</p>
                                <ul>
                                    <li><strong>Technique:</strong> Narrow your vision to a 12-inch square. Blur everything else out.</li>
                                    <li><strong>Audio Filtering:</strong> Patrice will narrate your failure ("They are falling behind!"). You must train yourself to hear his voice as "white noise" unless he is giving a rules clarification.</li>
                                </ul>

                                <h4>The "Art Department" Trap</h4>
                                <p>Survivor props are designed to look "rustic" (shipwrecked wood, rough paint).</p>
                                <ul>
                                    <li><strong>The Trap:</strong> Players assume the pieces are rough, so they try to force them together ("jamming" the puzzle).</li>
                                    <li><strong>The Reality:</strong> The puzzles are laser-cut precision items masked with rustic paint.</li>
                                    <li><strong>The Rule:</strong> "If you have to force it, it is wrong." If a piece does not slide in with a gentle click, it is in the wrong spot. Forcing it will damage the wood and potentially make the puzzle unsolvable.</li>
                                </ul>

                                <h4>Piece Management (The "Gordon Holmes" Error)</h4>
                                <p>In the sand or tall grass of a challenge set, pieces disappear.</p>
                                <ul>
                                    <li>Never pile pieces on top of each other.</li>
                                    <li>Spread them "face up" immediately.</li>
                                    <li>If you are missing a piece, stop looking at the puzzle. Look at the ground near your feet, then check the "discard" pile of pieces you thought didn't fit.</li>
                                </ul>

                                <hr style="border: 0; border-top: 1px solid #555; margin: 2rem 0;">

                                <h3>Training Protocol for the "Puzzle Beast"</h3>
                                <p>To dominate in Québec, you do not just solve puzzles; you solve them under load.</p>

                                <div class="comp-card">
                                    <h4>Drill 1: The Heart Rate Spike</h4>
                                    <ul>
                                        <li>Sprint 200m or do 20 Burpees.</li>
                                        <li>Immediately solve a specific task (e.g., a child’s 24-piece jigsaw or a slide puzzle app).</li>
                                        <li><strong>Metric:</strong> Time how long it takes for your hands to stop shaking. Aim to reduce this "lag time."</li>
                                    </ul>
                                </div>
                                <div class="comp-card" style="margin-top: 1rem;">
                                    <h4>Drill 2: The "Ghost" Puzzle</h4>
                                    <ul>
                                        <li>Watch a season of Survivor. When a word scramble appears, PAUSE the TV.</li>
                                        <li>Write down the scrambled letters on paper.</li>
                                        <li>Solve it yourself before hitting play. This trains your brain to recognize the specific "Survivor Fonts" and spacing.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        },
        outplay: {
            title: "OUTPLAY",
            items: [
                {
                    title: "Return to the Old School",
                    content: `
                    <div class="huddle-blog-post">
                        <h2 class="huddle-title">STRATEGIC INTELLIGENCE REPORT</h2>
                        <h3 class="huddle-subtitle">Subject: Physical Challenges & Combat Mechanics (Survivor Québec)<br>Status: High Priority / Contact Heavy</h3>

                        <h3 class="neon-heading">1. The "Old School" Arena</h3>
                        <p>Unlike the modern US version, which has become a "fair" obstacle course, Survivor Québec is a return to the gladiator pit. The challenges are designed to be gritty, heavy, and often involve direct physical contact.</p>
                        <ul>
                            <li><strong>The Vibe:</strong> Think "Farm Strong," not "Gym Strong." You aren't just running; you are colliding.</li>
                            <li><strong>The Risk:</strong> Injuries are statistically more common here. The game is brutal on joints (shoulders and knees) because of the wrestling and heavy lifting.</li>
                        </ul>

                        <h3 class="neon-heading">2. The "Contact" Meta (Wrestling & Sumo)</h3>
                        <p>You will likely face challenges that allow you to put your hands on your opponent. This includes "Sumo" style games (pushing people off platforms) or wrestling for objects.</p>
                        <ul>
                            <li><strong>Leverage is King:</strong> You don't need to be the heaviest person, you just need to be the lowest.</li>
                            <li><strong>The "Root" Position:</strong> Keep your feet wider than your shoulders. It makes you a triangle that is hard to tip over.</li>
                            <li><strong>Push Up, Not Back:</strong> When wrestling, drive your hands up into their chest. This lifts them off their feet, making them light and easy to push around.</li>
                            <li><strong>Mud Warfare:</strong> Expect to wrestle in mud. Mud acts as a lubricant—you cannot rely on standard friction.</li>
                        </ul>

                        <h3 class="neon-heading">3. The "Sac de Sable" (Sandbag) Reality</h3>
                        <p>A staple of the Québec franchise is moving heavy, awkward objects like sandbags ("Sac de Sable"), often while tethered to other players.</p>
                        <ul>
                            <li><strong>Grip is the Failure Point:</strong> Your back might be strong enough to pull the bag, but your hands will fail first.</li>
                            <li><strong>Training Fix:</strong> Don't just lift bars. Wrap towels around your pull-up bar or use "Fat Gripz" to simulate holding onto thick, slippery, muddy bags.</li>
                            <li><strong>Functional Towing:</strong> You need "tow strength." This means dragging heavy weight while swimming or running. It’s about grinding out movement against resistance.</li>
                        </ul>

                        <h3 class="neon-heading">4. Static Pain (The Mental Game)</h3>
                        <p>Québec loves "torture" challenges where you hold a position for hours (like "Get a Grip" on a pole).</p>
                        <ul>
                            <li><strong>The "Cocoon":</strong> Smaller players should hug the pole tight to create friction.</li>
                            <li><strong>The "Monkey":</strong> Longer players (like Ghyslain) need to actively adjust to keep blood flowing, but be careful not to slip too low.</li>
                            <li><strong>The Secret:</strong> It’s not about muscle; it’s about ignoring your brain when it screams "this hurts." Focus on a single spot (a knot in the wood) to dissociate from the pain.</li>
                        </ul>
                    </div>
                    `
                },
                {
                    title: "Physical",
                    content: `
                    <div class="huddle-blog-post">
                        <h2 class="huddle-title">Survivor Québec 2025: Land-Based Challenges by Phase</h2>
                        <h3 class="huddle-subtitle">Winning Challenges</h3>

                        <p>Survivor Québec 2025, filmed in the Philippines over 42 days, features land-based challenges emphasizing relays, obstacles, endurance holds, and accuracy tests on solid terrain, often with strength elements like carries and grapples. These evolve from team-focused pre-merge to individual post-merge, hosted by Patrice Bélanger on Noovo, with Ugat tribe dominating early wins (Cycles 1-3,5) and Malaki later (Cycles 4,6). Phases align with tribe setups: original (Malaki/Ugat), expanded/swapped (Sapa added), post-kidnap, and merged Nanalo tribe around Day 25.​</p>

                        <h3 class="neon-heading">Pre-Merge (Cycles 1-8, Days 2-17)</h3>
                        <p>Team immunity/reward challenges prioritize collective hauls and obstacle courses to build early tribe strength.</p>
                        <ul>
                            <li><strong>Relays and Obstacles:</strong> Tribes race walls, nets, logs over uneven ground; Ugat's Cycle 1-3 sweeps involved heavy carries and synchronized pushes.​</li>
                            <li><strong>Endurance Team Standoffs:</strong> Prolonged holds or balance relays; Cycle 7 Sapa win tested grip and posture under fatigue.​</li>
                            <li><strong>Accuracy Finishers:</strong> Post-obstacle throws or slingshots; medical evacuations like Kathrine's (Day 17, Cycle 8) highlight exhaustion risks after Malaki immunity.​</li>
                        </ul>
                        <p>Secret swaps (e.g., Day 10, Cycle 5) disrupted dynamics, with no elimination but Ugat immunity.​</p>

                        <h3 class="neon-heading">Merge and Post-Merge (Cycles 9+, Days 25-42)</h3>
                        <p>Individual challenges ramp up personal duels, precision under duress, and grueling holds for jury spots and final advantages.</p>

                        <div class="huddle-checklist" style="background: rgba(0,0,0,0.3); border-color: #aaa;">
                            <h4 style="color: #fff; margin-bottom: 0.5rem;">Phase Challenge Focus Key Events/Winners ​</h4>
                            <ul>
                                <li><strong>Early Merge (Days 25-31)</strong> 1-on-1 grapples, balance duels Sébastien out Day 25; Florence (top performer) voted Day 31 after Nanalo battles.</li>
                                <li><strong>Mid-Merge (Days 34-40)</strong> Endurance holds, accuracy sprints Eric Day 34, Marilou Day 35, William Day 39, Ashly Day 40; lost duels like André's (Day 28).</li>
                                <li><strong>Endgame (Days 41-42)</strong> High-stakes static holds Danyelle lost challenge Day 41; finals pitted Myriam (2nd runner-up), Rayane (runner-up), Geneviève (Sole Survivor). Duels replace votes at times, blending power struggles with precision (e.g., slingshot after sprints).​</li>
                            </ul>
                        </div>

                        <h3 class="neon-heading">The Brutal Beauty of Survivor Québec Land Challenges</h3>
                        <p>Out in the Philippine dirt, Survivor Québec 2025 turned every patch of ground into a battlefield. No water escapes—just raw land tests of carry, crawl, climb, and collapse. From Ugat's early dominance to Nanalo's merge carnage, these challenges exposed who could haul tribe weight pre-merge and outlast solo post-Day 25.​</p>

                        <h4>Pre-Merge Power Plays (Cycles 1-8)</h4>
                        <p>Teams grind through obstacle relays: scale walls, drag logs across mud, sync under nets. Ugat crushed Cycles 1-3 with coordinated hauls, while Sapa's Cycle 7 upset demanded endurance holds where grip failed first. Finish with shaky-aim slingshots—Kathrine's Day 17 evac after Cycle 8 proves the toll.​</p>
                        <ul>
                            <li><strong>Weighted Team Marches:</strong> Full tribe lugs packs uphill; swaps like Day 10 (Cycle 5) forced realignments mid-haul.</li>
                            <li><strong>Grapple Gauntlets:</strong> Tribe vs. tribe pushes over lines, pure leverage wars.</li>
                        </ul>

                        <h4>Merge Melees: Solo Survival (Days 25+)</h4>
                        <p>Individuals duel head-to-head: wrestle poles, balance on beams till drop. Florence shone early merge, but Nanalo chewed through Sébastien (Day 25), André's duel loss (Day 28), up to Danyelle's Day 41 holdout failure.​</p>
                        <ul>
                            <li><strong>1-on-1 Pole Drags:</strong> Rope-tug weighted logs across marks—strength meets footwork.</li>
                            <li><strong>Fatigue Accuracy:</strong> Sprint obstacles, then nail distant targets; heart-pounding precision decides jury votes.</li>
                            <li><strong>Endgame Holds:</strong> Static planks or squats for final edges; Geneviève's win rewarded unrelenting grit.​</li>
                        </ul>
                        <p>Québec twists like totem pulls add grip puzzles to the grind, making underdogs like Rayane viable threats. These land beasts don't just test bodies—they forge the Sole Survivor through 42 days of dirt-earned will.</p>
                    </div>
                    `
                },
                {
                    title: "Swimming",
                    content: `
                    <div class="huddle-blog-post">
                        <h2 class="huddle-title">Mastering The Ocean</h2>
                        <h3 class="huddle-subtitle">A Competitor’s Guide to the Water Game</h3>

                        <p>The ocean is the biggest "truth teller" in Survivor. On land, you can fake it, hide in the back of the pack, or get lucky. In the water, there is no hiding. If you panic or have bad form, you are done.</p>
                        <p>Swimming in a pool is nothing like swimming in the ocean. In a pool, you have a black line to follow, calm water, and goggles. In Survivor, you have currents, waves, salt in your eyes, and—worst of all—you are usually wearing heavy sneakers and baggy clothes.</p>
                        <p>Here is how to prepare for the specific biomechanics of Survivor swimming.</p>

                        <h3 class="neon-heading">1. The Entry: Don't Run in Water</h3>
                        <p>The most common rookie mistake. When the challenge starts, adrenaline takes over and people try to sprint into the ocean. But water acts like concrete once it hits your knees.</p>
                        <ul>
                            <li><strong>The Pro Move:</strong> "The Dolphin Dive"</li>
                            <li><strong>The Technique:</strong> As soon as the water is knee-deep, stop running. Dive forward, grab the sand with your hands, pull yourself forward, and pop up. Repeat this porpoise-like motion until the water is waist-deep. Then, and only then, start swimming.</li>
                            <li><strong>Training Suggestion: "Shallows Sprints"</strong> - Find the shallow end of a pool or a beach. Practice the transition from running to diving. Do 10 reps of running 5 steps, diving, and getting back up immediately. It builds the explosive power needed to get off the beach fast.</li>
                        </ul>

                        <h3 class="neon-heading">2. The Tow: The "Combat Side Stroke"</h3>
                        <p>How to move gear without drowning. You will almost certainly have to tow something—a boat, a heavy chest, or a tired teammate.</p>
                        <p><strong>The Mistake:</strong> Trying to swim Freestyle (front crawl). If you hold a rope in one hand and try to swim freestyle with the other, your hips will sink, and you will just splash without moving.</p>
                        <p><strong>The Fix: Combat Side Stroke (CSS)</strong></p>
                        <p>This is what Navy SEALs use to tow gear. Swim on your side.</p>
                        <ul>
                            <li><strong>Top Arm:</strong> Holds the object (rope, boat, crate).</li>
                            <li><strong>Bottom Arm & Legs:</strong> The bottom arm pulls water, and the legs perform a big "scissor kick." This kick uses your glutes and quads (huge muscles) to drive you forward.</li>
                        </ul>
                        <p><strong>Training Suggestion: "The Drag"</strong> - Go to the pool with an old t-shirt. Tie a knot in the bottom or hold a mesh laundry bag to create drag. Swim 200 meters using only the side stroke. Focus on the glide phase after the kick.</p>

                        <h3 class="neon-heading">3. Navigation: The "Crocodile Eye"</h3>
                        <p>Swimming straight in a crooked ocean. Because of currents and waves, if you put your head down and swim hard, you will drift off course. You might swim an extra 50 meters in a big curve without realizing it.</p>
                        <p><strong>The Fix: Sighting</strong></p>
                        <p>You need to incorporate "sighting" into your stroke.</p>
                        <ul>
                            <li><strong>The Technique:</strong> Every 6 to 10 strokes, lift your eyes just above the waterline (like a crocodile) to spot your target buoy. Do not lift your whole head—that makes your hips sink. Just the eyes.</li>
                        </ul>
                        <p><strong>Training Suggestion: "Tarzan Swimming"</strong> - Swim 25 meters with your head completely out of the water, looking forward. It is exhausting, but it strengthens the neck and trap muscles you need to see over waves.</p>

                        <h3 class="neon-heading">4. The "Last Gasp": Panic Control</h3>
                        <p>Surviving the rising tide. This is the infamous challenge where you are pinned under a steel grate while the tide rises. It is not a test of breath-holding; it is a test of panic management.</p>
                        <ul>
                            <li><strong>The Trick: Micro-Sipping</strong> - When the water covers your face, your instinct is to take a huge gulp of air. Don't. Big lungs create buoyancy, which floats you up and smashes your face into the grate.</li>
                            <li><strong>The Technique:</strong> Tilt your head back and take tiny, small sips of air through pursed lips. Keep your lungs only half-full to stay neutral in the water.</li>
                            <li><strong>Training Suggestion: "Apnea Walks" (Dry Land)</strong> - Do not practice breath-holding alone in water (risk of blackout). Instead, walk on grass while holding your breath. Count your steps. When you feel the urge to breathe (CO2 buildup), try to take 10 more steps calmly. This trains your brain to recognize that "air hunger" is uncomfortable, but not fatal.</li>
                        </ul>

                        <div class="huddle-checklist">
                            <h3>Final Prep Checklist: The Reality Check</h3>
                            <p>To truly simulate the game, you need to stop training in perfect conditions.</p>
                            <ul>
                                <li><strong>The Clothing Audit:</strong> Go to the pool in sneakers, socks, and a heavy t-shirt. Jump in. Feel how heavy the shoes are. Realizing how much drag shoes create now prevents panic later.</li>
                                <li><strong>The Distance:</strong> Be able to swim 300 meters continuously without touching the wall. That is your baseline for a standard challenge.</li>
                                <li><strong>The Depth:</strong> Practice diving to the bottom of the deep end (10–12 feet) and tying a knot or retrieving a brick. This simulates releasing a buoy underwater.</li>
                            </ul>
                        </div>

                        <div class="video-placeholder">
                            <span>VIDEO PLACEHOLDER</span>
                        </div>
                    </div>
                    `
                },
                {
                    title: "Puzzles",
                    content: `
                    <div class="dossier-container theme-tribal" id="puzzle-dossier-root">
                        <header class="dossier-header">
                            <span class="stamp-classified">CLASSIFIED</span>
                            <h2>PUZZLE INTELLIGENCE REPORT: SURVIVOR QUÉBEC</h2>
                            <div class="dossier-meta">
                                <span>FOCUS: ARCHETYPES & PHYSIOLOGY</span>
                                <span>//</span>
                                <span>META: NOOVO EDITION</span>
                            </div>
                        </header>

                        <div class="dossier-tabs">
                            <button class="dossier-tab-btn active" data-tab="puzzle-1">THE BRIEFING</button>
                            <button class="dossier-tab-btn" data-tab="puzzle-2">ARCHETYPES</button>
                            <button class="dossier-tab-btn" data-tab="puzzle-3">PROTOCOLS</button>
                        </div>

                        <div class="dossier-content">
                            <!-- Tab 1: THE BRIEFING -->
                            <div id="puzzle-1" class="dossier-tab-pane active">
                                <h3>The Québec Context: "The Red Zone" Solve</h3>
                                <div class="dossier-text">
                                    <p>In the US version, puzzles often stand alone. In Survivor Québec, puzzles are almost exclusively <strong>Physiological Threshold Tests</strong>.</p>

                                    <h4>The "Relay" Factor</h4>
                                    <p>Survivor Québec challenges are longer and more physical than the US "New Era." By the time you reach the puzzle station, you are in the <strong>"Red Zone"</strong> (maximum heart rate).</p>

                                    <h4>The Implications</h4>
                                    <p>You are not solving with your IQ; you are solving with your Endurance. The blood has left your frontal cortex (logic center) to fuel your muscles.</p>

                                    <div style="background: rgba(255, 0, 0, 0.2); border-left: 4px solid red; padding: 1rem; margin: 1rem 0;">
                                        <strong>EXECUTION RULE:</strong> You must pause for 5–10 seconds upon arriving at the station. Do not touch a piece until you have taken three deep "reset" breaths. If you start moving pieces while gasping, you will miss obvious connections.
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 2: ARCHETYPES (Interactive) -->
                            <div id="puzzle-2" class="dossier-tab-pane">
                                <h3>Puzzle Archetypes: The "Noovo" Standard</h3>
                                <p>Based on the Banijay format used by Noovo, these are the four specific puzzle types you must master. Select a module below to access the strategy guide.</p>

                                <!-- Sub-Navigation for Archetypes -->
                                <div class="dossier-tabs" style="border-bottom: none; margin-bottom: 1rem; gap: 0.5rem;">
                                    <button class="dossier-tab-btn puzzle-nav-btn active" data-puzzle-type="slide">SLIDE PUZZLE</button>
                                    <button class="dossier-tab-btn puzzle-nav-btn" data-puzzle-type="vertical">VERTICAL ASSEMBLY</button>
                                    <button class="dossier-tab-btn puzzle-nav-btn" data-puzzle-type="floor">FLOOR ASSEMBLY</button>
                                    <button class="dossier-tab-btn puzzle-nav-btn" data-puzzle-type="scramble">WORD SCRAMBLE</button>
                                </div>

                                <!-- Container for Dynamic Puzzle HTML Injection -->
                                <div id="archetype-display-area">
                                    <!-- Default Content (Slide Puzzle) -->
                                    ${slidePuzzleHTML}
                                </div>
                            </div>

                            <!-- Tab 3: PROTOCOLS -->
                            <div id="puzzle-3" class="dossier-tab-pane">
                                <h3>Island Execution: Advanced Tactics</h3>

                                <h4>The "Quiet Eye" (Focus Gating)</h4>
                                <p>Ghyslain (S2) demonstrated this perfectly. When chaos is happening around you (shouting teammates, Patrice Bélanger’s commentary):</p>
                                <ul>
                                    <li><strong>Technique:</strong> Narrow your vision to a 12-inch square. Blur everything else out.</li>
                                    <li><strong>Audio Filtering:</strong> Patrice will narrate your failure ("They are falling behind!"). You must train yourself to hear his voice as "white noise" unless he is giving a rules clarification.</li>
                                </ul>

                                <h4>The "Art Department" Trap</h4>
                                <p>Survivor props are designed to look "rustic" (shipwrecked wood, rough paint).</p>
                                <ul>
                                    <li><strong>The Trap:</strong> Players assume the pieces are rough, so they try to force them together ("jamming" the puzzle).</li>
                                    <li><strong>The Reality:</strong> The puzzles are laser-cut precision items masked with rustic paint.</li>
                                    <li><strong>The Rule:</strong> "If you have to force it, it is wrong." If a piece does not slide in with a gentle click, it is in the wrong spot. Forcing it will damage the wood and potentially make the puzzle unsolvable.</li>
                                </ul>

                                <h4>Piece Management (The "Gordon Holmes" Error)</h4>
                                <p>In the sand or tall grass of a challenge set, pieces disappear.</p>
                                <ul>
                                    <li>Never pile pieces on top of each other.</li>
                                    <li>Spread them "face up" immediately.</li>
                                    <li>If you are missing a piece, stop looking at the puzzle. Look at the ground near your feet, then check the "discard" pile of pieces you thought didn't fit.</li>
                                </ul>

                                <hr style="border: 0; border-top: 1px solid #555; margin: 2rem 0;">

                                <h3>Training Protocol for the "Puzzle Beast"</h3>
                                <p>To dominate in Québec, you do not just solve puzzles; you solve them under load.</p>

                                <div class="comp-card">
                                    <h4>Drill 1: The Heart Rate Spike</h4>
                                    <ul>
                                        <li>Sprint 200m or do 20 Burpees.</li>
                                        <li>Immediately solve a specific task (e.g., a child’s 24-piece jigsaw or a slide puzzle app).</li>
                                        <li><strong>Metric:</strong> Time how long it takes for your hands to stop shaking. Aim to reduce this "lag time."</li>
                                    </ul>
                                </div>
                                <div class="comp-card" style="margin-top: 1rem;">
                                    <h4>Drill 2: The "Ghost" Puzzle</h4>
                                    <ul>
                                        <li>Watch a season of Survivor. When a word scramble appears, PAUSE the TV.</li>
                                        <li>Write down the scrambled letters on paper.</li>
                                        <li>Solve it yourself before hitting play. This trains your brain to recognize the specific "Survivor Fonts" and spacing.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        },
        outlast: {
            title: "OUTLAST",
            items: [
                { title: "Fire", content: "Making fire is life." },
                { title: "Shelter", content: shelterContent },
                { title: "Self Care", content: selfCareContent },
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

    // --- FTC Guide Content ---
    const mindfulnessContent = `
        <div class="dossier-container theme-neon-bright">
            <header class="dossier-header">
                <h2>MINDFULNESS & RESILIENCE</h2>
                <div class="dossier-meta">
                    <span>FOCUS: MENTAL CLARITY</span>
                    <span>//</span>
                    <span>STATUS: ESSENTIAL</span>
                </div>
            </header>

            <div class="dossier-tabs">
                <button class="dossier-tab-btn active" data-tab="mind-1">The Primer</button>
                <button class="dossier-tab-btn" data-tab="mind-2">Case Study</button>
                <button class="dossier-tab-btn" data-tab="mind-3">Cheat Sheet</button>
            </div>

            <div class="dossier-content">
                <!-- Tab 1: The Primer -->
                <div id="mind-1" class="dossier-tab-pane active">
                    <h3>Section 1: Waking Up From the Dream of Thought</h3>
                    <div class="dossier-split">
                        <div class="dossier-text">
                            <p>We spend most of our lives lost in a movie playing inside our heads. We ruminate on the past, anxiously rehearse the future, and constantly narrate the present. This incessant chatter is often the primary source of our suffering.</p>
                            <p>Secular mindfulness, rooted in neuroscience and stripped of religious dogma (as articulated by thinkers like Sam Harris, Joseph Goldstein, and others), offers a way to step out of that movie theater and back into reality.</p>
                            <p>Here is a brief overview of the practice.</p>

                            <h4>What is mindfulness?</h4>
                            <p>At its core, mindfulness is a specific quality of attention set upon the present moment. But it is more than just "concentration."</p>
                            <p>It is an open, non-judgmental awareness of whatever is arising in consciousness right now—sights, sounds, sensations, thoughts, and emotions.</p>
                            <p>Crucially, mindfulness is the difference between being lost in a thought and recognizing that you are thinking. It is the realization that you are not the voice in your head; you are the space of consciousness in which that voice is appearing. It is the antidote to living your life on autopilot.</p>

                            <h4>How does it work?</h4>
                            <p>Normally, we identify fully with our thoughts. If a thought arises saying, "I am angry," we immediately become angry. We are taken for a ride by the neurochemistry of that emotion.</p>
                            <p>Mindfulness inserts a wedge of awareness between stimulus and reaction. Instead of being the anger, you notice, "There is a sensation of anger arising in the chest right now."</p>
                            <p>By observing your thoughts and feelings as transient mental events—like clouds passing through the sky of your mind—rather than facts defining "you," you rob them of their power. You stop fueling the fire with resistance or attachment. You realize that thoughts appear from nowhere and, if left untouched, vanish back into nowhere.</p>

                            <h4>When can it be used?</h4>
                            <p>The most common misconception about mindfulness is that it is something you do only while sitting cross-legged with your eyes closed.</p>
                            <p>While formal practice is essential training, the ultimate goal is to break down the barrier between "meditation" and "real life." Because you are always conscious, every moment is an opportunity for mindfulness.</p>
                            <p>It can and should be used when you feel the first spike of anxiety before a meeting, while you are stuck in traffic, when you are eating lunch, or even while having a difficult conversation. If you are awake, you can be mindful.</p>

                            <h4>How to improve?</h4>
                            <p>The biggest obstacle to improvement is the false belief that you need to stop thinking to be "good" at meditation. You cannot stop your thoughts any more than you can stop your heart from beating.</p>
                            <p>Improvement is not about achieving a blank mind; it is about changing your relationship to the contents of your mind.</p>
                            <p>The practice is simply this: Focus your attention on an anchor, like your breath. Inevitably, you will get lost in thought. The moment you realize you were lost, that is the moment of mindfulness. Do not judge yourself for wandering. simply gently return to the breath.</p>
                            <p>To improve, value consistency over duration. It is better to practice for ten minutes every day than for an hour once a week. Aim for short "glimpses" of clarity repeated frequently throughout your day. Just keep beginning again.</p>
                        </div>
                        <div class="dossier-media">
                            <img src="assets/meditation2.jpeg" alt="Meditation" class="dossier-img">
                            <span class="img-caption">FIG M.1: THE ANCHOR</span>
                        </div>
                    </div>
                </div>

                <!-- Tab 2: Case Study -->
                <div id="mind-2" class="dossier-tab-pane">
                    <h3>Section 2: Case Study: Mindfulness on the Island</h3>
                    <p>There are few environments that strip away the illusions of comfort as ruthlessly as the game of Survivor. The island is a laboratory for human suffering, making it the ultimate testing ground for mindfulness.</p>
                    <p>When you are stripped of food, sleep, and security, your mind becomes a chaotic feedback loop. Here is how the practice applies to the specific rigors of the game:</p>

                    <div class="guide-card" style="margin-bottom: 1rem;">
                        <h4>Game Decisions and Regret</h4>
                        <p>In a game built on deception, paranoia is the default state. Players torture themselves with counterfactuals: Did I trust the wrong person? Should I have played my idol? Mindfulness allows you to recognize that "regret" is merely a thought about the past, and "paranoia" is merely a thought about the future. Neither is happening now. When you make a cutthroat decision, mindfulness helps you observe the resulting guilt as a physiological sensation—tightness in the chest, heat in the face—rather than a moral indictment of your character. You can make your move, notice the internal reaction, and let it pass without being consumed by it.</p>
                    </div>

                    <div class="guide-card" style="margin-bottom: 1rem;">
                        <h4>Loneliness and Homesickness</h4>
                        <p>When the sun goes down and the camp goes quiet, thoughts of home can be debilitating. The unmindful player drowns in the narrative: I miss them so much, I can’t do this. The mindful player investigates the feeling. What is homesickness, actually? It is a specific texture of sadness, a heaviness in the stomach, a contraction in the throat. By turning your attention toward the raw data of the emotion rather than the story telling you "I am sad," the feeling loses its jagged edges. You can hold the emotion in a space of awareness without letting it dictate your gameplay.</p>
                    </div>

                    <div class="guide-card" style="margin-bottom: 1rem;">
                        <h4>The Cold and Hunger</h4>
                        <p>This is where the distinction between pain and suffering becomes critical.</p>
                        <p><strong>Hunger:</strong> When you are starving, the mind screams, "I need food." Mindfulness asks you to look closer. What is the actual sensation of hunger? It is a gnawing, hollow feeling in the abdomen. It is intense, yes, but it is just a sensation. The suffering comes from your resistance to it—the wish that it were otherwise.</p>
                        <p><strong>The Cold:</strong> Shivering in the rain at 3:00 AM is physically painful. But the psychological agony comes from the thought: This will never end. I can't take this. If you can drop the narrative and simply feel the cold—relaxing into the shivering rather than tensing against it—you will find that the experience, while unpleasant, is manageable moment by moment.</p>
                    </div>

                    <div class="guide-card" style="margin-bottom: 1rem;">
                        <h4>Refocusing After a Blindside</h4>
                        <p>If a challenge goes wrong or an ally is voted out, the ego wants to wallow in anger or victimhood. This is fatal in Survivor. Mindfulness offers the ability to "begin again" instantly. The moment the challenge is lost, that moment is over. Carrying the emotional residue into the next hour is a choice. By recognizing the anger as it arises and letting it unravel, you can return to camp with a clear head, ready to strategize, while your opponents are still stuck in the past.</p>
                    </div>
                </div>

                <!-- Tab 3: Cheat Sheet -->
                <div id="mind-3" class="dossier-tab-pane">
                    <h3>Section 3: The Survivor Mindfulness Cheat Sheet</h3>
                    <p>The Golden Rule of the Island: You cannot stop the waves (hunger, cold, paranoia), but you can learn to surf. The goal is not to feel "good." The goal is to feel clearly without adding unnecessary suffering to the unavoidable pain.</p>

                    <div class="drill-container">
                        <div class="drill-card">
                            <h4>The Universal Reset Button</h4>
                            <p><strong>Use when:</strong> You feel generally overwhelmed, scattered, or spiraling.</p>
                            <p>The past is a memory trace appearing now. The future is a simulation appearing now. Reality is only ever this.</p>
                            <p class="data-point"><strong>Mental Cue:</strong> "Begin again." (No matter how distracted you were a second ago, you can fully reset your attention to the present moment right now. Do this a thousand times a day if necessary.)</p>
                        </div>

                        <div class="drill-card">
                            <h4>Surviving the Cold Night (Pain vs. Suffering)</h4>
                            <p><strong>Use when:</strong> You are shivering at 3 AM, soaked, and convinced you cannot endure it.</p>
                            <p>Pain is the physical sensation of cold thermoreceptors firing. Suffering is the mental narrative: "I hate this. This will never end. I'm miserable." The narrative is optional.</p>
                            <p><strong>The Practice:</strong> Stop fighting the cold. Drop your mental resistance to it. Locate the raw sensation of shivering in your body. What is its exact texture? Is it vibrating? Is it stinging?</p>
                            <p class="data-point"><strong>Mental Cue:</strong> "It is just sensation. It is not 'me.'"</p>
                        </div>

                        <div class="drill-card">
                            <h4>Managing Hunger Pangs</h4>
                            <p><strong>Use when:</strong> The craving for food is dominating your thoughts.</p>
                            <p>Hunger is a loud biological alarm bell. But like the cold, it is just a pattern of energy in the body—a hollowing in the stomach, a tightness in the throat.</p>
                            <p><strong>The Practice:</strong> Instead of fantasizing about a burger (which only increases suffering), turn your attention directly toward the physical feeling of hunger. Investigate it with curiosity rather than resentment.</p>
                            <p class="data-point"><strong>Mental Cue:</strong> "Feel the raw data of the hunger, without the story."</p>
                        </div>

                        <div class="drill-card">
                            <h4>Pre-Tribal Council Paranoia</h4>
                            <p><strong>Use when:</strong> Your mind is racing with scenarios of being voted out, and anxiety is spiking.</p>
                            <p>Anxiety is just fear spread thinly over time. You are mistaking your catastrophic thoughts for reality. A thought saying "I am going home tonight" is no more "true" than a thought saying "I am a purple elephant." They are both just appearances in consciousness.</p>
                            <p><strong>The Practice:</strong> Take a step back in your mind. Watch the anxious thoughts arise like bubbles in boiling water. Do not pop the bubbles; just watch them rise and disappear on their own.</p>
                            <p class="data-point"><strong>Mental Cue:</strong> "I am not the voice in my head. I am the space in which the voice is talking."</p>
                        </div>

                        <div class="drill-card">
                            <h4>Emotional Crashes (Homesickness/Betrayal)</h4>
                            <p><strong>Use when:</strong> You are hit by a wave of sadness, guilt, or anger.</p>
                            <p>Emotions are physiological events that usually last only 90 seconds unless we refuel them with ruminating thoughts.</p>
                            <p><strong>The Practice:</strong> Get out of your head and into your body. Where do you feel the sadness physically? Is it heaviness in the chest? Heat behind the eyes? Anchor your attention to that physical spot until the intensity fades.</p>
                            <p class="data-point"><strong>Mental Cue:</strong> "This is a weather pattern passing through the mind. Let it rain without drowning in it."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const ftcGuideContent = `
        <div class="theme-neon-bright ftc-container">
            <!-- Header Area -->
            <div class="ftc-headline-area">
                <h2>The Survivor Winner's Compendium: Mastering the Final Tribal Council</h2>
                <p class="ftc-subtext">This section contains the two essential ideas—the Rhetorical Blueprint for structure, and the Winner's Narrative for content—followed by two case studies demonstrating how champions apply these rules to secure the million-dollar prize.</p>
            </div>

            <!-- Card 1: Structure & Content -->
            <div class="ftc-card">
                <div class="ftc-card-title">
                    <h3>Final Tribal Council Speech Structure</h3>
                    <p>Success at the Final Tribal Council (FTC) requires combining a clear structure (The Rhetorical Blueprint) with a compelling theme (The Winner’s Narrative).</p>
                </div>

                <div class="ftc-split-layout">
                    <!-- Left: Structure -->
                    <div class="ftc-col accent-structure">
                        <h4>The Rhetorical Blueprint (The Structure)</h4>
                        <p>This is the required three-part framework for your opening statement, ensuring you address every angle of your game:</p>

                        <p><strong>The Strategic Case ("What I Did"):</strong> Outline your entire game trajectory with Intentionality. Identify key alliances, critical votes, and idol plays to establish yourself as the active competitor.</p>

                        <p><strong>The Social Case ("How I Managed You"):</strong> Address the emotional reality of the game. Acknowledge betrayal, reframe negative reputations, and secure respect by demonstrating superior social intelligence.</p>

                        <p><strong>The Closing Case ("Why Me Now"):</strong> Isolate and highlight your Endgame Moves (post-Final 6) to prove you engineered the final result.</p>
                    </div>

                    <!-- Right: Content -->
                    <div class="ftc-col accent-narrative">
                        <h4>The Winner's Narrative (The Content)</h4>
                        <p>This is the thematic lens you apply to your story to overcome jury resentment and spin flaws into strategic assets:</p>

                        <p><strong>Ruthlessness as Necessary Competence.</strong> Own the lies, but pivot immediately to the strategic benefit, asking the jury to reward effectiveness over ethical consistency.</p>

                        <p><strong>Reframe Physical Weakness as Superior Social Cunning.</strong> Argue that being underestimated was a deliberate social strategy, asking the jury to reward the master manipulator over the athlete.</p>
                    </div>
                </div>
            </div>

            <!-- Card 2: Case Studies -->
            <div class="ftc-card">
                <div class="ftc-card-title">
                    <h3>Case Study: The FTC Legends</h3>
                </div>

                <div class="ftc-split-layout">
                    <!-- Left: Todd Herzog -->
                    <div class="ftc-col accent-todd">
                        <h4>The FTC GOAT: How Todd Herzog Mastered the Jury and Bagged the Million</h4>
                        <p>If you want to know how to win Survivor, you don't look at the challenge beasts—you look at the Final Tribal Council (FTC) legends. And leading the pack is Todd Herzog from Survivor: China. Todd didn't just win; he gave a masterclass in reading the room, owning his ruthless game, and delivering one of the most persuasive final speeches ever.</p>
                        <p>He didn't just survive to the end, he designed it. Here’s the breakdown of how the little flight attendant slayed the jury with pure charisma and strategic truth bombs.</p>

                        <p><strong>The Todd Model: Ruthlessness is Just Competence</strong><br>
                        Todd knew the jury was bitter. He had lied, flipped, and generally played a cutthroat game. But instead of apologizing for being a player, he apologized for the pain it caused, and then immediately pivoted to the strategic genius of the move.</p>

                        <p><strong>His Winning Narrative: "I am a liar, but only because I am a better player than you."</strong><br>
                        When he faced a question about betrayal, he didn't mince words. He acknowledged the hurt feelings, made eye contact, and then explained that the very act of betraying them was a testament to his necessary, calculated strategy. He was telling the jury: "You're smart enough to recognize a million-dollar move, even if it cost you the game." By treating them like intelligent competitors, he earned their respect back.</p>

                        <p><strong>The Rhetorical Blueprint in Action</strong><br>
                        Todd’s speech was perfectly structured to leave no doubt about his control:</p>
                        <p><strong>The Strategic Case:</strong> He didn't wait for questions; he laid out his entire plan first. He explained his initial alliance, the shift at the merge, and how he controlled the numbers without ever seeming too dominant. He framed his gameplay as a flawless chain of intentional decisions.</p>
                        <p><strong>The Social Case:</strong> When Jean-Robert criticized his passive attitude around camp, Todd didn't get defensive. He calmly explained that he was managing Jean-Robert's volatility as part of his strategy. He turned a social flaw into proof of social skill. It was a surgical strike showing he understood the personal dynamics better than anyone else.</p>
                        <p><strong>The Endgame Moves:</strong> He hammered home the Final 4 Tribal Council—when he, Amanda, and Denise blindsided James (with James sitting on two unused idols!). This proved he was the one actively engineering the end game, not just riding along.</p>

                        <p><strong>The Human Key: A Moment of Vulnerability</strong><br>
                        The final piece of Todd's winning formula was injecting genuine emotion. He spoke about his deep desire to win and the immense pressure he felt, even shedding a few tears. This was crucial: by being briefly vulnerable, he reminded the jury that behind the ruthless strategy was a person playing for their dreams. This human moment gave the bitter jurors the permission they needed to cast their vote for the strategic genius, and not just the manipulator.</p>

                        <p>Watch the genius at work below. This is the gold standard for how to win the jury:</p>

                        <div class="ftc-video-container">
                            <iframe src="https://www.youtube.com/embed/5FXF23mz_4o?si=5R0bjviecM8McXuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                        <p><strong>The Takeaway:</strong> If you make it to the end, don't beg. Don't hide. Own your game. Look every single juror in the eye and prove that you played a better game than they did. That's the Todd Herzog way.</p>
                    </div>

                    <!-- Right: Adam Klein -->
                    <div class="ftc-col accent-adam">
                        <h4>The Emotional Sweep: How Adam Klein Turned Paranoia into a Perfect 10-0-0</h4>
                        <p>If Todd Herzog is the master of the strategic flip, Adam Klein (Survivor: Millennials vs. Gen X) is the master of the emotional clean sweep. Adam's gameplay was often messy, frantic, and paranoid, yet he walked away with a unanimous 10-0-0 victory. How? He used the Rhetorical Blueprint to clean up the strategic chaos and connect with the jury's deepest sympathies.</p>

                        <p><strong>The Adam Model: Intentionality Over Chaos</strong><br>
                        Adam didn't pretend his game was flawless. Instead, he owned his paranoia and reframed it as necessary vigilance. His strategy wasn't to deny the mess, but to justify it as a function of the pressure he felt and the chaotic environment.</p>

                        <p><strong>His Winning Narrative: "My chaos was a reflection of how hard I fought, not how poorly I played."</strong><br>
                        He needed the jury to look past the Millennial flailing and see the competitor fighting for the highest stakes.</p>

                        <p><strong>The Rhetorical Blueprint in Action</strong><br>
                        Adam's speech was designed to validate his strategy while connecting his personal life to the game's stakes:</p>

                        <p><strong>The Strategic Case:</strong> Adam didn't let the jury focus on his errors. He highlighted his proactive hunt for advantages and his perfect Idol play on Hannah. This demonstrated that his frantic energy was actually strategic aggression—he was playing the game the season demanded. He showed he was driving the car, even if he was swerving.</p>

                        <p><strong>The Social Case:</strong> Adam secured a crucial vote by being honest about his betrayal of his closest ally, Taylor. He took ownership but explained it was the strategic necessity of the moment. Furthermore, he used his reputation for being emotional not as a flaw, but as a symptom of the immense pressure he felt, demonstrating humility and relatability.</p>

                        <p><strong>The Closing Case:</strong> Adam secured his spot with two major endgame moves: winning the Final Immunity Challenge and expertly cutting the biggest threat, David. He showed he deserved to be there on merit. The true final move, however, was his emotional closer. He revealed his mother's battle with cancer, tying his fight for the million dollars to her fight for life. This emotional climax gave the jury a compelling, genuine reason to reward him, transcending gameplay and resulting in the clean sweep.</p>

                        <p><strong>The Takeaway:</strong> If your game is chaotic, control the narrative. Use honesty and humility to disarm the jury, and give them a meaningful, human reason to reward your strategic fight. That's the Adam Klein way.</p>
                        
                        <p><strong>WATCH BELOW:</strong> This video counts down the top 10 final tribal council performances in the history of Survivor(their opinion not mine.) based on difficulty, success, and entertainment value </p>
                        
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mRsxIpKA6C0?si=HX8yVMbuybNvIYlT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
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

            <!-- Case Study 3: Kass -->
            <div class="case-study-card">
                <h2>Case Study: The "Endurance Hacker" Approach</h2>
                <img src="assets/kass.jpeg" alt="Kass - Survivor Quebec" class="case-study-img">
                <p><strong>Subject:</strong> Kassandre "Kass" Bastarache (Survivor Québec Season 2)<br>
                <strong>Core Philosophy:</strong> "Comfort in Discomfort." Kass transitioned from an alternate (backup) for Season 1 to a finalist in Season 2 by training her mind to normalize suffering.</p>

                <h3 class="neon-orange">I. PHYSICAL CONDITIONING (THE MICRO-GOAL STRATEGY)</h3>
                <p><strong>Objective:</strong> Win individual immunity by outlasting physically stronger opponents through mental framing.</p>
                <ul>
                    <li><strong>The "One More Second" Hack:</strong> In endurance challenges (like the crucifix hold), Kass didn't try to hold on "forever." She trained her mind to focus only on the next person to drop. Her strategy was: "I don't need to stay up; I just need to stay up longer than that person." This prevented the mental overwhelm of the long haul.</li>
                    <li><strong>Static Strength:</strong> She focused on "statue" training—holding uncomfortable positions for extended periods to build the specific stabilizer muscles needed for the post-merge "pain" challenges.</li>
                </ul>

                <h3 class="neon-orange">II. MENTAL HARDENING (THE "ALTERNATE" ADVANTAGE)</h3>
                <p><strong>Objective:</strong> Remove the "Culture Shock" of island life.</p>
                <ul>
                    <li><strong>The "Long Game" Prep:</strong> Being cut from the Season 1 cast at the last minute gave her a full extra year to prepare. She used this to mentally "move in" to the island before she arrived.</li>
                    <li><strong>Normalization of Misery:</strong> While other players complained about the rain and sleeping on bamboo, Kass framed these conditions as her "new normal." By deciding early that "leaves are my bed" and "coconuts are my dinner," she avoided the morale dips that ruined other players' social games.</li>
                </ul>

                <h3 class="neon-orange">III. STRATEGIC POSITIONING (THE "SOCIAL GLUE")</h3>
                <p><strong>Objective:</strong> Be too valuable to eliminate.</p>
                <ul>
                    <li><strong>The "Shield" Alliance:</strong> Kass aligned herself with a high-profile physical threat (Ghyslain). Unlike others who wanted to cut the "big dog," she used him as a shield, knowing he would always be a bigger target than her until the very end.</li>
                    <li><strong>Active Listening:</strong> She focused on information gathering. By being the person who listened to everyone's paranoia without spreading it, she maintained relationships with people even as she voted them out.</li>
                </ul>
            </div>

            <!-- Case Study 4: Cochran -->
            <div class="case-study-card">
                <h2>Case Study: The "Thesis Defense" Approach</h2>
                <img src="assets/cochran.jpeg" alt="John Cochran" class="case-study-img">
                <p><strong>Subject:</strong> John Cochran (Winner, Survivor: Caramoan)<br>
                <strong>Core Philosophy:</strong> "The Academic Metamorphosis." Cochran transitioned from a trembling, anxious fan (South Pacific) to a confident operator (Caramoan) by treating the game as a sociological thesis that needed to be proven.</p>

                <h3 class="neon-blue">I. INTELLECTUAL PREPARATION (THE HARVARD PROTOCOL)</h3>
                <p><strong>Objective:</strong> Solve the "Jury Problem" before the game starts.</p>
                <ul>
                    <li><strong>The Harvard Paper:</strong> While at Harvard Law School, Cochran wrote a prize-winning paper titled "The Survivor Jury: Reflections on its Theory and Practice."</li>
                    <li><strong>The Insight:</strong> He mathematically and sociologically analyzed why juries vote the way they do. His conclusion was that juries do not vote for the "nicest" person; they vote for the person who demonstrated the most agency.</li>
                </ul>

                <h3 class="neon-blue">II. SOCIAL ENGINEERING (WEAPONIZED VULNERABILITY)</h3>
                <p><strong>Objective:</strong> Use "Weakness" to lower threat level.</p>
                <ul>
                    <li><strong>Self-Deprecation as a Shield:</strong> Cochran prepared to use humor and self-insults ("I'm sunburnt," "I'm uncoordinated") to disarm aggressive players. By verbally pointing out his own flaws before others could, he made himself impossible to bully and non-threatening to keep around.</li>
                    <li><strong>The "Therapist" Role:</strong> He realized in his first season he was too needy. For his winning season, he flipped the dynamic. He prepared to be the "calm center" that erratic players (like Brandon Hantz or Phillip Sheppard) relied on for stability, making him the neck that turned the head.</li>
                </ul>

                <h3 class="neon-blue">III. PHYSICAL ADAPTATION (THE "NOT-A-LIABILITY" PIVOT)</h3>
                <p><strong>Objective:</strong> Improve just enough to survive the pre-merge, then rely on specific "oddball" mechanics.</p>
                <ul>
                    <li><strong>Targeted Improvement:</strong> He didn't try to become a weightlifter. He focused on swimming and balance. By ensuring he wasn't the worst person on the tribe physically, he removed the easy justification for voting him out early.</li>
                    <li><strong>The "Gross Food" Prep:</strong> He mentally prepared for the "willpower" challenges. His immunity win in the gross food eating challenge wasn't about stomach capacity; it was about the mental preparation to suppress the gag reflex, viewing food simply as "fuel to win immunity."</li>
                </ul>
            </div>
        </div>
    `;

    const usaVsQcContent = `
        <div class="usa-qc-container">
            <header class="usa-qc-header">
                <h2>Day 1: USA vs. QC</h2>
                <p class="usa-qc-subheading">Below are two side-by-side articles detailing the distinct strategic environments and Day 1 priorities for contestants on Survivor USA (Modern Era) and Survivor Québec (Franchise Launch).</p>
            </header>

            <!-- Row 1: Blueprint Intro -->
            <div class="usa-qc-row">
                <div class="usa-qc-col col-usa">
                    <h3>Survivor USA (Modern Era): Day 1 Strategic Blueprint</h3>
                    <p>The strategic landscape of Day 1 in modern Survivor USA is defined by high-stakes competition, complex twists, and a relentless focus on navigating non-survival variables.</p>
                </div>
                <div class="usa-qc-col col-qc">
                    <h3>Survivor Québec: Day 1 Strategic Blueprint</h3>
                    <p>The strategic landscape of Day 1 in Survivor Québec is defined by a commitment to the "old school" format, emphasizing visible contribution to survival and authentic social bonding within a larger group.</p>
                </div>
            </div>

            <!-- Row 2: Section I -->
            <div class="usa-qc-row">
                <div class="usa-qc-col col-usa">
                    <h4>I. The Initial Descent: Twist-Driven Competition</h4>
                    <p>The modern Survivor USA marooning is no longer a simple scramble; it is a high-stakes, twist-laden Reward/Immunity Challenge. The objective is to win to avoid Tribal Council and secure essential resources like flint and a pot. The strategic focus shifts immediately to competitive success and avoiding the perception of weakness.</p>
                    <p><strong>Strategic Goal:</strong> Winning the challenge secures vital social capital and narrative control, establishing the tribe as competent. However, the long-term, purely existential value of the win is reduced since production guarantees flint by Day 3. The risk of early dominance is immediate target designation.</p>
                    <p><strong>Cognitive Load:</strong> High. Players must immediately dedicate mental energy to deciphering complex twists and searching for Hidden Immunity Idols or Advantages, which are highly likely to be present immediately upon arrival.</p>
                    <p><strong>Tribe Size:</strong> Typically 6-9 players, often subject to immediate swaps or small tribe dynamics, which demands rapid relationship solidification.</p>
                </div>
                <div class="usa-qc-col col-qc">
                    <h4>I. The Initial Descent: Resource-Driven Survival</h4>
                    <p>The Survivor Québec marooning utilized an "old school" resource scramble mechanic. Tribes of 10 collected as many supplies as possible from a boat within a time limit. The focus is on immediate resource management and the visible demonstration of collective coordination.</p>
                    <p><strong>Strategic Goal:</strong> Maximize the acquisition of resources to immediately offset deprivation. The extended focus on camp life makes demonstrable physical utility and effort in the scramble an essential protective shield against early elimination.</p>
                    <p><strong>Cognitive Load:</strong> Reduced. The documented absence of Idols or Advantages in the premiere allows players to dedicate 100% of their mental energy to fundamental social bonding and physical survival essentials. There is no need to prioritize a search.</p>
                    <p><strong>Tribe Size:</strong> Two larger tribes (10 players each), delaying individual exposure but requiring quicker assimilation into a larger majority structure (4-5 members).</p>
                </div>
            </div>

            <!-- Row 3: Section II -->
            <div class="usa-qc-row">
                <div class="usa-qc-col col-usa">
                    <h4>II. Camp Life & Production Management</h4>
                    <p><strong>Camp Life Visibility:</strong> Detailed camp life scenes (shelter building, fire-making) are often minimized or heavily edited out to prioritize airtime for twists and strategic maneuvering. Physical utility is a lower strategic currency than strategic acumen.</p>
                    <p><strong>Production Constraints:</strong> Contestants must manage the close proximity of the camera crew. The movement of the crew acts as a visual signal that strategic activity (e.g., idol hunting) is occurring, making truly subtle strategy exceptionally difficult.</p>
                    <p><strong>Confessional Strategy:</strong> Producers often ask pointed, directional questions. Players must use this information as intelligence, inferring what dynamics other tribemates are discussing and what the producers view as central to the narrative. Control the narrative brand from minute one.</p>
                </div>
                <div class="usa-qc-col col-qc">
                    <h4>II. Camp Life & Production Management</h4>
                    <p><strong>Camp Life Visibility:</strong> Extended runtime is dedicated to camp life and relationship dynamics. This maximizes a contestant's visibility, making demonstrated competence in fire-making and shelter construction a high-priority strategic asset (higher currency than in modern USA).</p>
                    <p><strong>Production Constraints:</strong> The "no-wall rule" for shelters is enforced for camera access, forcing players to endure exposure. This accelerates bonding and conflict. Contestants should integrate the crew's presence into their strategy to leverage the need for isolated walks (for confessionals) as a cover for scouting or decompression.</p>
                    <p><strong>Confessional Strategy:</strong> Treat the Day 1 interview as a critical press conference. The answers define the initial edited narrative. All statements must reinforce the desired strategic brand (e.g., collaborative, competent) to avoid accidental negative portrayal.</p>
                </div>
            </div>

            <!-- Row 4: Section III -->
            <div class="usa-qc-row">
                <div class="usa-qc-col col-usa">
                    <h4>III. Alliance Dynamics & Psychological Risk</h4>
                    <p><strong>Alliance Formation:</strong> The mandate is to immediately "Create an alliance of 4 in your tribe as soon as the game starts." These Day 1 bonds are primarily a numerical risk-mitigation shield against the first vote, acknowledging the high volatility and lack of developed trust metrics.</p>
                    <p><strong>Assertive Behavior Risk:</strong> High. Players who are overly aggressive or direction-giving—like the "bossy" archetype—become immediate targets. This accelerated targeting is a direct result of acquiring negative social capital, regardless of physical strength.</p>
                    <p><strong>Vulnerability Paradox:</strong> Day 1 oversharing or "trauma dumping" (excessive personal disclosure) is often misinterpreted by tribemates as a manipulative tactic to garner sympathy or "pull focus," increasing the risk of targeting.</p>
                </div>
                <div class="usa-qc-col col-qc">
                    <h4>III. Alliance Dynamics & Psychological Risk</h4>
                    <p><strong>Alliance Formation:</strong> Secure a Day 1 majority alliance (4-5 members) to mitigate the first vote risk. The extended focus on relationships in SQ suggests that establishing authenticity is an enhanced currency over immediate, highly manufactured strategic maneuvering.</p>
                    <p><strong>Assertive Behavior Risk:</strong> High. The "older guy who makes himself a target by declaring himself the tribe leader" is a common SQ archetype to avoid. The strategic imperative is to Lead Collaboratively, demonstrating competence in survival skills (fire, shelter) rather than attempting to enforce authority.</p>
                    <p><strong>Vulnerability Paradox:</strong> Emotional connection is valuable for rapport, but Day 1 personal vulnerability must be measured and controlled. Oversharing high-trauma backstories should be strictly avoided to foster genuine connections without triggering the perception of strategic manipulation.</p>
                </div>
            </div>
        </div>
    `;

    const historyContent = `
        <div class="constellation-header">
            <h2>SURVIVOR QUÉBEC</h2>
            <h3>EVOLUTION OF THE METAGAME</h3>
            <p>A chronological analysis of how the game has mutated from Season 1 to the present.</p>
        </div>
        <div class="constellation-timeline">
            <!-- Season 1 -->
            <div class="timeline-item left">
                <div class="timeline-content">
                    <div class="year">2023</div>
                    <h2>SEASON 1: THE FOUNDATION</h2>
                    <div class="winner">Winner: Nicolas Brunette</div>

                    <h3 class="meta-title">The Meta: Consensus & Politeness.</h3>
                    <p>Defined by the "Social Contract." Big moves were frowned upon. The game was played respectfully.</p>

                    <div class="key-mechanic">
                        <strong>KEY MECHANIC: Redemption Island</strong>
                        <p>Created a "Poisoned Jury" and allowed a win via a "Warrior/Resilience" narrative rather than social manipulation.</p>
                    </div>
                </div>
            </div>

            <!-- Season 2 -->
            <div class="timeline-item right">
                <div class="timeline-content">
                    <div class="year">2024</div>
                    <h2>SEASON 2: ECONOMIC WAR</h2>
                    <div class="winner">Winner: Ghyslain O.P.</div>

                    <h3 class="meta-title">The Meta: Control & Physics.</h3>
                    <p>A shift to resource management. Alliances were rigid, and physical threats dominated by grouping together.</p>

                    <div class="key-mechanic">
                        <strong>KEY MECHANIC: The Store (Magasin)</strong>
                        <p>Buying food allowed "Challenge Beasts" to fuel up and win immunity, breaking the game balance.</p>
                    </div>
                </div>
            </div>

            <!-- Season 3 -->
            <div class="timeline-item left">
                <div class="timeline-content">
                    <div class="year">2025</div>
                    <h2>SEASON 3: HYPER-VARIANCE</h2>
                    <div class="winner">Winner: Geneviève La Haye</div>

                    <h3 class="meta-title">The Meta: Chaos Management.</h3>
                    <p>Agency was stripped. Adaptability replaced planning. The "Quiet Strategist" defeated the "Loud Players."</p>

                    <div class="key-mechanic">
                        <strong>KEY MECHANIC: Linked Destinies</strong>
                        <p>Random pairs forced cooperation with enemies and punished strong players tied to weak ones.</p>
                    </div>
                </div>
            </div>

            <!-- Future -->
            <div class="timeline-item right forecast">
                <div class="timeline-content forecast-card">
                    <div class="year-future">FORECAST // FUTURE</div>
                    <h2>SEASON 4: PANAMA</h2>

                    <ul class="forecast-list">
                        <li>➤ <strong>Return of Exile?</strong> Panama is historically linked to Exile Island. Expect isolation mechanics.</li>
                        <li>➤ <strong>The "Geneviève Effect":</strong> Players will be scared of the quiet, social woman. Expect an over-correction targeting low-key players.</li>
                        <li>➤ <strong>Casting Evolution:</strong> A shift from "Average Joes" to studied "Gamers."</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    // --- Jury Management Content (Dynamic Generation) ---
    const jurors = [
        {
            id: 1,
            age: 34,
            gender: "Male",
            ethnicity: "Caucasian",
            education: "Masters",
            occupation: "Teacher",
            political: "Liberal",
            religious: "Catholic"
        },
        {
            id: 2,
            age: 27,
            gender: "Female",
            ethnicity: "Asian",
            education: "Bachelors",
            occupation: "Nurse",
            political: "Conservative",
            religious: "Agnostic"
        },
        {
            id: 3,
            age: 45,
            gender: "Male",
            ethnicity: "Black",
            education: "Trade School",
            occupation: "Carpenter",
            political: "Independent",
            religious: "Baptist"
        },
        {
            id: 4,
            age: 22,
            gender: "Female",
            ethnicity: "Latina",
            education: "Student",
            occupation: "Waitress",
            political: "Liberal",
            religious: "Catholic"
        },
        {
            id: 5,
            age: 55,
            gender: "Male",
            ethnicity: "Caucasian",
            education: "PhD",
            occupation: "Professor",
            political: "Libertarian",
            religious: "Atheist"
        },
        {
            id: 6,
            age: 40,
            gender: "Female",
            ethnicity: "Caucasian",
            education: "Bachelors",
            occupation: "Manager",
            political: "Conservative",
            religious: "Christian"
        },
         {
            id: 7,
            age: 30,
            gender: "Male",
            ethnicity: "Mixed",
            education: "Masters",
            occupation: "Engineer",
            political: "Moderate",
            religious: "None"
        }
    ];

    function generateJuryContent() {
        let html = `
        <div class="jury-container">
            <header class="jury-header">
                <h2>JURY SELECTION PROTOCOL</h2>
                <div class="jury-meta">
                    <span>STATUS: PENDING</span>
                    <span>//</span>
                    <span>TARGETS: ACQUIRE</span>
                </div>
            </header>
            <div class="jury-grid">
        `;

        jurors.forEach(juror => {
            html += `
            <div class="jury-card" data-juror-id="${juror.id}">
                <div class="jury-card-header">
                    <h3>JUROR ${juror.id}</h3>
                    <div class="jury-id-badge">#${String(juror.id).padStart(3, '0')}</div>
                </div>
                <div class="jury-attributes">
                    <div class="attr-row"><span class="attr-label">Age:</span> <span class="attr-val">${juror.age}</span></div>
                    <div class="attr-row"><span class="attr-label">Gender:</span> <span class="attr-val">${juror.gender}</span></div>
                    <div class="attr-row"><span class="attr-label">Ethnicity:</span> <span class="attr-val">${juror.ethnicity}</span></div>
                    <div class="attr-row"><span class="attr-label">Education:</span> <span class="attr-val">${juror.education}</span></div>
                    <div class="attr-row"><span class="attr-label">Occupation:</span> <span class="attr-val">${juror.occupation}</span></div>
                    <div class="attr-row"><span class="attr-label">Political:</span> <span class="attr-val">${juror.political}</span></div>
                    <div class="attr-row"><span class="attr-label">Religious:</span> <span class="attr-val">${juror.religious}</span></div>
                </div>
                <div class="jury-actions">
                    <button class="jury-btn-select" data-action="select">SELECT</button>
                    <button class="jury-btn-reject" data-action="reject">REJECT</button>
                </div>
            </div>
            `;
        });

        html += `</div></div>`;
        return html;
    }

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
            } else if (contentId === 'history-qc') {
                modalTitle.style.display = 'none';
                modalText.innerHTML = historyContent;
            } else if (contentId === 'usa-vs-qc') {
                modalTitle.style.display = 'none';
                modalText.innerHTML = usaVsQcContent;
            } else if (contentId === 'ftc-guide') {
                modalTitle.style.display = 'none';
                modalText.innerHTML = ftcGuideContent;
            } else if (contentId === 'jury-management') {
                modalTitle.style.display = 'none';
                modalText.innerHTML = generateJuryContent();
            } else if (contentId === 'mindfulness') {
                modalTitle.style.display = 'none';
                modalText.innerHTML = mindfulnessContent;
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
        modalText.innerHTML = item.content; // This is where the deep content goes

        // Custom Title Visibility
        if (item.title === "Shelter") {
            modalTitle.style.display = 'none';
        } else {
            modalTitle.style.display = 'block';
        }

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

    // --- Global Event Listener for Dossier Tabs ---
    document.addEventListener('click', (e) => {
        if (e.target.matches('.dossier-tab-btn')) {
            const btn = e.target;
            const tabId = btn.getAttribute('data-tab');

            // Find parent dossier container
            const dossier = btn.closest('.dossier-container');
            if (!dossier) return;

            // Handle Buttons
            dossier.querySelectorAll('.dossier-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Handle Panes
            dossier.querySelectorAll('.dossier-tab-pane').forEach(pane => pane.classList.remove('active'));
            const targetPane = dossier.querySelector(`#${tabId}`);
            if (targetPane) targetPane.classList.add('active');
        }
    });

    // --- Global Event Listener for Jury Buttons ---
    document.addEventListener('click', (e) => {
        if (e.target.matches('.jury-btn-select') || e.target.matches('.jury-btn-reject')) {
            const btn = e.target;
            const card = btn.closest('.jury-card');
            const action = btn.getAttribute('data-action');

            if (action === 'select') {
                if (card.classList.contains('selected')) {
                     // Toggle off
                     card.classList.remove('selected');
                } else {
                    // Turn on, turn off reject
                    card.classList.remove('rejected');
                    card.classList.add('selected');
                }
            } else if (action === 'reject') {
                if (card.classList.contains('rejected')) {
                    // Toggle off
                    card.classList.remove('rejected');
                } else {
                    // Turn on, turn off select
                    card.classList.remove('selected');
                    card.classList.add('rejected');
                }
            }
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

// --- PUZZLE HTML CONTENT (Injected via Append for cleaner diff) ---
// Note: This logic will be integrated into the main pillarsData structure below.

const slidePuzzleHTML = `
<div class="puzzle-dossier">
    <header class="puzzle-header">
        <h1>Outwit. Outplay. Outslide.</h1>
        <p>The definitive algorithm for solving Survivor slide puzzles without "chasing" pieces.</p>
    </header>

    <div class="puzzle-section">
        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-green);">
            <h2 class="text-green">The Golden Rule</h2>
            <div class="puzzle-grid-2" style="align-items: center;">
                <div>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem;">Most players fail because they try to solve the whole puzzle at once. <span class="text-accent font-bold">Never do this.</span></p>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;"><span class="text-green">✔</span> Solve <strong>Row by Row</strong> from the top down.</li>
                        <li style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;"><span class="text-green">✔</span> Once a row is locked, <strong>never touch it again</strong>.</li>
                        <li style="display: flex; gap: 0.5rem;"><span class="text-green">✔</span> When only 2 rows remain, switch to <strong>Column by Column</strong>.</li>
                    </ul>
                </div>
                <div style="background-color: #0f172a; padding: 1rem; border-radius: 8px;">
                     <div class="puzzle-grid-visual">
                        <div class="puzzle-piece solved">1</div><div class="puzzle-piece solved">2</div><div class="puzzle-piece solved">3</div><div class="puzzle-piece solved">4</div>
                        <div class="puzzle-piece solved">5</div><div class="puzzle-piece solved">6</div><div class="puzzle-piece solved">7</div><div class="puzzle-piece solved">8</div>
                        <div class="puzzle-piece">9</div><div class="puzzle-piece">10</div><div class="puzzle-piece">11</div><div class="puzzle-piece">12</div>
                        <div class="puzzle-piece">13</div><div class="puzzle-piece">14</div><div class="puzzle-piece">15</div><div class="puzzle-piece empty"></div>
                    </div>
                    <p style="text-align: center; font-size: 0.75rem; color: #64748b; margin-top: 0.5rem;">Target State: Top Rows Locked</p>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">1</div>
            <h2>Phase 1: The "Row" Method</h2>
        </div>

        <div class="puzzle-grid-2">
            <div class="puzzle-card">
                <h3 class="text-accent">Step A: The Easy Pieces</h3>
                <p class="text-slate-300" style="margin-bottom: 1rem;">Slide the first pieces of the row into place simply by moving them. Do this until you are left with only the <strong>last two pieces</strong> of that row.</p>
                <div class="puzzle-card-dark">
                    <p class="text-slate-400 mono" style="font-size: 0.875rem; margin-bottom: 0.5rem;">Example (4x4 Grid):</p>
                    <p>Place <span class="text-green font-bold">#1</span> and <span class="text-green font-bold">#2</span>. <br>Stop. You now need to place #3 and #4.</p>
                </div>
            </div>

            <div class="puzzle-card" style="border: 2px solid rgba(245, 158, 11, 0.3);">
                <h3 class="text-accent" style="display: flex; align-items: center; gap: 0.5rem;">Step B: The "Corner Train" <span style="font-size: 0.75rem; background-color: #dc2626; color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">CRITICAL</span></h3>
                <p class="text-slate-300" style="margin-bottom: 1rem;"><strong>90% of players fail here.</strong> You cannot slide the last piece directly into the corner. You must build a "Train."</p>

                <div style="display: flex; gap: 1rem; flex-direction: column;">
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <div class="puzzle-grid-visual" style="width: 120px; gap: 2px;">
                            <div class="puzzle-piece solved" style="font-size: 0.75rem;">1</div><div class="puzzle-piece solved" style="font-size: 0.75rem;">2</div><div class="puzzle-piece empty" style="font-size: 0.75rem;"></div><div class="puzzle-piece target" style="font-size: 0.75rem;">3</div>
                            <div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;"></div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;"></div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;"></div><div class="puzzle-piece target" style="font-size: 0.75rem;">4</div>
                        </div>
                        <div style="font-size: 0.875rem; color: #cbd5e1;">
                            <strong class="text-accent" style="display: block; margin-bottom: 0.25rem;">The Setup:</strong>
                            1. Put <span class="text-white font-bold">#3</span> in Top-Right.<br>
                            2. Put <span class="text-white font-bold">#4</span> directly under it.
                        </div>
                    </div>

                    <div style="display: flex; gap: 1rem; align-items: center;">
                         <div class="puzzle-grid-visual" style="width: 120px; gap: 2px;">
                            <div class="puzzle-piece solved" style="font-size: 0.75rem;">1</div><div class="puzzle-piece solved" style="font-size: 0.75rem;">2</div><div class="puzzle-piece target" style="font-size: 0.75rem;">3</div><div class="puzzle-piece target" style="font-size: 0.75rem;">4</div>
                            <div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;"></div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;"></div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;"></div><div class="puzzle-piece empty" style="font-size: 0.75rem;"></div>
                        </div>
                         <div style="font-size: 0.875rem; color: #cbd5e1;">
                            <strong class="text-green" style="display: block; margin-bottom: 0.25rem;">The Slide:</strong>
                            Slide the train (#3 then #4) into the row.<br>
                            <span class="text-green font-bold" style="font-size: 0.75rem; text-transform: uppercase;">Row Locked!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">2</div>
            <h2>Phase 2: The "Column" Method</h2>
        </div>

        <div class="puzzle-card">
            <p class="text-slate-300" style="font-size: 1.125rem; margin-bottom: 1.5rem;">This applies when you have solved all rows except the <strong>bottom two</strong>. Stop solving rows! Solve columns Left to Right.</p>

            <div class="puzzle-grid-2" style="align-items: center;">
                <div>
                    <h4 class="text-accent font-bold" style="margin-bottom: 0.5rem;">The Goal:</h4>
                    <p class="text-slate-400" style="margin-bottom: 1rem;">Pair the bottom-left piece (#13) with the one above it (#9).</p>
                    <ol style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
                        <li style="display: flex; align-items: center;"><span class="step-number">1</span> <span>Place <strong class="text-white">#9</strong> in Bottom-Left (Spot 13).</span></li>
                        <li style="display: flex; align-items: center;"><span class="step-number">2</span> <span>Place <strong class="text-white">#13</strong> to the right (Spot 14).</span></li>
                        <li style="display: flex; align-items: center;"><span class="step-number">3</span> <span><strong>The Slide:</strong> Move empty space above #9. Slide #9 Up, Slide #13 Left.</span></li>
                    </ol>
                </div>
                <div style="background-color: #0f172a; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div class="puzzle-grid-visual">
                         <div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div>
                         <div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div><div class="puzzle-piece" style="font-size: 0.75rem; opacity: 0.2;">X</div>
                         <div class="puzzle-piece empty" style="font-size: 0.75rem;"></div><div class="puzzle-piece" style="font-size: 0.75rem;">10</div><div class="puzzle-piece" style="font-size: 0.75rem;">11</div><div class="puzzle-piece" style="font-size: 0.75rem;">12</div>
                         <div class="puzzle-piece target" style="font-size: 0.75rem;">9</div><div class="puzzle-piece target" style="font-size: 0.75rem;">13</div><div class="puzzle-piece" style="font-size: 0.75rem;">14</div><div class="puzzle-piece" style="font-size: 0.75rem;">15</div>
                    </div>
                     <div style="margin-top: 1rem; font-family: monospace; font-size: 0.75rem; color: var(--survivor-accent);">
                        ^ Slide Up ^<br>< Slide Left
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">3</div>
            <h2>Phase 3: The Merry-Go-Round</h2>
        </div>

        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-accent);">
            <p class="text-slate-300" style="margin-bottom: 1rem;">You are down to a 2x2 or 2x3 square. <strong>Do not try to place individual pieces.</strong></p>
            <div class="puzzle-grid-2">
                <div>
                    <h3 class="text-white font-bold">The Strategy</h3>
                    <p class="text-slate-400">Simply rotate the remaining pieces in a circle using the empty space. They will eventually fall into sequence.</p>
                </div>
                <div style="background-color: rgba(127, 29, 29, 0.3); border: 1px solid rgba(239, 68, 68, 0.5); padding: 1rem; border-radius: 8px;">
                    <h4 style="color: #f87171; font-weight: bold; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">⚠ The "Parity" Trap</h4>
                    <p style="font-size: 0.875rem; color: #fca5a5;">If pieces are rotated correctly but two are swapped (e.g., 14 and 15), you have a <strong>Parity Error</strong>. In Survivor, this means two identical background pieces in an earlier row are swapped. You must break the puzzle to fix it.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const verticalPuzzleHTML = `
<div class="puzzle-dossier">
    <header class="puzzle-header">
        <h1>Build. Balance. Breathe.</h1>
        <p>The protocol for Vertical Assembly and Balancing challenges.</p>
    </header>

    <div class="puzzle-section">
        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-green);">
            <h2 class="text-green">The Golden Rule</h2>
            <div class="puzzle-grid-2" style="align-items: center;">
                <div>
                    <p style="margin-bottom: 1rem; font-size: 1.125rem;">In balancing and stacking, stability starts at the <span class="text-accent font-bold">hips</span>, not the hands.</p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;"><span class="text-green">✔</span> Solve from the <strong>connection point up</strong>.</li>
                        <li style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;"><span class="text-green">✔</span> Don't just "jam" pieces. Identify the key first.</li>
                        <li style="display: flex; gap: 0.5rem;"><span class="text-green">✔</span> Lock your body. Move your core.</li>
                    </ul>
                </div>
                <div style="background-color: #0f172a; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 3rem; color: var(--survivor-accent); margin-bottom: 0.5rem;">⏏</div>
                    <p class="mono text-slate-400" style="font-size: 0.75rem;">BASE IS EVERYTHING</p>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">1</div>
            <h2>Phase 1: The "Indexing"</h2>
        </div>

        <div class="puzzle-grid-2">
            <div class="puzzle-card">
                <h3 class="text-accent">Mental Prep & Sorting</h3>
                <p class="text-slate-300" style="margin-bottom: 1rem;"><strong>Applies to Tree Puzzles.</strong> Do not grab a piece and try to "force" it.</p>
                <ol style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
                    <li style="display: flex; align-items: flex-start;"><span class="step-number">1</span> <span><strong>Scan the Pole:</strong> Identify the unique "key" (square peg, triangle, etc.).</span></li>
                    <li style="display: flex; align-items: flex-start;"><span class="step-number">2</span> <span><strong>The Naming Protocol:</strong> Give each key a one-syllable name (e.g., "Box", "Tri", "Flat").</span></li>
                    <li style="display: flex; align-items: flex-start;"><span class="step-number">3</span> <span><strong>The Sort:</strong> Run to your pile. Sort pieces into piles based on those names.</span></li>
                </ol>
            </div>

            <div class="puzzle-card" style="border: 2px solid rgba(245, 158, 11, 0.3); display: flex; flex-direction: column; justify-content: center;">
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; text-transform: uppercase; color: #94a3b8; font-weight: bold; margin-bottom: 0.5rem;">
                    <span>Amateur (Panic)</span>
                    <span>Pro (Sorted)</span>
                </div>
                <div style="display: flex; gap: 1rem; height: 100%;">
                    <div style="flex: 1; background: rgba(15, 23, 42, 0.5); padding: 1rem; border: 1px solid rgba(127, 29, 29, 0.5); display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; align-content: center; position: relative;">
                         <div class="shape-box" style="transform: rotate(12deg);"></div>
                         <div class="shape-tri" style="transform: rotate(-6deg);"></div>
                         <div class="shape-circle" style="transform: rotate(45deg);"></div>
                    </div>
                    <div style="display: flex; align-items: center; color: var(--survivor-accent);">➜</div>
                    <div style="flex: 1; background: rgba(15, 23, 42, 0.5); padding: 1rem; border: 1px solid rgba(6, 78, 59, 0.5); display: flex; gap: 0.5rem; justify-content: center;">
                        <div style="display: flex; flex-direction: column; gap: 2px; align-items: center;">
                            <div class="shape-tri"></div><div class="shape-tri"></div><div style="font-size: 0.6rem; color: #64748b;">"TRI"</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px; align-items: center;">
                             <div class="shape-box"></div><div class="shape-box"></div><div style="font-size: 0.6rem; color: #64748b;">"BOX"</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
             <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">2</div>
            <h2>Phase 2: Body Mechanics</h2>
        </div>

        <div class="puzzle-card">
            <p class="text-slate-300" style="font-size: 1.125rem; margin-bottom: 1.5rem;"><strong>The "A Bit Tipsy" Stance.</strong> Balancing blocks on a wobbly table.</p>
            <div class="puzzle-grid-2" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                <div style="background-color: #0f172a; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
                    <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">1. Tripod Base</h4>
                    <p class="text-slate-400" style="font-size: 0.875rem;">Feet shoulder-width apart. Knees bent. You are the anchor.</p>
                </div>
                 <div style="background-color: #0f172a; padding: 1rem; border-radius: 8px; border-top: 4px solid var(--survivor-accent);">
                    <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">2. The "T-Rex" Lock</h4>
                    <p class="text-slate-400" style="font-size: 0.875rem;">Pin elbows to your ribcage. Arms shake; your core does not.</p>
                </div>
                 <div style="background-color: #0f172a; padding: 1rem; border-radius: 8px; border-top: 4px solid var(--survivor-green);">
                    <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">3. Hip Drive</h4>
                    <p class="text-slate-400" style="font-size: 0.875rem;">Need to tilt the table? Don't lift arms. Tilt your hips.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
         <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">3</div>
            <h2>Phase 3: The Placement</h2>
        </div>

        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-accent);">
            <div class="puzzle-grid-2" style="align-items: center;">
                <div>
                     <h3 class="text-white font-bold">The "Release" Breath</h3>
                     <p class="text-slate-400" style="margin-bottom: 1rem;">The most dangerous moment is when you let go of the block.</p>
                     <ul style="list-style: none; padding: 0; font-size: 0.875rem;" class="text-slate-300">
                        <li style="margin-bottom: 0.5rem;">• <strong>Place:</strong> Inhale.</li>
                        <li style="margin-bottom: 0.5rem;">• <strong>Release:</strong> Exhale slowly as you pull fingers away.</li>
                        <li>• <strong>Why:</strong> Exhaling lowers heart rate for that split second.</li>
                     </ul>
                </div>
                <div style="background-color: #0f172a; height: 160px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div class="breath-circle"></div>
                    <p style="color: #64748b; font-size: 0.75rem; margin-top: 2rem;">Sync hand with breath</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const floorPuzzleHTML = `
<div class="puzzle-dossier">
    <header class="puzzle-header">
        <h1>The "Floor" Assembly</h1>
        <p>Mastering large-scale jigsaws, shapes, and logos.</p>
    </header>

    <div class="puzzle-section">
        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-green);">
            <h2 class="text-green">The Golden Rule</h2>
            <div class="puzzle-grid-2" style="align-items: center;">
                <div>
                    <p class="mono text-white" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">
                        "The <span class="text-green">CUT</span> is the Truth.<br>
                        The <span style="color: #f87171;">PAINT</span> is a Lie."
                    </p>
                    <p class="text-slate-400">The art department intentionally paints misleading lines across cuts. Ignore the picture. Trust the shape.</p>
                </div>
                <div style="background-color: #0f172a; padding: 1.5rem; border-radius: 8px; text-align: center; border: 1px solid #334155;">
                    <div style="display: flex; justify-content: center; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                        <div style="width: 2rem; height: 2rem; background: var(--survivor-green); border-radius: 2px;"></div>
                        <span style="font-size: 1.5rem; color: #64748b;">≠</span>
                        <div style="width: 2rem; height: 2rem; background: #ef4444; border-radius: 50%;"></div>
                    </div>
                    <p class="mono text-slate-400" style="font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase;">Geometry > Art</p>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">1</div>
            <h2>Phase 1: Negative Space Sweep</h2>
        </div>

        <div class="puzzle-grid-2">
            <div class="puzzle-card">
                <h3 class="text-accent">Scan the Frame, Not the Pile</h3>
                <p class="text-slate-300" style="margin-bottom: 1rem;">Most players stare at the pile of chaos. <strong>Look at the empty frame instead.</strong></p>
                <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
                     <li style="display: flex; align-items: center;"><span class="step-number">1</span> <span><strong>Scan the Border:</strong> Look at the wooden border.</span></li>
                     <li style="display: flex; align-items: center;"><span class="step-number">2</span> <span><strong>Identify "In-Cuts":</strong> Find bumps jutting <em>in</em> from the frame.</span></li>
                     <li style="display: flex; align-items: center;"><span class="step-number">3</span> <span><strong>The Match:</strong> Find pieces with matching "holes". These are <strong>Anchor Points</strong>.</span></li>
                </ul>
            </div>

            <div class="puzzle-card" style="border: 2px solid rgba(245, 158, 11, 0.3); display: flex; flex-direction: column; align-items: center; justify-content: center;">
                 <p style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; font-weight: bold; margin-bottom: 1rem; letter-spacing: 1px;">Identifying Anchor Points</p>
                 <div style="position: relative; background: #0f172a; padding: 2rem; border-radius: 8px; display: flex; align-items: center;">
                    <!-- Frame -->
                    <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 2rem; background: #334155; border-right: 2px solid var(--survivor-accent); display: flex; align-items: center;">
                        <div style="width: 0; height: 0; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-left: 20px solid var(--survivor-accent); position: absolute; right: -20px;"></div>
                    </div>
                    <!-- Piece -->
                    <div style="margin-left: 3rem; width: 5rem; height: 5rem; background: #475569; border: 1px solid #64748b; border-radius: 4px; display: flex; align-items: center; position: relative;">
                         <div style="position: absolute; left: -1px; width: 0; height: 0; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-left: 20px solid #0f172a;"></div>
                         <span style="font-size: 0.75rem; color: #94a3b8; margin-left: 1.5rem;">Piece</span>
                    </div>
                 </div>
                 <p class="mono text-accent" style="font-size: 0.75rem; margin-top: 1rem;">"In-Cut" on Frame = "Hole" on Piece</p>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
             <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">2</div>
            <h2>Phase 2: The Pizza Theory</h2>
        </div>

        <div class="puzzle-card">
            <p class="text-slate-300" style="font-size: 1.125rem; margin-bottom: 1.5rem;"><strong>For Radial/Circular Puzzles.</strong> Blur your eyes to ignore the image. Sort purely by shape geometry.</p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; text-align: center;">
                <div style="background: #0f172a; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
                    <div class="shape-container" style="margin-bottom: 1rem;"><div class="puzzle-wedge"></div></div>
                    <h4 class="text-white font-bold">The "Wedge"</h4>
                    <p class="text-slate-400" style="font-size: 0.75rem;">Pointy like a pizza slice.</p>
                    <p style="font-size: 0.875rem; color: #60a5fa; font-weight: bold; margin-top: 0.5rem;">GOES TO CENTER</p>
                </div>
                 <div style="background: #0f172a; padding: 1rem; border-radius: 8px; border-top: 4px solid var(--survivor-accent);">
                    <div class="shape-container" style="margin-bottom: 1rem;"><div class="puzzle-arc"></div></div>
                    <h4 class="text-white font-bold">The "Ring"</h4>
                    <p class="text-slate-400" style="font-size: 0.75rem;">Curved parallel sides.</p>
                    <p style="font-size: 0.875rem; color: var(--survivor-accent); font-weight: bold; margin-top: 0.5rem;">GOES TO MIDDLE</p>
                </div>
                 <div style="background: #0f172a; padding: 1rem; border-radius: 8px; border-top: 4px solid var(--survivor-green);">
                    <div class="shape-container" style="margin-bottom: 1rem;"><div class="puzzle-border"></div></div>
                    <h4 class="text-white font-bold">The "Border"</h4>
                    <p class="text-slate-400" style="font-size: 0.75rem;">Has one perfectly flat side.</p>
                    <p style="font-size: 0.875rem; color: var(--survivor-green); font-weight: bold; margin-top: 0.5rem;">GOES TO EDGE</p>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
         <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
             <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">3</div>
            <h2>Phase 3: The Skeleton Build</h2>
        </div>

        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-accent);">
            <div class="puzzle-grid-2" style="align-items: center;">
                <div>
                    <h3 class="text-white font-bold">Do Not Fill Yet</h3>
                    <p class="text-slate-400" style="margin-bottom: 1rem;">Don't try to "paint" the picture. Build the structure first.</p>
                    <ol style="list-style: none; padding: 0; font-size: 0.875rem; color: #cbd5e1;">
                         <li style="margin-bottom: 0.5rem;"><strong>1. Center Hub:</strong> Connect all the "Wedges".</li>
                         <li style="margin-bottom: 0.5rem;"><strong>2. Outer Rim:</strong> Connect "Borders" to the frame.</li>
                         <li><strong>3. The Gap Fill:</strong> "Middle Ring" pieces now have only one place to fit.</li>
                    </ol>
                </div>
                <div style="background: #0f172a; width: 12rem; height: 12rem; border-radius: 50%; border: 4px solid #334155; position: relative; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                    <!-- Rim -->
                    <div style="position: absolute; inset: 0; border: 8px solid rgba(74, 222, 128, 0.5); border-radius: 50%;"></div>
                    <div style="position: absolute; top: -1.5rem; background: #0f172a; padding: 0 0.5rem; color: var(--survivor-green); font-size: 0.75rem; font-weight: bold;">BORDER DONE</div>
                    <!-- Gap -->
                    <div style="width: 100%; height: 100%; border: 8px dashed #475569; border-radius: 50%; opacity: 0.5;"></div>
                    <!-- Hub -->
                    <div style="position: absolute; width: 4rem; height: 4rem; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: bold; color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">HUB</div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const scramblePuzzleHTML = `
<div class="puzzle-dossier">
    <header class="puzzle-header">
        <h1>Décoder. Traduire. Survivre.</h1>
        <p>Mastering Word Scrambles using French Syntax Logic.</p>
    </header>

    <div class="puzzle-section">
        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-green);">
            <h2 class="text-green">The Golden Rule</h2>
            <div class="puzzle-grid-2" style="align-items: center;">
                <div>
                    <p class="text-white" style="font-size: 1.25rem; margin-bottom: 1rem;">Solve the <span class="text-accent font-bold">Suffixes</span> and <span class="text-accent font-bold">Small Words</span> first.</p>
                    <p class="text-slate-400">Do not stare at the whole mess. French is a structured language. Use the grammar to break the code.</p>
                </div>
                <div style="background: #0f172a; padding: 1rem; border-radius: 8px; text-align: center; border: 1px solid #334155;">
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2px; max-width: 180px; margin: 0 auto;">
                        <span class="tile small">I</span><span class="tile small">M</span><span class="tile small">M</span><span class="tile small">U</span><span class="tile small">N</span><span class="tile accent">I</span><span class="tile accent">T</span><span class="tile accent">É</span>
                    </div>
                    <p class="mono text-slate-400" style="font-size: 0.6rem; letter-spacing: 1px; text-transform: uppercase; margin-top: 0.5rem;">Find the end to find the start</p>
                </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">1</div>
            <h2>Phase 1: The "Anchor" Filter</h2>
        </div>

        <div class="puzzle-grid-2">
            <div class="puzzle-card">
                <h3 class="text-accent">Grammar is your Map</h3>
                <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem;" class="text-slate-300">
                    <li style="display: flex; gap: 0.5rem;"><span class="step-number">1</span> <span><strong>The Accent Hunt (É, È, À):</strong> If you see <strong>É</strong>, it's likely a past-tense verb or starts a noun.</span></li>
                    <li style="display: flex; gap: 0.5rem;"><span class="step-number">2</span> <span><strong>Suffix Grouping:</strong> Pull these out immediately:<br><span class="text-green mono" style="font-size: 0.8rem;">-TION, -MENT, -AGE, -ITE</span></span></li>
                    <li style="display: flex; gap: 0.5rem;"><span class="step-number">3</span> <span><strong>Connector Words:</strong> Build the non-essentials:<br><span class="text-green mono" style="font-size: 0.8rem;">LE, LA, LES, DE, POUR</span></span></li>
                </ul>
            </div>

            <div class="puzzle-card" style="border: 2px solid rgba(245, 158, 11, 0.3); display: flex; flex-direction: column; align-items: center; justify-content: center;">
                 <p style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; font-weight: bold; margin-bottom: 1rem; letter-spacing: 1px;">Common Endings</p>
                 <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="display: flex;"><span class="tile small">T</span><span class="tile small">I</span><span class="tile small">O</span><span class="tile small">N</span></div>
                        <span class="text-slate-400" style="font-size: 0.8rem;">= Action</span>
                    </div>
                     <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="display: flex;"><span class="tile small">I</span><span class="tile small">T</span><span class="tile accent">É</span></div>
                        <span class="text-slate-400" style="font-size: 0.8rem;">= Immunité</span>
                    </div>
                 </div>
            </div>
        </div>
    </div>

    <div class="puzzle-section">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
             <div style="background-color: var(--survivor-accent); color: #000; width: 3rem; height: 3rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;" class="mono">2</div>
            <h2>Phase 2: The "Meta" Check</h2>
        </div>

        <div class="puzzle-card" style="border-left: 4px solid var(--survivor-accent);">
            <p class="text-slate-300" style="margin-bottom: 1rem;">Survivor Québec reuses themes. Check your letters against these concepts:</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem;">
                <div style="background: #0f172a; padding: 0.75rem; border-radius: 4px;">
                    <h4 class="text-green font-bold" style="font-size: 0.8rem; margin-bottom: 0.25rem;">GAME TERMS</h4>
                    <p class="text-slate-400 mono" style="font-size: 0.7rem;">CONSEIL, TRIBU, COLLIER, ALLIANCE</p>
                </div>
                <div style="background: #0f172a; padding: 0.75rem; border-radius: 4px;">
                    <h4 class="text-accent font-bold" style="font-size: 0.8rem; margin-bottom: 0.25rem;">MOTIVATION</h4>
                    <p class="text-slate-400 mono" style="font-size: 0.7rem;">FORCE, COURAGE, DESTIN, HONNEUR</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;


    // --- Global Event Listener for Puzzle Sub-Tabs ---
    document.addEventListener('click', (e) => {
        if (e.target.matches('.puzzle-nav-btn')) {
            const btn = e.target;
            const type = btn.getAttribute('data-puzzle-type');
            const displayArea = document.getElementById('archetype-display-area');

            // Handle Buttons
            const parentTabs = btn.parentElement;
            parentTabs.querySelectorAll('.puzzle-nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Inject Content
            if (displayArea) {
                switch(type) {
                    case 'slide':
                        displayArea.innerHTML = slidePuzzleHTML;
                        break;
                    case 'vertical':
                        displayArea.innerHTML = verticalPuzzleHTML;
                        break;
                    case 'floor':
                        displayArea.innerHTML = floorPuzzleHTML;
                        break;
                    case 'scramble':
                        displayArea.innerHTML = scramblePuzzleHTML;
                        break;
                }
            }
        }
    });
