import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Add providers here
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

function render(ui: React.ReactElement, options = {}) {
  return {
    ...rtlRender(ui, { wrapper: Providers, ...options }),
    user: userEvent.setup(),
  };
}

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { render }; 