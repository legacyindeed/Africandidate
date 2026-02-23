import { useState } from 'react';
import { Home, ShoppingCart, Car, Zap, UtensilsCrossed, Smartphone, Heart, Wallet, TrendingDown, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CitySearch from '../components/CitySearch';

const costCategories = [
  { key: 'rent', label: 'Rent (1BR)', icon: Home },
  { key: 'groceries', label: 'Groceries', icon: ShoppingCart },
  { key: 'transportation', label: 'Transportation', icon: Car },
  { key: 'utilities', label: 'Utilities', icon: Zap },
  { key: 'diningOut', label: 'Dining Out', icon: UtensilsCrossed },
  { key: 'mobilePlan', label: 'Mobile Plan', icon: Smartphone },
  { key: 'healthInsurance', label: 'Health Insurance', icon: Heart },
];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getCostIndexBadge = (costIndex) => {
  const classes = {
    'Expensive': 'badge-expensive',
    'Moderate': 'badge-moderate',
    'Affordable': 'badge-affordable',
  };
  return classes[costIndex] || 'badge-moderate';
};

const calculateTotal = (costs) => {
  return Object.values(costs).reduce((sum, val) => sum + val, 0);
};

export default function CostOfLiving() {
  const [selectedCities, setSelectedCities] = useState([]);

  const chartData = selectedCities.map(city => ({
    name: city.name,
    total: calculateTotal(city.costs),
  }));

  // Find cheapest city for comparison
  const cheapestCity = selectedCities.length > 1
    ? selectedCities.reduce((min, city) =>
        calculateTotal(city.costs) < calculateTotal(min.costs) ? city : min
      )
    : null;

  return (
    <div className="page-container">
      {/* Header */}
      <div className="section-header animate-fade-in">
        <h1 style={{ marginBottom: '0.75rem' }}>Compare Cost of Living</h1>
        <p style={{ marginBottom: '0.5rem' }}>
          Search for cities where your target MBA schools are located and compare
          costs side by side.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Select up to 3 cities to compare monthly expenses
        </p>
      </div>

      {/* Search */}
      <div
        className="mb-10 animate-fade-in animate-delay-1"
        style={{ maxWidth: '600px' }}
      >
        <CitySearch
          selectedCities={selectedCities}
          onSelect={setSelectedCities}
          maxSelections={3}
          placeholder="Search for a city (e.g., Boston, Chicago)..."
        />
      </div>

      {/* Empty State */}
      {selectedCities.length === 0 && (
        <div className="empty-state animate-fade-in animate-delay-2">
          <div className="icon">🏙️</div>
          <p>Search and select a city above to see cost breakdown</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
            Tip: Compare cities near your target schools
          </p>
        </div>
      )}

      {/* Comparison Cards */}
      {selectedCities.length > 0 && (
        <div
          className="mb-10"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(selectedCities.length, 3)}, 1fr)`,
            gap: '1.5rem'
          }}
        >
          {selectedCities.map((city, index) => {
            const total = calculateTotal(city.costs);
            const isCheapest = cheapestCity && city.name === cheapestCity.name;
            const cheapestTotal = cheapestCity ? calculateTotal(cheapestCity.costs) : total;
            const diff = total - cheapestTotal;

            return (
              <div
                key={`${city.name}-${city.state}`}
                className={`card-static animate-fade-in animate-delay-${index + 2}`}
                style={{
                  position: 'relative',
                  border: isCheapest && selectedCities.length > 1
                    ? '2px solid var(--color-accent-green)'
                    : '1px solid var(--color-border)'
                }}
              >
                {/* Best Value Badge */}
                {isCheapest && selectedCities.length > 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--color-accent-green)',
                      color: '#000',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Best Value
                  </div>
                )}

                {/* Card Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: 'var(--color-text-primary)', marginBottom: '4px' }}
                    >
                      {city.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {city.state}
                    </p>
                  </div>
                  <span className={`badge ${getCostIndexBadge(city.costIndex)}`}>
                    {city.costIndex}
                  </span>
                </div>

                {/* Difference indicator */}
                {!isCheapest && cheapestCity && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '1rem',
                      padding: '8px 12px',
                      background: 'rgba(248, 113, 113, 0.1)',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: 'var(--color-red)'
                    }}
                  >
                    <TrendingUp size={14} />
                    <span>+{formatCurrency(diff)}/mo vs {cheapestCity.name}</span>
                  </div>
                )}

                {/* Cost Breakdown */}
                <div className="cost-list">
                  {costCategories.map((cat) => (
                    <div key={cat.key} className="cost-item">
                      <div className="label">
                        <cat.icon size={16} />
                        <span>{cat.label}</span>
                      </div>
                      <div className="value">
                        {formatCurrency(city.costs[cat.key])}
                      </div>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="cost-item total">
                    <div className="label">
                      <Wallet size={18} />
                      <span>Total Monthly</span>
                    </div>
                    <div className="value">
                      {formatCurrency(total)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bar Chart */}
      {selectedCities.length >= 2 && (
        <div
          className="card-static animate-fade-in animate-delay-4"
          style={{ padding: '1.5rem' }}
        >
          <h3
            className="text-lg font-semibold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Total Monthly Cost Comparison
          </h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--color-border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
                  axisLine={{ stroke: 'var(--color-border)' }}
                  tickLine={{ stroke: 'var(--color-border)' }}
                />
                <YAxis
                  tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
                  axisLine={{ stroke: 'var(--color-border)' }}
                  tickLine={{ stroke: 'var(--color-border)' }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                />
                <Tooltip
                  formatter={(value) => [formatCurrency(value), 'Monthly Cost']}
                  contentStyle={{
                    background: 'var(--color-bg-tertiary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text-primary)',
                  }}
                  labelStyle={{ color: 'var(--color-text-primary)' }}
                />
                <Bar dataKey="total" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? '#f0a832' : index === 1 ? '#34d399' : '#60a5fa'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Info Note */}
      {selectedCities.length > 0 && (
        <p
          className="text-sm text-center mt-8 animate-fade-in animate-delay-5"
          style={{
            color: 'var(--color-text-muted)',
            maxWidth: '600px',
            margin: '2rem auto 0'
          }}
        >
          * Estimates based on average costs for a single person. Actual costs may vary
          based on lifestyle, location within the city, and market conditions.
        </p>
      )}

      <style>{`
        @media (max-width: 768px) {
          .page-container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
