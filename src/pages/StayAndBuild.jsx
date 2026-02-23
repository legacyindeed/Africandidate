import { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Check, X, AlertCircle, HelpCircle, Plane, BookOpen, Briefcase, GraduationCap, FileCheck, CreditCard, Building2, Flag, Clock, DollarSign, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

// E-2 Treaty Countries
const E2_TREATY_COUNTRIES = [
  'Argentina', 'Australia', 'Austria', 'Belgium', 'Bolivia', 'Bulgaria', 'Cameroon',
  'Canada', 'Chile', 'China (Taiwan)', 'Colombia', 'Costa Rica', 'Croatia', 'Czech Republic',
  'Democratic Republic of Congo', 'Denmark', 'Ecuador', 'Egypt', 'Estonia', 'Ethiopia',
  'Finland', 'France', 'Germany', 'Greece', 'Honduras', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'South Korea', 'Kosovo', 'Kyrgyzstan',
  'Latvia', 'Liberia', 'Lithuania', 'Luxembourg', 'Mexico', 'Moldova', 'Mongolia', 'Montenegro',
  'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'North Macedonia', 'Norway', 'Oman',
  'Pakistan', 'Panama', 'Paraguay', 'Philippines', 'Poland', 'Portugal', 'Romania', 'Senegal',
  'Serbia', 'Singapore', 'Slovak Republic', 'Slovenia', 'Spain', 'Sri Lanka', 'Suriname',
  'Sweden', 'Switzerland', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
  'Ukraine', 'United Kingdom', 'Vietnam'
];

const AFRICAN_COUNTRIES = [
  'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon',
  'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Côte d\'Ivoire',
  'Democratic Republic of Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea',
  'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Kenya',
  'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius',
  'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Republic of Congo', 'Rwanda',
  'São Tomé and Príncipe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa',
  'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
];

const OTHER_COUNTRIES = [
  'Afghanistan', 'Albania', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Brazil', 'Bulgaria', 'Cambodia',
  'Canada', 'Chile', 'China', 'China (Taiwan)', 'Colombia', 'Costa Rica', 'Croatia', 'Cuba',
  'Czech Republic', 'Denmark', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Estonia',
  'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Guatemala', 'Guyana', 'Haiti',
  'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
  'Laos', 'Latvia', 'Lebanon', 'Lithuania', 'Luxembourg', 'Malaysia', 'Mexico', 'Moldova',
  'Mongolia', 'Montenegro', 'Myanmar', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua',
  'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea',
  'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
  'Saudi Arabia', 'Serbia', 'Singapore', 'Slovak Republic', 'Slovenia', 'South Korea', 'Spain',
  'Sri Lanka', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Thailand', 'Trinidad and Tobago',
  'Turkey', 'Turkmenistan', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay',
  'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen'
];

const ALL_COUNTRIES = [...new Set([...AFRICAN_COUNTRIES, ...OTHER_COUNTRIES])].sort();

const faqData = [
  {
    question: 'Can I switch from F-1 to H-1B while still in school?',
    answer: 'Technically yes, but it\'s rare. H-1B visas are for full-time work, and you can\'t work full-time while maintaining full-time student status. Most people wait until after graduation to apply for H-1B.'
  },
  {
    question: 'What happens if I don\'t get selected in the H-1B lottery?',
    answer: 'If you still have OPT time left (especially the STEM extension), you can keep working and try again next year. If your OPT expires and you\'re not selected, you\'ll need to leave the US or find another visa status.'
  },
  {
    question: 'Can I work remotely for a non-US company while on F-1/OPT?',
    answer: 'This is a gray area. On OPT, your work must be directly related to your degree, and technically the employer should have a US presence. Always check with an immigration lawyer before doing this.'
  },
  {
    question: 'Do I need a lawyer to apply for OPT or H-1B?',
    answer: 'For OPT, no — your university\'s international office will guide you. For H-1B, your employer typically hires an immigration lawyer. For O-1 or E-2, you\'ll definitely want a lawyer.'
  },
  {
    question: 'Can my spouse work if I\'m on F-1/OPT?',
    answer: 'If your spouse is on an F-2 visa, they cannot work at all. If you later switch to H-1B, your spouse can get an H-4 visa and may be eligible for H-4 EAD (work authorization).'
  }
];

// Stage colors - updated to use green as primary
const stageColors = {
  f1: { primary: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #059669)' },
  cpt: { primary: '#FBBF24', gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B)' },
  opt: { primary: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #6366F1)' },
  workVisa: { primary: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)' },
  credit: { primary: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #14B8A6)' },
  taxes: { primary: '#F59E0B', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)' }
};

// Link Card Component
function LinkCard({ links, title = "Helpful Resources" }) {
  return (
    <div className="link-card">
      <h4>
        <ExternalLink size={16} />
        {title}
      </h4>
      <div className="link-list">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <div>
              <div className="link-title">{link.title}</div>
              <div className="link-desc">{link.description}</div>
            </div>
            <ExternalLink size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}

// Info Card Component
function InfoCard({ title, children, variant = 'default', icon: Icon }) {
  return (
    <div className={`info-card ${variant}`}>
      {title && (
        <div className="info-card-header">
          {Icon && <Icon size={18} />}
          <h4>{title}</h4>
        </div>
      )}
      <div className="info-card-content">
        {children}
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button onClick={onToggle} className="faq-trigger">
        <span>{question}</span>
        <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="faq-answer-content">{answer}</div>
      </div>
    </div>
  );
}

// Quiz Result Card
function VisaResultCard({ name, status, reason }) {
  const statusConfig = {
    likely: { className: 'likely', label: 'Likely', icon: Check },
    possibly: { className: 'possibly', label: 'Maybe', icon: AlertCircle },
    unlikely: { className: 'unlikely', label: 'Unlikely', icon: X },
    not: { className: 'not', label: 'No', icon: X }
  };
  const config = statusConfig[status] || statusConfig.not;
  const StatusIcon = config.icon;

  return (
    <div className={`visa-result ${config.className}`}>
      <div className="visa-result-icon">
        <StatusIcon size={16} />
      </div>
      <div className="visa-result-content">
        <div className="visa-result-header">
          <h4>{name}</h4>
          <span className="visa-status-badge">{config.label}</span>
        </div>
        <p>{reason}</p>
      </div>
    </div>
  );
}

export default function StayAndBuild() {
  const [activeStage, setActiveStage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const timelineRef = useRef(null);

  // Quiz state
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({
    nationality: '',
    isStem: null,
    workedMultinational: null,
    interestedBusiness: null,
    hasExtraordinary: null
  });
  const [showResults, setShowResults] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const filteredCountries = countrySearch
    ? ALL_COUNTRIES.filter(c => c.toLowerCase().includes(countrySearch.toLowerCase()))
    : ALL_COUNTRIES;

  const handleQuizAnswer = (field, value) => {
    setQuizAnswers(prev => ({ ...prev, [field]: value }));
    if (quizStep < 4) {
      setTimeout(() => setQuizStep(quizStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleCountrySelect = (country) => {
    setQuizAnswers(prev => ({ ...prev, nationality: country }));
    setCountrySearch(country);
    setShowCountryDropdown(false);
    setTimeout(() => setQuizStep(1), 300);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({ nationality: '', isStem: null, workedMultinational: null, interestedBusiness: null, hasExtraordinary: null });
    setShowResults(false);
    setCountrySearch('');
  };

  const getQuizResults = () => {
    const { nationality, isStem, workedMultinational, interestedBusiness, hasExtraordinary } = quizAnswers;
    const isE2Country = E2_TREATY_COUNTRIES.includes(nationality);
    const isTNEligible = nationality === 'Canada' || nationality === 'Mexico';

    return {
      h1b: { status: 'likely', reason: isStem ? 'STEM OPT gives you 3 lottery chances.' : 'You can apply through the annual lottery.' },
      tn: { status: isTNEligible ? 'likely' : 'not', reason: isTNEligible ? 'No lottery required for Canadians/Mexicans!' : 'Only for Canadian/Mexican citizens.' },
      l1: { status: workedMultinational ? 'possibly' : 'not', reason: workedMultinational ? 'Your multinational experience may qualify you.' : 'Requires 1+ year at a multinational.' },
      e2: { status: (isE2Country && interestedBusiness) ? 'possibly' : 'not', reason: isE2Country ? 'Your country has a treaty. Investment required.' : 'No E-2 treaty with your country.' },
      o1: { status: hasExtraordinary ? 'possibly' : 'unlikely', reason: hasExtraordinary ? 'Your achievements may qualify you.' : 'Requires extraordinary achievements.' }
    };
  };

  const quizResults = showResults ? getQuizResults() : null;

  // Timeline stages data
  const stages = [
    {
      id: 'f1',
      label: 'F-1 Visa',
      title: 'F-1 Student Visa',
      subtitle: 'Your foundation for studying in the US',
      icon: BookOpen,
      duration: 'Duration of program',
      content: (
        <>
          <p className="stage-desc">
            Your F-1 visa allows you to study in the US. It's tied to your I-20 form from your university.
            Understanding the rules is critical — violations can result in deportation.
          </p>
          <InfoCard title="Key Requirements" icon={FileCheck} variant="info">
            <ul>
              <li>Maintain full-time enrollment (9+ credits for grad students)</li>
              <li>Keep your I-20 valid and up to date</li>
              <li>Don't work off-campus without authorization</li>
              <li>Report any address changes to your school</li>
            </ul>
          </InfoCard>
          <InfoCard title="On-Campus Work" icon={Building2} variant="success">
            <p>You can work on-campus up to 20 hours/week during school and full-time during breaks. No separate authorization needed!</p>
          </InfoCard>
          <InfoCard title="60-Day Grace Period" icon={Clock} variant="warning">
            <p>After graduation, you have 60 days to leave the US, transfer schools, or start OPT. Don't overstay!</p>
          </InfoCard>
          <LinkCard links={[
            { title: "USCIS: Students and Exchange Visitors", url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors", description: "Official immigration info for F-1 students" },
            { title: "Study in the States", url: "https://studyinthestates.dhs.gov/", description: "DHS resource hub for international students" },
            { title: "SEVP Portal", url: "https://sevp.ice.gov/", description: "Student and Exchange Visitor Program portal" },
            { title: "I-20 & SEVIS Guide", url: "https://studyinthestates.dhs.gov/students/i-20-documents", description: "Understanding your I-20 document" }
          ]} />
        </>
      )
    },
    {
      id: 'cpt',
      label: 'CPT',
      title: 'CPT: Internships',
      subtitle: 'Work authorization during your program',
      icon: Briefcase,
      duration: 'During program',
      content: (
        <>
          <p className="stage-desc">
            CPT (Curricular Practical Training) lets you work off-campus in jobs directly related to your studies.
            Most MBA students use this for summer internships.
          </p>
          <InfoCard title="How to Get CPT" icon={FileCheck} variant="info">
            <p>Apply through your international student office. Your internship must be curriculum-related. Apply 2-3 weeks before start date.</p>
          </InfoCard>
          <InfoCard title="The 12-Month Rule" icon={AlertCircle} variant="warning">
            <p><strong>Critical:</strong> If you use 12+ months of full-time CPT, you lose ALL OPT eligibility. Part-time CPT doesn't count!</p>
          </InfoCard>
          <LinkCard links={[
            { title: "USCIS: CPT for F-1 Students", url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment/f-1-curricular-practical-training-cpt", description: "Official CPT requirements and rules" },
            { title: "Study in the States: Training", url: "https://studyinthestates.dhs.gov/students/training-opportunities-in-the-united-states", description: "CPT and training opportunities overview" },
            { title: "Handshake", url: "https://joinhandshake.com/", description: "Popular platform for finding internships" },
            { title: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/", description: "Search for internship opportunities" }
          ]} />
        </>
      )
    },
    {
      id: 'opt',
      label: 'OPT',
      title: 'OPT: Post-Graduation',
      subtitle: 'Your bridge to a work visa',
      icon: GraduationCap,
      duration: '12 months (+24 STEM)',
      content: (
        <>
          <p className="stage-desc">
            OPT lets you work after graduation. It's temporary work authorization that bridges you to an H-1B or other work visa.
          </p>
          <div className="opt-stats">
            {[
              { value: '12', label: 'Months Standard', color: '#3B82F6' },
              { value: '+24', label: 'STEM Extension', color: '#10B981' },
              { value: '90', label: 'Max Unemployed', color: '#FBBF24' }
            ].map((stat, i) => (
              <div key={i} className="opt-stat" style={{ background: `${stat.color}15` }}>
                <div className="opt-stat-value" style={{ color: stat.color }}>{stat.value}</div>
                <div className="opt-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <InfoCard title="STEM OPT Extension" icon={Sparkles} variant="success">
            <p>Have a STEM degree? You get 24 extra months — that's 3 chances at the H-1B lottery!</p>
          </InfoCard>
          <LinkCard links={[
            { title: "USCIS: OPT for F-1 Students", url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students", description: "Official OPT application guide" },
            { title: "STEM OPT Extension", url: "https://studyinthestates.dhs.gov/stem-opt-hub", description: "24-month STEM extension details" },
            { title: "USCIS Case Status", url: "https://egov.uscis.gov/casestatus/landing.do", description: "Check your OPT application status" },
            { title: "STEM Designated Degrees", url: "https://studyinthestates.dhs.gov/stem-opt-hub/additional-resources/eligible-cip-codes-for-the-stem-opt-extension", description: "Check if your degree qualifies for STEM" }
          ]} />
        </>
      )
    },
    {
      id: 'workVisa',
      label: 'Work Visa',
      title: 'Work Visas',
      subtitle: 'Your path to staying long-term',
      icon: Flag,
      duration: '3-6 years',
      content: (
        <>
          <p className="stage-desc">
            Once OPT expires, you need a work visa to stay. Here are your main options:
          </p>
          <InfoCard title="H-1B Visa" icon={FileCheck} variant="info">
            <p><strong>Most common.</strong> Employer-sponsored, 3+3 years. Annual lottery with 85,000 cap (25-45% selection rate).</p>
          </InfoCard>
          <InfoCard title="O-1 / L-1 / E-2" icon={Sparkles}>
            <p><strong>O-1:</strong> Extraordinary ability. <strong>L-1:</strong> Multinational transfer. <strong>E-2:</strong> Treaty investor ($100K+).</p>
          </InfoCard>
          <LinkCard links={[
            { title: "USCIS: H-1B Specialty Occupations", url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations", description: "H-1B visa requirements and process" },
            { title: "H-1B Lottery Registration", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations-and-fashion-models/h-1b-electronic-registration-process", description: "Annual lottery registration info" },
            { title: "USCIS: O-1 Extraordinary Ability", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement", description: "O-1 visa for exceptional talent" },
            { title: "E-2 Treaty Countries List", url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html", description: "Check if your country has E-2 treaty" }
          ]} />
        </>
      )
    },
    {
      id: 'credit',
      label: 'Credit',
      title: 'Building Credit',
      subtitle: 'Essential for your future',
      icon: CreditCard,
      duration: '6-12 months',
      content: (
        <>
          <p className="stage-desc">
            Your credit score (300-850) affects renting apartments, car loans, and more. You arrive with no US credit history.
          </p>
          <div className="credit-tiers">
            {[
              { range: '300-579', label: 'Poor', color: '#EF4444' },
              { range: '580-669', label: 'Fair', color: '#F59E0B' },
              { range: '670-739', label: 'Good', color: '#3B82F6' },
              { range: '740-799', label: 'V.Good', color: '#10B981' },
              { range: '800+', label: 'Excellent', color: '#059669' }
            ].map((t) => (
              <div key={t.label} className="credit-tier" style={{ background: `${t.color}15` }}>
                <div className="credit-tier-range" style={{ color: t.color }}>{t.range}</div>
                <div className="credit-tier-label">{t.label}</div>
              </div>
            ))}
          </div>
          <InfoCard title="Start with a Secured Card" icon={CreditCard} variant="success">
            <p>Deposit $200-500, get a card with that limit. Pay it off monthly. After 6-12 months, your score builds.</p>
          </InfoCard>
          <LinkCard links={[
            { title: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/", description: "Free official credit reports (1x/year per bureau)" },
            { title: "Credit Karma", url: "https://www.creditkarma.com/", description: "Free credit score monitoring" },
            { title: "Discover it Secured Card", url: "https://www.discover.com/credit-cards/secured/", description: "Popular secured card for building credit" },
            { title: "NerdWallet: Student Cards", url: "https://www.nerdwallet.com/best/credit-cards/college-student", description: "Compare student credit card options" }
          ]} />
        </>
      )
    },
    {
      id: 'taxes',
      label: 'SSN & Taxes',
      title: 'SSN & Taxes',
      subtitle: 'Yes, you have to file',
      icon: DollarSign,
      duration: 'Annual requirement',
      content: (
        <>
          <p className="stage-desc">
            You need an SSN to work, and you must file taxes even with no income.
          </p>
          <InfoCard title="Getting Your SSN" icon={FileCheck} variant="info">
            <p>F-1 students need work authorization to get an SSN. Take your job letter, passport, I-20, and I-94 to Social Security office.</p>
          </InfoCard>
          <InfoCard title="Tax Filing" icon={DollarSign} variant="warning">
            <p><strong>No income?</strong> File Form 8843. <strong>Have income?</strong> File Form 1040-NR + W-2. Your university likely offers free tax prep!</p>
          </InfoCard>
          <LinkCard links={[
            { title: "Social Security Administration", url: "https://www.ssa.gov/", description: "Apply for your Social Security Number" },
            { title: "SSA Office Locator", url: "https://www.ssa.gov/locator/", description: "Find your nearest SSA office" },
            { title: "Sprintax", url: "https://www.sprintax.com/", description: "Tax software designed for international students" },
            { title: "IRS: Foreign Students", url: "https://www.irs.gov/individuals/international-taxpayers/foreign-students-and-scholars", description: "IRS guide for international student taxes" }
          ]} />
        </>
      )
    }
  ];

  const navigateStage = (direction) => {
    if (direction === 'prev' && activeStage > 0) {
      setActiveStage(activeStage - 1);
    } else if (direction === 'next' && activeStage < stages.length - 1) {
      setActiveStage(activeStage + 1);
    }
  };

  const currentStage = stages[activeStage];
  const colors = stageColors[currentStage.id];
  const Icon = currentStage.icon;

  return (
    <div className="stay-build-page">
      {/* Hero Section */}
      <div className="stay-hero">
        <div className="stay-hero-content">
          <div className="stay-hero-badge">
            <Plane size={18} />
            <span>Your Immigration Journey</span>
          </div>

          <h1>
            From Student to{' '}
            <span className="text-gradient">Professional</span>
          </h1>

          <p>
            Navigate your path through visas, work authorization, and building your American dream.
          </p>
        </div>
      </div>

      {/* Horizontal Timeline */}
      <div className="timeline-section">
        <div className="timeline-container">
          {/* Navigation Arrows */}
          <button
            onClick={() => navigateStage('prev')}
            disabled={activeStage === 0}
            className={`timeline-nav prev ${activeStage === 0 ? 'disabled' : ''}`}
            style={{ borderColor: activeStage === 0 ? 'var(--color-border)' : colors.primary }}
          >
            <ChevronLeft size={22} style={{ color: activeStage === 0 ? 'var(--color-text-muted)' : colors.primary }} />
          </button>

          <button
            onClick={() => navigateStage('next')}
            disabled={activeStage === stages.length - 1}
            className={`timeline-nav next ${activeStage === stages.length - 1 ? 'disabled' : ''}`}
            style={{ borderColor: activeStage === stages.length - 1 ? 'var(--color-border)' : colors.primary }}
          >
            <ChevronRight size={22} style={{ color: activeStage === stages.length - 1 ? 'var(--color-text-muted)' : colors.primary }} />
          </button>

          {/* Timeline Track */}
          <div className="timeline-track">
            {/* Background Line */}
            <div className="timeline-bg-line" />

            {/* Progress Line */}
            <div
              className="timeline-progress-line"
              style={{
                width: `calc(${(activeStage / (stages.length - 1)) * 100}%)`,
                background: colors.gradient
              }}
            />

            {/* Nodes */}
            {stages.map((stage, index) => {
              const StageIcon = stage.icon;
              const nodeColors = stageColors[stage.id];
              const isActive = index === activeStage;
              const isPast = index < activeStage;

              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(index)}
                  className={`timeline-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                >
                  <div
                    className="timeline-node-circle"
                    style={{
                      background: (isActive || isPast) ? nodeColors.gradient : 'var(--color-bg-secondary)',
                      border: (!isActive && !isPast) ? `3px solid ${nodeColors.primary}40` : 'none',
                      boxShadow: isActive
                        ? `0 0 30px ${nodeColors.primary}50, 0 8px 25px ${nodeColors.primary}30`
                        : isPast
                          ? `0 4px 15px ${nodeColors.primary}25`
                          : '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    <StageIcon size={isActive ? 28 : 22} style={{ color: (isActive || isPast) ? 'white' : nodeColors.primary }} />
                  </div>
                  <div className="timeline-node-label" style={{ color: isActive ? nodeColors.primary : 'var(--color-text-muted)' }}>
                    {stage.label}
                  </div>
                  {isActive && (
                    <div className="timeline-node-ring" style={{ borderColor: `${nodeColors.primary}30` }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="content-section">
        <div className="content-card" style={{ borderColor: `${colors.primary}30` }}>
          {/* Card Header */}
          <div className="content-header" style={{ background: colors.gradient }}>
            <div className="content-header-decoration" />
            <div className="content-header-inner">
              <div className="content-header-info">
                <div className="content-icon-wrapper">
                  <Icon size={28} />
                </div>
                <div>
                  <span className="stage-badge">Stage {activeStage + 1} of {stages.length}</span>
                  <h2>{currentStage.title}</h2>
                </div>
              </div>
              <p className="content-duration">
                <Clock size={16} />
                {currentStage.duration}
              </p>
            </div>
          </div>

          {/* Card Body */}
          <div className="content-body">
            {currentStage.content}

            {/* Navigation Buttons */}
            <div className="content-nav">
              <button
                onClick={() => navigateStage('prev')}
                disabled={activeStage === 0}
                className={`nav-btn prev ${activeStage === 0 ? 'disabled' : ''}`}
              >
                <ChevronLeft size={18} />
                Previous
              </button>

              <button
                onClick={() => navigateStage('next')}
                disabled={activeStage === stages.length - 1}
                className={`nav-btn next ${activeStage === stages.length - 1 ? 'disabled' : ''}`}
                style={{
                  background: activeStage === stages.length - 1 ? 'var(--color-bg-tertiary)' : colors.gradient,
                  color: activeStage === stages.length - 1 ? 'var(--color-text-muted)' : 'white'
                }}
              >
                Next Stage
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Quiz Section */}
      <div className="quiz-section">
        <div className="quiz-container">
          <div className="quiz-header">
            <h2>Which Work Visa Fits You?</h2>
            <p>Quick quiz to explore your options (not legal advice)</p>
          </div>

          <div className="quiz-card">
            {!showResults ? (
              <>
                {/* Progress */}
                <div className="quiz-progress">
                  <div className="quiz-progress-info">
                    <span>Question {Math.min(quizStep + 1, 5)} of 5</span>
                    <span className="quiz-progress-percent">{Math.round((quizStep / 5) * 100)}%</span>
                  </div>
                  <div className="quiz-progress-bar">
                    <div className="quiz-progress-fill" style={{ width: `${(quizStep / 5) * 100}%` }} />
                  </div>
                </div>

                {/* Questions */}
                {quizStep === 0 && (
                  <div className="quiz-question">
                    <h3>What is your nationality?</h3>
                    <div className="country-search-wrapper">
                      <input
                        type="text"
                        value={countrySearch}
                        onChange={(e) => { setCountrySearch(e.target.value); setShowCountryDropdown(true); }}
                        onFocus={() => setShowCountryDropdown(true)}
                        onBlur={() => setTimeout(() => setShowCountryDropdown(false), 200)}
                        placeholder="Type to search..."
                        className="country-input"
                      />
                      {showCountryDropdown && countrySearch && (
                        <div className="country-dropdown">
                          {filteredCountries.slice(0, 8).map(country => (
                            <div
                              key={country}
                              onClick={() => handleCountrySelect(country)}
                              className="country-option"
                            >
                              {country}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {quizStep >= 1 && quizStep <= 4 && (
                  <div className="quiz-question">
                    <h3>
                      {quizStep === 1 && 'Is your MBA in a STEM field?'}
                      {quizStep === 2 && 'Did you work for a multinational company before your MBA?'}
                      {quizStep === 3 && 'Interested in starting/investing in a US business?'}
                      {quizStep === 4 && 'Do you have extraordinary achievements?'}
                    </h3>
                    <div className="quiz-options">
                      {['Yes', 'No'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => {
                            const field = ['', 'isStem', 'workedMultinational', 'interestedBusiness', 'hasExtraordinary'][quizStep];
                            handleQuizAnswer(field, opt === 'Yes');
                          }}
                          className="quiz-option-btn"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <h3 className="quiz-results-title">Your Options as a {quizAnswers.nationality} Citizen:</h3>
                <VisaResultCard name="H-1B Visa" status={quizResults.h1b.status} reason={quizResults.h1b.reason} />
                <VisaResultCard name="TN Visa" status={quizResults.tn.status} reason={quizResults.tn.reason} />
                <VisaResultCard name="L-1 Visa" status={quizResults.l1.status} reason={quizResults.l1.reason} />
                <VisaResultCard name="E-2 Visa" status={quizResults.e2.status} reason={quizResults.e2.reason} />
                <VisaResultCard name="O-1 Visa" status={quizResults.o1.status} reason={quizResults.o1.reason} />
                <button onClick={resetQuiz} className="quiz-reset-btn">
                  Start Over
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-container">
          <h2>Common Questions</h2>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openFAQ === index}
              onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="cta-section">
        <div className="cta-card">
          <HelpCircle size={44} />
          <h3>Need More Help?</h3>
          <p>
            Your university's international student office is your best resource. They're there to help — schedule an appointment!
          </p>
        </div>
      </div>

      <style>{`
        .stay-build-page {
          min-height: 100vh;
          background: var(--color-bg-primary);
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Hero Section */
        .stay-hero {
          position: relative;
          padding: 120px 24px 60px;
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.06) 0%, transparent 60%),
                      radial-gradient(ellipse 100% 70% at 70% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
                      var(--color-bg-primary);
          text-align: center;
          overflow: hidden;
        }

        .stay-hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .stay-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid rgba(16, 185, 129, 0.15);
          color: #10B981;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .stay-hero h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--color-text-primary);
          margin-bottom: 16px;
        }

        .stay-hero p {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          max-width: 550px;
          margin: 0 auto;
        }

        /* Timeline Section */
        .timeline-section {
          padding: 20px 24px 40px;
          position: relative;
        }

        .timeline-container {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 50px;
        }

        .timeline-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-bg-secondary);
          border: 2px solid var(--color-border);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .timeline-nav.prev { left: 0; }
        .timeline-nav.next { right: 0; }
        .timeline-nav.disabled {
          cursor: not-allowed;
          background: var(--color-bg-tertiary);
        }

        .timeline-track {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 20px;
        }

        .timeline-bg-line {
          position: absolute;
          left: 20px;
          right: 20px;
          top: 50%;
          height: 4px;
          background: var(--color-border);
          border-radius: 2px;
          transform: translateY(-50%);
        }

        .timeline-progress-line {
          position: absolute;
          left: 20px;
          top: 50%;
          height: 4px;
          border-radius: 2px;
          transform: translateY(-50%);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-node {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          z-index: 5;
        }

        .timeline-node-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-node.active .timeline-node-circle {
          width: 70px;
          height: 70px;
        }

        .timeline-node-label {
          position: absolute;
          top: 100%;
          margin-top: 12px;
          text-align: center;
          white-space: nowrap;
          font-size: 0.75rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .timeline-node.active .timeline-node-label {
          font-size: 0.85rem;
          font-weight: 700;
        }

        .timeline-node-ring {
          position: absolute;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: 2px solid;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        /* Content Section */
        .content-section {
          padding: 0 24px 60px;
          max-width: 900px;
          margin: 0 auto;
        }

        .content-card {
          background: var(--color-bg-secondary);
          border: 2px solid;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(16, 185, 129, 0.1);
          transition: all 0.5s ease;
        }

        .content-header {
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

        .content-header-decoration {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        .content-header-inner {
          position: relative;
          z-index: 1;
        }

        .content-header-info {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .content-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stage-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(255,255,255,0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          margin-bottom: 6px;
        }

        .content-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .content-duration {
          font-size: 1rem;
          color: rgba(255,255,255,0.9);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .content-body {
          padding: 32px;
        }

        .stage-desc {
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .content-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--color-border);
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }

        .nav-btn.prev {
          background: var(--color-bg-tertiary);
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
        }

        .nav-btn.prev.disabled {
          color: var(--color-text-muted);
          cursor: not-allowed;
        }

        .nav-btn.next {
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .nav-btn.next.disabled {
          box-shadow: none;
          cursor: not-allowed;
        }

        /* Info Cards */
        .info-card {
          background: var(--color-bg-tertiary);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 12px;
        }

        .info-card.success {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.2);
        }

        .info-card.success .info-card-header h4 { color: #10B981; }
        .info-card.success .info-card-header svg { color: #10B981; }

        .info-card.warning {
          background: rgba(251, 191, 36, 0.08);
          border-color: rgba(251, 191, 36, 0.2);
        }

        .info-card.warning .info-card-header h4 { color: #D4940D; }
        .info-card.warning .info-card-header svg { color: #D4940D; }

        .info-card.info {
          background: rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .info-card.info .info-card-header h4 { color: #3B82F6; }
        .info-card.info .info-card-header svg { color: #3B82F6; }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .info-card-header h4 {
          font-weight: 600;
          font-size: 0.95rem;
          margin: 0;
        }

        .info-card-content {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .info-card-content ul {
          margin: 0;
          padding-left: 20px;
        }

        .info-card-content li {
          margin-bottom: 6px;
        }

        .info-card-content p {
          margin: 0;
        }

        /* Link Cards */
        .link-card {
          margin-top: 20px;
          padding: 20px;
          background: rgba(16, 185, 129, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 14px;
        }

        .link-card h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-text-primary);
          margin: 0 0 14px 0;
        }

        .link-card h4 svg {
          color: #10B981;
        }

        .link-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .link-item:hover {
          border-color: #10B981;
          transform: translateX(4px);
        }

        .link-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 2px;
        }

        .link-desc {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .link-item svg {
          color: #10B981;
          flex-shrink: 0;
          margin-left: 12px;
        }

        /* OPT Stats */
        .opt-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .opt-stat {
          padding: 16px;
          border-radius: 12px;
          text-align: center;
        }

        .opt-stat-value {
          font-size: 1.5rem;
          font-weight: 800;
        }

        .opt-stat-label {
          font-size: 0.7rem;
          color: var(--color-text-muted);
        }

        /* Credit Tiers */
        .credit-tiers {
          display: flex;
          gap: 6px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .credit-tier {
          flex: 1 1 60px;
          padding: 8px 6px;
          border-radius: 8px;
          text-align: center;
        }

        .credit-tier-range {
          font-size: 0.7rem;
          font-weight: 700;
        }

        .credit-tier-label {
          font-size: 0.6rem;
          color: var(--color-text-muted);
        }

        /* Quiz Section */
        .quiz-section {
          background: linear-gradient(180deg, var(--color-bg-secondary) 0%, var(--color-bg-primary) 100%);
          padding: 60px 24px;
        }

        .quiz-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .quiz-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .quiz-header p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .quiz-card {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
        }

        .quiz-progress {
          margin-bottom: 28px;
        }

        .quiz-progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .quiz-progress-percent {
          font-weight: 600;
          color: #10B981;
        }

        .quiz-progress-bar {
          height: 8px;
          background: var(--color-bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
        }

        .quiz-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981, #059669);
          border-radius: 4px;
          transition: width 0.4s ease;
        }

        .quiz-question h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 18px;
        }

        .country-search-wrapper {
          position: relative;
        }

        .country-input {
          width: 100%;
          padding: 16px 20px;
          font-size: 1rem;
          font-family: inherit;
          background: var(--color-bg-tertiary);
          border: 2px solid var(--color-border);
          border-radius: 12px;
          color: var(--color-text-primary);
          outline: none;
          transition: border-color 0.2s ease;
        }

        .country-input:focus {
          border-color: #10B981;
        }

        .country-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          max-height: 200px;
          overflow-y: auto;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          margin-top: 6px;
          z-index: 100;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }

        .country-option {
          padding: 14px 20px;
          cursor: pointer;
          color: var(--color-text-primary);
          border-bottom: 1px solid var(--color-border);
          transition: background 0.2s ease;
        }

        .country-option:hover {
          background: var(--color-bg-tertiary);
        }

        .quiz-options {
          display: flex;
          gap: 14px;
        }

        .quiz-option-btn {
          flex: 1;
          padding: 18px;
          border-radius: 12px;
          border: 2px solid var(--color-border);
          background: var(--color-bg-tertiary);
          color: var(--color-text-primary);
          font-size: 1rem;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quiz-option-btn:hover {
          border-color: #10B981;
          background: rgba(16, 185, 129, 0.1);
        }

        .quiz-results-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 20px;
        }

        /* Visa Results */
        .visa-result {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 12px;
          margin-bottom: 10px;
        }

        .visa-result.likely {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid #10B981;
        }

        .visa-result.likely .visa-result-icon { background: rgba(16, 185, 129, 0.2); color: #10B981; }
        .visa-result.likely .visa-status-badge { background: rgba(16, 185, 129, 0.1); color: #10B981; border-color: #10B981; }

        .visa-result.possibly {
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid #FBBF24;
        }

        .visa-result.possibly .visa-result-icon { background: rgba(251, 191, 36, 0.2); color: #D4940D; }
        .visa-result.possibly .visa-status-badge { background: rgba(251, 191, 36, 0.1); color: #D4940D; border-color: #FBBF24; }

        .visa-result.unlikely {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #EF4444;
        }

        .visa-result.unlikely .visa-result-icon { background: rgba(239, 68, 68, 0.2); color: #EF4444; }
        .visa-result.unlikely .visa-status-badge { background: rgba(239, 68, 68, 0.1); color: #EF4444; border-color: #EF4444; }

        .visa-result.not {
          background: var(--color-bg-tertiary);
          border: 1px solid var(--color-border);
        }

        .visa-result.not .visa-result-icon { background: var(--color-bg-tertiary); color: var(--color-text-muted); }
        .visa-result.not .visa-status-badge { background: var(--color-bg-tertiary); color: var(--color-text-muted); border-color: var(--color-border); }

        .visa-result-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .visa-result-content {
          flex: 1;
        }

        .visa-result-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .visa-result-header h4 {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-primary);
          margin: 0;
        }

        .visa-status-badge {
          padding: 2px 10px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          border: 1px solid;
        }

        .visa-result-content p {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .quiz-reset-btn {
          margin-top: 20px;
          padding: 14px 28px;
          background: transparent;
          border: 2px solid var(--color-border);
          border-radius: 10px;
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quiz-reset-btn:hover {
          border-color: #10B981;
          color: #10B981;
        }

        /* FAQ Section */
        .faq-section {
          padding: 60px 24px;
        }

        .faq-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-container h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 28px;
          text-align: center;
        }

        .faq-item {
          background: var(--color-bg-tertiary);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }

        .faq-item.open {
          background: rgba(16, 185, 129, 0.06);
          border-color: rgba(16, 185, 129, 0.2);
        }

        .faq-trigger {
          width: 100%;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          font-family: inherit;
        }

        .faq-trigger span {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-primary);
        }

        .faq-chevron {
          color: var(--color-text-muted);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .faq-chevron.rotated {
          transform: rotate(180deg);
          color: #10B981;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-answer.open {
          max-height: 300px;
        }

        .faq-answer-content {
          padding: 0 20px 18px;
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        /* CTA Section */
        .cta-section {
          padding: 0 24px 80px;
        }

        .cta-card {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          padding: 48px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--color-border);
          border-radius: 24px;
        }

        .cta-card svg {
          color: #10B981;
          margin-bottom: 18px;
        }

        .cta-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 10px;
        }

        .cta-card p {
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .stay-hero {
            padding: 100px 16px 40px;
          }

          .timeline-container {
            padding: 0 40px;
          }

          .timeline-node-circle {
            width: 40px;
            height: 40px;
          }

          .timeline-node.active .timeline-node-circle {
            width: 56px;
            height: 56px;
          }

          .timeline-node-label {
            font-size: 0.65rem;
          }

          .content-section {
            padding: 0 16px 40px;
          }

          .content-header,
          .content-body {
            padding: 24px;
          }

          .opt-stats {
            grid-template-columns: 1fr;
          }

          .credit-tiers {
            gap: 4px;
          }

          .quiz-options {
            flex-direction: column;
          }

          .content-nav {
            flex-direction: column;
            gap: 12px;
          }

          .nav-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .timeline-container {
            padding: 0 30px;
          }

          .timeline-nav {
            width: 36px;
            height: 36px;
          }

          .timeline-node-circle {
            width: 36px;
            height: 36px;
          }

          .timeline-node.active .timeline-node-circle {
            width: 48px;
            height: 48px;
          }

          .cta-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </div>
  );
}
