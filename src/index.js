import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './styles.css';
import { GlobalStyle } from 'GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
