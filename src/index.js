import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/SpaceGrotesk/WOFF/SpaceGrotesk-Light.woff';
import './assets/fonts/SpaceGrotesk/WOFF/SpaceGrotesk-Regular.woff';
import './assets/fonts/SpaceGrotesk/WOFF/SpaceGrotesk-Medium.woff';
import './assets/fonts/SpaceGrotesk/WOFF/SpaceGrotesk-Bold.woff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
