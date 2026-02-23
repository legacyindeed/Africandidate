import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const phases = [
  { id: 'acceptance', label: 'Acceptance', emoji: '🎓' },
  { id: 'pre-departure', label: 'Pre-Departure', emoji: '✈️' },
  { id: 'arrival', label: 'Arrival Week', emoji: '🛬' },
  { id: 'first-month', label: 'First Month', emoji: '🏠' },
];

const checklistData = {
  acceptance: [
    {
      id: 'accept-offer',
      title: 'Accept your offer & pay deposit',
      description: 'Log into the admissions portal and formally accept. Pay any deposit required to secure your spot. Missing this deadline can cost you your place.',
      tag: 'urgent'
    },
    {
      id: 'sign-i20',
      title: 'Receive and sign your I-20 form',
      description: 'Your university will issue an I-20 (Certificate of Eligibility). You MUST sign it before your visa interview. Download and print copies — you\'ll need them multiple times.',
      tag: 'urgent'
    },
    {
      id: 'schedule-visa',
      title: 'Schedule your F-1 visa interview',
      description: 'Book your interview at the nearest US consulate or embassy. Slots fill up fast — book as early as possible, especially in peak months (May–August).',
      tag: 'urgent'
    },
    {
      id: 'gather-docs',
      title: 'Gather visa interview documents',
      description: 'You\'ll need: valid passport (6+ months validity), I-20, SEVIS fee receipt (Form I-901), visa application confirmation, passport photo, and proof of financial support. Check your consulate\'s specific list.',
      tag: 'important'
    },
    {
      id: 'sevis-fee',
      title: 'Pay the SEVIS fee (Form I-901)',
      description: 'This is a mandatory $350 fee paid online before your visa interview. Keep the receipt — bring it to the interview and again when you arrive in the US.',
      tag: 'urgent'
    },
    {
      id: 'financial-docs',
      title: 'Start gathering financial documents',
      description: 'Bank statements showing sufficient funds for tuition + living costs (usually 1 year\'s worth). Sponsorship letters if applicable. The more proof, the smoother your interview.',
      tag: 'important'
    },
    {
      id: 'notify-employer',
      title: 'Notify your employer / current university',
      description: 'If you\'re leaving a job or another program, give proper notice. This keeps your professional reputation clean.',
      tag: 'helpful'
    },
  ],
  'pre-departure': [
    {
      id: 'obtain-visa',
      title: 'Obtain your F-1 visa',
      description: 'After your interview, your visa will be stamped in your passport. Note: the visa stamp is NOT your entry document — your I-20 and passport together are.',
      tag: 'urgent'
    },
    {
      id: 'health-insurance',
      title: 'Arrange health insurance',
      description: (
        <>
          Most US universities require enrolled students to have health insurance. Check if your school's mandatory plan auto-enrolls you or if you need to opt in before arrival. See our{' '}
          <Link to="/health-insurance" style={{ color: 'var(--color-accent-primary)' }}>Health Insurance guide</Link> for details.
        </>
      ),
      tag: 'important'
    },
    {
      id: 'sort-finances',
      title: 'Sort out finances for arrival',
      description: (
        <>
          Open a US bank account if possible before you land (some banks allow online opening for internationals). Otherwise, have enough cash or a card that works internationally for your first few days. Check our{' '}
          <Link to="/banking" style={{ color: 'var(--color-accent-primary)' }}>Banking recommendations</Link>.
        </>
      ),
      tag: 'important'
    },
    {
      id: 'travel-insurance',
      title: 'Purchase travel insurance',
      description: 'Separate from health insurance, travel insurance covers flight cancellations, lost luggage, and medical emergencies during transit. Cheap peace of mind.',
      tag: 'helpful'
    },
    {
      id: 'research-city',
      title: 'Research your city and neighborhood',
      description: (
        <>
          Look into neighborhoods near your campus. Check commute times, safety ratings, walkability scores, and proximity to grocery stores and African restaurants/shops. Use our{' '}
          <Link to="/budget" style={{ color: 'var(--color-accent-primary)' }}>Budget tool</Link> to compare cities.
        </>
      ),
      tag: 'helpful'
    },
    {
      id: 'pack-smart',
      title: 'Pack smart — what to bring vs. buy there',
      description: 'Don\'t over-pack. Bulky items like bedding, kitchen stuff, and toiletries are cheaper to buy on arrival (Walmart, Target, Amazon). Bring documents, valuables, a few days of clothes, and meds.',
      tag: 'helpful'
    },
    {
      id: 'download-apps',
      title: 'Download key apps before landing',
      description: 'Install: Google Maps, Uber/Lyft, your bank\'s app, your university\'s app, and a messaging app to stay in touch with family back home (WhatsApp works great).',
      tag: 'helpful'
    },
  ],
  arrival: [
    {
      id: 'clear-immigration',
      title: 'Clear immigration and customs',
      description: 'At the airport, you\'ll go through CBP (Customs and Border Protection). Have your passport, I-20, and SEVIS receipt ready. The officer will stamp your I-20 — this is your official entry document. Keep it safe.',
      tag: 'urgent'
    },
    {
      id: 'get-to-accommodation',
      title: 'Get to your accommodation',
      description: 'Know your plan before you land: airport shuttle, taxi, or a friend picking you up. Have the address saved offline in case you have no signal yet. Don\'t rely on buying a SIM at the airport — prices are high.',
      tag: 'urgent'
    },
    {
      id: 'get-ssn',
      title: 'Get a Social Security Number (SSN)',
      description: 'Visit your nearest Social Security Administration (SSA) office with your passport and I-20. You need an SSN for almost everything: banking, renting, working (if authorized). Some universities have an on-campus office that helps.',
      tag: 'urgent'
    },
    {
      id: 'open-bank',
      title: 'Open a US bank account',
      description: (
        <>
          With your SSN (or sometimes without, depending on the bank), open a local account. This is how you\'ll pay rent, receive any stipends, and avoid constant international transfer fees. See our{' '}
          <Link to="/banking" style={{ color: 'var(--color-accent-primary)' }}>Banking page</Link> for recommendations.
        </>
      ),
      tag: 'urgent'
    },
    {
      id: 'get-phone',
      title: 'Get a mobile phone plan',
      description: (
        <>
          Visit a carrier store or order a SIM online. Check the{' '}
          <Link to="/mobile-carriers" style={{ color: 'var(--color-accent-primary)' }}>Mobile Carriers section</Link> for recommendations based on your city. Having a US number is essential.
        </>
      ),
      tag: 'important'
    },
    {
      id: 'register-university',
      title: 'Register with your university',
      description: 'Attend orientation. Complete any international student check-in. Register for classes if not already done. Visit the international student office — they are your #1 resource.',
      tag: 'urgent'
    },
    {
      id: 'explore-campus',
      title: 'Explore your campus and neighborhood',
      description: 'Walk around. Find the library, health center, grocery store, and nearest public transit stop. Getting familiar early reduces stress enormously.',
      tag: 'helpful'
    },
  ],
  'first-month': [
    {
      id: 'find-housing',
      title: 'Find permanent housing (if not settled)',
      description: 'If you\'re in temporary housing (dorm, Airbnb, or a friend\'s place), start actively searching. Use university housing boards, Facebook groups, and apps like Zillow or Apartments.com. Ask fellow international students.',
      tag: 'important'
    },
    {
      id: 'setup-utilities',
      title: 'Set up utilities and internet',
      description: 'If renting your own place, you\'ll likely need to set up electricity, gas, water, and internet. Your landlord or a local guide can point you to the right providers. Budget for deposits.',
      tag: 'important'
    },
    {
      id: 'drivers-license',
      title: 'Get a driver\'s license (if applicable)',
      description: 'If you plan to drive, visit your state\'s DMV with your passport, I-20, and proof of residence. Rules vary by state — some allow internationals to use their home country license for a limited time.',
      tag: 'important'
    },
    {
      id: 'build-budget',
      title: 'Build your budget',
      description: (
        <>
          Now that you know your actual costs (rent, groceries, transport), build a realistic monthly budget. Use the{' '}
          <Link to="/budget" style={{ color: 'var(--color-accent-primary)' }}>Budget Planner</Link> as a starting point and adjust based on real spending.
        </>
      ),
      tag: 'important'
    },
    {
      id: 'connect-community',
      title: 'Connect with the African student community',
      description: (
        <>
          Find the African or international student associations at your university. Check the{' '}
          <Link to="/community" style={{ color: 'var(--color-accent-primary)' }}>Community section</Link> for directories. These communities are invaluable for advice, social life, and feeling at home.
        </>
      ),
      tag: 'helpful'
    },
    {
      id: 'set-routine',
      title: 'Set up a routine',
      description: 'Jet lag, culture shock, and information overload are real. Give yourself grace. Build a simple routine: wake up, eat, study, exercise, sleep. Consistency is grounding.',
      tag: 'helpful'
    },
    {
      id: 'find-african-food',
      title: 'Explore African food and culture nearby',
      description: (
        <>
          Finding familiar food is a huge comfort. Use Google Maps to search for African restaurants or grocery stores near you. The{' '}
          <Link to="/community" style={{ color: 'var(--color-accent-primary)' }}>Community page</Link> has city-based guides.
        </>
      ),
      tag: 'helpful'
    },
  ],
};

