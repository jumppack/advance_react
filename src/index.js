import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './App3'
// import App from './App4'
// import App from './App_useEffect'
// import App from './App_useEffect_fetch'
// import App from './App_withCustomHook'
// import App from './App_withCloneElement'
// import App from './App_withCloneElement_adv'
// import App from './HOC/App'
// import App from './RenderProps/App'
import App from './RenderProps/App_withMouse'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

