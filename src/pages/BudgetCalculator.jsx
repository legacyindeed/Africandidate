import { useState, useMemo, useEffect } from 'react';
import { Home, ShoppingCart, Car, Zap, UtensilsCrossed, Smartphone, Heart, Wallet, Users, Gem, Sparkles, Dumbbell, MapPin, X, Info, Compass, Loader } from 'lucide-react';
import CitySearch from '../components/CitySearch';

const lifestyleLevels = [
  {
    id: 'budget',
    label: 'Budget-Friendly',
    icon: Dumbbell,
    description: 'Cook most meals, shared apartment, public transit',
    multiplier: 0.75,
  },
  {
    id: 'comfortable',
    label: 'Comfortable',
    icon: Sparkles,
    description: 'Mid-range, decent apartment, mix of cooking and eating out',
    multiplier: 1.0,
  },
  {
    id: 'premium',
    label: 'Premium',
    icon: Gem,
    description: 'Higher-end restaurants, nicer apartment, Uber frequently',
    multiplier: 1.35,
  },
];

const costCategories = [
  { key: 'rent', label: 'Rent (1BR)', icon: Home, splitByPeople: true },
  { key: 'groceries', label: 'Groceries', icon: ShoppingCart, splitByPeople: false },
  { key: 'transportation', label: 'Transportation', icon: Car, splitByPeople: false, affectedByCar: true },
  { key: 'utilities', label: 'Utilities', icon: Zap, splitByPeople: true },
  { key: 'diningOut', label: 'Dining Out', icon: UtensilsCrossed, splitByPeople: false },
  { key: 'mobilePlan', label: 'Mobile Plan', icon: Smartphone, splitByPeople: false },
  { key: 'healthInsurance', label: 'Health Insurance', icon: Heart, splitByPeople: false },
];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function BudgetCalculator() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [lifestyle, setLifestyle] = useState('comfortable');
  const [numPeople, setNumPeople] = useState(1);
  const [hasCar, setHasCar] = useState(false);
  const [cityInfo, setCityInfo] = useState(null);
  const [loadingCityInfo, setLoadingCityInfo] = useState(false);

  const lifestyleData = lifestyleLevels.find(l => l.id === lifestyle);

  // Fetch city info from Wikipedia when city changes
  useEffect(() => {
    if (!selectedCity) {
      setCityInfo(null);
      return;
    }

    const fetchCityInfo = async () => {
      setLoadingCityInfo(true);
      try {
        const cityName = selectedCity.name;
        const stateName = selectedCity.state;
        const searchQuery = `${cityName}, ${stateName}`;

        // Fetch from Wikipedia API
        const wikiResponse = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchQuery)}`
        );

        let extract = '';
        let thumbnail = '';

        if (wikiResponse.ok) {
          const wikiData = await wikiResponse.json();
          extract = wikiData.extract || '';
          thumbnail = wikiData.thumbnail?.source || '';
        }

        // If no Wikipedia image, use Unsplash
        const photo = thumbnail || 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop';

        // Extract key facts from Wikipedia summary
        const sentences = extract.split('. ').filter(s => s.length > 20);
        const facts = sentences.slice(0, 3).map(s => s.trim() + (s.endsWith('.') ? '' : '.'));

        // Common attractions (we'll show generic ones based on city type)
        const defaultAttractions = [
          'Downtown District',
          'Local Museums',
          'City Parks',
          'Food Scene',
          'Nightlife'
        ];

        setCityInfo({
          photo,
          description: extract,
          facts: facts.length > 0 ? facts : [
            `${cityName} is located in ${stateName}.`,
            'Explore the local culture and attractions.',
            'Great place for MBA students to study and network.'
          ],
          attractions: defaultAttractions
        });
      } catch (error) {
        console.error('Error fetching city info:', error);
        // Fallback
        setCityInfo({
          photo: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop',
          description: '',
          facts: [
            `Welcome to ${selectedCity.name}, ${selectedCity.state}!`,
            'Discover local neighborhoods and hidden gems.',
            'Connect with the community and explore the culture.'
          ],
          attractions: ['Downtown', 'Local Parks', 'Museums', 'Restaurants', 'Shopping']
        });
      }
      setLoadingCityInfo(false);
    };

    fetchCityInfo();
  }, [selectedCity]);

  const calculatedCosts = useMemo(() => {
    if (!selectedCity) return null;

    const results = {};
    let total = 0;

    costCategories.forEach((cat) => {
      let cost = selectedCity.costs[cat.key] * lifestyleData.multiplier;

      // Split rent and utilities by number of people
      if (cat.splitByPeople && numPeople > 1) {
        cost = cost / numPeople;
      }

      // Adjust transportation if no car
      if (cat.affectedByCar && !hasCar) {
        cost = cost * 0.6; // Public transit only is ~40% cheaper
      }

      results[cat.key] = Math.round(cost);
      total += results[cat.key];
    });

    results.total = total;
    return results;
  }, [selectedCity, lifestyle, numPeople, hasCar, lifestyleData]);

  return (
    <div className="page-container">
      {/* Header */}
      <div className="section-header animate-fade-in">
        <h1 style={{ marginBottom: '0.75rem' }}>Budget Calculator</h1>
        <p style={{ marginBottom: '0.5rem' }}>
          Get a personalized monthly budget estimate based on your city, lifestyle,
          and living situation.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Customize your preferences to see accurate cost estimates
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="card-static animate-fade-in animate-delay-1">
          <h3
            className="text-lg font-semibold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Your Preferences
          </h3>

          {/* City Selector */}
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              City
            </label>
            <CitySearch
              single
              onSelect={setSelectedCity}
              selectedCities={selectedCity ? [selectedCity] : []}
              placeholder="Search for your MBA city..."
            />
            {selectedCity && (
              <div
                className="mt-4 flex items-center gap-3 animate-fade-in"
                style={{
                  padding: '12px 16px',
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: '10px',
                  border: '1px solid var(--color-border)'
                }}
              >
                <MapPin size={18} style={{ color: 'var(--color-accent-primary)' }} />
                <div style={{ flex: 1 }}>
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                    {selectedCity.name}, {selectedCity.state}
                  </span>
                  <span
                    style={{
                      marginLeft: '12px',
                      fontSize: '13px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: selectedCity.costIndex === 'Affordable'
                        ? 'rgba(52, 211, 153, 0.1)'
                        : selectedCity.costIndex === 'Expensive'
                        ? 'rgba(248, 113, 113, 0.1)'
                        : 'rgba(32, 164, 243, 0.1)',
                      color: selectedCity.costIndex === 'Affordable'
                        ? 'var(--color-accent-green)'
                        : selectedCity.costIndex === 'Expensive'
                        ? 'var(--color-red)'
                        : 'var(--color-accent-primary)'
                    }}
                  >
                    {selectedCity.costIndex}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCity(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--color-text-muted)',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
                    e.currentTarget.style.color = '#f87171';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Lifestyle Level */}
          <div className="mb-6">
            <label
              className="block mb-3 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Lifestyle Level
            </label>
            <div className="toggle-group">
              {lifestyleLevels.map((level) => (
                <button
                  key={level.id}
                  className={`toggle-pill ${lifestyle === level.id ? 'active' : ''}`}
                  onClick={() => setLifestyle(level.id)}
                >
                  <level.icon size={14} className="inline mr-1" />
                  {level.label}
                </button>
              ))}
            </div>
            <p
              className="mt-2 text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {lifestyleData.description}
            </p>
          </div>

          {/* Number of People */}
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Users size={14} className="inline mr-1" />
              How many people will share costs?
            </label>
            <div className="toggle-group">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`toggle-pill ${numPeople === num ? 'active' : ''}`}
                  onClick={() => setNumPeople(num)}
                >
                  {num} {num === 1 ? 'person' : 'people'}
                </button>
              ))}
            </div>
          </div>

          {/* Car Toggle */}
          <div>
            <label
              className="block mb-2 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Car size={14} className="inline mr-1" />
              Do you have a car?
            </label>
            <div className="toggle-group">
              <button
                className={`toggle-pill ${hasCar ? 'active' : ''}`}
                onClick={() => setHasCar(true)}
              >
                Yes
              </button>
              <button
                className={`toggle-pill ${!hasCar ? 'active' : ''}`}
                onClick={() => setHasCar(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div
          className={`card-static animate-fade-in animate-delay-2 ${!selectedCity ? 'opacity-50' : ''}`}
          style={{
            background: selectedCity ? 'var(--color-bg-secondary)' : 'var(--color-bg-tertiary)',
          }}
        >
          <h3
            className="text-lg font-semibold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Monthly Budget Breakdown
          </h3>

          {!selectedCity ? (
            <div className="text-center py-8">
              <p style={{ color: 'var(--color-text-muted)' }}>
                Select a city to see your personalized budget
              </p>
            </div>
          ) : (
            <>
              <div className="cost-list">
                {costCategories.map((cat) => (
                  <div key={cat.key} className="cost-item">
                    <div className="label">
                      <cat.icon size={16} />
                      <span>{cat.label}</span>
                      {cat.splitByPeople && numPeople > 1 && (
                        <span
                          className="text-xs ml-1"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          (split {numPeople} ways)
                        </span>
                      )}
                      {cat.affectedByCar && !hasCar && (
                        <span
                          className="text-xs ml-1"
                          style={{ color: 'var(--color-accent-green)' }}
                        >
                          (no car)
                        </span>
                      )}
                    </div>
                    <div className="value">
                      {formatCurrency(calculatedCosts[cat.key])}
                    </div>
                  </div>
                ))}

                {/* Total */}
                <div className="cost-item total" style={{ marginTop: '12px', paddingTop: '12px', borderTop: '2px solid var(--color-accent-primary)' }}>
                  <div className="label">
                    <Wallet size={18} />
                    <span style={{ fontWeight: 600 }}>Total Monthly</span>
                  </div>
                  <div className="value" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    {formatCurrency(calculatedCosts.total)}
                  </div>
                </div>
              </div>

              {/* Note - separated from cost list */}
              <p
                style={{
                  marginTop: '16px',
                  fontSize: '0.75rem',
                  textAlign: 'center',
                  color: 'var(--color-text-muted)'
                }}
              >
                * These are estimates based on average costs. Actual costs may vary.
              </p>
            </>
          )}
        </div>
      </div>

      {/* City Info Section */}
      {selectedCity && (
        <div className="animate-fade-in" style={{ marginTop: '48px' }}>
          {loadingCityInfo ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <Loader
                size={32}
                style={{
                  color: 'var(--color-accent-primary)',
                  animation: 'spin 1s linear infinite'
                }}
              />
              <p style={{ marginTop: '16px', color: 'var(--color-text-muted)' }}>
                Loading city information...
              </p>
              <style>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : cityInfo && (
            <>
              {/* City Photo */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '24px'
                }}
              >
                <img
                  src={cityInfo.photo}
                  alt={`${selectedCity.name} cityscape`}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                  }}
                >
                  <h2 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>
                    Discover {selectedCity.name}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0 0', fontSize: '0.95rem' }}>
                    {selectedCity.state} • {selectedCity.region} Region
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Facts */}
                <div
                  className="card-static"
                  style={{ background: 'var(--color-bg-secondary)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <Info size={20} style={{ color: 'var(--color-accent-primary)' }} />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      About {selectedCity.name}
                    </h3>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {cityInfo.facts.map((fact, index) => (
                      <li
                        key={index}
                        style={{
                          padding: '12px 0',
                          borderBottom: index < cityInfo.facts.length - 1 ? '1px solid var(--color-border)' : 'none',
                          color: 'var(--color-text-secondary)',
                          fontSize: '0.9rem',
                          lineHeight: 1.6
                        }}
                      >
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Attractions */}
                <div
                  className="card-static"
                  style={{ background: 'var(--color-bg-secondary)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <Compass size={20} style={{ color: 'var(--color-accent-green)' }} />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      Things to Explore
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cityInfo.attractions.map((attraction, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '8px 14px',
                          background: 'rgba(16, 185, 129, 0.1)',
                          color: 'var(--color-accent-green)',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        {attraction}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      marginTop: '16px',
                      padding: '12px',
                      background: 'var(--color-bg-tertiary)',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6
                    }}
                  >
                    Take time to explore beyond campus! Connect with local communities and discover what makes this city special.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
