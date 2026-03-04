import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  addEntry,
  validateEntry,
  getWordCount,
  COUNTRIES,
  INDUSTRIES,
  POST_MBA_INDUSTRIES,
  AGE_BANDS,
  YEARS_EXPERIENCE,
  SCORE_TYPES,
  GMAT_SCORE_BANDS,
  GRE_SCORE_BANDS,
  SCHOLARSHIP_BANDS,
  GENDERS,
  APPLICATION_ROUNDS,
  MBA_SCHOOLS
} from '../data/admitIndex';

export default function AdmitIndexSubmit() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    display_name: '',
    gender: '',
    application_round: '',
    country: '',
    age_band: '',
    undergrad_major: '',
    industry: '',
    post_mba_industry: '',
    years_experience: '',
    score_type: '',
    score_band: '',
    score_waived: false,
    schools_admitted: [''],
    schools_rejected: [''],
    scholarship_band: '',
    differentiator_text: '',
    cycle_year: 2028
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      // Reset score_band when score_type changes
      if (field === 'score_type') {
        updated.score_band = '';
      }
      // Handle waived checkbox
      if (field === 'score_waived' && value === true) {
        updated.score_type = 'Waived';
        updated.score_band = 'N/A';
      } else if (field === 'score_waived' && value === false) {
        updated.score_type = '';
        updated.score_band = '';
      }
      return updated;
    });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSchoolChange = (type, index, value) => {
    setFormData(prev => {
      const updated = [...prev[type]];
      updated[index] = value;
      return { ...prev, [type]: updated };
    });
  };

  const addSchool = (type) => {
    const max = type === 'schools_admitted' ? 4 : 10;
    if (formData[type].length < max) {
      setFormData(prev => ({
        ...prev,
        [type]: [...prev[type], '']
      }));
    }
  };

  const removeSchool = (type, index) => {
    if (formData[type].length > 1) {
      setFormData(prev => ({
        ...prev,
        [type]: prev[type].filter((_, i) => i !== index)
      }));
    }
  };

  // Get available schools (exclude already selected ones)
  const getAvailableSchools = (type, currentIndex) => {
    const selectedSchools = formData[type].filter((_, i) => i !== currentIndex);
    return MBA_SCHOOLS.filter(school => !selectedSchools.includes(school));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Clean up arrays (remove empty strings)
    const cleanedData = {
      ...formData,
      display_name: formData.display_name.trim() || 'Anonymous',
      schools_admitted: formData.schools_admitted.filter(s => s.trim()),
      schools_rejected: formData.schools_rejected.filter(s => s.trim())
    };

    const validation = validateEntry(cleanedData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      // Save entry to Firestore
      await addEntry(cleanedData);
      // Redirect with success message
      navigate('/admit-index?submitted=true');
    } catch (error) {
      console.error('Error submitting entry:', error);
      setErrors({ submit: 'Failed to submit. Please try again. Error: ' + error.message });
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const wordCount = getWordCount(formData.differentiator_text);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px 60px' }}>
        {/* Header */}
        <Link
          to="/admit-index"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#64748b',
            textDecoration: 'none',
            marginBottom: '16px',
            fontSize: '0.9rem',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}
        >
          ← Back to Admit Index
        </Link>

        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#0f172a',
          marginBottom: '12px',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          Submit Your Profile
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#64748b',
          marginBottom: '32px',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          Share your MBA admit story to help future African applicants. All submissions are reviewed before publishing.
        </p>

        {/* Error Summary */}
        {Object.keys(errors).length > 0 && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{
              color: '#dc2626',
              fontWeight: 500,
              marginBottom: '8px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Please fix the following errors:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#b91c1c' }}>
              {Object.values(errors).map((error, i) => (
                <li key={i} style={{ fontSize: '0.9rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #e2e8f0'
          }}>
            {/* Display Name */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Display Name (optional)</label>
              <input
                type="text"
                value={formData.display_name}
                onChange={(e) => handleChange('display_name', e.target.value)}
                placeholder="Anonymous"
                style={inputStyle}
              />
              <p style={hintStyle}>Leave blank to appear as "Anonymous"</p>

            {/* Gender */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Gender *</label>
              <select
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                style={{ ...inputStyle, ...(errors.gender && errorBorder) }}
              >
                <option value="">Select gender</option>
                {GENDERS.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Application Round */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Application Round *</label>
              <select
                value={formData.application_round}
                onChange={(e) => handleChange('application_round', e.target.value)}
                style={{ ...inputStyle, ...(errors.application_round && errorBorder) }}
              >
                <option value="">Select round</option>
                {APPLICATION_ROUNDS.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            </div>

            {/* Country */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Country *</label>
              <select
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                style={{ ...inputStyle, ...(errors.country && errorBorder) }}
              >
                <option value="">Select your country</option>
                {COUNTRIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Age Band */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Age Band *</label>
              <select
                value={formData.age_band}
                onChange={(e) => handleChange('age_band', e.target.value)}
                style={{ ...inputStyle, ...(errors.age_band && errorBorder) }}
              >
                <option value="">Select age range</option>
                {AGE_BANDS.map(band => (
                  <option key={band} value={band}>{band}</option>
                ))}
              </select>
            </div>

            {/* Undergrad Major */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Undergrad Major *</label>
              <input
                type="text"
                value={formData.undergrad_major}
                onChange={(e) => handleChange('undergrad_major', e.target.value)}
                placeholder="e.g., Economics, Engineering, Computer Science"
                style={{ ...inputStyle, ...(errors.undergrad_major && errorBorder) }}
              />
            </div>

            {/* Pre-MBA Industry */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Pre-MBA Industry *</label>
              <select
                value={formData.industry}
                onChange={(e) => handleChange('industry', e.target.value)}
                style={{ ...inputStyle, ...(errors.industry && errorBorder) }}
              >
                <option value="">Select your pre-MBA industry</option>
                {INDUSTRIES.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Post-MBA Industry */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Post-MBA Career Industry *</label>
              <select
                value={formData.post_mba_industry}
                onChange={(e) => handleChange('post_mba_industry', e.target.value)}
                style={{ ...inputStyle, ...(errors.post_mba_industry && errorBorder) }}
              >
                <option value="">Select your target post-MBA industry</option>
                {POST_MBA_INDUSTRIES.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Years Experience */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Years of Work Experience *</label>
              <select
                value={formData.years_experience}
                onChange={(e) => handleChange('years_experience', e.target.value)}
                style={{ ...inputStyle, ...(errors.years_experience && errorBorder) }}
              >
                <option value="">Select experience range</option>
                {YEARS_EXPERIENCE.map(exp => (
                  <option key={exp} value={exp}>{exp} years</option>
                ))}
              </select>
            </div>

            {/* Score Type & Band */}
            <div style={fieldGroup}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                <div>
                  <label style={labelStyle}>Test Type *</label>
                  <select
                    value={formData.score_type}
                    onChange={(e) => handleChange('score_type', e.target.value)}
                    style={{ ...inputStyle, ...(errors.score_type && errorBorder) }}
                    disabled={formData.score_waived}
                  >
                    <option value="">Select test</option>
                    {SCORE_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                    {formData.score_waived && <option value="Waived">Waived</option>}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Score Band *</label>
                  <select
                    value={formData.score_band}
                    onChange={(e) => handleChange('score_band', e.target.value)}
                    style={{ ...inputStyle, ...(errors.score_band && errorBorder) }}
                    disabled={!formData.score_type || formData.score_waived}
                  >
                    <option value="">{formData.score_waived ? 'N/A' : (formData.score_type ? 'Select range' : 'Select test type first')}</option>
                    {!formData.score_waived && (formData.score_type === 'GRE' ? GRE_SCORE_BANDS : GMAT_SCORE_BANDS).map(band => (
                      <option key={band} value={band}>{band}</option>
                    ))}
                    {formData.score_waived && <option value="N/A">N/A</option>}
                  </select>
                </div>
              </div>
              {/* Waived Checkbox */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: '#475569',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                <input
                  type="checkbox"
                  checked={formData.score_waived}
                  onChange={(e) => handleChange('score_waived', e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                Test scores waived (did not submit GMAT/GRE)
              </label>
            </div>

            {/* Schools Admitted */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Schools Admitted (1-4) *</label>
              {formData.schools_admitted.map((school, index) => (
                <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <select
                    value={school}
                    onChange={(e) => handleSchoolChange('schools_admitted', index, e.target.value)}
                    style={{ ...inputStyle, flex: 1, ...(errors.schools_admitted && errorBorder) }}
                  >
                    <option value="">Select school</option>
                    {getAvailableSchools('schools_admitted', index).map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                    {/* Keep current selection visible */}
                    {school && !getAvailableSchools('schools_admitted', index).includes(school) && (
                      <option value={school}>{school}</option>
                    )}
                  </select>
                  {formData.schools_admitted.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSchool('schools_admitted', index)}
                      style={removeBtn}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              {formData.schools_admitted.length < 4 && (
                <button type="button" onClick={() => addSchool('schools_admitted')} style={addBtn}>
                  + Add Another School
                </button>
              )}
            </div>

            {/* Schools Rejected */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Schools Rejected (optional)</label>
              {formData.schools_rejected.map((school, index) => (
                <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <select
                    value={school}
                    onChange={(e) => handleSchoolChange('schools_rejected', index, e.target.value)}
                    style={{ ...inputStyle, flex: 1 }}
                  >
                    <option value="">Select school</option>
                    {getAvailableSchools('schools_rejected', index).map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                    {/* Keep current selection visible */}
                    {school && !getAvailableSchools('schools_rejected', index).includes(school) && (
                      <option value={school}>{school}</option>
                    )}
                  </select>
                  {formData.schools_rejected.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSchool('schools_rejected', index)}
                      style={removeBtn}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => addSchool('schools_rejected')} style={addBtn}>
                + Add Another School
              </button>
            </div>

            {/* Scholarship Band */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Scholarship *</label>
              <select
                value={formData.scholarship_band}
                onChange={(e) => handleChange('scholarship_band', e.target.value)}
                style={{ ...inputStyle, ...(errors.scholarship_band && errorBorder) }}
              >
                <option value="">Select scholarship status</option>
                <option value="none">No Scholarship</option>
                <option value="partial">Partial Scholarship</option>
                <option value="full">Full Scholarship</option>
              </select>
            </div>

            {/* MBA Class Year */}
            <div style={fieldGroup}>
              <label style={labelStyle}>MBA Class Year *</label>
              <select
                value={formData.cycle_year}
                onChange={(e) => handleChange('cycle_year', parseInt(e.target.value))}
                style={{ ...inputStyle, ...(errors.cycle_year && errorBorder) }}
              >
                <option value={2028}>2028</option>
                <option value={2027}>2027</option>
                <option value={2026}>2026</option>
                <option value={2025}>2025</option>
                <option value={2024}>2024</option>
                <option value={2023}>2023</option>
                <option value={2022}>2022</option>
              </select>
            </div>

            {/* Tips/Insights - Optional */}
            <div style={fieldGroup}>
              <label style={labelStyle}>Any tips or insights to share? <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optional)</span></label>
              <textarea
                value={formData.differentiator_text}
                onChange={(e) => handleChange('differentiator_text', e.target.value)}
                placeholder="Share anything that might help future applicants - your background, strategy, or advice."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', ...(errors.differentiator_text && errorBorder) }}
              />
              <p style={{
                ...hintStyle,
                color: wordCount > 200 ? '#dc2626' : '#64748b'
              }}>
                {wordCount}/200 words max
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '14px',
                background: isSubmitting ? '#94a3b8' : '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginTop: '8px'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit for Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Styles
const fieldGroup = {
  marginBottom: '24px'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#0f172a',
  marginBottom: '8px',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  border: '1px solid #e2e8f0',
  fontSize: '0.95rem',
  color: '#0f172a',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  boxSizing: 'border-box'
};

const errorBorder = {
  borderColor: '#fca5a5'
};

const hintStyle = {
  fontSize: '0.8rem',
  color: '#64748b',
  marginTop: '6px',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const addBtn = {
  background: 'none',
  border: 'none',
  color: '#10b981',
  fontSize: '0.9rem',
  fontWeight: 500,
  cursor: 'pointer',
  padding: '8px 0',
  fontFamily: "'Plus Jakarta Sans', sans-serif"
};

const removeBtn = {
  background: '#fee2e2',
  border: 'none',
  color: '#dc2626',
  width: '36px',
  height: '44px',
  borderRadius: '8px',
  fontSize: '1.2rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
