import '@testing-library/jest-dom';

beforeEach(() => {
  global.fetch = vi.fn();  
});

afterEach(() => {
  global.fetch.mockClear(); 
  delete global.fetch; 
});
