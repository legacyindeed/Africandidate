import { useMemo } from 'react';
import { Wifi, Check } from 'lucide-react';
import { carriers } from '../data/carriers';

const CoverageBar = ({ rating, showLabel = true }) => {
  const percentage = (rating / 5) * 100;
  let color = '#10B981';
  if (rating < 3) color = '#EF4444';
  else if (rating < 4) color = '#3B82F6';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div
        style={{
          flex: 1,
          height: '8px',
          background: '#F3F4F6',
          borderRadius: '4px',
          overflow: 'hidden',
          minWidth: '80px'
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
      {showLabel && (
        <span style={{ fontSize: '14px', fontWeight: 600, color, minWidth: '28px' }}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

// Calculate average coverage across all regions
const getAverageCoverage = (carrier) => {
  const regions = Object.values(carrier.regions);
  const total = regions.reduce((sum, r) => sum + r.coverageRating, 0);
  return total / regions.length;
};

export default function MobileCarriers() {
  // Sort carriers by price (high to low)
  const sortedCarriers = useMemo(() => {
    return [...carriers].sort((a, b) => b.monthlyCost - a.monthlyCost);
  }, []);

  return (
    <div className="carriers-page">
      {/* Header */}
      <div className="carriers-header animate-fade-in">
        <h1>Mobile Carriers</h1>
        <p>
          Compare mobile carriers by coverage, price, and features.
          All carriers ranked by average US coverage.
        </p>
      </div>

      {/* Carrier Grid */}
      <div className="carriers-grid animate-fade-in animate-delay-1">
        {sortedCarriers.map((carrier) => {
          const coverageRating = getAverageCoverage(carrier);

          return (
            <div
              key={carrier.name}
              className="carrier-card"
            >

              {/* Header */}
              <div className="card-header">
                <img src={carrier.logo} alt={carrier.name} className="carrier-logo" />
                <div className="carrier-name-section">
                  <h3>{carrier.name}</h3>
                  <span className={`tier-badge ${carrier.priceTier.toLowerCase().replace(' ', '-')}`}>
                    {carrier.priceTier}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="price-section">
                <span className="price-amount">${carrier.monthlyCost}</span>
                <span className="price-period">/month</span>
              </div>

              {/* Coverage */}
              <div className="coverage-section">
                <div className="coverage-header">
                  <span className="coverage-label">Avg. Coverage</span>
                  <span className="coverage-rating" style={{
                    color: coverageRating >= 4 ? '#10B981' : coverageRating >= 3 ? '#3B82F6' : '#EF4444'
                  }}>
                    {coverageRating.toFixed(1)}/5
                  </span>
                </div>
                <CoverageBar rating={coverageRating} showLabel={false} />
              </div>

              {/* Best For */}
              <div className="best-for-section">
                <span className="best-for-label">Best for:</span>
                <span className="best-for-value">{carrier.bestFor}</span>
              </div>

              {/* Features */}
              <div className="features-section">
                {carrier.features?.slice(0, 3).map((feature, i) => (
                  <div key={i} className="feature-item">
                    <Check size={14} style={{ color: '#10B981' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note - Always Visible */}
      <div className="bottom-note animate-fade-in animate-delay-3">
        <div className="note-header">
          <Wifi size={18} style={{ color: '#10B981' }} />
          <h4>Tips for International Students</h4>
        </div>
        <p>
          Consider getting an eSIM or ordering a prepaid SIM online before your
          flight. Many carriers offer prepaid plans that don't require a credit
          check — perfect for international students.
        </p>
        <div className="note-tip">
          <strong>Budget tip:</strong> Mint Mobile and Visible offer excellent value with prepaid plans starting
          at $25-30/month with no contract. You can order online and activate when you arrive.
        </div>
      </div>

      <style>{`
        .carriers-page {
          max-width: 1600px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .carriers-header {
          margin-bottom: 32px;
        }

        .carriers-header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .carriers-header p {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          max-width: 600px;
        }

        /* Carriers Grid */
        .carriers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .carrier-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
          position: relative;
          transition: all 0.3s ease;
        }

        .carrier-card:hover {
          border-color: #10B981;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.12);
          transform: translateY(-2px);
        }

        .carrier-card.top-pick {
          border: 2px solid #10B981;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.04) 0%, transparent 100%);
        }

        .top-pick-badge {
          position: absolute;
          top: -10px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          background: #10B981;
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 20px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .carrier-logo {
          width: 48px;
          height: 48px;
          object-fit: contain;
        }

        .carrier-name-section {
          flex: 1;
        }

        .carrier-name-section h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
        }

        .tier-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tier-badge.budget {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }

        .tier-badge.mid-range {
          background: rgba(59, 130, 246, 0.1);
          color: #2563EB;
        }

        .tier-badge.premium {
          background: rgba(251, 191, 36, 0.1);
          color: #D97706;
        }

        .price-section {
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #F1F5F9;
        }

        .price-amount {
          font-size: 2rem;
          font-weight: 800;
          color: #10B981;
        }

        .price-period {
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .coverage-section {
          margin-bottom: 16px;
        }

        .coverage-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .coverage-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        .coverage-rating {
          font-size: 0.85rem;
          font-weight: 700;
        }

        .best-for-section {
          margin-bottom: 16px;
          padding: 10px 12px;
          background: #F8FAFC;
          border-radius: 8px;
        }

        .best-for-label {
          font-size: 0.75rem;
          color: #94a3b8;
          display: block;
          margin-bottom: 2px;
        }

        .best-for-value {
          font-size: 0.85rem;
          color: #334155;
          font-weight: 500;
        }

        .features-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #475569;
        }

        /* Bottom Note */
        .bottom-note {
          padding: 24px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          max-width: 800px;
        }

        .note-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .note-header h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .bottom-note > p {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .note-tip {
          padding: 16px;
          background: #F8FAFC;
          border-radius: 10px;
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
        }

        .note-tip strong {
          color: #10B981;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }

        /* Responsive */
        @media (max-width: 1200px) {
          .carriers-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .carriers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .carriers-page {
            padding: 90px 16px 40px;
          }

          .carriers-grid {
            grid-template-columns: 1fr;
          }

          .carriers-header h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
