import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        background: 'var(--color-bg-primary)'
      }}
    >
      <h1
        className="animate-fade-in"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(6rem, 20vw, 12rem)',
          color: 'var(--color-accent-primary)',
          lineHeight: 1,
          marginBottom: '1rem'
        }}
      >
        404
      </h1>
      <p
        className="animate-fade-in animate-delay-1"
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: '1.25rem',
          maxWidth: '400px',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}
      >
        Page not found. This page doesn't exist yet — but a lot of great stuff does.
      </p>
      <button
        onClick={() => navigate('/')}
        className="btn-primary animate-fade-in animate-delay-2"
        style={{
          fontSize: '1.1rem',
          padding: '1rem 2rem'
        }}
      >
        Back to Home →
      </button>
    </div>
  );
}
