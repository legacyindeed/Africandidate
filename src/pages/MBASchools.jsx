import { useState } from 'react';
import { Search, MapPin, Users, DollarSign, TrendingUp, GraduationCap, ExternalLink, ChevronDown, ChevronUp, Filter, Award, Briefcase, Globe, BookOpen, Calendar } from 'lucide-react';
import { mbaSchools, formatCurrency, getTuitionTier } from '../data/mbaSchools';

const regions = [
  { id: 'all', label: 'All Regions' },
  { id: 'northeast', label: 'Northeast', states: ['MA', 'NY', 'PA', 'CT', 'NH', 'NJ'] },
  { id: 'midwest', label: 'Midwest', states: ['IL', 'MI', 'IN', 'MO', 'OH'] },
  { id: 'south', label: 'South', states: ['TX', 'NC', 'VA', 'GA', 'TN', 'DC'] },
  { id: 'west', label: 'West', states: ['CA', 'WA'] }
];

const sortOptions = [
  { id: 'rank', label: 'Ranking' },
  { id: 'deadline', label: 'R1 Deadline (Earliest)' },
  { id: 'tuition-low', label: 'Tuition (Low to High)' },
  { id: 'tuition-high', label: 'Tuition (High to Low)' },
  { id: 'intl', label: 'International Students %' },
  { id: 'salary', label: 'Median Salary' }
];

