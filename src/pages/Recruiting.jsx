import { useState } from 'react';
import { Briefcase, TrendingUp, Code, Clock, BookOpen, Target, Users, CheckCircle, ArrowRight, Building2 } from 'lucide-react';

const tracks = [
  {
    id: 'investment-banking',
    name: 'Investment Banking',
    icon: TrendingUp,
    color: '#10B981',
    description: 'Break into Wall Street and global financial institutions'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: Briefcase,
    color: '#8B5CF6',
    description: 'Join top strategy and management consulting firms'
  },
  {
    id: 'tech',
    name: 'Tech',
    icon: Code,
    color: '#3B82F6',
    description: 'Land product, strategy, or operations roles at tech companies'
  }
];

const trackContent = {
  'investment-banking': {
    title: 'Investment Banking Recruiting',
    subtitle: 'Your path to Wall Street starts before you even begin your MBA',
    hasPreMBA: true,
    timeline: [
      { period: 'March - May (Pre-MBA)', event: 'Networking begins - reach out to alumni at target banks', type: 'networking' },
      { period: 'May - July (Pre-MBA)', event: 'Pre-MBA recruiting events and diversity programs open', type: 'application' },
      { period: 'June - August (Pre-MBA)', event: 'Pre-MBA internship interviews for select candidates', type: 'interview' },
      { period: 'September (MBA Year 1)', event: 'On-campus recruiting officially kicks off', type: 'networking' },
      { period: 'October - November', event: 'First round interviews begin', type: 'interview' },
      { period: 'December - January', event: 'Superday interviews and offers extended', type: 'offer' }
    ],
    bestPractices: [
      {
        title: 'Master the 400 Questions',
        description: 'The "400 Investment Banking Interview Questions" is the gold standard for IB prep. These questions cover technical concepts (DCF, LBO, M&A), behavioral questions, and market knowledge. Start drilling these 3-4 months before interviews.',
        icon: BookOpen,
        highlight: true
      },
      {
        title: 'Build Your Story',
        description: 'Craft a compelling "Why IB?" and "Why this bank?" narrative. As an international student, highlight your global perspective, language skills, and understanding of emerging markets.',
        icon: Target
      },
      {
        title: 'Network Relentlessly',
        description: 'IB recruiting is relationship-driven. Reach out to alumni, attend bank presentations, and follow up professionally. Aim for 50+ informational calls before recruiting begins.',
        icon: Users
      },
      {
        title: 'Know Your Technicals',
        description: 'Be prepared to walk through a DCF, explain an LBO, and discuss recent M&A deals. Practice building models in Excel and be ready to discuss your valuation methodology.',
        icon: TrendingUp
      }
    ],
    tips: [
      'Start networking in March/April before your MBA starts',
      'Join your school\'s Finance Club immediately',
      'Apply to diversity programs (SEO, Sponsors for Educational Opportunity)',
      'Practice technicals daily - consistency beats cramming',
      'Prepare 3-5 deal discussions from different industries',
      'International students: highlight your regional expertise'
    ],
    companies: [
      { name: 'Barclays', logo: 'https://companieslogo.com/img/orig/BCS_BIG-ebb27c2e.png', careers: 'https://search.jobs.barclays/students-and-graduates' },
      { name: 'Bank of America', logo: 'https://companieslogo.com/img/orig/BAC_BIG-ec00dc98.png', careers: 'https://campus.bankofamerica.com/' },
      { name: 'J.P. Morgan', logo: 'https://download.logo.wine/logo/JPMorgan_Chase/JPMorgan_Chase-Logo.wine.png', careers: 'https://careers.jpmorgan.com/us/en/students' },
      { name: 'RBC', logo: 'https://download.logo.wine/logo/Royal_Bank_of_Canada/Royal_Bank_of_Canada-Logo.wine.png', careers: 'https://jobs.rbc.com/ca/en/students-new-grads' }
    ]
  },
  'consulting': {
    title: 'Consulting Recruiting',
    subtitle: 'Case interviews are your gateway to MBB and beyond',
    hasPreMBA: true,
    timeline: [
      { period: 'April - June (Pre-MBA)', event: 'Start case prep and networking with consultants', type: 'networking' },
      { period: 'July - August (Pre-MBA)', event: 'Pre-MBA diversity programs (MLT, Management Leadership for Tomorrow)', type: 'application' },
      { period: 'September (MBA Year 1)', event: 'Consulting clubs begin case workshops', type: 'networking' },
      { period: 'October - November', event: 'Applications open, coffee chats intensify', type: 'application' },
      { period: 'December - January', event: 'First round case interviews', type: 'interview' },
      { period: 'January - February', event: 'Final round interviews and offers', type: 'offer' }
    ],
    bestPractices: [
      {
        title: 'Case Interview Mastery',
        description: 'Consulting interviews are 50%+ case-based. Use frameworks like "Case in Point" by Marc Cosentino, practice 50+ cases, and do mock interviews weekly. Structure your approach: clarify, structure, analyze, recommend.',
        icon: BookOpen,
        highlight: true
      },
      {
        title: 'Develop Your Frameworks',
        description: 'Master profitability, market entry, M&A, and operations cases. Don\'t just memorize - understand when and how to apply each framework. The best candidates create custom structures.',
        icon: Target
      },
      {
        title: 'Practice Mental Math',
        description: 'You\'ll need to do calculations without a calculator. Practice percentages, growth rates, and market sizing daily. Being fast and accurate with numbers separates good from great candidates.',
        icon: TrendingUp
      },
      {
        title: 'Nail the Behavioral Fit',
        description: 'Firms want to see leadership, impact, and collaboration. Prepare 8-10 stories using the STAR method (Situation, Task, Action, Result) that demonstrate these qualities.',
        icon: Users
      }
    ],
    tips: [
      'Do at least 50 practice cases before interviews',
      'Join a case prep group - practice with peers weekly',
      'Read "Case in Point" and "Crack the Case System"',
      'Practice mental math 15 minutes daily',
      'Attend every firm presentation on campus',
      'International students: emphasize your global experience and language skills'
    ],
    companies: [
      { name: 'McKinsey', logo: 'https://1000logos.net/wp-content/uploads/2021/09/McKinsey-Logo.png', careers: 'https://www.mckinsey.com/careers/students' },
      { name: 'BCG', logo: 'https://1000logos.net/wp-content/uploads/2020/04/Boston-Consulting-Group-Logo.png', careers: 'https://careers.bcg.com/students' },
      { name: 'Bain', logo: 'https://1000logos.net/wp-content/uploads/2024/04/Bain-Company-Logo.png', careers: 'https://www.bain.com/careers/roles/mba/' },
      { name: 'L.E.K.', logo: 'https://vtlogo.com/wp-content/uploads/2020/07/lek-consulting-llc-vector-logo.png', careers: 'https://www.lek.com/join-lek/apply/mba' }
    ]
  },
  'tech': {
    title: 'Tech Recruiting',
    subtitle: 'Product, strategy, and operations roles at leading tech companies',
    hasPreMBA: false,
    timeline: [],
    bestPractices: [
      {
        title: 'Know the Role Types',
        description: 'Tech recruiting spans Product Management, Product Marketing, Strategy & Operations, and Corporate Development. Each requires different skills - understand what excites you and tailor your prep accordingly.',
        icon: Target
      },
      {
        title: 'Master Product Sense',
        description: 'For PM roles, practice product design questions ("Design an app for X"), metrics questions ("How would you measure success for Y?"), and strategy questions. Read "Cracking the PM Interview".',
        icon: BookOpen
      },
      {
        title: 'Build Technical Fluency',
        description: 'You don\'t need to code, but understanding APIs, databases, and how software is built helps you collaborate with engineers. Take a basic CS course or use resources like CS50.',
        icon: Code
      },
      {
        title: 'Develop a Product Portfolio',
        description: 'Write product reviews, do teardowns of apps you love, and document product ideas. This shows genuine passion and gives you concrete examples for interviews.',
        icon: TrendingUp
      }
    ],
    tips: [
      'Start networking early - reach out to employees at target companies before recruiting begins to build relationships and secure referrals',
      'Build relationships with tech club leaders and 2nd years who can provide warm introductions',
      'Apply broadly - tech hiring can be unpredictable, referrals significantly increase your chances',
      'Create a personal website showcasing your product thinking',
      'International students: research visa-friendly companies early and prioritize those with strong sponsorship track records',
      'Practice estimation and metrics questions regularly'
    ],
    note: 'Unlike IB and Consulting, tech has less structured pre-MBA recruiting. Most hiring happens during the school year, often through networking and referrals. Start building relationships with tech professionals and 2nd year students who recruited into tech.',
    companies: [
      { name: 'Amazon', logo: 'https://companieslogo.com/img/orig/AMZN_BIG-accd00da.png', careers: 'https://www.amazon.jobs/en/teams/internships-for-students' },
      { name: 'Google', logo: 'https://companieslogo.com/img/orig/google_BIG-532a9d4b.png', careers: 'https://www.google.com/about/careers/applications/students/' },
      { name: 'ServiceNow', logo: 'https://www.liblogo.com/img-logo/max/se8823fb43-servicenow-logo-file-servicenow-logo-svg-liblogo.png', careers: 'https://www.servicenow.com/careers/early-career.html' },
      { name: 'Adobe', logo: 'https://companieslogo.com/img/orig/ADBE_BIG-1544171f.png', careers: 'https://www.adobe.com/careers/university.html' }
    ]
  }
};

