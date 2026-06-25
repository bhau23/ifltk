/* ═══════════════════════════════════════════════════════════════
   eQOURSE × iFLYTEK — Interactive Presentation Engine
   ═══════════════════════════════════════════════════════════════ */

// ── Slide Data ──
const academicSlides = [
  {
    title: 'A Scalable UK Curriculum Content Engine',
    subtitle: 'A structured academic asset for serious platform use',
    content: (i, t) => `
      <div class="stats-row">
        <div class="stat-card"><div class="stat-number teal">200,000+</div><div class="stat-label">Curriculum-Mapped Questions</div><div class="stat-sub">KS3, KS4 & KS5</div></div>
        <div class="stat-card"><div class="stat-number navy">5</div><div class="stat-label">Core Subjects</div><div class="stat-sub">English · Maths · Physics · Chemistry · Biology</div></div>
        <div class="stat-card"><div class="stat-number gold">3</div><div class="stat-label">Exam Boards</div><div class="stat-sub">Pearson Edexcel · OxfordAQA · CAIE</div></div>
      </div>
      <div class="bullet-card">
        <ul class="bullet-list">
          <li><span class="bullet-dot"></span><span><span class="bullet-label">Scale:</span> Approximately 200,000 curriculum-mapped questions across KS3, KS4 and KS5</span></li>
          <li><span class="bullet-dot"></span><span><span class="bullet-label">Subjects:</span> English, Mathematics, Physics, Chemistry and Biology</span></li>
          <li><span class="bullet-dot"></span><span><span class="bullet-label">Boards:</span> Developed around Pearson Edexcel, OxfordAQA and CAIE curriculum pathways</span></li>
          <li><span class="bullet-dot"></span><span><span class="bullet-label">Academic support:</span> Answers, worked solutions, tagging, visuals and knowledge-point mapping for every question</span></li>
          <li><span class="bullet-dot"></span><span><span class="bullet-label">Purpose:</span> A strong academic base for practice, assessment, diagnostics, revision and personalised learning within a digital education platform</span></li>
        </ul>
      </div>`
  },
  {
    title: 'Built for Academic Use Inside the Portal',
    subtitle: 'Content organised around the actual learning cycle',
    content: () => `
      <div class="pillars-row">
        <div class="pillar-card teal">
          <div class="pillar-icon">🎯</div>
          <div class="pillar-title">Practice</div>
          <div class="pillar-desc">Topic, subtopic and knowledge-point-based learning</div>
        </div>
        <div class="pillar-arrow">→</div>
        <div class="pillar-card navy">
          <div class="pillar-icon">📋</div>
          <div class="pillar-title">Assessment</div>
          <div class="pillar-desc">Homework, quizzes, assignments, topic tests and mock examinations</div>
        </div>
        <div class="pillar-arrow">→</div>
        <div class="pillar-card gold">
          <div class="pillar-icon">📊</div>
          <div class="pillar-title">Insight</div>
          <div class="pillar-desc">Diagnostics, weak-area identification and progress reporting</div>
        </div>
        <div class="pillar-arrow">→</div>
        <div class="pillar-card teal">
          <div class="pillar-icon">👤</div>
          <div class="pillar-title">Personalisation</div>
          <div class="pillar-desc">Revision pathways and next-step recommendations</div>
        </div>
      </div>
      <div class="highlight-card teal">
        <strong>Result:</strong> Creates a clear link between what students practise, what teachers assign and what the platform reports
      </div>`
  },
  {
    title: 'Coverage Depth Across Stages, Subjects and Boards',
    subtitle: 'Comprehensive and board-adaptive — KS3 to KS5',
    content: () => `
      <div class="two-cols">
        <div class="col-section">
          <div class="section-header"><span class="section-icon"></span>STAGE & SUBJECT COVERAGE</div>
          <div class="bar-chart">
            <div class="bar-item"><div class="bar-label"><span>KS5 / A Level</span><span class="navy-em">40%</span></div><div class="bar-track"><div class="bar-fill navy" style="width:40%">Advanced reasoning & extended response</div></div></div>
            <div class="bar-item"><div class="bar-label"><span>KS4</span><span class="teal-em">35%</span></div><div class="bar-track"><div class="bar-fill teal" style="width:35%">GCSE / IGCSE application & exam practice</div></div></div>
            <div class="bar-item"><div class="bar-label"><span>KS3</span><span class="gold-em">25%</span></div><div class="bar-track"><div class="bar-fill gold" style="width:25%">Concept clarity & confidence</div></div></div>
          </div>
          <div class="section-header" style="margin-top:16px"><span class="section-icon navy"></span>SUBJECT SPLIT</div>
          <div class="bar-track" style="height:36px;display:flex;overflow:hidden;border-radius:8px">
            <div style="width:45%;background:var(--secondary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:600">Science 45%</div>
            <div style="width:40%;background:var(--primary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:600">Mathematics 40%</div>
            <div style="width:15%;background:var(--tertiary);display:flex;align-items:center;justify-content:center;color:var(--primary);font-size:12px;font-weight:600">English 15%</div>
          </div>
        </div>
        <div class="col-section">
          <div class="section-header"><span class="section-icon"></span>MULTI-BOARD FRAMEWORK</div>
          <div class="bullet-card">
            <ul class="bullet-list">
              <li><span class="bullet-dot"></span><span><span class="bullet-label">Common core:</span> Shared knowledge points across Pearson Edexcel, OxfordAQA and CAIE</span></li>
              <li><span class="bullet-dot navy"></span><span><span class="bullet-label">Board refinement for:</span></span></li>
            </ul>
            <div class="tags-row" style="margin-top:12px;margin-left:22px">
              <span class="tag navy">Syllabus depth</span><span class="tag teal">Terminology</span><span class="tag gold">Command words</span><span class="tag navy">Practical skills</span><span class="tag teal">Question style</span><span class="tag gold">Assessment format</span>
            </div>
            <div class="highlight-card teal" style="margin-top:16px"><strong>Outcome:</strong> Suitable for multi-board deployment with final alignment to iFLYTEK's preferred curriculum direction</div>
          </div>
        </div>
      </div>`
  },
  {
    title: 'Precision Learning Architecture',
    subtitle: 'From broad topic practice to exact academic diagnosis',
    content: () => `
      <div class="two-cols">
        <div class="col-section">
          <div class="section-header"><span class="section-icon"></span>KNOWLEDGE-POINT DEPTH</div>
          <div class="flow-row" style="justify-content:flex-start;gap:0">
            <div class="flow-node"><div class="flow-circle" style="width:50px;height:50px;font-size:16px">🔬</div><div class="flow-label">Physics</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-node"><div class="flow-circle" style="width:50px;height:50px;font-size:14px;background:var(--primary)">⚡</div><div class="flow-label">Motion, Forces & Momentum</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-node"><div class="flow-circle" style="width:50px;height:50px;font-size:14px;background:var(--secondary)">🌊</div><div class="flow-label">Friction & drag</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-node"><div class="flow-circle" style="width:50px;height:50px;font-size:14px;background:var(--tertiary);color:var(--primary)">📈</div><div class="flow-label">Speed-time graph</div></div>
          </div>
          <div class="tags-row" style="margin-top:12px">
            <span class="tag navy">KS4</span><span class="tag teal">Core + Extended</span><span class="tag gold">33 Questions</span>
          </div>
          <div class="tags-row" style="margin-top:8px">
            <span class="tag navy">SCQ</span><span class="tag teal">Theory</span><span class="tag gold">Practical</span><span class="tag navy">Graph-based</span><span class="tag teal">Image-based</span><span class="tag gold">Non-image</span>
          </div>
        </div>
        <div class="col-section">
          <div class="section-header"><span class="section-icon navy"></span>PRECISION DIAGNOSIS</div>
          <div class="highlight-card red" style="opacity:0.7">
            <strong style="color:var(--accent-red)">✗ Basic Tag:</strong> Physics → Forces<br>
            <span style="font-size:13px;color:var(--text-muted)">Limited diagnostic value</span>
          </div>
          <div class="highlight-card teal">
            <strong>✓ Deep Mapping:</strong> Physics → Motion, Forces and Momentum → Friction and drag → Speed-time graph → Practical → Medium → Application → Image-based<br>
            <span style="font-size:13px;color:var(--secondary)">Full diagnostic precision</span>
          </div>
          <div class="highlight-card navy" style="margin-top:8px">
            <strong>Diagnostic outcome:</strong> Identifies exactly whether the student struggles with the concept, the graph, the application, or the question format
          </div>
        </div>
      </div>`
  },
  {
    title: 'Assessment Quality by Design',
    subtitle: 'Balanced for learning, progression and exam readiness',
    content: () => `
      <div class="section-header"><span class="section-icon"></span>DIFFICULTY PROGRESSION</div>
      <div class="bar-track" style="height:40px;display:flex;overflow:hidden;border-radius:8px;margin-bottom:8px">
        <div style="width:33%;background:var(--secondary);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:14px">Easy</div>
        <div style="width:34%;background:var(--tertiary);display:flex;align-items:center;justify-content:center;color:var(--primary);font-weight:600;font-size:14px">Medium</div>
        <div style="width:33%;background:var(--primary);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:14px">Difficult</div>
      </div>
      <div class="section-header"><span class="section-icon navy"></span>COGNITIVE DEMAND</div>
      <div class="staircase">
        <div class="stair-step"><div class="stair-bar" style="height:60px;background:rgba(0,168,150,0.3)">1</div><div class="stair-label">Recall</div></div>
        <div class="stair-step"><div class="stair-bar" style="height:90px;background:rgba(0,168,150,0.5)">2</div><div class="stair-label">Understanding</div></div>
        <div class="stair-step"><div class="stair-bar" style="height:120px;background:rgba(0,168,150,0.7)">3</div><div class="stair-label">Application</div></div>
        <div class="stair-step"><div class="stair-bar" style="height:150px;background:rgba(27,20,100,0.7)">4</div><div class="stair-label">Analysis</div></div>
        <div class="stair-step"><div class="stair-bar" style="height:180px;background:var(--primary)">5</div><div class="stair-label">Evaluation</div></div>
      </div>
      <div class="section-header"><span class="section-icon gold"></span>QUESTION FORMAT</div>
      <div class="tags-row">
        <span class="tag navy">Objective</span><span class="tag teal">Structured</span><span class="tag gold">Calculation-based</span><span class="tag navy">Graph-based</span><span class="tag teal">Diagram-based</span><span class="tag gold">Practical</span><span class="tag navy">Extended-response</span>
      </div>
      <div class="highlight-card teal">The same bank supports daily practice, independent revision and formal assessment preparation</div>`
  },
  {
    title: 'Discipline-Specific Academic Design',
    subtitle: 'Each subject follows its own academic logic',
    content: () => `
      <div class="pillars-row">
        <div class="pillar-card teal">
          <div class="pillar-icon">📖</div>
          <div class="pillar-title">English</div>
          <div class="tags-row" style="margin-top:8px"><span class="tag teal">Reading comprehension</span><span class="tag teal">Inference</span><span class="tag teal">Language analysis</span><span class="tag teal">Writing</span><span class="tag teal">Grammar</span><span class="tag teal">Editing accuracy</span></div>
        </div>
        <div class="pillar-card navy">
          <div class="pillar-icon">🔢</div>
          <div class="pillar-title">Mathematics</div>
          <div class="tags-row" style="margin-top:8px"><span class="tag navy">Procedural fluency</span><span class="tag navy">Conceptual understanding</span><span class="tag navy">Problem solving</span><span class="tag navy">Modelling</span><span class="tag navy">Reasoning and proof</span><span class="tag navy">Graphs and data handling</span></div>
        </div>
        <div class="pillar-card gold">
          <div class="pillar-icon">🧪</div>
          <div class="pillar-title">Physics, Chemistry & Biology</div>
          <div class="tags-row" style="margin-top:8px"><span class="tag gold">Concept understanding</span><span class="tag gold">Application</span><span class="tag gold">Calculations</span><span class="tag gold">Data interpretation</span><span class="tag gold">Diagrams</span><span class="tag gold">Practical work</span><span class="tag gold">Scientific reasoning</span></div>
        </div>
      </div>
      <div class="highlight-card teal">The bank is structured according to how each subject is taught, practised and assessed — not from a generic template</div>`
  },
  {
    title: 'Validated Academic Quality at Scale',
    subtitle: 'Every question earned its place. Nothing passes without proof.',
    content: () => `
      <div class="pipeline">
        <div class="pipeline-stage"><div class="pipeline-icon">🔗</div><div class="pipeline-title">Seamless Integration</div><div class="pipeline-desc">Direct, secure workflow integration into iFLYTEK's existing portals — built to handle high volumes without compromising academic standards at any stage</div></div>
        <div class="pipeline-arrow">→</div>
        <div class="pipeline-stage"><div class="pipeline-icon">🔍</div><div class="pipeline-title">Initial SME Review</div><div class="pipeline-desc">Curriculum and content accuracy validated against Pearson Edexcel, OxfordAQA and CAIE standards</div></div>
        <div class="pipeline-arrow">→</div>
        <div class="pipeline-stage"><div class="pipeline-icon">🧠</div><div class="pipeline-title">Pedagogy Check</div><div class="pipeline-desc">Every question validated for cognitive demand, command word precision and stage-specific difficulty — ensuring each item accurately assesses its intended learning outcome</div></div>
        <div class="pipeline-arrow">→</div>
        <div class="pipeline-stage"><div class="pipeline-icon">🛡️</div><div class="pipeline-title">Final Approval</div><div class="pipeline-desc">Senior academic gate ensuring zero non-compliant content passes through</div></div>
      </div>
      <div class="highlight-card teal" style="margin-top:16px">
        <strong>Absolute Objectivity:</strong> Distinct segregation between content development and quality review — ensuring complete impartiality and a <span class="teal-em" style="font-size:24px">99%</span> accuracy guarantee at every validation stage
      </div>`
  },
  {
    title: 'AI-Ready Academic Metadata Layer',
    subtitle: 'Structured content that supports diagnostics, adaptivity and recommendations',
    content: () => `
      <div class="section-header"><span class="section-icon"></span>PER-QUESTION METADATA</div>
      <div class="tags-row">
        <span class="tag teal">Knowledge point</span><span class="tag navy">Difficulty</span><span class="tag gold">Cognitive level</span><span class="tag teal">Question type</span><span class="tag navy">Board alignment</span><span class="tag gold">Visual classification</span>
      </div>
      <div class="section-header"><span class="section-icon navy"></span>LEARNING FLOW</div>
      <div class="flow-row">
        <div class="flow-node"><div class="flow-circle">🏷️</div><div class="flow-label">Tagged Question</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node"><div class="flow-circle" style="background:var(--primary)">✍️</div><div class="flow-label">Student Response</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node"><div class="flow-circle" style="background:var(--accent-red)">🔎</div><div class="flow-label">Gap Detection</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node"><div class="flow-circle" style="background:var(--tertiary);color:var(--primary)">📝</div><div class="flow-label">Recommended Practice</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node"><div class="flow-circle" style="background:var(--secondary)">📊</div><div class="flow-label">Progress Report</div></div>
      </div>
      <div class="section-header"><span class="section-icon gold"></span>CAPABILITIES UNLOCKED</div>
      <div class="grid-3x2">
        <div class="grid-card"><div class="grid-icon">🧠</div><div class="grid-title">Diagnostics</div></div>
        <div class="grid-card"><div class="grid-icon">🛤️</div><div class="grid-title">Adaptive sequencing</div></div>
        <div class="grid-card"><div class="grid-icon">🎯</div><div class="grid-title">Personalised revision</div></div>
        <div class="grid-card"><div class="grid-icon">📈</div><div class="grid-title">Topic mastery tracking</div></div>
        <div class="grid-card"><div class="grid-icon">📊</div><div class="grid-title">Cognitive-level analysis</div></div>
        <div class="grid-card"><div class="grid-icon">🏫</div><div class="grid-title">Student & institution reporting</div></div>
      </div>
      <div class="highlight-card teal">The stronger the academic structure, the more meaningful the AI-supported learning journey becomes</div>`
  },
  {
    title: 'Pilot to Strategic Alliance',
    subtitle: 'A practical foundation for UK curriculum learning at scale',
    content: () => `
      <div class="section-header"><span class="section-icon"></span>ACADEMIC GROUNDWORK IN PLACE</div>
      <div class="tags-row">
        <span class="tag teal">Curriculum mapping</span><span class="tag navy">Knowledge-point planning</span><span class="tag gold">Question development</span><span class="tag teal">Tagging</span><span class="tag navy">Answers</span><span class="tag gold">Worked solutions</span><span class="tag teal">Visuals</span><span class="tag navy">Board-alignment flexibility</span>
      </div>
      <div class="partnership-cards">
        <div class="partner-card navy"><div class="partner-card-title">iFLYTEK Brings</div><ul><li>Advanced AI</li><li>Smart education infrastructure</li><li>Platform capability</li></ul></div>
        <div class="partner-card teal"><div class="partner-card-title">eQOURSE Brings</div><ul><li>UK curriculum depth</li><li>Structured academic content</li><li>Scalable question-bank delivery</li></ul></div>
      </div>
      <div class="timeline">
        <div class="timeline-node"><div class="timeline-circle teal">1</div><div class="timeline-label">Pilot</div><div class="timeline-desc">First batch delivery, quality validation and platform integration</div></div>
        <div class="timeline-node"><div class="timeline-circle navy">2</div><div class="timeline-label">Scale</div><div class="timeline-desc">Volume ramp-up across KS3, KS4 and KS5 with a dedicated academic delivery centre</div></div>
        <div class="timeline-node"><div class="timeline-circle gold">3</div><div class="timeline-label">Alliance</div><div class="timeline-desc">Full retainership with co-go-to-market activation across international education markets</div></div>
      </div>`
  }
];

