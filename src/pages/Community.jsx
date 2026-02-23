import { useState } from 'react';
import { MapPin, Globe, Mail, X, Users } from 'lucide-react';
import CitySearch from '../components/CitySearch';
import communityData from '../data/community';

const categories = [
  { id: 'all', label: 'All', emoji: '🌍' },
  { id: 'Student Associations', label: 'Student Groups', emoji: '🎓' },
  { id: 'Cultural & Social', label: 'Cultural', emoji: '🎭' },
  { id: 'Food & Lifestyle', label: 'Food', emoji: '🍲' },
  { id: 'Career & Networking', label: 'Career', emoji: '💼' },
];

const categoryStyles = {
  'Student Associations': {
    borderColor: 'var(--color-accent-primary)',
    color: 'var(--color-accent-primary)'
  },
  'Cultural & Social': {
    borderColor: 'var(--color-blue)',
    color: 'var(--color-blue)'
  },
  'Food & Lifestyle': {
    borderColor: 'var(--color-accent-green)',
    color: 'var(--color-accent-green)'
  },
  'Career & Networking': {
    borderColor: '#a78bfa',
    color: '#a78bfa'
  },
};

export default function Community() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Get organizations for selected city
  const getOrganizations = () => {
    if (!selectedCity) return [];

    const cityOrgs = communityData[selectedCity.name] || [];

    if (activeCategory === 'all') {
      return cityOrgs;
    }

    return cityOrgs.filter(org => org.category === activeCategory);
  };

  const organizations = getOrganizations();
  const hasData = selectedCity && communityData[selectedCity.name];

  const handleClearCity = () => {
    setSelectedCity(null);
    setActiveCategory('all');
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="section-header animate-fade-in">
        <h1 style={{ marginBottom: '0.75rem' }}>African Student Community</h1>
        <p style={{ marginBottom: '0.5rem' }}>
          Find African student associations, cultural groups, and community resources near your campus.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          You're not alone in this journey
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 animate-fade-in animate-delay-1" style={{ maxWidth: '600px', position: 'relative', zIndex: 100 }}>
        <CitySearch
          single
          onSelect={setSelectedCity}
          selectedCities={selectedCity ? [selectedCity] : []}
          placeholder="Search for your MBA city..."
        />

        {/* Selected City Display */}
        {selectedCity && (
          <div
            className="mt-4 flex items-center gap-3 animate-fade-in"
            style={{
              padding: '12px 16px',
              background: 'var(--color-bg-secondary)',
              borderRadius: '10px',
              border: '1px solid var(--color-border)'
            }}
          >
            <MapPin size={18} style={{ color: 'var(--color-accent-primary)' }} />
            <div style={{ flex: 1 }}>
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                {selectedCity.name}, {selectedCity.state}
              </span>
              {hasData && (
                <span
                  style={{
                    marginLeft: '12px',
                    fontSize: '13px',
                    color: 'var(--color-accent-green)',
                    padding: '2px 8px',
                    background: 'rgba(52, 211, 153, 0.1)',
                    borderRadius: '4px'
                  }}
                >
                  {communityData[selectedCity.name].length} resources
                </span>
              )}
            </div>
            <button
              onClick={handleClearCity}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-text-muted)',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
                e.currentTarget.style.color = '#f87171';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-muted)';
              }}
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Category Filters */}
      {selectedCity && hasData && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}
          className="animate-fade-in animate-delay-2"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1rem',
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
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Empty State - No City Selected */}
      {!selectedCity && (
        <div className="empty-state animate-fade-in animate-delay-2">
          <div className="icon">🤝</div>
          <p>Search for a city to find community resources</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
            Connect with African students and organizations near your campus
          </p>
        </div>
      )}

      {/* Empty State - City Has No Data */}
      {selectedCity && !hasData && (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'var(--color-bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--color-border)'
          }}
          className="animate-fade-in"
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            No community resources found for <strong>{selectedCity.name}</strong> yet.
            Check back soon — we're always adding more.
          </p>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.9rem',
            marginTop: '1rem'
          }}>
            In the meantime, ask your university's international student office.
          </p>
        </div>
      )}

      {/* Empty State - Category Has No Results */}
      {selectedCity && hasData && organizations.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'var(--color-bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--color-border)'
          }}
          className="animate-fade-in"
        >
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
            No {activeCategory} resources found in {selectedCity.name}.
          </p>
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              marginTop: '1rem',
              padding: '8px 16px',
              background: 'var(--color-accent-primary)',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 500
            }}
          >
            View All Categories
          </button>
        </div>
      )}

      {/* Organization Cards */}
      {organizations.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {organizations.map((org, index) => {
            const style = categoryStyles[org.category] || categoryStyles['Student Associations'];
            return (
              <div
                key={org.id}
                className={`card animate-fade-in animate-delay-${Math.min(index + 2, 6)}`}
              >
                {/* Header */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3
                  }}>
                    {org.name}
                  </h3>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    border: `1px solid ${style.borderColor}`,
                    color: style.color,
                    background: 'transparent'
                  }}>
                    {org.category}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {org.description}
                </p>

                {/* Info Row */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  {org.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={14} style={{ color: 'var(--color-text-muted)' }} />
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                        {org.location}
                      </span>
                    </div>
                  )}
                  {org.website && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Globe size={14} style={{ color: 'var(--color-accent-primary)' }} />
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--color-accent-primary)',
                          fontSize: '0.85rem',
                          textDecoration: 'none'
                        }}
                      >
                        Visit Website →
                      </a>
                    </div>
                  )}
                  {org.contact && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail size={14} style={{ color: 'var(--color-text-muted)' }} />
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                        {org.contact}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Note */}
      {selectedCity && hasData && (
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px'
          }}
          className="animate-fade-in"
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <Users size={20} style={{ color: 'var(--color-accent-primary)', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>Pro tip:</strong> Many universities have
              African or international student associations not listed here. Check with your school's student
              activities office or international student services for campus-specific groups.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
