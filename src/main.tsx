import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import router from './config/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      {router}
    </Router>
  </StrictMode>,
);
