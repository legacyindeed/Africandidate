import { useState, useMemo } from 'react';
import { Check, AlertTriangle, ExternalLink, CreditCard, Globe, Shield, Zap, ChevronRight, Star, Smartphone, Wifi, Signal } from 'lucide-react';
import { banks } from '../data/banks';
import { carriers } from '../data/carriers';

// Calculate average coverage across all regions
const getAverageCoverage = (carrier) => {
  const regions = Object.values(carrier.regions);
  const total = regions.reduce((sum, r) => sum + r.coverageRating, 0);
  return total / regions.length;
};

const CoverageBar = ({ rating }) => {
  const percentage = (rating / 5) * 100;
  let color = '#10B981';
  if (rating < 3) color = '#EF4444';
  else if (rating < 4) color = '#3B82F6';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div
        style={{
          flex: 1,
          height: '8px',
          background: '#F3F4F6',
          borderRadius: '4px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            background: color,
            borderRadius: '4px',
            transition: 'width 0.5s ease'
          }}
        />
      </div>
      <span style={{ fontSize: '14px', fontWeight: 600, color, minWidth: '32px' }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default function Banking() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [hoveredBank, setHoveredBank] = useState(null);
  const [activeTab, setActiveTab] = useState('banking');

  // Sort carriers by price (high to low)
  const sortedCarriers = useMemo(() => {
    return [...carriers].sort((a, b) => b.monthlyCost - a.monthlyCost);
  }, []);

  return (
    <div className="banking-page">
      {/* Hero Section */}
      <div className="banking-hero">
        <div className="hero-content">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-left animate-fade-in">
              <div className="hero-badge">
                {activeTab === 'banking' ? (
                  <CreditCard size={16} />
                ) : (
                  <Smartphone size={16} />
                )}
                <span>
                  {activeTab === 'banking' ? 'Banking Guide' : 'Mobile Carriers'}
                </span>
              </div>

              <h1 className="hero-title">
                {activeTab === 'banking' ? (
                  <>
                    Banking Made{' '}
                    <span className="text-gradient">Simple</span>
                    {' '}for International Students
                  </>
                ) : (
                  <>
                    Find the Best{' '}
                    <span className="text-gradient">Mobile Carrier</span>
                    {' '}for Your City
                  </>
                )}
              </h1>

              <p className="hero-desc">
                {activeTab === 'banking'
                  ? "Opening a US bank account can be tricky without credit history or an SSN. We've reviewed the best options with honest pros and cons for each."
                  : "Coverage and quality vary a lot by region. Search for your city to see which carriers work best there."
                }
              </p>

              {/* Quick Stats */}
              {activeTab === 'banking' ? (
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-value" style={{ color: '#10B981' }}>8</div>
                    <div className="stat-label">Banks Reviewed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" style={{ color: '#10B981' }}>$0</div>
                    <div className="stat-label">Min. to Open</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" style={{ color: '#FBBF24' }}>No SSN</div>
                    <div className="stat-label">Required</div>
                  </div>
                </div>
              ) : (
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-value" style={{ color: '#10B981' }}>6</div>
                    <div className="stat-label">Carriers Compared</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" style={{ color: '#10B981' }}>$15</div>
                    <div className="stat-label">Starting Price</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" style={{ color: '#FBBF24' }}>eSIM</div>
                    <div className="stat-label">Available</div>
                  </div>
                </div>
              )}
            </div>

            {/* Right - Feature Cards */}
            <div className="hero-right animate-fade-in animate-delay-1">
              {(activeTab === 'banking' ? [
                { icon: Globe, title: 'International Friendly', desc: 'Banks that welcome passport and I-20 holders' },
                { icon: Shield, title: 'No Credit Needed', desc: 'Open accounts without US credit history' },
                { icon: Zap, title: 'Quick Setup', desc: 'Get your account ready within days of arrival' }
              ] : [
                { icon: Signal, title: 'Coverage by Region', desc: 'See which carriers work best in your MBA city' },
                { icon: Smartphone, title: 'No Contract Options', desc: 'Prepaid plans perfect for international students' },
                { icon: Zap, title: 'Instant Activation', desc: 'Get connected with eSIM before you even arrive' }
              ]).map((item, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">
                    <item.icon size={26} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tip Banner */}
      <div className="tip-banner-wrapper">
        <div className="tip-banner animate-fade-in animate-delay-2">
          <div className="tip-icon">💡</div>
          <div className="tip-content">
            <h3>Pro Tip for African Students</h3>
            <p>
              {activeTab === 'banking'
                ? <>Start the account opening process early. Many banks let you open an account with just your passport and I-20/DS-2019 before you get your SSN. Consider opening a <strong>Wise</strong> account before you leave home — you can receive USD and have a US routing number ready on arrival.</>
                : <>Consider getting an eSIM or ordering a prepaid SIM online before your flight. <strong>Mint Mobile</strong> and <strong>Visible</strong> offer excellent value with prepaid plans starting at $25-30/month with no contract.</>
              }
            </p>
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="tab-wrapper">
        <div className="tab-container">
          <button
            onClick={() => setActiveTab('banking')}
            className={`tab-btn ${activeTab === 'banking' ? 'active' : ''}`}
          >
            <CreditCard size={18} />
            Banking
          </button>
          <button
            onClick={() => setActiveTab('carriers')}
            className={`tab-btn ${activeTab === 'carriers' ? 'active' : ''}`}
          >
            <Smartphone size={18} />
            Mobile Carriers
          </button>
        </div>
      </div>

      {/* Bank Cards Section */}
      {activeTab === 'banking' && (
        <>
          <div className="banks-section">
            {/* Section Header */}
            <div className="section-header animate-fade-in">
              <h2>Compare Your Options</h2>
              <p>Each bank has its strengths. Click on any card to see the full details.</p>
            </div>

            {/* Bank Grid */}
            <div className="banks-grid">
              {banks.map((bank, index) => (
                <div
                  key={bank.name}
                  className={`bank-card animate-fade-in animate-delay-${Math.min(index + 1, 4)} ${selectedBank === bank.name ? 'selected' : ''} ${hoveredBank === bank.name ? 'hovered' : ''}`}
                  onClick={() => setSelectedBank(selectedBank === bank.name ? null : bank.name)}
                  onMouseEnter={() => setHoveredBank(bank.name)}
                  onMouseLeave={() => setHoveredBank(null)}
                >
                  {/* Card Header */}
                  <div className="bank-card-header">
                    <div className="bank-info">
                      <div className="bank-logo-container">
                        {bank.logo && (
                          <img src={bank.logo} alt={bank.name} className="bank-logo" />
                        )}
                      </div>
                      <div>
                        <h3>{bank.name}</h3>
                        <span className="bank-badge">
                          <Star size={12} fill="#D4940D" />
                          {bank.badge}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`chevron ${selectedBank === bank.name ? 'rotated' : ''}`}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="bank-card-body">
                    <p className="bank-desc">{bank.description}</p>

                    {/* Quick Perks Preview */}
                    <div className="perks-preview">
                      {bank.perks.slice(0, 3).map((perk, i) => (
                        <div key={i} className="perk-tag">
                          <Check size={12} />
                          <span>{perk.split(' ').slice(0, 4).join(' ')}...</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <div className={`bank-card-expanded ${selectedBank === bank.name ? 'open' : ''}`}>
                    <div className="expanded-content">
                      {/* Perks */}
                      <div className="perks-section">
                        <h4><Check size={16} /> What We Love</h4>
                        <div className="perks-list">
                          {bank.perks.map((perk, i) => (
                            <div key={i} className="perk-item success">
                              <Check size={14} />
                              <span>{perk}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Watch Out */}
                      <div className="watchout-section">
                        <h4><AlertTriangle size={16} /> Things to Watch</h4>
                        <div className="perks-list">
                          {bank.watchOut.map((item, i) => (
                            <div key={i} className="perk-item warning">
                              <AlertTriangle size={14} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={bank.learnMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bank-cta"
                      >
                        Visit {bank.name} <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Security Note */}
          <div className="security-note-wrapper">
            <div className="security-note animate-fade-in">
              <div className="security-icon">
                <Shield size={28} />
              </div>
              <div>
                <h3>Security Reminder</h3>
                <p>
                  Never share your bank login credentials with anyone. Legitimate banks will never ask for
                  your password via email or phone. Always access your bank through their official website or app.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Carriers Section */}
      {activeTab === 'carriers' && (
        <div className="carriers-section">
          <div className="carriers-inner">
            {/* Section Header */}
            <div className="carriers-header">
              <h2>Compare Mobile Carriers</h2>
              <p>All carriers ranked by average coverage across the US. Prices shown are typical monthly costs.</p>
            </div>

            {/* Carrier List */}
            <div className="carrier-list">
              {sortedCarriers.map((carrier) => {
                const coverageRating = getAverageCoverage(carrier);

                return (
                  <div key={carrier.name} className="carrier-row">
                    {/* Carrier Info */}
                    <div className="carrier-info">
                      <img src={carrier.logo} alt={carrier.name} className="carrier-logo" />
                      <div className="carrier-details">
                        <div className="carrier-name-row">
                          <h3>{carrier.name}</h3>
                        </div>
                        <span className="carrier-bestfor">{carrier.bestFor}</span>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="carrier-coverage">
                      <span className="coverage-label">Avg. Coverage</span>
                      <CoverageBar rating={coverageRating} />
                    </div>

                    {/* Price */}
                    <div className="carrier-price">
                      <span className="price-amount">${carrier.monthlyCost}</span>
                      <span className="price-period">/month</span>
                    </div>

                    {/* Price Tier */}
                    <div className="carrier-tier">
                      <span className={`tier-badge ${carrier.priceTier.toLowerCase().replace(' ', '-')}`}>
                        {carrier.priceTier}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Note - Always Visible */}
            <div className="carrier-note">
              <div className="note-header">
                <Wifi size={18} style={{ color: '#10B981' }} />
                <h4>Tips for International Students</h4>
              </div>
              <p>
                Consider getting an eSIM or ordering a prepaid SIM online before your flight.
                Many carriers offer prepaid plans that don't require a credit check — perfect for international students.
              </p>
              <div className="note-tip">
                <strong>Budget tip:</strong> Mint Mobile and Visible offer excellent value with prepaid plans starting
                at $25-30/month with no contract. You can order online and activate when you arrive.
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .banking-page {
          min-height: 100vh;
          background: var(--color-bg-primary);
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Hero Section */
        .banking-hero {
          position: relative;
          padding: 120px 24px 80px;
          background: radial-gradient(ellipse 100% 70% at 70% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                      radial-gradient(ellipse 80% 50% at 0% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
                      var(--color-bg-primary);
          overflow: hidden;
        }

        .hero-content {
          max-width: 1600px;
          margin: 0 auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 100px;
          margin-bottom: 24px;
          color: #10B981;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .hero-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-text-primary);
          margin-bottom: 24px;
        }

        .hero-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-text-secondary);
          margin-bottom: 32px;
          max-width: 500px;
        }

        .hero-stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: #10B981;
          transform: translateX(8px);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #10B981;
        }

        .feature-card h3 {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .feature-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* Tip Banner */
        .tip-banner-wrapper {
          padding: 0 24px;
        }

        .tip-banner {
          max-width: 1600px;
          margin: -40px auto 0;
          padding: 28px 36px;
          background: rgba(16, 185, 129, 0.08);
          border: 2px solid rgba(16, 185, 129, 0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        .tip-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #10B981, #059669);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.75rem;
        }

        .tip-content h3 {
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .tip-content p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .tip-content strong {
          color: #10B981;
        }

        /* Tab Switcher */
        .tab-wrapper {
          padding: 40px 24px 0;
        }

        .tab-container {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: inherit;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          background: var(--color-bg-secondary);
          color: var(--color-text-secondary);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.25);
        }

        /* Banks Section */
        .banks-section {
          padding: 80px 24px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-header h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 12px;
        }

        .section-header p {
          font-size: 1rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .banks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 24px;
        }

        .bank-card {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .bank-card.hovered {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .bank-card.selected {
          border: 2px solid #10B981;
        }

        .bank-card-header {
          padding: 28px 28px 20px;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .bank-card.hovered .bank-card-header {
          background: rgba(16, 185, 129, 0.04);
        }

        .bank-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .bank-logo-container {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: var(--color-bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
        }

        .bank-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .bank-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .bank-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          background: rgba(251, 191, 36, 0.15);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #D4940D;
        }

        .chevron {
          color: var(--color-text-muted);
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(90deg);
        }

        .bank-card-body {
          padding: 20px 28px;
        }

        .bank-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .perks-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .perk-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 8px;
          font-size: 0.75rem;
          color: #10B981;
        }

        .perk-tag span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 140px;
        }

        .bank-card-expanded {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .bank-card-expanded.open {
          max-height: 600px;
        }

        .expanded-content {
          padding: 0 28px 28px;
          border-top: 1px solid var(--color-border);
        }

        .perks-section, .watchout-section {
          padding-top: 20px;
          margin-bottom: 20px;
        }

        .perks-section h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: #10B981;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .watchout-section h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: #E67E22;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .perk-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
        }

        .perk-item.success {
          background: rgba(16, 185, 129, 0.06);
          color: #10B981;
        }

        .perk-item.warning {
          background: rgba(230, 126, 34, 0.06);
          color: #E67E22;
        }

        .perk-item span {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .perk-item svg {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .bank-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #10B981, #059669);
          border-radius: 12px;
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .bank-cta:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
        }

        /* Security Note */
        .security-note-wrapper {
          padding: 0 24px 80px;
        }

        .security-note {
          max-width: 1600px;
          margin: 0 auto;
          padding: 32px 40px;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .security-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #10B981;
        }

        .security-note h3 {
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .security-note p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        /* Carriers Section */
        .carriers-section {
          padding: 40px 24px 80px;
        }

        .carriers-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .carriers-header {
          margin-bottom: 32px;
        }

        .carriers-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .carriers-header p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .clear-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          color: #888;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .clear-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #EF4444;
        }

        .empty-state {
          text-align: center;
          padding: 60px 24px;
          background: #FFFFFF;
          border: 1px dashed #E5E7EB;
          border-radius: 16px;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .empty-title {
          font-size: 1.1rem;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .empty-desc {
          font-size: 0.9rem;
          color: #888;
        }

        .carrier-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .carrier-row {
          display: grid;
          grid-template-columns: 1.5fr 1.2fr 0.6fr 0.6fr;
          align-items: center;
          gap: 24px;
          padding: 20px 24px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .carrier-row.top-pick {
          border: 2px solid #10B981;
        }

        .carrier-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .carrier-logo {
          width: 48px;
          height: 48px;
          object-fit: contain;
        }

        .carrier-name-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .carrier-details h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .best-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          background: #10B981;
          color: white;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 20px;
        }

        .carrier-bestfor {
          font-size: 0.85rem;
          color: #888;
        }

        .carrier-coverage {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .coverage-label {
          font-size: 0.8rem;
          color: #888;
        }

        .carrier-price {
          text-align: center;
        }

        .price-amount {
          font-size: 1.5rem;
          font-weight: 700;
          color: #10B981;
        }

        .price-period {
          font-size: 0.8rem;
          color: #888;
        }

        .carrier-tier {
          text-align: center;
        }

        .tier-badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .tier-badge.budget {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
        }

        .tier-badge.mid-range {
          background: rgba(59, 130, 246, 0.1);
          color: #3B82F6;
        }

        .tier-badge.premium {
          background: rgba(251, 191, 36, 0.1);
          color: #D97706;
        }

        .carrier-note {
          margin-top: 40px;
          padding: 24px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
        }

        .note-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .note-header h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .carrier-note > p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .note-tip {
          padding: 16px;
          background: #F9FAFB;
          border-radius: 10px;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
        }

        .note-tip strong {
          color: #10B981;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-right {
            display: none;
          }

          .tip-banner {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .banking-hero {
            padding: 100px 16px 60px;
          }

          .banks-grid {
            grid-template-columns: 1fr;
          }

          .carrier-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .carrier-info {
            justify-content: flex-start;
          }

          .carrier-coverage,
          .carrier-price,
          .carrier-tier {
            text-align: left;
          }

          .security-note {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }

          .tab-container {
            flex-direction: column;
          }

          .tab-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            flex-direction: column;
            gap: 16px;
          }

          .tip-banner-wrapper,
          .tab-wrapper,
          .banks-section,
          .security-note-wrapper,
          .carriers-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .bank-card-header,
          .bank-card-body,
          .expanded-content {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </div>
  );
}