const businessSlides = [
  {
    title: 'Trusted by the Companies That Built China\'s EdTech',
    subtitle: 'From China\'s leading education platforms to international curriculum markets — eQOURSE has been the academic intelligence and QA partner of choice across the ecosystem iFLYTEK operates in.',
    content: () => `
      <div class="stats-row">
        <div class="stat-card"><div class="stat-number teal">10+</div><div class="stat-label">EdTech Clients</div></div>
        <div class="stat-card"><div class="stat-number navy">7</div><div class="stat-label">Countries</div></div>
        <div class="stat-card"><div class="stat-number gold">5+</div><div class="stat-label">Years</div></div>
        <div class="stat-card"><div class="stat-number teal">2,000</div><div class="stat-label">Questions/Day at Peak</div></div>
        <div class="stat-card"><div class="stat-number navy">10,000</div><div class="stat-label">Questions/Month</div></div>
      </div>
      <div class="section-header"><span class="section-icon navy"></span>CHINA — ESTABLISHED PARTNERSHIPS</div>
      <table class="data-table">
        <thead><tr><th>Client</th><th>Project</th><th>Delivery</th></tr></thead>
        <tbody>
          <tr><td>Data Driven Interactive Technology</td><td>Q&A + AI Validation · Phase 1 & 2</td><td>2,000 questions per day · Aug 2023 – Mar 2025</td></tr>
          <tr><td>Solvely.ai — Aignite Inc. (Now USA)</td><td>Question Tagging · Topic Classification</td><td>International curriculum · Aug 2023 – Mar 2025</td></tr>
          <tr><td>TAL Education</td><td>Curriculum & Academic Content</td><td>International curriculum support</td></tr>
          <tr><td>Aixuexi Education Group</td><td>Academic Content Development</td><td>Curriculum & content delivery</td></tr>
          <tr><td>Codemao</td><td>Educational Content</td><td>STEM and coding curriculum</td></tr>
        </tbody>
      </table>
      <div class="section-header"><span class="section-icon"></span>INTERNATIONAL PORTFOLIO</div>
      <div class="tags-row">
        <span class="tag navy">🇺🇸 USA — Chegg · CSA Solutions · Numerade · Bratelby</span>
        <span class="tag teal">🇸🇬 Singapore — Geniebook · K12 · 10K questions/month</span>
        <span class="tag gold">🇻🇳 Vietnam — Prep Ltd</span>
        <span class="tag navy">🇳🇬 Nigeria — Aurus Tech</span>
      </div>
      <div class="highlight-card teal">The companies reshaping education in China already rely on eQOURSE. It would not be starting a new relationship — it would be joining a trusted network.</div>`
  },
  {
    title: 'A Strategic Vision for Global Education AI',
    subtitle: '',
    content: () => `
      <div class="big-quote">To build a partnership where technology, academic intelligence and human quality assurance work as one system.</div>
      <div class="partnership-cards">
        <div class="partner-card navy"><div class="partner-card-title">iFLYTEK Brings</div><ul><li>World-class AI</li><li>Smart education capability</li></ul></div>
        <div class="partner-card teal"><div class="partner-card-title">eQOURSE Brings</div><ul><li>Human academic intelligence layer</li><li>Validate, localise and scale education AI for international markets</li></ul></div>
      </div>
      <div class="highlight-card gold"><strong>The Opportunity:</strong> To create a dedicated Data, Human Intelligence & Academic QA Hub for iFLYTEK, built around accuracy, curriculum precision, multilingual readiness and global delivery scale.</div>
      <div class="core-line">
        <p>AI creates speed.</p>
        <p>Human intelligence creates trust.</p>
        <p>Quality assurance creates market confidence.</p>
      </div>`
  },
  {
    title: 'Why Human Validation Matters in International Education',
    subtitle: '',
    content: () => `
      <p style="font-size:20px;font-weight:600;color:var(--primary);margin-bottom:8px">International curriculum markets do not accept <span class="red-em">"almost correct."</span></p>
      <p style="font-size:16px;color:var(--text-secondary);margin-bottom:16px">They require:</p>
      <div class="checklist-grid">
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Exact curriculum alignment</span></div>
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Board-style question structure</span></div>
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Regional grading-rubric accuracy</span></div>
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Age-appropriate language</span></div>
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Correct difficulty progression</span></div>
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Cultural and academic sensitivity</span></div>
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Error-free answers and explanations</span></div>
        <div class="check-item"><span class="check-icon">✓</span><span class="check-text">Multi-layer academic QA</span></div>
      </div>
      <div class="highlight-card red" style="margin-top:16px"><strong>⚠ Business risk:</strong> A single factual error, weak solution or standard mismatch can affect product trust.</div>
      <div class="highlight-card teal"><strong>🛡️ eQOURSE role:</strong> AI can generate at speed. eQOURSE ensures it is academically accurate, market-ready and commercially reliable.</div>`
  },
  {
    title: 'eQOURSE as iFLYTEK\'s Dedicated Academic Intelligence Hub',
    subtitle: 'One focused hub. Built exclusively around iFLYTEK.',
    content: () => `
      <div class="hub-diagram">
        <div class="hub-center">THE<br>HUB</div>
        <div class="hub-nodes">
          <div class="pillar-card teal" style="flex:none;width:240px"><div class="pillar-icon">👥</div><div class="pillar-title">500+ SMEs</div><div class="pillar-desc">Curriculum experts, assessment writers, tutors, reviewers and academic validators</div></div>
          <div class="pillar-card navy" style="flex:none;width:240px"><div class="pillar-icon">⚙️</div><div class="pillar-title">1,000+ Quality & AI Training Staff</div><div class="pillar-desc">Content QA, annotation, response review, localisation and AI model-output evaluation</div></div>
          <div class="pillar-card gold" style="flex:none;width:240px"><div class="pillar-icon">🌐</div><div class="pillar-title">30+ Languages</div><div class="pillar-desc">Multilingual academic content, localisation and review</div></div>
          <div class="pillar-card teal" style="flex:none;width:240px"><div class="pillar-icon">🌍</div><div class="pillar-title">Global Delivery</div><div class="pillar-desc">China · USA · UK · Singapore · Vietnam · KSA · UAE · Nigeria</div></div>
        </div>
      </div>
      <div class="highlight-card gold"><strong>TUTRAIN Layer:</strong> eQOURSE's own global tutoring platform covering all subjects and curriculums — providing real-world tutor and learner feedback for live validation of education products.</div>
      <div class="section-header"><span class="section-icon navy"></span>THE iFLYTEK COMMITMENT</div>
      <div class="pillars-row">
        <div class="pillar-card navy"><div class="pillar-icon">⭐</div><div class="pillar-title">Priority Status</div><div class="pillar-desc">iFLYTEK is our designated Tier-1 client — our top leadership is personally dedicated to this partnership, not delegated</div></div>
        <div class="pillar-card teal"><div class="pillar-icon">📈</div><div class="pillar-title">Reserved Capacity</div><div class="pillar-desc">On-demand volume expansion without repeated hiring, procurement or ramp-up delays</div></div>
        <div class="pillar-card gold"><div class="pillar-icon">🛡️</div><div class="pillar-title">Senior Accountability</div><div class="pillar-desc">Focused capacity, senior-level account management and our highest academic quality benchmark — applied without exception</div></div>
      </div>
      <div class="big-tagline">Built on trust. Driven by quality. Focused on iFLYTEK.</div>`
  },
  {
    title: 'India — Academic Depth, Language Advantage and Cost-Optimised Execution',
    subtitle: 'Quality at scale. Delivered cost-effectively.',
    content: () => `
      <div class="pillars-row">
        <div class="pillar-card teal"><div class="pillar-icon">🌐</div><div class="pillar-title">Language Proficiency</div><div class="pillar-desc">Strong English and multilingual capability purpose-built for global education markets</div></div>
        <div class="pillar-card navy"><div class="pillar-icon">👥</div><div class="pillar-title">Manpower Depth</div><div class="pillar-desc">Large, readily available academic talent pool of SMEs, tutors, STEM graduates, reviewers and QA professionals</div></div>
        <div class="pillar-card gold"><div class="pillar-icon">💰</div><div class="pillar-title">Cost-Optimised Scale</div><div class="pillar-desc">High-volume delivery with significantly lower operational cost than equivalent Western or East Asian markets — without compromise on quality or output standards</div></div>
        <div class="pillar-card teal"><div class="pillar-icon">🏆</div><div class="pillar-title">Education Credibility</div><div class="pillar-desc">Globally recognised in tutoring, STEM education, test preparation, curriculum support and academic services</div></div>
        <div class="pillar-card navy"><div class="pillar-icon">🧠</div><div class="pillar-title">AI Training Strength</div><div class="pillar-desc">One of the world's strongest talent bases for AI training, annotation, expert review and academic validation</div></div>
      </div>
      <div class="big-tagline">The same quality. <span class="gold-em">A fraction of the cost.</span> At any volume.</div>`
  },
  {
    title: 'Built Around iFLYTEK\'s AI Education Stack',
    subtitle: 'eQOURSE covers every layer where human intelligence makes AI products stronger.',
    content: () => `
      <div class="stack-layers">
        <div class="stack-layer"><div class="stack-num">5</div><div><div class="stack-title">Question Generation Models</div><div class="stack-desc">Review · Validation · Correction · Difficulty calibration · Curriculum mapping</div></div></div>
        <div class="stack-layer"><div class="stack-num">4</div><div><div class="stack-title">Smart Classroom Solutions</div><div class="stack-desc">Lesson assets · Assessments · Teacher-ready academic material</div></div></div>
        <div class="stack-layer"><div class="stack-num">3</div><div><div class="stack-title">Speech & Language Learning</div><div class="stack-desc">Speaking tasks · Pronunciation rubrics · Language datasets · Human-reviewed evaluation</div></div></div>
        <div class="stack-layer"><div class="stack-num">2</div><div><div class="stack-title">AI Models & Education Data</div><div class="stack-desc">Annotation · Hallucination checks · Subject accuracy · Human-in-the-loop QA</div></div></div>
        <div class="stack-layer"><div class="stack-num">1</div><div><div class="stack-title">TUTRAIN</div><div class="stack-desc">eQOURSE's own global tutoring platform — Live tutoring · Classroom testing · Learner feedback · Teacher onboarding · Product piloting · Real-world performance data fed directly into iFLYTEK's AI models</div></div></div>
      </div>
      <div class="section-header" style="margin-top:16px"><span class="section-icon"></span>iFLYTEK PLATFORM IMPACT</div>
      <div class="pillars-row">
        <div class="pillar-card teal"><div class="pillar-title">Scalable Quality</div><div class="pillar-desc">Consistent academic standards across every global market</div></div>
        <div class="pillar-card navy"><div class="pillar-title">Better Learning Outcomes</div><div class="pillar-desc">More accurate, relevant and effective content at every level</div></div>
        <div class="pillar-card gold"><div class="pillar-title">Stronger Compliance</div><div class="pillar-desc">Safe, curriculum-aligned and board-verified solutions</div></div>
        <div class="pillar-card teal"><div class="pillar-title">Global Impact</div><div class="pillar-desc">Education products that educators and learners worldwide can trust</div></div>
      </div>
      <div class="big-tagline">The only partner that brings both academic intelligence and a live education platform.</div>`
  },
  {
    title: 'Singapore–India–China Growth Architecture',
    subtitle: 'One architecture. Three strengths. Global market reach.',
    content: () => `
      <div class="pillars-row">
        <div class="pillar-card navy"><div class="pillar-icon">🇨🇳</div><div class="pillar-title">China — iFLYTEK</div><div class="pillar-desc">AI, technology leadership and smart education products</div></div>
        <div class="pillar-card teal"><div class="pillar-icon">🇮🇳</div><div class="pillar-title">India — eQOURSE</div><div class="pillar-desc">Academic execution, QA, 500+ SMEs and cost-optimised delivery at scale</div></div>
        <div class="pillar-card gold"><div class="pillar-icon">🇸🇬</div><div class="pillar-title">Singapore — eQOURSE</div><div class="pillar-desc">Institutional access, business connectivity and international market gateway</div></div>
      </div>
      <div class="highlight-card navy"><strong>The UK Project — Live Pipeline, Ready to Scale with iFLYTEK</strong><br>THE MARKET WE ENTER TOGETHER</div>
      <div class="tags-row" style="justify-content:center">
        <span class="tag navy">🇮🇳 India</span><span class="tag gold">🇸🇦 Middle East & GCC</span><span class="tag teal">🇬🇧 United Kingdom</span><span class="tag navy">🌏 Southeast Asia</span><span class="tag gold">🇺🇸 United States</span>
      </div>
      <div class="stats-row" style="justify-content:center">
        <div class="stat-card" style="flex:none;width:320px"><div class="stat-number teal">3,470+</div><div class="stat-label">Schools Across 5 Markets</div><div class="stat-sub">World's fastest-growing international education markets</div></div>
      </div>
      <div class="section-header"><span class="section-icon"></span>BEYOND DELIVERY</div>
      <div class="bullet-card">
        <ul class="bullet-list">
          <li><span class="bullet-dot"></span><span>eQOURSE does not just build and hand over</span></li>
          <li><span class="bullet-dot navy"></span><span>We actively co-sell — leveraging existing institutional relationships across all five markets</span></li>
          <li><span class="bullet-dot gold"></span><span>Our on-ground presence converts delivery into pipeline and pipeline into revenue for iFLYTEK</span></li>
        </ul>
      </div>
      <div class="big-tagline" style="font-size:26px;margin-top:16px">We build it. We validate it. We help sell it.</div>`
  }
];