const tagStyles = {
  urgent: {
    background: 'rgba(248, 113, 113, 0.15)',
    color: 'var(--color-red)',
    border: '1px solid var(--color-red)',
    label: 'Urgent'
  },
  important: {
    background: 'rgba(32, 164, 243, 0.12)',
    color: 'var(--color-accent-primary)',
    border: '1px solid var(--color-accent-primary)',
    label: 'Important'
  },
  helpful: {
    background: 'rgba(96, 165, 250, 0.15)',
    color: 'var(--color-blue)',
    border: '1px solid var(--color-blue)',
    label: 'Helpful'
  },
};

export default function PreArrival() {
  const [activePhase, setActivePhase] = useState('acceptance');
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem('afrimba-checklist');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('afrimba-checklist', JSON.stringify(checked));
  }, [checked]);

  const toggleCheck = (itemId) => {
    setChecked(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getPhaseProgress = (phaseId) => {
    const items = checklistData[phaseId] || [];
    const completed = items.filter(item => checked[item.id]).length;
    return { completed, total: items.length };
  };

  const currentItems = checklistData[activePhase] || [];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 16px 60px' }}>
      {/* Header */}
      <div className="section-header animate-fade-in">
        <h1 style={{ marginBottom: '0.75rem' }}>Pre-Arrival Checklist</h1>
        <p style={{ marginBottom: '0.5rem' }}>
          A step-by-step roadmap from the day you get accepted to your first month on US soil.
          Check off tasks as you go — your progress saves automatically.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Track your progress across all phases
        </p>
      </div>

      {/* Phase Tabs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2rem'
      }} className="animate-fade-in animate-delay-1">
        {phases.map((phase) => {
          const progress = getPhaseProgress(phase.id);
          const isActive = activePhase === phase.id;
          return (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: '9999px',
                border: isActive ? 'none' : '1px solid var(--color-border)',
                background: isActive ? 'var(--color-accent-primary)' : 'var(--color-bg-tertiary)',
                color: isActive ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '0.875rem',
                transition: 'all 0.2s ease'
              }}
            >
              <span>{phase.emoji}</span>
              <span>{phase.label}</span>
              <span style={{
                fontSize: '0.75rem',
                opacity: isActive ? 0.8 : 0.6
              }}>
                {progress.completed}/{progress.total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Checklist Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {currentItems.map((item, index) => {
          const isChecked = checked[item.id];
          const tag = tagStyles[item.tag];
          return (
            <div
              key={item.id}
              className={`animate-fade-in animate-delay-${Math.min(index + 2, 6)}`}
              style={{
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1.25rem',
                opacity: isChecked ? 0.6 : 1,
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                {/* Checkbox */}
                <button
                  onClick={() => toggleCheck(item.id)}
                  style={{
                    width: '24px',
                    height: '24px',
                    minWidth: '24px',
                    borderRadius: '6px',
                    border: isChecked ? 'none' : '2px solid var(--color-border)',
                    background: isChecked ? 'var(--color-accent-primary)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isChecked && <Check size={14} color="var(--color-bg-primary)" strokeWidth={3} />}
                </button>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: isChecked ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
                      textDecoration: isChecked ? 'line-through' : 'none'
                    }}>
                      {item.title}
                    </h3>
                    {tag && (
                      <span style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        ...tag
                      }}>
                        {tag.label}
                      </span>
                    )}
                  </div>
                  <p style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Summary */}
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        textAlign: 'center'
      }} className="animate-fade-in">
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          {(() => {
            const totalCompleted = Object.values(checked).filter(Boolean).length;
            const totalItems = Object.values(checklistData).flat().length;
            const percentage = Math.round((totalCompleted / totalItems) * 100);
            return `Overall Progress: ${totalCompleted}/${totalItems} tasks completed (${percentage}%)`;
          })()}
        </p>
        <div style={{
          marginTop: '0.75rem',
          height: '8px',
          background: 'var(--color-bg-tertiary)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            background: 'var(--color-accent-primary)',
            borderRadius: '4px',
            width: `${Math.round((Object.values(checked).filter(Boolean).length / Object.values(checklistData).flat().length) * 100)}%`,
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>
    </div>
  );
}
