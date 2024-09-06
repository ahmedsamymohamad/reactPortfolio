import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
