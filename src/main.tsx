// =====================================================
//  TEMPORARY: Force React warnings (like duplicate keys)
//  to throw real errors so we can locate the exact file
// =====================================================
// console.error = (...args) => {
//   throw new Error(args.join(" "));
// };

// Normal imports come AFTER
import "@/lib/socket";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryProvider } from './providers/QueryProvider.tsx';

// Render app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      {/* <SocketProvider /> */}
      <App />
    </QueryProvider>
  </StrictMode>,
);
