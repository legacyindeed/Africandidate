import { Construction } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="page-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="animate-fade-in">
        <Construction
          size={64}
          className="mx-auto mb-6"
          style={{ color: 'var(--color-accent-primary)' }}
        />
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Coming Soon
        </h1>
        <p
          className="text-lg mb-8 max-w-md mx-auto"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          This section is under construction. We're working hard to bring you
          valuable resources for your MBA journey.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn-secondary"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