// ── Navigation State ──
let currentScreen = 'landing';
let currentSlideIndex = 0;
let currentDeck = null;

// ── Screen Renderer ──
function renderScreen(screenName, direction = 'right') {
  const app = document.getElementById('app');
  const oldScreen = app.querySelector('.screen.active');

  if (oldScreen) {
    oldScreen.classList.remove('active');
    oldScreen.classList.add(direction === 'right' ? 'exit-left' : 'exit-right');
    setTimeout(() => oldScreen.remove(), 600);
  }

  const screen = document.createElement('div');
  screen.className = 'screen';

  switch (screenName) {
    case 'landing': screen.innerHTML = renderLanding(); break;
    case 'category': screen.innerHTML = renderCategory(); break;
    case 'video': screen.innerHTML = renderVideo(); break;
    case 'academics': screen.innerHTML = renderSlide(academicSlides, currentSlideIndex, 'academics'); break;
    case 'business': screen.innerHTML = renderSlide(businessSlides, currentSlideIndex, 'business'); break;
  }

  app.appendChild(screen);
  // Force reflow
  screen.offsetHeight;
  requestAnimationFrame(() => {
    screen.classList.add('active');
    if (direction === 'left') {
      screen.style.transform = 'translateX(-60px)';
      requestAnimationFrame(() => { screen.style.transform = ''; });
    }
  });

  currentScreen = screenName;
  bindEvents();
}

