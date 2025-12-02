document.addEventListener('DOMContentLoaded', () => {
    // --- Content for Tribal Council (Dossier Theme) ---
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

    // --- Data for Pillars (Grid + Deep Linking) ---
    const pillarsData = {
        outwit: {
            title: "OUTWIT",
            items: [
                { title: "Advantages & Twists", content: "Details on idols, advantages, and twists." },
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
                { title: "Common Mistakes", content: mistakesContent }
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
                        <h2 class="huddle-title">Physical Game</h2>
                        <h3 class="huddle-subtitle">Winning Challenges</h3>

                        <p>Content to be added.</p>

                        <div class="video-placeholder">
                            <span>VIDEO PLACEHOLDER</span>
                        </div>
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
                    <div class="huddle-blog-post">
                        <h2 class="huddle-title">STRATEGIC INTELLIGENCE REPORT</h2>
                        <h3 class="huddle-subtitle">Subject: Puzzle Challenges & Mental Dexterity (Survivor Québec)<br>Status: Important / The "Equalizer"</h3>

                        <h3 class="neon-heading">1. The Role of Puzzles in Québec</h3>
                        <p>In the US version, puzzles are the "Great Equalizer"—they exist to make sure the super-athlete loses. In Survivor Québec, puzzles are frequent, but they don't guarantee a loss for the strong player.</p>
                        <ul>
                            <li><strong>The Balance:</strong> You still need to solve them, but often you have to survive a physical battering just to get to the puzzle pieces.</li>
                            <li><strong>Frequency:</strong> Expect them often ("High Frequency"), usually at the end of a race.</li>
                        </ul>

                        <h3 class="neon-heading">2. The "Quiet Eye" Advantage</h3>
                        <p>The winning strategy for Québec puzzles isn't just being smart; it's about shifting gears instantly.</p>
                        <ul>
                            <li><strong>The Shift:</strong> You have to go from "Combat Mode" (high heart rate, adrenaline, aggression) to "Zen Mode" (calm, precise) in seconds.</li>
                            <li><strong>Case Study (Ghyslain):</strong> He won because he had the "quiet eye"—the ability to block out the chaos and focus entirely on the precision task, similar to a golfer lining up a putt.</li>
                        </ul>

                        <h3 class="neon-heading">3. Strategic Positioning</h3>
                        <p>Don't Hide Strength: In the US, if you are good at challenges, you hide it so you don't become a target. In Québec, "giving your all" is respected culturally.</p>
                        <ul>
                            <li><strong>The "Shield":</strong> Being good at puzzles and physical challenges (like Ghyslain) can actually protect you. If you are viewed as a "provider" or a "hero" for the tribe, your challenge dominance becomes an asset rather than a target on your back.</li>
                        </ul>

                        <h3 class="neon-heading">4. Training Focus</h3>
                        <ul>
                            <li><strong>Pattern Recognition:</strong> While US players are 3D printing puzzles at home, your time is better spent on general pattern recognition and staying calm under pressure.</li>
                            <li><strong>Fine Motor Skills:</strong> Practice doing delicate tasks (stacking cards, threading needles) immediately after doing a set of burpees. Learn to steady your hands when your heart is pounding.</li>
                        </ul>

                        <div class="video-placeholder">
                            <span>VIDEO PLACEHOLDER</span>
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
