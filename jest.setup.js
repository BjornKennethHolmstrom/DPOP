import '@testing-library/jest-dom';

// Mock matchMedia if required
if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };
}