export default function MBASchools() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [sortBy, setSortBy] = useState('rank');
  const [expandedSchool, setExpandedSchool] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort schools
  const filteredSchools = mbaSchools
    .filter(school => {
      // Search filter
      const searchMatch = searchQuery === '' ||
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Region filter
      let regionMatch = true;
      if (selectedRegion !== 'all') {
        const region = regions.find(r => r.id === selectedRegion);
        const stateAbbr = school.location.split(', ')[1];
        regionMatch = region.states.includes(stateAbbr);
      }

      return searchMatch && regionMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'deadline':
          // Parse dates and sort by earliest Round 1 deadline
          const dateA = new Date(a.round1Deadline);
          const dateB = new Date(b.round1Deadline);
          return dateA - dateB;
        case 'tuition-low':
          return a.tuition - b.tuition;
        case 'tuition-high':
          return b.tuition - a.tuition;
        case 'intl':
          return b.intlStudents - a.intlStudents;
        case 'salary':
          return b.medianSalary - a.medianSalary;
        default:
          return a.rank - b.rank;
      }
    });

  const toggleExpand = (rank) => {
    setExpandedSchool(expandedSchool === rank ? null : rank);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg-primary)',
      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Hero Section */}
      <div style={{
        background: `
          linear-gradient(180deg, rgba(139, 92, 246, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
          var(--color-bg-primary)
        `,
        padding: '120px 24px 50px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(16, 185, 129, 0.08))',
          borderRadius: '100px',
          marginBottom: '20px',
          border: '1px solid rgba(139, 92, 246, 0.15)'
        }}>
          <GraduationCap size={18} style={{ color: '#8B5CF6' }} />
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#8B5CF6' }}>
            2025 Rankings
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          marginBottom: '16px',
          lineHeight: 1.15
        }}>
          Top 30 MBA Schools{' '}
          <span style={{
            background: 'linear-gradient(135deg, #8B5CF6, #10B981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            in America
          </span>
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 32px',
          lineHeight: 1.7
        }}>
          Compare tuition, class size, international student percentages, and career outcomes
          to find the perfect MBA program for your journey.
        </p>

        {/* Search Bar */}
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <Search
            size={20}
            style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-muted)'
            }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search schools, locations..."
            style={{
              width: '100%',
              padding: '16px 20px 16px 52px',
              fontSize: '1rem',
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '14px',
              color: 'var(--color-text-primary)',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
          />
        </div>
      </div>

      {/* Filters & Sort */}
      <div style={{
        padding: '0 24px 24px',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Region Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {regions.map(region => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '100px',
                  border: selectedRegion === region.id ? 'none' : '1px solid var(--color-border)',
                  background: selectedRegion === region.id ? '#8B5CF6' : 'var(--color-bg-secondary)',
                  color: selectedRegion === region.id ? 'white' : 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {region.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div style={{ position: 'relative' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 40px 10px 16px',
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-secondary)',
                color: 'var(--color-text-primary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                appearance: 'none',
                outline: 'none'
              }}
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
            <ChevronDown
              size={16}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: 'var(--color-text-muted)'
              }}
            />
          </div>
        </div>

        {/* Results count */}
        <p style={{
          marginTop: '16px',
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)'
        }}>
          Showing {filteredSchools.length} of {mbaSchools.length} schools
        </p>
      </div>

      {/* Schools Grid - 3 Cards Per Row */}
      <div style={{
        padding: '0 24px 80px',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }} className="schools-grid">
          {filteredSchools.map((school) => {
            const isExpanded = expandedSchool === school.rank;
            const tuitionTier = getTuitionTier(school.tuition);

            return (
              <div
                key={school.rank}
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: isExpanded ? '2px solid #8B5CF6' : '1px solid var(--color-border)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isExpanded ? '0 12px 40px rgba(139, 92, 246, 0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Card Header with Rank Badge */}
                <div style={{
                  padding: '20px 20px 16px',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  {/* Rank Badge */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: school.rank <= 3 ? 'linear-gradient(135deg, #FEF3C7, #FDE68A)' : school.rank <= 10 ? 'linear-gradient(135deg, #EDE9FE, #DDD6FE)' : 'var(--color-bg-tertiary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      color: school.rank <= 3 ? '#D97706' : school.rank <= 10 ? '#7C3AED' : 'var(--color-text-primary)'
                    }}>
                      #{school.rank}
                    </span>
                  </div>

                  {/* School Logo */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'white',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}>
                    <img
                      src={school.logo}
                      alt={school.university}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span style="font-size: 1.5rem;">🎓</span>';
                      }}
                    />
                  </div>

                  {/* Tuition Tier Badge */}
                  <span style={{
                    marginLeft: 'auto',
                    padding: '5px 10px',
                    borderRadius: '100px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    background: `${tuitionTier.color}15`,
                    color: tuitionTier.color
                  }}>
                    {tuitionTier.label}
                  </span>
                </div>

                {/* School Info */}
                <div style={{ padding: '16px 20px', flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '4px',
                    lineHeight: 1.3
                  }}>
                    {school.name}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '12px'
                  }}>
                    {school.university}
                  </p>

                  {/* Location & International */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)'
                    }}>
                      <MapPin size={14} />
                      {school.location}
                    </span>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)'
                    }}>
                      <Globe size={14} />
                      {school.intlStudents}% International Students
                    </span>
                  </div>

                  {/* Application Deadlines */}
                  {school.round1Deadline && (
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      marginBottom: '16px',
                      padding: '10px 12px',
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(139, 92, 246, 0.08))',
                      borderRadius: '10px',
                      border: '1px solid rgba(236, 72, 153, 0.15)'
                    }}>
                      <Calendar size={16} style={{ color: '#EC4899', flexShrink: 0, marginTop: '2px' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#EC4899' }}>
                          R1: {school.round1Deadline}
                        </span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8B5CF6' }}>
                          R2: {school.round2Deadline}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Key Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      padding: '10px',
                      background: 'var(--color-bg-tertiary)',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#8B5CF6' }}>
                        {formatCurrency(school.tuition)}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                        Tuition
                      </div>
                    </div>
                    <div style={{
                      padding: '10px',
                      background: 'var(--color-bg-tertiary)',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10B981' }}>
                        {formatCurrency(school.medianSalary)}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                        Median Salary
                      </div>
                    </div>
                    <div style={{
                      padding: '10px',
                      background: 'var(--color-bg-tertiary)',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F59E0B' }}>
                        {school.gmatMedian}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                        GMAT Median
                      </div>
                    </div>
                    <div style={{
                      padding: '10px',
                      background: 'var(--color-bg-tertiary)',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#3B82F6' }}>
                        {school.classSize}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                        Class Size
                      </div>
                    </div>
                  </div>

                  {/* Strengths Preview */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {school.strengths.slice(0, 2).map((strength) => (
                      <span
                        key={strength}
                        style={{
                          padding: '4px 10px',
                          background: 'rgba(139, 92, 246, 0.08)',
                          borderRadius: '100px',
                          fontSize: '0.7rem',
                          color: '#8B5CF6',
                          fontWeight: 500
                        }}
                      >
                        {strength}
                      </span>
                    ))}
                    {school.strengths.length > 2 && (
                      <span style={{
                        padding: '4px 10px',
                        background: 'var(--color-bg-tertiary)',
                        borderRadius: '100px',
                        fontSize: '0.7rem',
                        color: 'var(--color-text-muted)',
                        fontWeight: 500
                      }}>
                        +{school.strengths.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer - Expand/Collapse */}
                <div
                  onClick={() => toggleExpand(school.rank)}
                  style={{
                    padding: '12px 20px',
                    borderTop: '1px solid var(--color-border)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: isExpanded ? 'rgba(139, 92, 246, 0.05)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: isExpanded ? '#8B5CF6' : 'var(--color-text-secondary)'
                  }}>
                    {isExpanded ? 'Show Less' : 'View Details'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={16} style={{ color: '#8B5CF6' }} />
                  ) : (
                    <ChevronDown size={16} style={{ color: 'var(--color-text-muted)' }} />
                  )}
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div style={{
                    padding: '20px',
                    borderTop: '1px solid var(--color-border)',
                    background: 'var(--color-bg-tertiary)'
                  }}>
                    {/* Additional Stats */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      marginBottom: '16px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Award size={14} style={{ color: '#EC4899' }} />
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                          {school.acceptanceRate}% Acceptance
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Briefcase size={14} style={{ color: '#10B981' }} />
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                          {school.employmentRate}% Employment
                        </span>
                      </div>
                    </div>

                    {/* Application Deadlines in Expanded View */}
                    {school.round1Deadline && (
                      <div style={{
                        marginBottom: '16px',
                        padding: '14px',
                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))',
                        borderRadius: '12px',
                        border: '1px solid rgba(236, 72, 153, 0.2)'
                      }}>
                        <p style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          marginBottom: '10px',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <Calendar size={14} style={{ color: '#EC4899' }} />
                          Application Deadlines (2025-2026)
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          <div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', display: 'block' }}>Round 1</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#EC4899' }}>{school.round1Deadline}</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', display: 'block' }}>Round 2</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#8B5CF6' }}>{school.round2Deadline}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '16px'
                    }}>
                      {school.description}
                    </p>

                    {/* All Strengths */}
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--color-text-muted)',
                        marginBottom: '8px',
                        textTransform: 'uppercase'
                      }}>
                        Key Strengths
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {school.strengths.map((strength) => (
                          <span
                            key={strength}
                            style={{
                              padding: '5px 12px',
                              background: 'rgba(139, 92, 246, 0.1)',
                              border: '1px solid rgba(139, 92, 246, 0.2)',
                              borderRadius: '100px',
                              fontSize: '0.75rem',
                              color: '#8B5CF6',
                              fontWeight: 500
                            }}
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '10px 16px',
                          background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                          color: 'white',
                          borderRadius: '10px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Visit Website
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={school.intlResources}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '10px 16px',
                          background: 'white',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-primary)',
                          borderRadius: '10px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <Globe size={14} />
                        International Resources
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredSchools.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 24px',
            background: 'var(--color-bg-secondary)',
            borderRadius: '20px',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px'
            }}>
              No schools found matching your criteria
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('all'); }}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                background: '#8B5CF6',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom Note */}
      <div style={{
        padding: '0 24px 60px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{
          padding: '28px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.06), rgba(16, 185, 129, 0.04))',
          borderRadius: '16px',
          border: '1px solid var(--color-border)',
          textAlign: 'center'
        }}>
          <h4 style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '10px'
          }}>
            For African MBA Applicants
          </h4>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7
          }}>
            Many top schools offer scholarships specifically for African students. Check each school's
            financial aid page and look for Africa-focused fellowships like the Forte Foundation,
            Consortium, and school-specific diversity scholarships.
          </p>
        </div>
      </div>

      <style>{`
        .schools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1100px) {
          .schools-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 700px) {
          .schools-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
