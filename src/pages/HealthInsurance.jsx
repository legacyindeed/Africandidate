const terms = [
  {
    term: 'Premium',
    definition: 'The amount you pay regularly (monthly or per semester) to have the plan. Think of it like a subscription fee.'
  },
  {
    term: 'Deductible',
    definition: 'The amount you pay out-of-pocket before insurance starts covering costs. A $500 deductible means you pay the first $500 yourself.'
  },
  {
    term: 'Copay',
    definition: 'A fixed amount you pay each time you visit a doctor or get a service. Example: $25 per doctor visit.'
  },
  {
    term: 'Coinsurance',
    definition: 'After your deductible, you and the insurer split costs. If coinsurance is 20%, you pay 20% and they pay 80%.'
  },
  {
    term: 'Out-of-Pocket Max',
    definition: 'The most you\'ll ever pay in a year. After hitting this limit, insurance covers 100% of covered services.'
  },
  {
    term: 'In-Network',
    definition: 'Doctors and hospitals that have an agreement with your plan. Using them is much cheaper than going out-of-network.'
  },
  {
    term: 'Formulary',
    definition: 'The list of prescription drugs your plan covers. Always check if your medication is on it before filling a prescription.'
  },
  {
    term: 'Waiver',
    definition: 'If you have other qualifying insurance, you can apply to waive (opt out of) the university plan and avoid paying for it.'
  },
];

export default function HealthInsurance() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 16px 60px' }}>
      {/* Header */}
      <div className="section-header animate-fade-in" style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>Health Insurance in the US</h1>
        <p style={{ maxWidth: '700px' }}>
          Health insurance in America is confusing — even for locals. Here's everything you need to know
          as an international student, broken down simply.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
          Understanding costs, coverage, and key terms
        </p>
      </div>

      {/* Content Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Section 1 */}
        <div
          className="animate-fade-in animate-delay-1"
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>🏥</span> Why Health Insurance Is Mandatory
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Most US universities require all students — including international students — to have health insurance.
            This isn't optional, and for good reason. The United States has no universal healthcare system.
            Without insurance, a single emergency room visit can cost you $5,000 to $50,000 or more.
            A simple ambulance ride might be $1,000. Health insurance protects you from financial disaster
            if something goes wrong.
          </p>
        </div>

        {/* Section 2 */}
        <div
          className="animate-fade-in animate-delay-2"
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>📋</span> What Is a Student Health Plan?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Most universities offer a Student Health Insurance Plan (SHIP). This is usually the simplest
            option for international students because it's designed specifically for your situation.
            Many schools auto-enroll you unless you actively waive it. The cost (called the "premium")
            is typically $500–$2,500 per semester depending on your school, and it's often included
            in your tuition bill or billed separately. Check your enrollment status early — don't assume.
          </p>
        </div>

        {/* Section 3 - Key Terms Grid */}
        <div
          className="animate-fade-in animate-delay-3"
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>💰</span> Key Terms You Need to Know
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            {terms.map((item, index) => (
              <div
                key={item.term}
                style={{
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: '8px',
                  padding: '1.25rem'
                }}
              >
                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--color-accent-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {item.term}
                </h3>
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div
          className="animate-fade-in animate-delay-4"
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>🌍</span> Can I Use Insurance From My Home Country?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            In most cases, no. US healthcare providers generally don't accept foreign insurance policies.
            Some international plans (like certain expat health plans or global coverage policies) may work,
            but universities are very strict about what qualifies for a waiver. Before assuming your
            home country insurance will be accepted, always check with your university's health center
            or student health insurance office. They'll tell you exactly what documentation you need
            to qualify for a waiver.
          </p>
        </div>

        {/* Section 5 */}
        <div
          className="animate-fade-in animate-delay-5"
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>🏫</span> What Does the University Health Center Cover?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Most universities have an on-campus health center where students can see doctors, nurses,
            and specialists without going off-campus. These visits are often free or very low cost
            when you're enrolled in the student health plan. Services typically include routine checkups,
            vaccinations, prescriptions, mental health counseling, and urgent care for minor illnesses.
            The staff understands the unique stresses international students face and can be a valuable
            resource. Use it — that's what it's there for.
          </p>
        </div>

        {/* Section 6 */}
        <div
          className="animate-fade-in animate-delay-6"
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>🚑</span> What Happens in an Emergency?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            If you have a medical emergency, go to the nearest Emergency Room (ER) regardless of
            your insurance status. US hospitals are legally required to stabilize you. However,
            ERs are extremely expensive — a single visit can easily cost $5,000 to $50,000 or more
            without insurance. After you're stabilized, contact your university's health office
            for guidance on next steps and billing. Always carry your insurance card (physical or
            digital) with you at all times. If you're ever unsure whether something is an emergency,
            err on the side of caution.
          </p>
        </div>

        {/* Section 7 */}
        <div
          className="animate-fade-in"
          style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>💡</span> Tips for Making the Most of Your Plan
          </h2>
          <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>Always use in-network providers.</strong>{' '}
              Before scheduling any appointment, call the office and ask if they accept your insurance.
              Going out-of-network can cost you 2–3 times more for the exact same service.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>Use your university health center first.</strong>{' '}
              For routine care, prescriptions, and non-emergencies, the campus health center is almost always
              cheaper and more convenient than going off-campus.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>Get referrals when required.</strong>{' '}
              Many insurance plans require you to get a referral from your primary care doctor before seeing
              a specialist. Skipping this step could mean the visit isn't covered.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>Keep all your paperwork.</strong>{' '}
              Save receipts, Explanation of Benefits (EOB) documents, and any correspondence with your
              insurance company. You may need them for reimbursement claims or to dispute incorrect charges.
            </p>
            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Check medication coverage before you arrive.</strong>{' '}
              If you have a chronic condition or take prescription medication regularly, confirm that your
              medication is covered under your plan's formulary before you leave home. Some medications
              common in other countries may require prior authorization or have different brand names in the US.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div style={{
        marginTop: '2.5rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(32, 164, 243, 0.06), rgba(66, 139, 255, 0.06))',
        border: '1px solid var(--color-accent-primary)',
        borderRadius: '12px',
        textAlign: 'center'
      }} className="animate-fade-in">
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          <strong style={{ color: 'var(--color-accent-primary)' }}>Still confused?</strong>{' '}
          That's okay — health insurance is genuinely complicated. Your university's health center
          and international student office are your best resources. Don't hesitate to ask them questions.
        </p>
      </div>
    </div>
  );
}
