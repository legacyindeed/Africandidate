import { useState } from 'react';
import { Send, MessageSquare, Lightbulb, Bug, Star, CheckCircle, ArrowRight } from 'lucide-react';

const feedbackTypes = [
  { id: 'feature', label: 'Feature Request', icon: Lightbulb, color: '#8B5CF6', description: 'Suggest a new feature or tool' },
  { id: 'improvement', label: 'Improvement', icon: Star, color: '#F59E0B', description: 'How can we make something better?' },
  { id: 'bug', label: 'Bug Report', icon: Bug, color: '#EF4444', description: 'Something not working right?' },
  { id: 'other', label: 'Other Feedback', icon: MessageSquare, color: '#10B981', description: 'General thoughts or suggestions' },
];

export default function Feedback() {
  const [selectedType, setSelectedType] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedType || !feedback.trim() || !name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meelpnzz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          feedbackType: selectedType,
          feedback: feedback,
          _subject: `AfriCandidate Feedback from ${name}: ${selectedType}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setSelectedType(null);
    setFeedback('');
    setName('');
    setEmail('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--color-bg-primary)',
        padding: '140px 5% 80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '500px',
          padding: '60px 40px',
          background: 'var(--color-bg-secondary)',
          borderRadius: '24px',
          border: '1px solid var(--color-border)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10B981, #059669)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            boxShadow: '0 12px 32px rgba(16, 185, 129, 0.3)'
          }}>
            <CheckCircle size={40} style={{ color: 'white' }} />
          </div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '12px'
          }}>
            Thank You!
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '32px'
          }}>
            Your feedback has been received. We truly appreciate you taking the time to help us improve Africandidate.
          </p>
          <button
            onClick={resetForm}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              background: 'var(--color-bg-tertiary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              color: 'var(--color-text-primary)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Submit More Feedback
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg-primary)',
      padding: '140px 5% 80px'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.08))',
          borderRadius: '100px',
          marginBottom: '20px',
          border: '1px solid rgba(16, 185, 129, 0.15)'
        }}>
          <MessageSquare size={18} style={{ color: 'var(--color-accent-primary)' }} />
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent-primary)' }}>
            We Value Your Input
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          marginBottom: '16px',
          lineHeight: 1.2
        }}>
          Help Us Improve{' '}
          <span style={{
            background: 'linear-gradient(135deg, #10B981, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Africandidate
          </span>
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          maxWidth: '550px',
          margin: '0 auto'
        }}>
          Your feedback shapes the future of this platform. Tell us what features you'd love to see,
          what could be better, or report any issues you've found.
        </p>
      </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Feedback Type Selection */}
        <div style={{ marginBottom: '32px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--color-text-primary)',
            marginBottom: '16px'
          }}>
            What type of feedback do you have?
          </label>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {feedbackTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    padding: '20px',
                    background: isSelected ? `${type.color}10` : 'var(--color-bg-secondary)',
                    border: isSelected ? `2px solid ${type.color}` : '1px solid var(--color-border)',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: isSelected ? type.color : `${type.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease'
                  }}>
                    <Icon size={22} style={{ color: isSelected ? 'white' : type.color }} />
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: 'var(--color-text-primary)',
                      marginBottom: '4px'
                    }}>
                      {type.label}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)'
                    }}>
                      {type.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Text */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--color-text-primary)',
            marginBottom: '12px'
          }}>
            Tell us more <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(required)</span>
          </label>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={
              selectedType === 'feature' ? "Describe the feature you'd like to see..." :
              selectedType === 'improvement' ? "What would make this better?" :
              selectedType === 'bug' ? "Describe what happened and what you expected..." :
              "Share your thoughts with us..."
            }
            rows={6}
            style={{
              width: '100%',
              padding: '18px 20px',
              fontSize: '1rem',
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '14px',
              color: 'var(--color-text-primary)',
              resize: 'vertical',
              minHeight: '150px',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.6
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
          />
        </div>

        {/* Name (Required) */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--color-text-primary)',
            marginBottom: '12px'
          }}>
            Your Name <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(required)</span>
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: '1rem',
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              color: 'var(--color-text-primary)',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              fontFamily: 'Inter, sans-serif'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
          />
        </div>

        {/* Email (Required) */}
        <div style={{ marginBottom: '32px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--color-text-primary)',
            marginBottom: '12px'
          }}>
            Email <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(required)</span>
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: '1rem',
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              color: 'var(--color-text-primary)',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              fontFamily: 'Inter, sans-serif'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedType || !feedback.trim() || !name.trim() || !email.trim() || isSubmitting}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '18px 32px',
            background: (!selectedType || !feedback.trim() || !name.trim() || !email.trim())
              ? 'var(--color-bg-tertiary)'
              : 'linear-gradient(135deg, #10B981, #059669)',
            border: 'none',
            borderRadius: '14px',
            color: (!selectedType || !feedback.trim() || !name.trim() || !email.trim()) ? 'var(--color-text-muted)' : 'white',
            fontSize: '1.05rem',
            fontWeight: 700,
            cursor: (!selectedType || !feedback.trim() || !name.trim() || !email.trim()) ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: (!selectedType || !feedback.trim() || !name.trim() || !email.trim()) ? 'none' : '0 8px 24px rgba(16, 185, 129, 0.3)'
          }}
        >
          {isSubmitting ? (
            <>
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid white',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }} />
              Submitting...
            </>
          ) : (
            <>
              <Send size={20} />
              Submit Feedback
            </>
          )}
        </button>

        {/* Helper Text */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
          marginTop: '20px',
          lineHeight: 1.6
        }}>
          All feedback is reviewed by our team. We read every submission and use it to improve the platform.
        </p>
      </form>

      {/* Ideas Section */}
      <div style={{
        maxWidth: '700px',
        margin: '60px auto 0',
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.06), rgba(16, 185, 129, 0.04))',
        borderRadius: '20px',
        border: '1px solid var(--color-border)'
      }}>
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Lightbulb size={20} style={{ color: '#F59E0B' }} />
          Ideas We're Exploring
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {[
            'Roommate Finder',
            'Visa Interview Prep',
            'Airport Pickup Coordination',
            'Used Furniture Marketplace',
            'Mentorship Matching',
            'Job Board for OPT/CPT',
            'Flight Group Booking',
            'Scholarship Database'
          ].map((idea) => (
            <span
              key={idea}
              style={{
                padding: '8px 16px',
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: '100px',
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                fontWeight: 500
              }}
            >
              {idea}
            </span>
          ))}
        </div>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
          marginTop: '16px'
        }}>
          Vote for features you want by mentioning them in your feedback!
        </p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 600px) {
          form > div:first-of-type > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
