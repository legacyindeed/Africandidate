import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Users, BarChart3 } from 'lucide-react';

// Testimonial avatars - African MBA students
const avatars = [
  "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face",
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Animated Blobs */}
      <div className="blob blob-emerald" />
      <div className="blob blob-pink" />
      <div className="blob blob-amber" />

      {/* Main Content */}
      <main className="hero-main">
        {/* Left - Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Built by African MBA Students, for African MBA Students</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Your MBA Journey, <br />
            <span className="hero-highlight">
              Simplified
              <svg className="underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Everything you need to plan, prepare, and thrive in your American MBA adventure. From banking to housing, we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <button className="cta-primary" onClick={() => navigate('/pre-arrival')}>
              <span>Start Your Journey</span>
              <ArrowRight size={20} />
            </button>
            <button className="cta-secondary" onClick={() => navigate('/mba-schools')}>
              <MapPin size={20} className="icon-green" />
              <span>Explore Schools</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatar-stack">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="Student" className="avatar" />
              ))}
            </div>
            <div className="proof-text">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>Trusted by 500+ African MBA students</span>
            </div>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="hero-visual">
          {/* Main Image */}
          <div className="main-image-container">
            <img
              src="/images/hero-image.png"
              alt="African students on campus"
              className="main-image"
            />
            <div className="image-gradient" />
          </div>

          {/* Floating Card - Stats */}
          <div className="floating-card card-stats">
            <div className="card-icon blue">
              <BarChart3 size={24} />
            </div>
            <div className="card-content">
              <span className="card-value">30</span>
              <span className="card-label">Top MBA Schools</span>
            </div>
          </div>

          {/* Floating Card - Community */}
          <div className="floating-card card-community">
            <div className="card-icon pink">
              <Users size={20} />
            </div>
            <span className="card-text">Join 500+ students</span>
          </div>

          {/* Floating Card - Location */}
          <div className="floating-card card-location">
            <div className="card-icon green">
              <MapPin size={20} />
            </div>
            <div className="card-content">
              <span className="location-city">Boston, MA</span>
              <span className="location-cost">$4,200/mo</span>
            </div>
          </div>

        </div>
      </main>

      <style>{`
        .home-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding-bottom: 40px;
        }

        /* Blobs */
        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
        }

        .blob-emerald {
          width: 500px;
          height: 500px;
          background: #6ee7b7;
          top: -200px;
          left: -200px;
          mix-blend-mode: multiply;
          animation: blob 10s infinite;
        }

        .blob-pink {
          width: 600px;
          height: 600px;
          background: #fbcfe8;
          bottom: -100px;
          left: 20%;
          mix-blend-mode: multiply;
          animation: blob 10s infinite 2s;
        }

        .blob-amber {
          width: 600px;
          height: 600px;
          background: #fef3c7;
          top: 10%;
          right: -200px;
          mix-blend-mode: multiply;
          animation: blob 10s infinite 4s;
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        /* Hero Main */
        .hero-main {
          max-width: 1600px;
          margin: 0 auto;
          padding: 90px 24px 40px;
          display: flex;
          align-items: center;
          gap: 48px;
          position: relative;
          z-index: 10;
          height: calc(100vh - 60px);
          max-height: 900px;
        }

        /* Hero Content */
        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background: #ecfdf5;
          border: 1px solid #d1fae5;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #064e3b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s ease;
        }

        .hero-badge:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }

        .hero-highlight {
          position: relative;
          display: inline-block;
          color: #10b981;
        }

        .underline-svg {
          position: absolute;
          width: 100%;
          height: 16px;
          bottom: -6px;
          left: 0;
          color: #fbbf24;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #475569;
          line-height: 1.7;
          max-width: 540px;
          margin-bottom: 32px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: #10b981;
          color: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 12px 24px rgba(16, 185, 129, 0.3);
        }

        .cta-primary:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(16, 185, 129, 0.4);
        }

        .cta-primary svg {
          transition: transform 0.3s ease;
        }

        .cta-primary:hover svg {
          transform: translateX(4px);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: white;
          color: #475569;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .cta-secondary:hover {
          border-color: #d1fae5;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .icon-green {
          color: #10b981;
          transition: transform 0.3s ease;
        }

        .cta-secondary:hover .icon-green {
          transform: scale(1.1);
        }

        /* Social Proof */
        .social-proof {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar-stack {
          display: flex;
        }

        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 3px solid white;
          margin-left: -12px;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .avatar:first-child {
          margin-left: 0;
        }

        .proof-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          width: 20px;
          height: 20px;
          color: #fbbf24;
        }

        .proof-text span:last-child {
          font-size: 0.9rem;
          font-weight: 500;
          color: #64748b;
        }

        /* Hero Visual */
        .hero-visual {
          flex: 1;
          position: relative;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .main-image-container {
          position: relative;
          width: min(520px, 100%);
          height: min(620px, 90%);
          border-radius: 2.5rem;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
          transition: transform 0.5s ease;
        }

        .main-image-container:hover {
          transform: scale(1.01);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 33%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
        }

        /* Floating Cards */
        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.08), 0 8px 16px -8px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          z-index: 20;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .card-icon.blue {
          background: linear-gradient(135deg, #dbeafe, #e0e7ff);
          color: #3b82f6;
        }

        .card-icon.pink {
          background: #fce7f3;
          color: #ec4899;
        }

        .card-icon.green {
          background: #d1fae5;
          color: #10b981;
        }

        .card-content {
          display: flex;
          flex-direction: column;
        }

        .card-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }

        .card-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #64748b;
          margin-top: 4px;
        }

        .card-text {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
        }

        .location-city {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        .location-cost {
          font-size: 1.1rem;
          font-weight: 700;
          color: #10b981;
          line-height: 1.2;
        }

        .card-stats {
          top: 60px;
          left: -48px;
          animation: float 6s ease-in-out infinite;
        }

        .card-community {
          top: 30%;
          right: -64px;
          animation: float 6s ease-in-out 3s infinite;
        }

        .card-location {
          bottom: 80px;
          left: -40px;
          animation: float 8s ease-in-out 1.5s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-main {
            padding: 90px 24px 30px;
            gap: 40px;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .main-image-container {
            width: min(450px, 100%);
            height: min(550px, 85%);
          }

          .card-stats {
            left: -10px;
          }

          .card-community {
            right: -10px;
          }

          .card-location {
            left: -10px;
          }
        }

        @media (max-width: 1024px) {
          .hero-main {
            flex-direction: column;
            text-align: center;
            padding: 100px 24px 40px;
            gap: 24px;
            height: auto;
            min-height: auto;
          }

          .hero-content {
            order: 2;
            max-width: 100%;
          }

          .hero-visual {
            order: 1;
            height: 360px;
          }

          .hero-subtitle {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-ctas {
            justify-content: center;
          }

          .social-proof {
            justify-content: center;
          }

          .floating-card {
            display: none;
          }

          .main-image-container {
            width: 280px;
            height: 340px;
          }
        }

        @media (max-width: 640px) {
          .hero-main {
            padding: 100px 16px 40px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.05rem;
          }

          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
            padding: 14px 28px;
            font-size: 1rem;
          }

          .main-image-container {
            width: 280px;
            height: 340px;
          }
        }
      `}</style>
    </div>
  );
}