// ── Landing Page ──
function renderLanding() {
  return `
    <div class="landing">
      <div class="landing-grid"></div>
      <span class="partnership-badge">iFLYTEK × eQOURSE</span>
      <div class="landing-content">
        <div class="logo-container">
          <img src="/logo.png" alt="eQOURSE Logo" />
        </div>
        <div class="branches">
          <div class="branch-card">
            <div class="branch-icon">🤖</div>
            <div class="branch-title">eQOURSE AI Data Service</div>
            <div class="branch-desc">Empowering decisions with advanced neural insights</div>
          </div>
          <div class="branch-card">
            <div class="branch-icon">📚</div>
            <div class="branch-title">eQOURSE Content Service</div>
            <div class="branch-desc">Professional content solutions for global standards</div>
          </div>
          <div class="branch-card">
            <div class="branch-icon">🎓</div>
            <div class="branch-title">TUTRAIN Online Tutoring</div>
            <div class="branch-desc">Excellence in online education and tutoring</div>
          </div>
        </div>
        <div class="start-btn-wrapper">
          <button class="start-btn" data-navigate="category">Start Presentation →</button>
        </div>
      </div>
    </div>`;
}

// ── Category Selector ──
function renderCategory() {
  return `
    <div class="category-screen" style="display:flex;flex-direction:column;min-height:100vh">
      <div class="cat-header">
        <button class="back-btn" data-navigate="landing">← Back to Home</button>
        <div class="cat-logo"><img src="/logo.png" alt="eQOURSE" /></div>
        <span class="partnership-badge" style="position:static">iFLYTEK × eQOURSE</span>
      </div>
      <div class="cat-center">
        <div>
          <div class="cat-title">Select Presentation Category</div>
          <div class="cat-subtitle">Choose a track to explore our capabilities</div>
        </div>
        <div class="cat-cards">
          <div class="cat-card academics">
            <div class="cat-card-header">
              <div class="cat-card-icon">📖</div>
              <div class="cat-card-title">Academics</div>
              <div class="cat-card-desc">UK Curriculum Content Engine — 200,000+ Questions</div>
            </div>
            <div class="cat-card-body">
              <button class="cat-option-btn slide-deck" data-deck="academics">📊 Slide Deck</button>
              <button class="cat-option-btn video" data-navigate="video">🎬 Video <span class="coming-soon-badge">COMING SOON</span></button>
            </div>
          </div>
          <div class="cat-card business">
            <div class="cat-card-header">
              <div class="cat-card-icon">💼</div>
              <div class="cat-card-title">Business</div>
              <div class="cat-card-desc">Strategic Partnership & Academic Intelligence Hub</div>
            </div>
            <div class="cat-card-body">
              <button class="cat-option-btn slide-deck" data-deck="business">📊 Slide Deck</button>
              <button class="cat-option-btn video" data-navigate="video">🎬 Video <span class="coming-soon-badge">COMING SOON</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="cat-footer">eQOURSE × iFLYTEK — China Presentation 2026</div>
    </div>`;
}

