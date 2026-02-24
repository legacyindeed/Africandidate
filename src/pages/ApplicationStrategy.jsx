import { Clock, Users, Search, Calendar, MessageSquare, Target, BarChart3, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

// School tiers based on common MBA rankings
const schoolTiers = {
  m7: [
    { name: 'Harvard Business School', shortName: 'HBS' },
    { name: 'Stanford GSB', shortName: 'Stanford' },
    { name: 'Wharton School', shortName: 'Wharton' },
    { name: 'Booth School of Business', shortName: 'Booth' },
    { name: 'Kellogg School of Management', shortName: 'Kellogg' },
    { name: 'MIT Sloan', shortName: 'MIT Sloan' },
    { name: 'Columbia Business School', shortName: 'Columbia' },
  ],
  t15: [
    { name: 'Tuck School of Business', shortName: 'Tuck' },
    { name: 'Yale School of Management', shortName: 'Yale SOM' },
    { name: 'Haas School of Business', shortName: 'Haas' },
    { name: 'Ross School of Business', shortName: 'Ross' },
    { name: 'Fuqua School of Business', shortName: 'Fuqua' },
    { name: 'Stern School of Business', shortName: 'Stern' },
    { name: 'Darden School of Business', shortName: 'Darden' },
    { name: 'Johnson Graduate School of Management', shortName: 'Cornell Johnson' },
  ],
  t25: [
    { name: 'Georgetown McDonough', shortName: 'McDonough' },
    { name: 'Notre Dame Mendoza', shortName: 'Mendoza' },
    { name: 'UNC Kenan-Flagler', shortName: 'Kenan-Flagler' },
    { name: 'UCLA Anderson', shortName: 'Anderson' },
    { name: 'USC Marshall', shortName: 'Marshall' },
    { name: 'Carnegie Mellon Tepper', shortName: 'Tepper' },
    { name: 'UT Austin McCombs', shortName: 'McCombs' },
    { name: 'Emory Goizueta', shortName: 'Goizueta' },
  ],
};

const sections = [
  {
    id: 1,
    title: 'Before You Even Open an Application Portal',
    icon: Clock,
    color: '#10B981',
  },
  {
    id: 2,
    title: 'Engaging Your Recommenders Early',
    icon: Users,
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Researching and Tracking Your Target Schools',
    icon: Search,
    color: '#3B82F6',
  },
  {
    id: 4,
    title: 'Admissions Events and Information Sessions',
    icon: Calendar,
    color: '#F59E0B',
  },
  {
    id: 5,
    title: 'Reaching Out to Alums and Current Students',
    icon: MessageSquare,
    color: '#EC4899',
  },
  {
    id: 6,
    title: 'Building Your School List — A Deliberate Portfolio',
    icon: Target,
    color: '#10B981',
  },
  {
    id: 7,
    title: 'Study the Admitted Class Data',
    icon: BarChart3,
    color: '#6366F1',
  },
];

export default function ApplicationStrategy() {
  return (
    <div className="strategy-page">
      {/* Background Blobs */}
      <div className="blob blob-emerald" />
      <div className="blob blob-pink" />
      <div className="blob blob-amber" />

      <div className="strategy-container">
        {/* Hero Section */}
        <header className="strategy-hero">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Application Strategy Guide</span>
          </div>
          <h1 className="hero-title">
            The MBA Application Strategy <br />
            <span className="hero-highlight">Most Candidates Overlook</span>
          </h1>
          <p className="hero-subtitle">
            Getting into a top business school isn't just about a strong GMAT score and a polished essay.
            The candidates who consistently earn admission to M7 and T15 programs are the ones who treat
            the application process as a <strong>12 to 18 month strategic campaign</strong>, not a 6-week sprint.
            Here is what that strategy actually looks like.
          </p>
        </header>

        {/* Quick Navigation */}
        <nav className="section-nav">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#section-${section.id}`}
              className="nav-item"
            >
              <section.icon size={16} style={{ color: section.color }} />
              <span>{section.id}</span>
            </a>
          ))}
        </nav>

        {/* Section 1 */}
        <section id="section-1" className="content-section">
          <div className="section-header">
            <div className="section-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
              <Clock size={24} />
            </div>
            <div>
              <span className="section-number">Section 1</span>
              <h2>Before You Even Open an Application Portal</h2>
            </div>
          </div>
          <div className="section-content">
            <p>
              <strong>Start earlier than you think you need to.</strong> Your GRE or GMAT score should be locked in
              at least <strong>6 months before</strong> your target application round opens. This gives you time to
              retake if needed, request score waivers where eligible, and remove test prep from your mental load
              during the high-stakes writing season.
            </p>
            <div className="highlight-box">
              <AlertCircle size={20} />
              <div>
                <strong>Score Waiver Strategy</strong>
                <p>
                  The score waiver process is worth exploring seriously. Many schools have formalized this, and a
                  well-made case for a waiver—especially for candidates with strong quantitative professional records—can
                  succeed. Research each school's specific waiver criteria and make a deliberate decision rather than
                  assuming it isn't available to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="content-section">
          <div className="section-header">
            <div className="section-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
              <Users size={24} />
            </div>
            <div>
              <span className="section-number">Section 2</span>
              <h2>Engaging Your Recommenders Early</h2>
            </div>
          </div>
          <div className="section-content">
            <p>
              <strong>Your recommenders are not a checkbox. They are co-authors of your candidacy.</strong> Most top
              programs require 2 to 3 letters of recommendation, and the strongest letters almost always come from
              people who have directly supervised your work or observed you from a leadership position.
            </p>

            <div className="recommender-grid">
              <div className="recommender-card good">
                <CheckCircle size={20} />
                <h4>Strong Recommenders</h4>
                <ul>
                  <li>Direct manager</li>
                  <li>Senior stakeholder you've worked closely with</li>
                  <li>Leader who can speak to your growth and impact</li>
                  <li>Former manager who knew your work well</li>
                </ul>
              </div>
              <div className="recommender-card avoid">
                <AlertCircle size={20} />
                <h4>Avoid If Possible</h4>
                <ul>
                  <li>Peer recommendations (rarely carry same weight)</li>
                  <li>Colleagues at the same level</li>
                  <li>People who can only speak generally</li>
                </ul>
              </div>
            </div>

            <div className="timeline-box">
              <h4>Recommender Timeline</h4>
              <div className="timeline-steps">
                <div className="step">
                  <span className="step-time">4-6 months before</span>
                  <span className="step-action">Approach your recommenders</span>
                </div>
                <div className="step">
                  <span className="step-time">3-4 months before</span>
                  <span className="step-action">Share your career narrative, target schools, and specific examples</span>
                </div>
                <div className="step">
                  <span className="step-time">1-2 weeks before deadline</span>
                  <span className="step-action">Give them internal deadlines (ahead of actual deadline)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="content-section">
          <div className="section-header">
            <div className="section-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>
              <Search size={24} />
            </div>
            <div>
              <span className="section-number">Section 3</span>
              <h2>Researching and Tracking Your Target Schools</h2>
            </div>
          </div>
          <div className="section-content">
            <p>
              <strong>Treat your school list like an investment portfolio.</strong> You need to know what you're
              holding and why. Build a tracking system—a spreadsheet works well—that captures:
            </p>
            <ul className="checklist">
              <li><CheckCircle size={16} /> Application deadlines by round</li>
              <li><CheckCircle size={16} /> Essay prompts</li>
              <li><CheckCircle size={16} /> Scholarship deadlines</li>
              <li><CheckCircle size={16} /> Application updates released mid-cycle</li>
              <li><CheckCircle size={16} /> Notes from your research</li>
            </ul>
            <div className="tip-box">
              <strong>Pro Tip:</strong> Subscribe to admissions blogs and set alerts for each school. When schools
              update their essay prompts or release new admissions data, you want to be among the first to know—not
              scrambling two weeks before the deadline.
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="content-section">
          <div className="section-header">
            <div className="section-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
              <Calendar size={24} />
            </div>
            <div>
              <span className="section-number">Section 4</span>
              <h2>Admissions Events and Information Sessions</h2>
            </div>
          </div>
          <div className="section-content">
            <p>
              <strong>Show up to admissions calls, virtual events, and campus visits—and show up prepared.</strong> These
              are not passive information sessions. Research each school thoroughly before attending and come with
              1 to 2 specific, well-considered questions that reflect genuine curiosity about the program.
            </p>
            <div className="comparison-box">
              <div className="comparison-item good">
                <h4>Questions That Impress</h4>
                <ul>
                  <li>Asking about a specific faculty research area</li>
                  <li>Inquiring about a club initiative you researched</li>
                  <li>How a recent curriculum change affects your target track</li>
                </ul>
              </div>
              <div className="comparison-item bad">
                <h4>Questions to Avoid</h4>
                <ul>
                  <li>Anything easily answered on the school website</li>
                  <li>Generic questions about class size or location</li>
                  <li>Questions that show you haven't done homework</li>
                </ul>
              </div>
            </div>
            <p className="emphasis">
              Admissions officers notice engaged candidates. Your questions signal how seriously you have done your homework.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="content-section">
          <div className="section-header">
            <div className="section-icon" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#EC4899' }}>
              <MessageSquare size={24} />
            </div>
            <div>
              <span className="section-number">Section 5</span>
              <h2>Reaching Out to Alums and Current Students</h2>
            </div>
          </div>
          <div className="section-content">
            <p>
              <strong>Informational conversations with current students and alumni are one of the most underutilized
              tools in the process.</strong> These conversations give you insight into the real culture of a program—the
              things that don't appear in brochures. They also help you write far more specific and compelling
              "Why School X" essays.
            </p>
            <div className="action-steps">
              <div className="action-step">
                <span className="step-number">1</span>
                <div>
                  <strong>Find contacts</strong>
                  <p>Reach out via LinkedIn or your undergraduate alumni network</p>
                </div>
              </div>
              <div className="action-step">
                <span className="step-number">2</span>
                <div>
                  <strong>Be respectful</strong>
                  <p>Keep your ask brief, come with specific questions</p>
                </div>
              </div>
              <div className="action-step">
                <span className="step-number">3</span>
                <div>
                  <strong>Follow up</strong>
                  <p>Send a thank-you note afterward</p>
                </div>
              </div>
            </div>
            <div className="target-box">
              <Target size={20} />
              <span>Aim for <strong>2-3 conversations per school</strong> you are serious about</span>
            </div>
          </div>
        </section>

        {/* Section 6 - School Portfolio */}
        <section id="section-6" className="content-section">
          <div className="section-header">
            <div className="section-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
              <Target size={24} />
            </div>
            <div>
              <span className="section-number">Section 6</span>
              <h2>Building Your School List — A Deliberate Portfolio</h2>
            </div>
          </div>
          <div className="section-content">
            <p>
              <strong>Avoid the trap of applying everywhere or applying nowhere strategic.</strong> A well-constructed
              list of 7 schools balances ambition with probability.
            </p>

            <div className="portfolio-table">
              <div className="portfolio-tier tier-m7">
                <div className="tier-header">
                  <div className="tier-badge m7">M7</div>
                  <div className="tier-info">
                    <h4>2 Schools — Your Reach</h4>
                    <p>Apply only if your profile is genuinely competitive. Be honest with yourself.</p>
                  </div>
                </div>
                <div className="school-tags">
                  {schoolTiers.m7.map((school) => (
                    <span key={school.shortName} className="school-tag">{school.shortName}</span>
                  ))}
                </div>
              </div>

              <div className="portfolio-tier tier-t15">
                <div className="tier-header">
                  <div className="tier-badge t15">T15</div>
                  <div className="tier-info">
                    <h4>3 Schools — Your Core</h4>
                    <p>Strong institutional brand, high fit, realistic probability.</p>
                  </div>
                </div>
                <div className="school-tags">
                  {schoolTiers.t15.map((school) => (
                    <span key={school.shortName} className="school-tag">{school.shortName}</span>
                  ))}
                </div>
              </div>

              <div className="portfolio-tier tier-t25">
                <div className="tier-header">
                  <div className="tier-badge t25">T25</div>
                  <div className="tier-info">
                    <h4>2 Schools — Your Foundation</h4>
                    <p>Schools where you are a strong candidate and would genuinely attend.</p>
                  </div>
                </div>
                <div className="school-tags">
                  {schoolTiers.t25.map((school) => (
                    <span key={school.shortName} className="school-tag">{school.shortName}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="warning-box">
              <AlertCircle size={20} />
              <div>
                <strong>The Critical Question</strong>
                <p>
                  The research you do on each school should answer one question: <strong>Would I actually go here
                  if admitted?</strong> If the answer is no, remove it from your list. Applying to a school you are
                  not serious about wastes your time, your recommenders' goodwill, and the application fee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="content-section">
          <div className="section-header">
            <div className="section-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366F1' }}>
              <BarChart3 size={24} />
            </div>
            <div>
              <span className="section-number">Section 7</span>
              <h2>Study the Admitted Class Data</h2>
            </div>
          </div>
          <div className="section-content">
            <p>
              <strong>Before finalizing any school on your list, review the admissions profile of the most recently
              admitted class.</strong> This data tells you where you are genuinely competitive—and it saves you from
              wasting a round on a school that is structurally a poor fit for your profile right now.
            </p>
            <div className="data-points">
              <div className="data-point">
                <span className="data-label">GMAT/GRE</span>
                <span className="data-desc">Median scores</span>
              </div>
              <div className="data-point">
                <span className="data-label">GPA</span>
                <span className="data-desc">Average GPA</span>
              </div>
              <div className="data-point">
                <span className="data-label">Industry</span>
                <span className="data-desc">Representation breakdown</span>
              </div>
              <div className="data-point">
                <span className="data-label">Experience</span>
                <span className="data-desc">Average years of work</span>
              </div>
            </div>
            <div className="tip-box">
              <strong>Research Resources:</strong> Some schools publish detailed class profiles. Others share less.
              Use what is available, supplement with data from resources like <strong>Poets & Quants</strong>, and
              calibrate your list accordingly.
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="closing-section">
          <div className="closing-content">
            <h2>Start Now</h2>
            <p>
              The candidates who get in are not always the ones with the highest scores. They are the ones who
              treated the process with the seriousness it deserves: <strong>early, systematic, and with genuine intention.</strong>
            </p>
            <a href="/mba-schools" className="cta-button">
              <span>Explore Top 30 MBA Schools</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </div>

      <style>{`
        .strategy-page {
          min-height: 100vh;
          position: relative;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          z-index: 0;
          pointer-events: none;
        }

        .blob-emerald {
          width: 400px;
          height: 400px;
          background: #6ee7b7;
          top: -150px;
          left: -150px;
        }

        .blob-pink {
          width: 500px;
          height: 500px;
          background: #fbcfe8;
          bottom: 20%;
          right: -200px;
        }

        .blob-amber {
          width: 400px;
          height: 400px;
          background: #fef3c7;
          top: 40%;
          left: -100px;
        }

        .strategy-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 24px 80px;
          position: relative;
          z-index: 10;
        }

        /* Hero Section */
        .strategy-hero {
          text-align: center;
          margin-bottom: 48px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #ecfdf5;
          border: 1px solid #d1fae5;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #064e3b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-highlight {
          color: #10b981;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Section Navigation */
        .section-nav {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          border-color: #10b981;
          color: #10b981;
          transform: translateY(-2px);
        }

        /* Content Sections */
        .content-section {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .section-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .section-number {
          font-size: 0.75rem;
          font-weight: 600;
          color: #10b981;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 4px;
        }

        .section-content p {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .section-content p strong {
          color: #0f172a;
        }

        /* Highlight Box */
        .highlight-box {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: #fef3c7;
          border-radius: 12px;
          margin-top: 20px;
        }

        .highlight-box svg {
          color: #f59e0b;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .highlight-box strong {
          display: block;
          color: #92400e;
          margin-bottom: 8px;
        }

        .highlight-box p {
          color: #78350f;
          margin: 0;
          font-size: 0.95rem;
        }

        /* Recommender Grid */
        .recommender-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin: 24px 0;
        }

        .recommender-card {
          padding: 20px;
          border-radius: 12px;
        }

        .recommender-card.good {
          background: #ecfdf5;
          border: 1px solid #d1fae5;
        }

        .recommender-card.good svg {
          color: #10b981;
        }

        .recommender-card.good h4 {
          color: #065f46;
        }

        .recommender-card.avoid {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .recommender-card.avoid svg {
          color: #ef4444;
        }

        .recommender-card.avoid h4 {
          color: #991b1b;
        }

        .recommender-card h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          margin-bottom: 12px;
        }

        .recommender-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recommender-card li {
          font-size: 0.9rem;
          color: #475569;
          padding: 6px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .recommender-card li:last-child {
          border-bottom: none;
        }

        /* Timeline Box */
        .timeline-box {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          margin-top: 20px;
        }

        .timeline-box h4 {
          font-size: 1rem;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .timeline-steps {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .step {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .step-time {
          font-size: 0.8rem;
          font-weight: 600;
          color: #10b981;
          min-width: 140px;
        }

        .step-action {
          font-size: 0.9rem;
          color: #475569;
        }

        /* Checklist */
        .checklist {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: #475569;
          border-bottom: 1px solid #f1f5f9;
        }

        .checklist li svg {
          color: #10b981;
          flex-shrink: 0;
        }

        /* Tip Box */
        .tip-box {
          background: #f0fdf4;
          border-left: 4px solid #10b981;
          padding: 16px 20px;
          border-radius: 0 12px 12px 0;
          margin-top: 20px;
          font-size: 0.95rem;
          color: #166534;
        }

        /* Comparison Box */
        .comparison-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin: 24px 0;
        }

        .comparison-item {
          padding: 20px;
          border-radius: 12px;
        }

        .comparison-item.good {
          background: #ecfdf5;
        }

        .comparison-item.good h4 {
          color: #065f46;
        }

        .comparison-item.bad {
          background: #fef2f2;
        }

        .comparison-item.bad h4 {
          color: #991b1b;
        }

        .comparison-item h4 {
          font-size: 0.95rem;
          margin-bottom: 12px;
        }

        .comparison-item ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .comparison-item li {
          font-size: 0.85rem;
          color: #475569;
          padding: 6px 0;
        }

        .emphasis {
          font-style: italic;
          color: #64748b !important;
        }

        /* Action Steps */
        .action-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0;
        }

        .action-step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: #10b981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .action-step strong {
          display: block;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .action-step p {
          margin: 0;
          font-size: 0.9rem;
        }

        /* Target Box */
        .target-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #ede9fe;
          border-radius: 12px;
          margin-top: 20px;
          color: #5b21b6;
          font-size: 0.95rem;
        }

        /* Portfolio Table */
        .portfolio-table {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0;
        }

        .portfolio-tier {
          padding: 24px;
          border-radius: 16px;
        }

        .tier-m7 {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 1px solid #fcd34d;
        }

        .tier-t15 {
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          border: 1px solid #a5b4fc;
        }

        .tier-t25 {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border: 1px solid #6ee7b7;
        }

        .tier-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .tier-badge {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .tier-badge.m7 {
          background: #fbbf24;
          color: #78350f;
        }

        .tier-badge.t15 {
          background: #818cf8;
          color: white;
        }

        .tier-badge.t25 {
          background: #10b981;
          color: white;
        }

        .tier-info h4 {
          font-size: 1rem;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .tier-info p {
          font-size: 0.85rem;
          color: #475569;
          margin: 0;
        }

        .school-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .school-tag {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #0f172a;
        }

        /* Warning Box */
        .warning-box {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          margin-top: 20px;
        }

        .warning-box svg {
          color: #ef4444;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .warning-box strong {
          display: block;
          color: #991b1b;
          margin-bottom: 8px;
        }

        .warning-box p {
          color: #7f1d1d;
          margin: 0;
          font-size: 0.95rem;
        }

        /* Data Points */
        .data-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin: 24px 0;
        }

        .data-point {
          background: #f8fafc;
          padding: 16px;
          border-radius: 12px;
          text-align: center;
        }

        .data-label {
          display: block;
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .data-desc {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* Closing Section */
        .closing-section {
          background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          margin-top: 48px;
        }

        .closing-content h2 {
          font-size: 2rem;
          color: white;
          margin-bottom: 16px;
        }

        .closing-content p {
          color: #a7f3d0;
          font-size: 1.05rem;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto 24px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: white;
          color: #065f46;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .strategy-container {
            padding: 90px 16px 60px;
          }

          .hero-title {
            font-size: 1.8rem;
          }

          .content-section {
            padding: 24px 20px;
          }

          .section-header {
            flex-direction: column;
            gap: 12px;
          }

          .section-header h2 {
            font-size: 1.2rem;
          }

          .step {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .step-time {
            min-width: auto;
          }

          .tier-header {
            flex-direction: column;
            gap: 12px;
          }

          .closing-section {
            padding: 32px 20px;
          }

          .closing-content h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
