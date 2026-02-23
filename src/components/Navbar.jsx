import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const mainLinks = [
  { path: '/', label: 'Home' },
  { path: '/mba-schools', label: 'Top 30 MBA Schools' },
  { path: '/pre-arrival', label: 'Pre-Arrival' },
  { path: '/budget', label: 'Funding' },
  { path: '/banking', label: 'Banking & Carriers' },
  { path: '/recruiting', label: 'Recruiting' },
];

const moreLinks = [
  { path: '/stay-and-build', label: 'Stay & Build' },
  { path: '/community', label: 'Community' },
  { path: '/health-insurance', label: 'Health' },
  { path: '/feedback', label: 'Give Feedback' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isMoreActive = moreLinks.some(link => location.pathname === link.path);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/logos/africandidate-logo.png" alt="AfriCandidate" className="logo-img" />
        </Link>

        {/* Desktop Navigation - Pill Style */}
        <div className="nav-pills">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-pill ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="dropdown-wrapper">
            <button
              onClick={() => setShowMore(!showMore)}
              className={`nav-pill dropdown-trigger ${isMoreActive ? 'active' : ''}`}
            >
              More
              <ChevronDown size={12} className={`chevron ${showMore ? 'rotated' : ''}`} />
            </button>

            {showMore && (
              <div className="dropdown-menu">
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setShowMore(false)}
                    className={`dropdown-item ${isActive(link.path) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mobile-divider" />
          <p className="mobile-section-label">More Resources</p>

          {moreLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 14px 24px;
          background: #f8fafc;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .navbar-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 70px;
          width: auto;
          object-fit: contain;
        }

        /* Nav Pills Container - Glassmorphism */
        .nav-pills {
          display: none;
          align-items: center;
          gap: 4px;
          padding: 6px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 9999px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .nav-pill {
          padding: 12px 20px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          border-radius: 9999px;
          transition: all 0.2s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .nav-pill:hover {
          color: #10b981;
          background: rgba(255, 255, 255, 0.5);
        }

        .nav-pill.active {
          color: #0f172a;
          background: white;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .chevron {
          transition: transform 0.2s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 8px;
          min-width: 180px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
          z-index: 1001;
          animation: dropdownFade 0.2s ease;
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          display: block;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: rgba(16, 185, 129, 0.08);
          color: #10b981;
        }

        .dropdown-item.active {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 12px;
          color: #475569;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(0, 0, 0, 0.04);
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          top: 80px;
          left: 16px;
          right: 16px;
          background: white;
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          animation: slideDown 0.3s ease;
          z-index: 999;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-link {
          display: block;
          padding: 14px 18px;
          border-radius: 12px;
          margin-bottom: 4px;
          font-size: 1.05rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .mobile-link:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #0f172a;
        }

        .mobile-link.active {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .mobile-divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.06);
          margin: 12px 0;
        }

        .mobile-section-label {
          font-size: 0.75rem;
          color: #94a3b8;
          padding: 8px 18px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        /* Responsive */
        @media (min-width: 1024px) {
          .nav-pills {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
          .mobile-nav {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .navbar {
            padding: 16px;
          }
        }
      `}</style>
    </nav>
  );
}