export default function Recruiting() {
  const [selectedTrack, setSelectedTrack] = useState('investment-banking');
  const content = trackContent[selectedTrack];
  const selectedTrackInfo = tracks.find(t => t.id === selectedTrack);

  return (
    <div className="recruiting-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-badge">
          <Briefcase size={16} />
          <span>Career Preparation</span>
        </div>
        <h1>MBA Recruiting Guide</h1>
        <p>
          Start preparing for recruiting before you even set foot on campus.
          International students who prepare early have a significant advantage.
        </p>
      </div>

      {/* Track Selector */}
      <div className="track-selector">
        <h2>Choose Your Track</h2>
        <div className="track-cards">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`track-card ${isSelected ? 'selected' : ''}`}
                style={{ '--track-color': track.color }}
              >
                <div className="track-icon" style={{ background: `${track.color}15`, color: track.color }}>
                  <Icon size={24} />
                </div>
                <h3>{track.name}</h3>
                <p>{track.description}</p>
                {isSelected && <div className="selected-indicator" style={{ background: track.color }} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Track Content */}
      <div className="track-content">
        <div className="content-header" style={{ borderColor: selectedTrackInfo.color }}>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>

        {/* Timeline (for IB and Consulting) */}
        {content.hasPreMBA && (
          <div className="timeline-section">
            <div className="section-header">
              <Clock size={20} style={{ color: selectedTrackInfo.color }} />
              <h3>Pre-MBA & Year 1 Timeline</h3>
            </div>
            <div className="timeline">
              {content.timeline.map((item, index) => (
                <div key={index} className={`timeline-item ${item.type}`}>
                  <div className="timeline-marker" style={{
                    background: item.type === 'offer' ? '#10B981' :
                               item.type === 'interview' ? '#F59E0B' :
                               item.type === 'application' ? '#3B82F6' : '#8B5CF6'
                  }} />
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-event">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="timeline-legend">
              <span><span className="legend-dot" style={{ background: '#8B5CF6' }} /> Networking</span>
              <span><span className="legend-dot" style={{ background: '#3B82F6' }} /> Application</span>
              <span><span className="legend-dot" style={{ background: '#F59E0B' }} /> Interview</span>
              <span><span className="legend-dot" style={{ background: '#10B981' }} /> Offer</span>
            </div>
          </div>
        )}

        {/* Note for Tech */}
        {content.note && (
          <div className="track-note">
            <div className="note-icon">
              <Target size={20} />
            </div>
            <p>{content.note}</p>
          </div>
        )}

        {/* Best Practices */}
        <div className="practices-section">
          <div className="section-header">
            <CheckCircle size={20} style={{ color: selectedTrackInfo.color }} />
            <h3>Best Practices</h3>
          </div>
          <div className="practices-grid">
            {content.bestPractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <div key={index} className={`practice-card ${practice.highlight ? 'highlight' : ''}`}
                     style={{ '--highlight-color': selectedTrackInfo.color }}>
                  <div className="practice-icon" style={{ color: selectedTrackInfo.color }}>
                    <Icon size={20} />
                  </div>
                  <h4>{practice.title}</h4>
                  <p>{practice.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="tips-section">
          <div className="section-header">
            <ArrowRight size={20} style={{ color: selectedTrackInfo.color }} />
            <h3>Quick Tips for International Students</h3>
          </div>
          <ul className="tips-list">
            {content.tips.map((tip, index) => (
              <li key={index}>
                <CheckCircle size={16} style={{ color: selectedTrackInfo.color }} />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Companies Section */}
      <div className="companies-section">
        <div className="section-header">
          <Building2 size={20} style={{ color: selectedTrackInfo.color }} />
          <h3>Top Companies That Actively Recruit International Students</h3>
        </div>
        <p className="companies-subtitle">
          Click to visit their careers page for students and MBA candidates
        </p>
        <div className="companies-grid">
          {content.companies.map((company, index) => (
            <a
              key={index}
              href={company.careers}
              target="_blank"
              rel="noopener noreferrer"
              className="company-card"
            >
              <img
                src={company.logo}
                alt={company.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="company-fallback" style={{ display: 'none' }}>
                <Building2 size={24} style={{ color: '#94a3b8' }} />
              </div>
              <span>{company.name}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .recruiting-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px 80px;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .page-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 100px;
          color: #10B981;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .page-header p {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Track Selector */
        .track-selector {
          margin-bottom: 48px;
        }

        .track-selector h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
          text-align: center;
        }

        .track-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .track-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .track-card:hover {
          border-color: var(--track-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .track-card.selected {
          border-color: var(--track-color);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .track-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .track-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .track-card p {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        .selected-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        /* Content Section */
        .track-content {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 48px;
        }

        .content-header {
          border-left: 4px solid;
          padding-left: 20px;
          margin-bottom: 32px;
        }

        .content-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .content-header p {
          font-size: 1rem;
          color: #64748b;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .section-header h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
        }

        /* Timeline */
        .timeline-section {
          margin-bottom: 40px;
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .timeline {
          position: relative;
          padding-left: 24px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #e2e8f0;
        }

        .timeline-item {
          position: relative;
          padding-bottom: 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -24px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #e2e8f0;
        }

        .timeline-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .timeline-period {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
        }

        .timeline-event {
          font-size: 0.95rem;
          color: #0f172a;
          line-height: 1.5;
        }

        .timeline-legend {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .timeline-legend span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #64748b;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        /* Track Note */
        .track-note {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          margin-bottom: 32px;
        }

        .note-icon {
          color: #3B82F6;
          flex-shrink: 0;
        }

        .track-note p {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.7;
        }

        /* Practices */
        .practices-section {
          margin-bottom: 32px;
        }

        .practices-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .practice-card {
          padding: 24px;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .practice-card.highlight {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(139, 92, 246, 0.05));
          border-color: var(--highlight-color);
        }

        .practice-icon {
          margin-bottom: 12px;
        }

        .practice-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .practice-card p {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Tips */
        .tips-section {
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .tips-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .tips-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.5;
        }

        .tips-list li svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Companies */
        .companies-section {
          text-align: center;
        }

        .companies-section .section-header {
          justify-content: center;
        }

        .companies-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 32px;
        }

        .companies-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .company-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
          min-height: 140px;
        }

        .company-card:hover {
          border-color: #10B981;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.15);
          transform: translateY(-4px);
        }

        .company-card img {
          height: 60px;
          width: 140px;
          object-fit: contain;
        }

        .company-fallback {
          height: 60px;
          width: 140px;
          align-items: center;
          justify-content: center;
        }

        .company-card span {
          font-size: 1rem;
          font-weight: 600;
          color: #334155;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .track-cards {
            grid-template-columns: 1fr;
          }

          .practices-grid {
            grid-template-columns: 1fr;
          }

          .companies-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .recruiting-page {
            padding: 90px 16px 60px;
          }

          .page-header h1 {
            font-size: 2rem;
          }

          .track-content {
            padding: 20px;
          }

          .timeline-legend {
            flex-direction: column;
            gap: 8px;
          }

          .companies-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .company-card {
            padding: 20px 16px;
            min-height: 120px;
          }

          .company-card img {
            height: 50px;
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
}