// ── Slide Renderer ──
function renderSlide(slides, index, deckType) {
  const slide = slides[index];
  const total = slides.length;
  const progress = ((index + 1) / total) * 100;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const badgeClass = deckType === 'academics' ? 'academics' : 'business';
  const badgeLabel = deckType === 'academics' ? 'ACADEMICS' : 'BUSINESS';

  return `
    <div class="slide-screen">
      <div class="slide-header">
        <div class="slide-header-logo"><img src="/logo.png" alt="eQOURSE" /></div>
        <span class="slide-badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <div class="slide-content" key="${deckType}-${index}">
        <div>
          <div class="slide-title">${slide.title}</div>
          ${slide.subtitle ? `<div class="slide-subtitle">${slide.subtitle}</div>` : ''}
        </div>
        ${slide.content(index, total)}
      </div>
      <div class="slide-nav" style="position:relative">
        <div class="slide-nav-left">
          ${!isFirst ? `<button class="nav-btn ghost" data-action="prev">← Previous</button>` : ''}
          <button class="nav-btn ghost" data-navigate="category">← Back to Menu</button>
        </div>
        <span class="slide-counter">Slide ${index + 1} of ${total}</span>
        <div>
          ${isLast
            ? `<button class="nav-btn filled teal" data-navigate="category">Back to Menu →</button>`
            : `<button class="nav-btn filled" data-action="next">Next →</button>`
          }
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar ${badgeClass}" style="width:${progress}%"></div>
        </div>
      </div>
    </div>`;
}

