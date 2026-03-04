import React, { useEffect, useState, useRef } from 'react';
import './App.css';

type Tab = 'pitch' | 'timeline' | 'mechanics' | 'marketing' | 'logistics';

function App() {
  const [driftData, setDriftData] = useState<number>(0.05);
  const [xdoOverride, setXdoOverride] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<Tab>('pitch');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDriftData(Math.max(0.01, 0.05 + (Math.random() * 0.02 - 0.01)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (xdoOverride) {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [xdoOverride]);

  const toggleXDO = () => {
    setXdoOverride(prev => !prev);
  }

  return (
    <div className={`app-container ${xdoOverride ? 'xdo-active brittle-realism' : ''}`}>
      <audio ref={audioRef} src="https://media.freesound.org/data/15/previews/15469_1896-lq.mp3" loop />

      {/* Nav bar */}
      <nav className="nav-bar">
        <div className="nav-logo" onClick={toggleXDO} style={{ cursor: "pointer" }} title="Click to trigger XDO Override">BEMBRIDGE FORT TRUST</div>
        <div className="nav-tabs">
          <button className={`tab-btn ${activeTab === 'pitch' ? 'active' : ''}`} onClick={() => setActiveTab('pitch')}>The Sovereign Model</button>
          <button className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`} onClick={() => setActiveTab('timeline')}>The Operational Reflex</button>
          <button className={`tab-btn ${activeTab === 'mechanics' ? 'active' : ''}`} onClick={() => setActiveTab('mechanics')}>Rules of Engagement</button>
          <button className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`} onClick={() => setActiveTab('marketing')}>Archival Marketing</button>
          <button className={`tab-btn ${activeTab === 'logistics' ? 'active' : ''}`} onClick={() => setActiveTab('logistics')}>Fort Operations</button>
        </div>
        <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.9rem", color: xdoOverride ? "var(--accent-gold)" : "rgba(0,0,0,0.5)" }}>
          {xdoOverride ? "XDO PROTOCOL ACTIVE" : "EST. 1862"}
        </div>
      </nav>

      {/* Hero Header */}
      <div
        className="hero-banner"
        style={!xdoOverride ? { backgroundImage: "url('/assets/hero_reimagined_bar_1772481518966.png')" } : undefined}
      >
        <div className="hero-content fade-in">
          <p>{xdoOverride ? "/// INCOMING TRANSMISSION ///" : "The Enigma of the Down"}</p>
          <h1>{xdoOverride ? "THE SHIELD IS COMPROMISED." : "From Relic to Reflex."}<br />{xdoOverride ? "ACTIVATE THE CRUCIBLE." : "A High-Class Heritage Venue."}</h1>
          <button className="hero-btn" onClick={() => setActiveTab('timeline')} style={{ marginRight: '1rem', background: xdoOverride ? "var(--red-alert)" : "var(--accent-gold)", borderColor: "transparent" }}>
            {xdoOverride ? "HALT! WHO GOES THERE?" : "View The Experience"}
          </button>
          {xdoOverride && <p className="coords" style={{ display: 'inline-block', marginLeft: '2rem' }}>LIVE LINK: 50.6720° N, 1.1070° W</p>}
        </div>
      </div>

      {/* --- TAB CONTENT --- */}

      {activeTab === 'pitch' && (
        <div className="tab-content fade-in">
          <section className="explorecore-section" style={{ paddingTop: "0" }}>
            <div className="grid-2">
              <div className="pitch-card" style={xdoOverride ? { display: "none" } : {}}>
                <img src="/assets/victorian_fort_exterior_1772481021667.png" alt="The original Victorian Fort" style={{ width: '100%', marginBottom: '1.5rem', borderRadius: '4px' }} />
                <h3>The Problem</h3>
                <p>Decay, water ingress, and the "Consultant Tax." A £250k grant only buys time, replacing authentic textures with generic restoration. The Bembridge Fort is not a museum. It is an operational arena.</p>
              </div>
              <div className="pitch-card" style={xdoOverride ? { background: "var(--bg-dark)", color: "white", gridColumn: "span 2" } : { background: "var(--bg-dark)", color: "white" }}>
                <img src={xdoOverride ? "/assets/noir_xdo_room_1772481009348.png" : "/assets/explorecore_1867_bar_1772480995737.png"} alt="The Sentinel's Gambit" style={{ width: '100%', marginBottom: '1.5rem', borderRadius: '4px' }} />
                <h3>The Solution</h3>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>The Sentinel's Gambit. Operationalising the Fort's specific history for the global SLT market. We transition from a passive relic to deploying a 1942 <strong>Leadership Relationship Accelerator</strong>.</p>
              </div>
            </div>
          </section>

          {xdoOverride ? (
            <section className="explorecore-section status-section">
              <div className="explorecore-header">
                <p style={{ color: "var(--red-alert)" }}>[WAX_DEPTH_2026] OVERRIDDEN -&gt; [NOIR_CHIA_1930]</p>
                <h2 style={{ color: "var(--accent-gold)", fontSize: "3rem" }}>PHILANTHROPIC PROGRESS</h2>
                <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>Target: <strong>£450,000</strong> (Officers' Quarters Roof)</p>
              </div>
              <div className="progress-container">
                <div className="progress-bar-wrapper">
                  <div className="progress-fill" style={{ width: "33%" }}><span>Crucible 01 (£150k)</span></div>
                  <div className="progress-fill" style={{ width: "33%", background: "rgba(203, 164, 88, 0.7)" }}><span>Crucible 02 (£150k)</span></div>
                  <div className="progress-fill" style={{ width: "34%", background: "rgba(203, 164, 88, 0.4)" }}><span>Crucible 03 (£150k)</span></div>
                </div>
              </div>
            </section>
          ) : (
            <section className="explorecore-section" style={{ paddingTop: "0" }}>
              <div className="explorecore-header">
                <p>Financial Paradigm</p>
                <h2>The Revenue Reflex</h2>
              </div>
              <div className="grid-2">
                <div className="pitch-card" style={{ borderLeft: "4px solid #CCC" }}>
                  <h3>Traditional Heritage Model</h3>
                  <p>25,000 visitors at £10/head. High impact on Victorian masonry. Low margin. Dependency on external grants.</p>
                  <h4 style={{ marginTop: "1rem", fontSize: "2rem" }}>£250k / yr</h4>
                </div>
                <div className="pitch-card" style={{ borderLeft: "4px solid var(--accent-gold)" }}>
                  <h3>Sovereign Startup Model</h3>
                  <p>5 Corporate Crucibles at £150,000/event. Zero impact on masonry. Ultra-high margin. The Officers' Quarters roof is fully funded by the first three "Traitor Days."</p>
                  <h4 style={{ marginTop: "1rem", fontSize: "2rem", color: "var(--accent-gold)" }}>£750k+ / yr</h4>
                </div>
              </div>
            </section>
          )}

          <section className="deterministic-section">
            <div className="terminal-box">
              <h3>The Deterministic Skull Protocol</h3>
              <div className="terminal-output">
                $ INIT LiDAR_SCAN --target "Blue Slipper Clay"<br />
                $ CALIBRATING... [OK]<br />
                $ MASONRY INTEGRITY CHECK: VICTORIAN HEXAGONAL KEEP<br />
                $ ALGORITHM: PHY_OF_NO<br /><br />
                <span style={{ color: driftData > 0.1 ? "#F00" : "#0F0" }}>
                  CURRENT SCAN READOUT: {driftData.toFixed(4)} mm drift<br />
                  STATUS: {driftData > 0.1 ? "HALT! Movement detected. Structural intervention required." : "REFUSAL WALL INTACT. MASONRY STABLE."}
                </span><br /><br />
                $ The 'Consultant Tax' has been eliminated. The Digital Reflex guarantees structural survival for the next 150 years.
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'timeline' && (
        <div className="tab-content fade-in brittle-section brittle-realism" style={{ padding: '4rem' }}>
          <div className="brittle-header">
            <p className="alert">How The Day Unfolds</p>
            <h2 style={{ fontSize: '3.5rem' }}>THE OPERATIONAL REFLEX</h2>
            <p style={{ marginTop: '1rem', opacity: 0.8 }}>A 48-Hour High-Stakes Leadership Crucible set in a 1942 "Battle Station" rhythm.</p>
          </div>

          <div className="timeline-grid">
            <div className="timeline-day">
              <h3>DAY 1: THE INFILTRATION</h3>
              <ul className="timeline-list">
                <li><span className="time">15:00</span> <strong>The Approach:</strong> Arrival at the Fort gates. The first interaction is the "HALT! Who goes there?" challenge.</li>
                <li><span className="time">16:30</span> <strong>The Marconi Briefing:</strong> Under Rembrandt lighting in the 1867 Bar, the XDO briefs the team. The Type 41 Radar integration is failing.</li>
                <li><span className="time">18:00</span> <strong>Role Ingestion:</strong> Participants receive their Julian Seal Dossiers (Living Ghosts).</li>
                <li><span className="time">20:00</span> <strong>Mission Alpha:</strong> The Indicator Loop in the underground tunnels. Trace a magnetic signal from the Solent.</li>
                <li><span className="time">22:00</span> <strong>First Boardroom:</strong> The first vote for "Project Reassignment".</li>
                <li><span className="time">23:59</span> <strong>Night Watch:</strong> The Spies meet in secret in the Gunpowder Magazine.</li>
              </ul>
            </div>

            <div className="timeline-day">
              <h3>DAY 2: THE ELECTRONIC SHIELD</h3>
              <ul className="timeline-list">
                <li><span className="time">08:00</span> <strong>The Greasepaint Reveal:</strong> The "Discredited" person wears stage greasepaint for the day—silenced but observant.</li>
                <li><span className="time">10:00</span> <strong>Mission Beta:</strong> The Tennyson Transmission. Physical navigation task on the Down.</li>
                <li><span className="time">14:00</span> <strong>Magnetron Spin-up:</strong> Suno v4 thrumming audio increases tension as radar power rises.</li>
                <li><span className="time">19:00</span> <strong>The Stardust Gala:</strong> A themed dinner in the Officers' Mess with authentic 1940s rations (and real sausages).</li>
                <li><span className="time">21:00</span> <strong>The Final Boardroom:</strong> The climax. The remaining engineers must identify the Spies before the "Refusal Wall" is compromised.</li>
              </ul>
            </div>

            <div className="timeline-day" style={{ gridColumn: 'span 2' }}>
              <h3>DAY 3: THE CAPSTONE</h3>
              <ul className="timeline-list">
                <li><span className="time">10:00</span> <strong>Bridging to Reality:</strong> The corporate debrief mapping "Information Asymmetry" and "Trust Erosion" to real-world business challenges.</li>
                <li><span className="time">12:00</span> <strong>The Grant Legacy:</strong> The team views the LiDAR scan in real-time, proving their participation fee actively protects the masonry.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mechanics' && (
        <div className="tab-content fade-in explorecore-section">
          <div className="explorecore-header">
            <p>Customer Mechanics</p>
            <h2 style={{ fontSize: '3rem' }}>RULES OF ENGAGEMENT</h2>
          </div>

          <div className="grid-2">
            <div className="pitch-card">
              <h3>1. The Prime Directive</h3>
              <p>The Sovereign Heritage Directive under Rembrandt lighting: <em>"We are here to critique the Strategy, not the Character. Within these walls, you are not your job title; you are a link in the Electronic Shield."</em></p>
            </div>
            <div className="pitch-card" style={{ background: "var(--bg-dark)", color: "white" }}>
              <h3>2. The Greasepaint Reveal</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>When Spies "Discredit" an officer, that player must wear physical stage greasepaint the next day. They are "Silenced" in the Boardroom, forcing teams to rely on non-verbal observation. A profound test of communication.</p>
            </div>
            <div className="pitch-card" style={{ background: "var(--bg-dark)", color: "white" }}>
              <h3>3. The Non-Elimination Observer</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>When voted out, executives are not sent home. They are "Assigned to the Shipyard" as Strategic Observers. They participate in physical missions but lose voting rights, tasked instead with tracking decision-making biases.</p>
            </div>
            <div className="pitch-card">
              <h3>4. Identifying the Spies</h3>
              <p>The "Rule of Evidence": You cannot accuse someone because they "seem shifty." You must provide a Tactical Audit based on actual failures in the Indicator Loop or the BS 1363 power draw protocols.</p>
            </div>
          </div>

          <div className="living-ghosts-grid" style={{ marginTop: '4rem', background: '#111', padding: '3rem' }}>
            <h3 style={{ color: '#fff', gridColumn: 'span 3', textAlign: 'center', marginBottom: '2rem' }}>Every Client Inherits a Living Ghost (Out of 55)</h3>
            <div className="ghost-card">
              <span className="title">Crucible: High-Complexity Analyst</span>
              <img src="/assets/persona_arthur_1772481258116.png" alt="Arthur V" style={{ width: '100%', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #444' }} />
              <h4>Arthur V.</h4>
              <p><strong>Secret directive:</strong> Sabotage the Cavity Magnetron spin-up.</p>
            </div>
            <div className="ghost-card">
              <span className="title">Crucible: Information Broker</span>
              <img src="/assets/persona_doris_1772481275267.png" alt="Doris P" style={{ width: '100%', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #444' }} />
              <h4>Doris P.</h4>
              <p><strong>Secret directive:</strong> Track decision-making biases without influencing the logic.</p>
            </div>
            <div className="ghost-card">
              <span className="title">Crucible: Crisis Manager</span>
              <img src="/assets/persona_harry_1772481288881.png" alt="Harry Wellspring" style={{ width: '100%', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #444' }} />
              <h4>Harry Wellspring</h4>
              <p><strong>Secret directive:</strong> Maintain operational morale.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'marketing' && (
        <div className="tab-content fade-in explorecore-section">
          <div className="explorecore-header">
            <p>UHNWI Attraction</p>
            <h2 style={{ fontSize: '3rem' }}>ARCHIVAL MARKETING</h2>
            <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#555' }}>Employing "Explorecore Minimalism" and "Notes App Chic" aesthetics.</p>
          </div>

          <div className="grid-2">
            <div className="pitch-card notes-app-chic" style={{ padding: '3rem', position: 'relative' }}>
              <div className="coffee-stain"></div>
              <img src="/assets/invitation_mockup_1772481958890.png" alt="Sovereign Invitation" style={{ width: '100%', marginBottom: '2rem', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
              <h3 style={{ fontFamily: "'Courier Prime', monospace", borderBottom: '1px solid currentColor', paddingBottom: '1rem', marginBottom: '2rem' }}>THE SOVEREIGN INVITATION</h3>
              <p style={{ fontFamily: "'Courier Prime', monospace", whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                <strong>CONFIDENTIAL COMMAND BRIEFING</strong><br /><br />
                You are invited to the Isle of Wight front line. Not to observe history, but to calculate it.<br /><br />
                As a guest of the XDO, you will join an elite research team at Bembridge Fort to activate the Electronic Shield. But be warned: the 'Bembridge Reflex' is compromised. There is a leak in the magnetron integration. Your leadership is the only thing standing between the Solent and the Refusal Wall.<br /><br />
                Dress: 1940s Officers' Mess.<br />
                Atmosphere: Brittle Realism.<br /><br />
                <em>HALT! Who goes there?</em>
              </p>
            </div>

            <div className="pitch-card" style={{ background: '#0D0F11', color: '#E6E1D8', position: 'relative', overflow: 'hidden' }}>
              <p className="alert" style={{ fontFamily: "'Courier Prime', monospace", color: 'var(--red-alert)', position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>[GRAIN_CHECK_1950]</p>
              <img src="/assets/gambit_poster_mockup_1772481971497.png" alt="The Sentinel's Gambit" style={{ width: '100%', marginBottom: '2rem', borderRadius: '4px', border: '1px solid #333' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Sentinel's Gambit</h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>48 Hours. No Exit.</p>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Identify the Spy. Save the Fort.</p>

              <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)' }}>
                <p style={{ fontFamily: "'Courier Prime', monospace", fontStyle: 'italic', opacity: 0.8 }}>
                  [Hand-written note: "Check the BS 1363 sockets. They're drawing too much power over the Abwehr line."]
                </p>
              </div>
            </div>

            <div className="pitch-card" style={{ gridColumn: 'span 2' }}>
              <h3>High-Class Heritage Venue Configuration</h3>
              <p>The Fort is not marketed as a "fun escape room". It is an exclusive <strong>Relationship Accelerator</strong>. By utilizing the historical prestige of the Palmerston Folly, the Victorian Green Gunners, and the WW2 British Radar Physicists, the venue commands a £150,000 price point. The contrast between the 1867 Bar speakeasy velvet, and the cold chalk ditches creates intense Aesthetic Friction.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'logistics' && (
        <div className="tab-content fade-in explorecore-section">
          <div className="explorecore-header">
            <p>Operational Blueprint</p>
            <h2 style={{ fontSize: '3rem' }}>FORT LOGISTICS</h2>
            <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#555' }}>Executing the Crucible with a lean, high-impact team.</p>
          </div>

          <div className="grid-2">
            <div className="pitch-card" style={{ gridColumn: 'span 2', display: 'flex', gap: '2rem', alignItems: 'center', background: '#0D0F11', color: '#E6E1D8' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>Phase 1: The Executive Insertion</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>We partner with a prestigious local hotel (e.g., The Seaview) for briefing and rest. The UHNWI team arrives via high-end smart SUVs. The transition begins the moment they step off the pavement: the 2026 luxury immediately dissolves into 1942 Operational Reality as soon as they reach the Fort gates.</p>
              </div>
              <div style={{ flex: 1 }}>
                <img src="/assets/hotel_suv_logistics_1772482276657.png" alt="Executive Insertion via SUV" style={{ width: '100%', borderRadius: '4px', border: '1px solid #333' }} />
              </div>
            </div>

            <div className="pitch-card">
              <h3>Phase 2: Modular Transformation</h3>
              <p>The Fort is not a permanently dressed museum. It relies on <strong>Modular Set-Dressing</strong>. In a 2-hour window, a lean team deploys 1940s radios, aged canvas maps, and Veo 3 dynamic projections onto the bare brick walls. No nails. No drilled holes. The heritage masonry remains entirely untouched.</p>
            </div>

            <div className="pitch-card" style={{ background: "var(--bg-dark)", color: "white" }}>
              <h3>The "Green Gunner" Cast</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>We do not use generic tour guides. The experience is facilitated by a highly trained, elite 3-person acting cadre (the "Green Gunners"). They don't just instruct; they push, interrogate, and raise the pulse of the participants, acting as historical conduits to maintain profound immersion.</p>
            </div>

            <div className="pitch-card" style={{ gridColumn: 'span 2' }}>
              <h3>Clear Operational Rules</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <p><strong>1. The "Off-Limits" Dictate:</strong> Unsafe areas of the fort are physically barricaded but narrated as "Bombed-out sections." Safety is maintained entirely via narrative, rather than breaking immersion with modern health and safety warning tape.</p>
                <p><strong>2. 100% Deterministic:</strong> Every action the team takes is tracked via the Digital Reflex. By the end of the 48 hours, they don't get a "score"—they receive an executive diagnostic report mapping their interpersonal dynamics.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>CONFIDENTIAL COMMAND BRIEFING // THE SENTINEL'S GAMBIT // {xdoOverride ? '1942_BLITZ AESTHETIC' : '2026_PARADIGM'}</p>
        <p style={{ marginTop: "1rem" }}>Token Constraints Active: [INK_JITTER_1880], [GRAIN_CHECK_1950], {xdoOverride ? '[NOIR_CHIA_1930]' : '[WAX_DEPTH_2026]'}</p>
      </footer>
    </div>
  );
}

export default App;
