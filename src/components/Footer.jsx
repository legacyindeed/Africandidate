import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        color: 'var(--color-text-muted)',
        marginTop: 'auto',
        padding: '32px 5%'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <Link
          to="/feedback"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'var(--color-bg-tertiary)',
            border: '1px solid var(--color-border)',
            borderRadius: '100px',
            color: 'var(--color-text-secondary)',
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
            e.currentTarget.style.color = 'var(--color-accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
            e.currentTarget.style.color = 'var(--color-text-secondary)';
          }}
        >
          <MessageSquare size={16} />
          Share Feedback
        </Link>
        <p style={{ fontSize: '0.85rem' }}>
          © 2026 Africandidate. Built for African students, by African students.
        </p>
      </div>
    </footer>
  );
}
