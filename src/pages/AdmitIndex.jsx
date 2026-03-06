import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  subscribeToApprovedEntries,
  filterEntries,
  COUNTRIES,
  INDUSTRIES,
  AGE_BANDS,
  YEARS_EXPERIENCE,
  SCORE_BANDS,
  SCHOLARSHIP_BANDS,
  GENDERS,
  APPLICATION_ROUNDS
} from '../data/admitIndex';

export default function AdmitIndex() {
  const [searchParams] = useSearchParams();
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Filter states
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [ageBand, setAgeBand] = useState('all');
  const [yearsExp, setYearsExp] = useState('all');
  const [scoreBand, setScoreBand] = useState('all');
  const [scholarshipBand, setScholarshipBand] = useState('all');
  const [cycleYear, setCycleYear] = useState('all');
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  // Check for success message
  useEffect(() => {
    if (searchParams.get('submitted') === 'true') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [searchParams]);

  // Load entries (real-time subscription)
  useEffect(() => {
    const unsubscribe = subscribeToApprovedEntries((approved) => {
      setEntries(approved);
    });
    return () => unsubscribe();
  }, []);

  // Apply filters
  useEffect(() => {
    const filters = {
      countries: selectedCountries,
      industries: selectedIndustries,
      age_band: ageBand,
      years_experience: yearsExp,
      score_band: scoreBand,
      scholarship_band: scholarshipBand,
      cycle_year: cycleYear
    };
    setFilteredEntries(filterEntries(entries, filters));
  }, [entries, selectedCountries, selectedIndustries, ageBand, yearsExp, scoreBand, scholarshipBand, cycleYear]);

  const clearFilters = () => {
    setSelectedCountries([]);
    setSelectedIndustries([]);
    setAgeBand('all');
    setYearsExp('all');
    setScoreBand('all');
    setScholarshipBand('all');
    setCycleYear('all');
  };

  const toggleCountry = (country) => {
    setSelectedCountries(prev =>
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  const toggleIndustry = (industry) => {
    setSelectedIndustries(prev =>
      prev.includes(industry)
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  const getScholarshipLabel = (band) => {
    switch (band) {
      case 'none': return 'No Scholarship';
      case 'partial': return 'Partial Scholarship';
      case 'full': return 'Full Scholarship';
      default: return band;
    }
  };

  const getScholarshipColor = (band) => {
    switch (band) {
      case 'full': return '#10b981';
      case 'partial': return '#f59e0b';
      case 'none': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 60px' }}>
        {/* Clean Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h1 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '4px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Decision Board
            </h1>
            <p style={{
              fontSize: '0.95rem',
              color: '#64748b',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Real stories from Africans who made it into top MBA programs
            </p>
          </div>
          <Link
            to="/admit-index/submit"
            style={{
              background: '#10b981',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            + Share Your Story
          </Link>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '16px',
            color: '#065f46',
            fontSize: '0.9rem',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Your submission has been received and is pending review. Thank you!
          </div>
        )}

        {/* Filters - Collapsible */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          marginBottom: '20px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          {/* Filter Header - Always Visible */}
          <div
            onClick={() => setFiltersExpanded(!filtersExpanded)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              cursor: 'pointer',
              background: filtersExpanded ? 'linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)' : 'white',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  margin: 0
                }}>
                  Filter Profiles
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  {(selectedCountries.length > 0 || selectedIndustries.length > 0 || ageBand !== 'all' || yearsExp !== 'all' || scoreBand !== 'all' || scholarshipBand !== 'all' || cycleYear !== 'all')
                    ? 'Filters applied'
                    : 'Click to customize your search'}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {(selectedCountries.length > 0 || selectedIndustries.length > 0 || ageBand !== 'all' || yearsExp !== 'all' || scoreBand !== 'all' || scholarshipBand !== 'all' || cycleYear !== 'all') && (
                <button
                  onClick={(e) => { e.stopPropagation(); clearFilters(); }}
                  style={{
                    background: '#fee2e2',
                    border: 'none',
                    color: '#dc2626',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}
                >
                  Clear All
                </button>
              )}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                transition: 'transform 0.2s ease',
                transform: filtersExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Content - Collapsible */}
          {filtersExpanded && (
            <div style={{ padding: '16px 20px', borderTop: '1px solid #e2e8f0' }}>
              {/* Country Dropdown */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ ...labelStyle, marginBottom: '8px' }}>Country</label>
                <select
                  value={selectedCountries[0] || 'all'}
                  onChange={(e) => setSelectedCountries(e.target.value === 'all' ? [] : [e.target.value])}
                  style={{ ...selectStyle, maxWidth: '250px' }}
                >
                  <option value="all">All Countries</option>
                  {COUNTRIES.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Compact Dropdowns Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px'
              }}>
                <div>
                  <label style={labelStyle}>Industry</label>
                  <select
                    value={selectedIndustries[0] || 'all'}
                    onChange={(e) => setSelectedIndustries(e.target.value === 'all' ? [] : [e.target.value])}
                    style={selectStyle}
                  >
                    <option value="all">All</option>
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Age</label>
                  <select value={ageBand} onChange={(e) => setAgeBand(e.target.value)} style={selectStyle}>
                    <option value="all">All</option>
                    {AGE_BANDS.map(band => <option key={band} value={band}>{band}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Experience</label>
                  <select value={yearsExp} onChange={(e) => setYearsExp(e.target.value)} style={selectStyle}>
                    <option value="all">All</option>
                    {YEARS_EXPERIENCE.map(exp => <option key={exp} value={exp}>{exp} yrs</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Score</label>
                  <select value={scoreBand} onChange={(e) => setScoreBand(e.target.value)} style={selectStyle}>
                    <option value="all">All</option>
                    {SCORE_BANDS.map(band => <option key={band} value={band}>{band}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Scholarship</label>
                  <select value={scholarshipBand} onChange={(e) => setScholarshipBand(e.target.value)} style={selectStyle}>
                    <option value="all">All</option>
                    {SCHOLARSHIP_BANDS.map(band => <option key={band} value={band}>{getScholarshipLabel(band)}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Class</label>
                  <select value={cycleYear} onChange={(e) => setCycleYear(e.target.value)} style={selectStyle}>
                    <option value="all">All</option>
                    <option value="2028">2028</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <p style={{
          color: '#64748b',
          marginBottom: '16px',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          Showing {filteredEntries.length} of {entries.length} profiles
        </p>

        {/* Entries Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '20px'
        }}>
          {filteredEntries.map(entry => (
            <div
              key={entry.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e2e8f0',
                transition: 'box-shadow 0.2s',
                cursor: 'default'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    marginBottom: '4px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    {entry.display_name || 'Anonymous'}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Admitted Candidate
                  </p>
                </div>
                <span style={{
                  background: `${getScholarshipColor(entry.scholarship_band)}15`,
                  color: getScholarshipColor(entry.scholarship_band),
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  {getScholarshipLabel(entry.scholarship_band)}
                </span>
              </div>

              {/* Stats - Row 1 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <div style={statBox}>
                  <span style={statLabel}>Gender</span>
                  <span style={statValue}>{entry.gender || 'N/A'}</span>
                </div>
                <div style={statBox}>
                  <span style={statLabel}>Age</span>
                  <span style={statValue}>{entry.age_band}</span>
                </div>
                <div style={statBox}>
                  <span style={statLabel}>Experience</span>
                  <span style={statValue}>{entry.years_experience} yrs</span>
                </div>
                <div style={statBox}>
                  <span style={statLabel}>{entry.score_type === 'Waived' ? 'Test' : (entry.score_type || 'Test')}</span>
                  <span style={statValue}>{entry.score_type === 'Waived' ? 'Waived' : (entry.score_band || 'N/A')}</span>
                </div>
              </div>

              {/* Stats - Row 2 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <div style={statBox}>
                  <span style={statLabel}>Round</span>
                  <span style={statValue}>{entry.application_round || 'N/A'}</span>
                </div>
                <div style={statBox}>
                  <span style={statLabel}>Country</span>
                  <span style={statValue}>{entry.country}</span>
                </div>
                <div style={statBox}>
                  <span style={statLabel}>Undergrad</span>
                  <span style={statValue}>{entry.undergrad_major}</span>
                </div>
              </div>

              {/* Stats - Row 3 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
                marginBottom: '16px'
              }}>
                <div style={statBox}>
                  <span style={statLabel}>Pre-MBA</span>
                  <span style={statValue}>{entry.industry}</span>
                </div>
                <div style={statBox}>
                  <span style={statLabel}>Post-MBA</span>
                  <span style={statValue}>{entry.post_mba_industry || 'N/A'}</span>
                </div>
              </div>

              {/* Schools */}
              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  marginBottom: '6px',
                  fontWeight: 500,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Admitted to:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {entry.schools_admitted.map((school, i) => (
                    <span
                      key={i}
                      style={{
                        background: '#ecfdf5',
                        color: '#059669',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                      }}
                    >
                      {school}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rejected Schools */}
              {entry.schools_rejected && entry.schools_rejected.length > 0 && (
                <div style={{ marginBottom: '16px' }}>
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#64748b',
                    marginBottom: '6px',
                    fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Rejected from:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {entry.schools_rejected.map((school, i) => (
                      <span
                        key={i}
                        style={{
                          background: '#fef2f2',
                          color: '#dc2626',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          fontFamily: "'Plus Jakarta Sans', sans-serif"
                        }}
                      >
                        {school}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Differentiator */}
              <div style={{
                background: '#f8fafc',
                borderRadius: '10px',
                padding: '14px',
                borderLeft: '3px solid #10b981'
              }}>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  "{entry.differentiator_text}"
                </p>
              </div>

              {/* Footer */}
              <div style={{
                marginTop: '14px',
                paddingTop: '14px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                justifyContent: 'flex-end',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                <div style={{
                  background: '#f1f5f9',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  color: '#475569',
                  fontWeight: 600
                }}>
                  MBA Class of {entry.cycle_year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#64748b'
          }}>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '12px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              No profiles match your filters.
            </p>
            <button
              onClick={clearFilters}
              style={{
                background: '#10b981',
                color: 'white',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '100px',
                cursor: 'pointer',
                fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 500,
  color: '#475569',
  marginBottom: '6px',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const selectStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  fontSize: '0.9rem',
  color: '#0f172a',
  background: 'white',
  cursor: 'pointer',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const multiSelectStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  maxHeight: '80px',
  overflowY: 'auto'
};

const chipStyle = {
  padding: '5px 10px',
  borderRadius: '100px',
  border: 'none',
  fontSize: '0.8rem',
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'all 0.2s',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const statBox = {
  background: '#f8fafc',
  borderRadius: '8px',
  padding: '10px 8px',
  textAlign: 'center',
  minHeight: '52px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const statLabel = {
  display: 'block',
  fontSize: '0.7rem',
  color: '#94a3b8',
  marginBottom: '3px',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  textTransform: 'uppercase',
  letterSpacing: '0.02em'
};

const statValue = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#0f172a',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
