import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { cities } from '../data/cities';

export default function CitySearch({
  onSelect,
  selectedCities = [],
  maxSelections = 3,
  single = false,
  placeholder = "Search for a city..."
}) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const isSelectingRef = useRef(false);

  // Filter cities based on query
  const filteredCities = query.length === 0
    ? []
    : cities
        .filter(city => {
          const searchStr = `${city.name} ${city.state}`.toLowerCase();
          const isAlreadySelected = selectedCities.some(
            s => s.name === city.name && s.state === city.state
          );
          return searchStr.includes(query.toLowerCase()) && !isAlreadySelected;
        })
        .slice(0, 12);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset highlight when results change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (listRef.current && isOpen) {
      const items = listRef.current.children;
      if (items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  const selectCity = useCallback((city) => {
    if (single) {
      onSelect(city);
    } else {
      onSelect([...selectedCities, city]);
    }
    setQuery('');
    setIsOpen(false);
    setHighlightedIndex(0);
  }, [single, onSelect, selectedCities]);

  const removeCity = (cityToRemove) => {
    if (single) {
      onSelect(null);
    } else {
      onSelect(selectedCities.filter(
        c => !(c.name === cityToRemove.name && c.state === cityToRemove.state)
      ));
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length > 0);
  };

  const handleKeyDown = (e) => {
    if (!isOpen || filteredCities.length === 0) {
      if (e.key === 'ArrowDown' && query.length > 0) {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev < filteredCities.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev > 0 ? prev - 1 : filteredCities.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCities[highlightedIndex]) {
          selectCity(filteredCities[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  const handleItemClick = (city, e) => {
    e.preventDefault();
    e.stopPropagation();
    selectCity(city);
  };

  const handleItemMouseDown = (e) => {
    // Prevent the input from losing focus
    e.preventDefault();
  };

  const isMaxReached = !single && selectedCities.length >= maxSelections;

  const getCostColor = (costIndex) => {
    switch (costIndex) {
      case 'Affordable': return '#10B981';
      case 'Expensive': return '#EF4444';
      default: return '#3B82F6';
    }
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>
      {/* Input */}
      <div style={{ position: 'relative' }}>
        <Search
          size={18}
          style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#999',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder={isMaxReached ? `Maximum ${maxSelections} cities` : placeholder}
          disabled={isMaxReached}
          autoComplete="off"
          spellCheck="false"
          style={{
            width: '100%',
            padding: '14px 16px 14px 46px',
            fontSize: '16px',
            backgroundColor: '#FFFFFF',
            border: '1px solid',
            borderColor: isOpen ? '#10B981' : '#E5E7EB',
            borderRadius: '10px',
            color: '#1a1a1a',
            outline: 'none',
            transition: 'all 0.2s ease',
            opacity: isMaxReached ? 0.5 : 1,
            cursor: isMaxReached ? 'not-allowed' : 'text',
            boxShadow: isOpen ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none'
          }}
        />
      </div>

      {/* Dropdown */}
      {isOpen && filteredCities.length > 0 && (
        <div
          ref={listRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '10px',
            maxHeight: '320px',
            overflowY: 'auto',
            zIndex: 99999,
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}
        >
          {filteredCities.map((city, index) => (
            <div
              key={`${city.name}-${city.state}-${index}`}
              onMouseDown={handleItemMouseDown}
              onClick={(e) => handleItemClick(city, e)}
              onMouseEnter={() => setHighlightedIndex(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                cursor: 'pointer',
                backgroundColor: index === highlightedIndex
                  ? 'rgba(16, 185, 129, 0.05)'
                  : 'transparent',
                borderBottom: index < filteredCities.length - 1
                  ? '1px solid rgba(0, 0, 0, 0.04)'
                  : 'none',
                transition: 'background-color 0.1s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} style={{ color: '#999' }} />
                <div>
                  <span style={{
                    color: '#1a1a1a',
                    fontWeight: 500,
                    fontSize: '15px'
                  }}>
                    {city.name}
                  </span>
                  <span style={{
                    color: '#888',
                    marginLeft: '8px',
                    fontSize: '14px'
                  }}>
                    {city.state}
                  </span>
                </div>
              </div>
              <span style={{
                fontSize: '11px',
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: '4px',
                backgroundColor: `${getCostColor(city.costIndex)}15`,
                color: getCostColor(city.costIndex),
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                {city.costIndex}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* No results */}
      {isOpen && query.length > 0 && filteredCities.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '10px',
            padding: '20px',
            zIndex: 99999,
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#888', margin: 0 }}>
            No cities found for "{query}"
          </p>
        </div>
      )}

      {/* Selected Cities (multi-select mode) */}
      {!single && selectedCities.length > 0 && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '14px'
        }}>
          {selectedCities.map((city) => (
            <div
              key={`selected-${city.name}-${city.state}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid #10B981',
                borderRadius: '24px',
                fontSize: '14px',
                color: '#1a1a1a'
              }}
            >
              <MapPin size={14} style={{ color: '#10B981' }} />
              <span>{city.name}, {city.state}</span>
              <button
                onClick={() => removeCity(city)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#888',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                  e.currentTarget.style.color = '#EF4444';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#888';
                }}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Helper text */}
      {isMaxReached && (
        <p style={{
          fontSize: '13px',
          color: '#888',
          marginTop: '10px'
        }}>
          Remove a city to add another (max {maxSelections})
        </p>
      )}
    </div>
  );
}