// ── Video Coming Soon ──
function renderVideo() {
  return `
    <div class="video-screen">
      <div style="position:absolute;top:24px;left:32px">
        <button class="back-btn" data-navigate="category">← Back to Menu</button>
      </div>
      <div style="position:absolute;top:24px;right:32px" class="partnership-badge" style="position:static">iFLYTEK × eQOURSE</div>
      <div class="video-player-frame">
        <div class="play-btn-fake">▶</div>
        <div class="video-coming-text">COMING SOON</div>
        <div class="video-sub-text">Video presentation is being prepared</div>
      </div>
      <div class="video-info-cards">
        <div class="video-info-card">
          <span>📖</span>
          <div class="video-info-title">Academics Video</div>
          <span class="in-production-badge teal">IN PRODUCTION</span>
        </div>
        <div class="video-info-card">
          <span>💼</span>
          <div class="video-info-title">Business Video</div>
          <span class="in-production-badge navy">IN PRODUCTION</span>
        </div>
      </div>
      <div style="margin-top:32px;color:var(--text-muted);font-size:13px">eQOURSE × iFLYTEK — China Presentation 2026</div>
    </div>`;
}

// ── Event Binding ──
function bindEvents() {
  // Navigate buttons
  document.querySelectorAll('[data-navigate]').forEach(btn => {
    btn.onclick = () => {
      const target = btn.dataset.navigate;
      const direction = target === 'landing' ? 'left' : 'right';
      if (target === 'category') {
        currentSlideIndex = 0;
        currentDeck = null;
      }
      renderScreen(target, direction);
    };
  });

  // Deck select
  document.querySelectorAll('[data-deck]').forEach(btn => {
    btn.onclick = () => {
      currentDeck = btn.dataset.deck;
      currentSlideIndex = 0;
      renderScreen(currentDeck, 'right');
    };
  });

  // Prev / Next
  document.querySelectorAll('[data-action="next"]').forEach(btn => {
    btn.onclick = () => {
      const slides = currentDeck === 'academics' ? academicSlides : businessSlides;
      if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        renderScreen(currentDeck, 'right');
      }
    };
  });

  document.querySelectorAll('[data-action="prev"]').forEach(btn => {
    btn.onclick = () => {
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderScreen(currentDeck, 'left');
      }
    };
  });
}

// ── Keyboard Navigation ──
document.addEventListener('keydown', (e) => {
  if (currentScreen === 'academics' || currentScreen === 'business') {
    const slides = currentDeck === 'academics' ? academicSlides : businessSlides;
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        renderScreen(currentDeck, 'right');
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderScreen(currentDeck, 'left');
      }
    } else if (e.key === 'Escape') {
      currentSlideIndex = 0;
      currentDeck = null;
      renderScreen('category', 'left');
    }
  }
});

// ── Initialize ──
renderScreen('landing');
