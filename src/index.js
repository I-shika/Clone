import React from 'react';
import ReactDOM from 'react-dom/client';
// import Sidebar from './components/sidebar/sidebar';
import App from './App';
import NavDesktop from './components/navbar/navlogo';
// import Sidebar from './components/sidebar/sidebar';
// import API from './components/videos/homepage';

  // <App/>
  // <Sidebar/>
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from "react-pro-sidebar";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
 
    <ProSidebarProvider>
    <NavDesktop/>
      <App />
      
    </ProSidebarProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
