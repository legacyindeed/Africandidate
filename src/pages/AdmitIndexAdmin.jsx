import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  subscribeToAllEntries,
  updateEntryStatus,
  updateEntry,
  deleteEntry,
  getScholarshipLabel,
  GENDERS,
  AGE_BANDS,
  YEARS_EXPERIENCE,
  SCORE_TYPES,
  GMAT_SCORE_BANDS,
  GRE_SCORE_BANDS,
  SCHOLARSHIP_BANDS,
  APPLICATION_ROUNDS,
  COUNTRIES,
  INDUSTRIES,
  POST_MBA_INDUSTRIES,
  MBA_SCHOOLS
} from '../data/admitIndex';

export default function AdmitIndexAdmin() {
  const { user, isAdmin, loginWithGoogle, logout, loading } = useAuth();
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState('pending');
  const [editingEntry, setEditingEntry] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [saving, setSaving] = useState(false);

  // Subscribe to entries when admin is authenticated
  useEffect(() => {
    if (isAdmin) {
      const unsubscribe = subscribeToAllEntries((allEntries) => {
        setEntries(allEntries);
      });
      return () => unsubscribe();
    }
  }, [isAdmin]);

  const handleApprove = async (id) => {
    try {
      await updateEntryStatus(id, 'approved');
    } catch (error) {
      console.error('Error approving entry:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await updateEntryStatus(id, 'rejected');
    } catch (error) {
      console.error('Error rejecting entry:', error);
    }
  };

  const handleEdit = (entry) => {
    setEditingEntry({ ...entry });
  };

  const handleSaveEdit = async () => {
    if (!editingEntry) return;
    setSaving(true);
    try {
      const { id, created_at, ...updates } = editingEntry;
      await updateEntry(id, updates);
      setEditingEntry(null);
    } catch (error) {
      console.error('Error updating entry:', error);
      alert('Failed to save changes. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    setSaving(true);
    try {
      await deleteEntry(id);
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('Failed to delete entry. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const filteredEntries = entries.filter(e => {
    if (filter === 'all') return true;
    return e.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return '#10b981';
      case 'rejected': return '#ef4444';
      case 'pending': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    // Handle Firestore Timestamp
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString();
  };

  // Loading state
  if (loading) {
    return (
      <div style={{
        paddingTop: '150px',
        minHeight: '100vh',
        background: '#f8fafc',
        textAlign: 'center'
      }}>
        <p style={{ color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Loading...
        </p>
      </div>
    );
  }

  // Not logged in - show login
  if (!user) {
    return (
      <div style={{
        paddingTop: '150px',
        minHeight: '100vh',
        background: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '40px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #e2e8f0'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '16px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Admin Login
          </h1>
          <p style={{
            fontSize: '0.95rem',
            color: '#64748b',
            marginBottom: '24px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Sign in with your Google account to access the admin panel.
          </p>
          <button
            onClick={loginWithGoogle}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              width: '100%',
              padding: '14px 24px',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  // Logged in but not admin
  if (!isAdmin) {
    return (
      <div style={{
        paddingTop: '150px',
        minHeight: '100vh',
        background: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '40px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #e2e8f0'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#ef4444',
            marginBottom: '16px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Access Denied
          </h1>
          <p style={{
            fontSize: '0.95rem',
            color: '#64748b',
            marginBottom: '8px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            You are signed in as:
          </p>
          <p style={{
            fontSize: '0.95rem',
            color: '#0f172a',
            fontWeight: 600,
            marginBottom: '24px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            {user.email}
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: '#64748b',
            marginBottom: '24px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            This account does not have admin access.
          </p>
          <button
            onClick={logout}
            style={{
              padding: '12px 24px',
              background: '#f1f5f9',
              color: '#475569',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // Admin view
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '32px'
        }}>
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '8px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Admit Index Admin
            </h1>
            <p style={{
              fontSize: '1rem',
              color: '#64748b',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Review and moderate submitted profiles.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{
              fontSize: '0.85rem',
              color: '#64748b',
              marginBottom: '8px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Signed in as {user.email}
            </p>
            <button
              onClick={logout}
              style={{
                padding: '8px 16px',
                background: '#f1f5f9',
                color: '#475569',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {[
            { label: 'Total', count: entries.length, color: '#6366f1' },
            { label: 'Pending', count: entries.filter(e => e.status === 'pending').length, color: '#f59e0b' },
            { label: 'Approved', count: entries.filter(e => e.status === 'approved').length, color: '#10b981' },
            { label: 'Rejected', count: entries.filter(e => e.status === 'rejected').length, color: '#ef4444' }
          ].map(stat => (
            <div
              key={stat.label}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e2e8f0',
                textAlign: 'center'
              }}
            >
              <p style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: stat.color,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                {stat.count}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: '#64748b',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '24px'
        }}>
          {['pending', 'approved', 'rejected', 'all'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              style={{
                padding: '10px 20px',
                borderRadius: '100px',
                border: 'none',
                background: filter === status ? '#0f172a' : '#f1f5f9',
                color: filter === status ? 'white' : '#475569',
                fontWeight: 500,
                cursor: 'pointer',
                textTransform: 'capitalize',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Entries List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredEntries.map(entry => (
            <div
              key={entry.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e2e8f0'
              }}
            >
              {/* Header Row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#0f172a',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                      {entry.display_name || 'Anonymous'}
                    </h3>
                    <span style={{
                      background: `${getStatusColor(entry.status)}20`,
                      color: getStatusColor(entry.status),
                      padding: '4px 12px',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                      {entry.status}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    marginTop: '4px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    {entry.country} | {entry.industry} | {entry.years_experience} yrs | {entry.score_type} {entry.score_band}
                  </p>
                </div>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  {formatDate(entry.created_at)}
                </p>
              </div>

              {/* Details */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div>
                  <p style={detailLabel}>Gender</p>
                  <p style={detailValue}>{entry.gender || 'N/A'}</p>
                </div>
                <div>
                  <p style={detailLabel}>Application Round</p>
                  <p style={detailValue}>{entry.application_round || 'N/A'}</p>
                </div>
                <div>
                  <p style={detailLabel}>Age Range</p>
                  <p style={detailValue}>{entry.age_band}</p>
                </div>
                <div>
                  <p style={detailLabel}>Undergrad Major</p>
                  <p style={detailValue}>{entry.undergrad_major}</p>
                </div>
                <div>
                  <p style={detailLabel}>Pre-MBA Industry</p>
                  <p style={detailValue}>{entry.industry}</p>
                </div>
                <div>
                  <p style={detailLabel}>Post-MBA Industry</p>
                  <p style={detailValue}>{entry.post_mba_industry || 'N/A'}</p>
                </div>
                <div>
                  <p style={detailLabel}>Scholarship</p>
                  <p style={detailValue}>{getScholarshipLabel(entry.scholarship_band)}</p>
                </div>
                <div>
                  <p style={detailLabel}>MBA Class</p>
                  <p style={detailValue}>{entry.cycle_year}</p>
                </div>
              </div>

              {/* Schools */}
              <div style={{ marginBottom: '16px' }}>
                <p style={detailLabel}>Admitted To</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {entry.schools_admitted?.map((school, i) => (
                    <span key={i} style={schoolChipGreen}>{school}</span>
                  ))}
                </div>
              </div>

              {entry.schools_rejected && entry.schools_rejected.length > 0 && (
                <div style={{ marginBottom: '16px' }}>
                  <p style={detailLabel}>Rejected From</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                    {entry.schools_rejected.map((school, i) => (
                      <span key={i} style={schoolChipRed}>{school}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Differentiator */}
              {entry.differentiator_text && (
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '10px',
                  padding: '16px',
                  marginBottom: '16px'
                }}>
                  <p style={detailLabel}>Tips/Insights</p>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    marginTop: '6px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    {entry.differentiator_text}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {entry.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(entry.id)}
                      style={{
                        padding: '10px 24px',
                        background: '#10b981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                      }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(entry.id)}
                      style={{
                        padding: '10px 24px',
                        background: '#fee2e2',
                        color: '#dc2626',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                      }}
                    >
                      Reject
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleEdit(entry)}
                  style={{
                    padding: '10px 24px',
                    background: '#f1f5f9',
                    color: '#475569',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteConfirm(entry)}
                  style={{
                    padding: '10px 24px',
                    background: '#fef2f2',
                    color: '#dc2626',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#64748b',
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: '1.1rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              No {filter === 'all' ? '' : filter} entries found.
            </p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div style={modalOverlay}>
          <div style={{ ...modalContent, maxWidth: '400px' }}>
            <h2 style={modalTitle}>Delete Entry?</h2>
            <p style={{ color: '#64748b', marginBottom: '24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Are you sure you want to delete the entry for <strong>{deleteConfirm.display_name || 'Anonymous'}</strong>? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setDeleteConfirm(null)}
                disabled={saving}
                style={{
                  padding: '10px 24px',
                  background: '#f1f5f9',
                  color: '#475569',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                disabled={saving}
                style={{
                  padding: '10px 24px',
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  opacity: saving ? 0.7 : 1
                }}
              >
                {saving ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingEntry && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h2 style={modalTitle}>Edit Entry</h2>
            <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '8px' }}>
              <div style={formGrid}>
                {/* Display Name */}
                <div style={formGroup}>
                  <label style={formLabel}>Display Name</label>
                  <input
                    type="text"
                    value={editingEntry.display_name || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, display_name: e.target.value })}
                    style={formInput}
                  />
                </div>

                {/* Gender */}
                <div style={formGroup}>
                  <label style={formLabel}>Gender</label>
                  <select
                    value={editingEntry.gender || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, gender: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                {/* Country */}
                <div style={formGroup}>
                  <label style={formLabel}>Country</label>
                  <select
                    value={editingEntry.country || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, country: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Age Band */}
                <div style={formGroup}>
                  <label style={formLabel}>Age Range</label>
                  <select
                    value={editingEntry.age_band || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, age_band: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {AGE_BANDS.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>

                {/* Years Experience */}
                <div style={formGroup}>
                  <label style={formLabel}>Years Experience</label>
                  <select
                    value={editingEntry.years_experience || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, years_experience: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {YEARS_EXPERIENCE.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                {/* Application Round */}
                <div style={formGroup}>
                  <label style={formLabel}>Application Round</label>
                  <select
                    value={editingEntry.application_round || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, application_round: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {APPLICATION_ROUNDS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                {/* Score Type */}
                <div style={formGroup}>
                  <label style={formLabel}>Score Type</label>
                  <select
                    value={editingEntry.score_type || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, score_type: e.target.value, score_band: '' })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {SCORE_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Score Band */}
                <div style={formGroup}>
                  <label style={formLabel}>Score Band</label>
                  <select
                    value={editingEntry.score_band || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, score_band: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {(editingEntry.score_type === 'GRE' ? GRE_SCORE_BANDS : GMAT_SCORE_BANDS).map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Undergrad Major */}
                <div style={formGroup}>
                  <label style={formLabel}>Undergrad Major</label>
                  <input
                    type="text"
                    value={editingEntry.undergrad_major || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, undergrad_major: e.target.value })}
                    style={formInput}
                  />
                </div>

                {/* Pre-MBA Industry */}
                <div style={formGroup}>
                  <label style={formLabel}>Pre-MBA Industry</label>
                  <select
                    value={editingEntry.industry || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, industry: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                {/* Post-MBA Industry */}
                <div style={formGroup}>
                  <label style={formLabel}>Post-MBA Industry</label>
                  <select
                    value={editingEntry.post_mba_industry || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, post_mba_industry: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {POST_MBA_INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                {/* Scholarship */}
                <div style={formGroup}>
                  <label style={formLabel}>Scholarship</label>
                  <select
                    value={editingEntry.scholarship_band || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, scholarship_band: e.target.value })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {SCHOLARSHIP_BANDS.map(s => <option key={s} value={s}>{getScholarshipLabel(s)}</option>)}
                  </select>
                </div>

                {/* MBA Class Year */}
                <div style={formGroup}>
                  <label style={formLabel}>MBA Class Year</label>
                  <select
                    value={editingEntry.cycle_year || ''}
                    onChange={(e) => setEditingEntry({ ...editingEntry, cycle_year: parseInt(e.target.value) })}
                    style={formInput}
                  >
                    <option value="">Select...</option>
                    {[2028, 2027, 2026, 2025, 2024, 2023, 2022].map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div style={formGroup}>
                  <label style={formLabel}>Status</label>
                  <select
                    value={editingEntry.status || 'pending'}
                    onChange={(e) => setEditingEntry({ ...editingEntry, status: e.target.value })}
                    style={formInput}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>

              {/* Schools Admitted */}
              <div style={{ marginTop: '16px' }}>
                <label style={formLabel}>Schools Admitted</label>
                <select
                  multiple
                  value={editingEntry.schools_admitted || []}
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, opt => opt.value);
                    setEditingEntry({ ...editingEntry, schools_admitted: selected });
                  }}
                  style={{ ...formInput, height: '120px' }}
                >
                  {MBA_SCHOOLS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>Hold Ctrl/Cmd to select multiple</p>
              </div>

              {/* Tips/Insights */}
              <div style={{ marginTop: '16px' }}>
                <label style={formLabel}>Tips/Insights</label>
                <textarea
                  value={editingEntry.differentiator_text || ''}
                  onChange={(e) => setEditingEntry({ ...editingEntry, differentiator_text: e.target.value })}
                  style={{ ...formInput, minHeight: '100px', resize: 'vertical' }}
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
              <button
                onClick={() => setEditingEntry(null)}
                disabled={saving}
                style={{
                  padding: '10px 24px',
                  background: '#f1f5f9',
                  color: '#475569',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={saving}
                style={{
                  padding: '10px 24px',
                  background: '#0f172a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  opacity: saving ? 0.7 : 1
                }}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// Styles
const detailLabel = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const detailValue = {
  fontSize: '0.95rem',
  color: '#0f172a',
  fontWeight: 500,
  marginTop: '2px',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const schoolChipGreen = {
  background: '#ecfdf5',
  color: '#059669',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8rem',
  fontWeight: 500,
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const schoolChipRed = {
  background: '#fef2f2',
  color: '#dc2626',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8rem',
  fontWeight: 500,
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px'
};

const modalContent = {
  background: 'white',
  borderRadius: '16px',
  padding: '24px',
  maxWidth: '600px',
  width: '100%',
  maxHeight: '90vh',
  overflow: 'hidden',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const modalTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#0f172a',
  marginBottom: '20px',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const formGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
};

const formGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
};

const formLabel = {
  fontSize: '0.8rem',
  fontWeight: 500,
  color: '#64748b',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const formInput = {
  padding: '10px 12px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box'
};
