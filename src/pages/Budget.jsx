import { useState, useMemo } from 'react';
import { Home, ShoppingCart, Car, Zap, UtensilsCrossed, Smartphone, Heart, Wallet, MapPin, X, TrendingUp, Calculator, Info, Landmark, ExternalLink, CheckCircle, Globe, Clock, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CitySearch from '../components/CitySearch';
import { loanAgencies } from '../data/loanAgencies';

const lifestyleLevels = [
  { id: 'budget', label: 'Budget', emoji: '💰', description: 'Cook most meals, shared apartment, public transit', multiplier: 0.75 },
  { id: 'comfortable', label: 'Comfortable', emoji: '✨', description: 'Mid-range, decent apartment, mix of cooking and eating out', multiplier: 1.0 },
  { id: 'premium', label: 'Premium', emoji: '👑', description: 'Higher-end restaurants, nicer apartment, Uber frequently', multiplier: 1.35 },
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

const formatCurrency = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);

export default function Budget() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [lifestyle, setLifestyle] = useState('comfortable');
  const [numPeople, setNumPeople] = useState(1);
  const [hasCar, setHasCar] = useState(false);

  const lifestyleData = lifestyleLevels.find(l => l.id === lifestyle);

  const calculatedCosts = useMemo(() => {
    if (!selectedCity) return null;
    const results = {};
    let total = 0;
    costCategories.forEach((cat) => {
      let cost = selectedCity.costs[cat.key] * lifestyleData.multiplier;
      if (cat.splitByPeople && numPeople > 1) cost = cost / numPeople;
      if (cat.affectedByCar && !hasCar) cost = cost * 0.6;
      results[cat.key] = Math.round(cost);
      total += results[cat.key];
    });
    results.total = total;
    return results;
  }, [selectedCity, lifestyle, numPeople, hasCar, lifestyleData]);

  const chartData = calculatedCosts ? costCategories.map(cat => ({ name: cat.label.replace(' (1BR)', ''), amount: calculatedCosts[cat.key] })) : [];

  return (
    <div className="page-container">
      <div className="section-header animate-fade-in">
        <h1 style={{ marginBottom: '0.75rem' }}>Financing & Budget</h1>
        <p style={{ marginBottom: '0.5rem' }}>Find the right financing for your MBA journey and plan your monthly expenses.</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Loan options for African students + budget planning tools</p>
      </div>

      {/* Financing Section */}
      <div className="animate-fade-in">
        <div className="card-static" style={{ padding: '2rem', marginBottom: '2rem', background: 'linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%)', borderLeft: '4px solid var(--color-accent-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ padding: '12px', background: 'var(--color-accent-gold)', borderRadius: '12px', color: 'var(--color-bg-primary)' }}><Landmark size={24} /></div>
            <div>
              <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Financing Your MBA</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Finding the right financing is crucial for African students pursuing an MBA in the US. These lenders specialize in international student loans, many without requiring a US cosigner.</p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="card-static" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Info size={18} style={{ color: 'var(--color-accent-gold)' }} />Tips for African Students</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {['Apply early - loan processing can take 4-8 weeks', 'Compare multiple lenders to find the best rates', 'Check if your school has preferred lender partnerships', 'Consider a mix of loans, scholarships, and savings'].map((tip, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--color-accent-green)', marginTop: '2px', flexShrink: 0 }} />
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Loan Agencies */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {loanAgencies.map((agency) => (
            <div key={agency.id} className="card-hover" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ color: 'var(--color-text-primary)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{agency.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{agency.description}</p>
                </div>
                {agency.africaFriendly && <span style={{ background: 'var(--color-accent-green)', color: '#000', padding: '4px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600, whiteSpace: 'nowrap' }}>Africa Friendly</span>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><DollarSign size={14} style={{ color: 'var(--color-accent-gold)' }} /><div><p style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Loan Amount</p><p style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 500 }}>{agency.loanAmount}</p></div></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><TrendingUp size={14} style={{ color: 'var(--color-accent-gold)' }} /><div><p style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Interest Rate</p><p style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 500 }}>{agency.interestRate}</p></div></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={14} style={{ color: 'var(--color-accent-gold)' }} /><div><p style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Repayment</p><p style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 500 }}>{agency.repayment}</p></div></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Globe size={14} style={{ color: 'var(--color-accent-gold)' }} /><div><p style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Countries</p><p style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 500 }}>{agency.countries[0]}</p></div></div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>{agency.highlights.map((h, i) => <span key={i} style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text-secondary)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem' }}>{h}</span>)}</div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>Eligibility:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>{agency.eligibility.map((req, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}><CheckCircle size={12} style={{ color: 'var(--color-accent-green)' }} />{req}</span>)}</div>
              </div>
              <a href={agency.website} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: 'auto', padding: '0.75rem', background: 'var(--color-accent-primary)', color: 'var(--color-bg-primary)', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Visit Website<ExternalLink size={14} /></a>
            </div>
          ))}
        </div>
        <p className="text-sm text-center" style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6' }}>* Information provided is for reference only. Loan terms, rates, and eligibility requirements may change. Always verify current details directly with the lender before applying.</p>
      </div>

      {/* Budget Calculator Section */}
      <div style={{ marginTop: '2rem' }}>
        <div className="card-static" style={{ overflow: 'hidden' }}>
          <button onClick={() => setShowCalculator(!showCalculator)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '10px', background: showCalculator ? 'var(--color-accent-primary)' : 'var(--color-bg-tertiary)', borderRadius: '10px', color: showCalculator ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)' }}><Calculator size={20} /></div>
              <div><h3 style={{ color: 'var(--color-text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Budget Calculator</h3><p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Get personalized monthly expense estimates for any US city</p></div>
            </div>
            {showCalculator ? <ChevronUp size={20} style={{ color: 'var(--color-text-secondary)' }} /> : <ChevronDown size={20} style={{ color: 'var(--color-text-secondary)' }} />}
          </button>
          {showCalculator && (
            <div style={{ padding: '2rem', borderTop: '1px solid var(--color-border)' }}>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2rem' }}>Your Preferences</h4>

                  {/* City Selection */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>City</label>
                    <CitySearch single onSelect={setSelectedCity} selectedCities={selectedCity ? [selectedCity] : []} placeholder="Search for your MBA city..." />
                    {selectedCity && (
                      <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '12px 16px', background: 'var(--color-bg-tertiary)', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                        <MapPin size={18} style={{ color: 'var(--color-accent-primary)' }} />
                        <div style={{ flex: 1 }}>
                          <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{selectedCity.name}, {selectedCity.state}</span>
                        </div>
                        <button onClick={() => setSelectedCity(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--color-text-muted)' }}><X size={18} /></button>
                      </div>
                    )}
                  </div>

                  {/* Lifestyle Level */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Lifestyle Level</label>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {lifestyleLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setLifestyle(level.id)}
                          style={{
                            padding: '12px 20px',
                            borderRadius: '10px',
                            border: lifestyle === level.id ? '2px solid var(--color-accent-primary)' : '1px solid var(--color-border)',
                            background: lifestyle === level.id ? 'rgba(16, 185, 129, 0.1)' : 'white',
                            color: 'var(--color-text-primary)',
                            cursor: 'pointer',
                            fontWeight: 500,
                            fontSize: '0.9rem'
                          }}
                        >
                          <span style={{ marginRight: '8px' }}>{level.emoji}</span>{level.label}
                        </button>
                      ))}
                    </div>
                    <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{lifestyleData.description}</p>
                  </div>

                  {/* Sharing Apartment */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Sharing Apartment With</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {[1, 2, 3].map((num) => (
                        <button
                          key={num}
                          onClick={() => setNumPeople(num)}
                          style={{
                            padding: '12px 24px',
                            borderRadius: '10px',
                            border: numPeople === num ? '2px solid var(--color-accent-primary)' : '1px solid var(--color-border)',
                            background: numPeople === num ? 'rgba(16, 185, 129, 0.1)' : 'white',
                            color: 'var(--color-text-primary)',
                            cursor: 'pointer',
                            fontWeight: 500,
                            fontSize: '0.9rem'
                          }}
                        >
                          {num === 1 ? 'Just Me' : num + ' People'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Transportation */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Transportation</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => setHasCar(false)}
                        style={{
                          padding: '12px 24px',
                          borderRadius: '10px',
                          border: !hasCar ? '2px solid var(--color-accent-primary)' : '1px solid var(--color-border)',
                          background: !hasCar ? 'rgba(16, 185, 129, 0.1)' : 'white',
                          color: 'var(--color-text-primary)',
                          cursor: 'pointer',
                          fontWeight: 500,
                          fontSize: '0.9rem'
                        }}
                      >
                        Public Transit
                      </button>
                      <button
                        onClick={() => setHasCar(true)}
                        style={{
                          padding: '12px 24px',
                          borderRadius: '10px',
                          border: hasCar ? '2px solid var(--color-accent-primary)' : '1px solid var(--color-border)',
                          background: hasCar ? 'rgba(16, 185, 129, 0.1)' : 'white',
                          color: 'var(--color-text-primary)',
                          cursor: 'pointer',
                          fontWeight: 500,
                          fontSize: '0.9rem'
                        }}
                      >
                        Own a Car
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  {!selectedCity ? <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', background: 'var(--color-bg-tertiary)', borderRadius: '12px', textAlign: 'center' }}><MapPin size={48} style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }} /><p style={{ color: 'var(--color-text-secondary)' }}>Select a city to see your estimated monthly budget</p></div> : <div><h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Monthly Budget for {selectedCity.name}</h4><div style={{ marginBottom: '1.5rem' }}>{costCategories.map((cat) => <div key={cat.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}><div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><cat.icon size={16} style={{ color: 'var(--color-accent-gold)' }} /><span style={{ color: 'var(--color-text-secondary)' }}>{cat.label}</span></div><span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{formatCurrency(calculatedCosts[cat.key])}</span></div>)}<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', marginTop: '8px' }}><div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Wallet size={18} style={{ color: 'var(--color-accent-primary)' }} /><span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Total Monthly</span></div><span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, fontSize: '1.25rem' }}>{formatCurrency(calculatedCosts.total)}</span></div></div><div style={{ height: 200 }}><ResponsiveContainer><BarChart data={chartData} layout="vertical"><CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" /><XAxis type="number" tickFormatter={(v) => '$' + v} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} /><YAxis dataKey="name" type="category" width={80} tick={{ fill: 'var(--color-text-secondary)', fontSize: 11 }} /><Tooltip formatter={(value) => [formatCurrency(value), 'Cost']} contentStyle={{ background: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border)', borderRadius: '8px' }} /><Bar dataKey="amount" fill="var(--color-accent-gold)" radius={[0, 4, 4, 0]} /></BarChart></ResponsiveContainer></div></div>}
                </div>
              </div>
              <p className="text-sm text-center mt-6" style={{ color: 'var(--color-text-muted)' }}>* Estimates based on average costs. Actual costs may vary based on location within the city and market conditions.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
