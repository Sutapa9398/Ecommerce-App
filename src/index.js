// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {Provider} from "react-redux";
// import store from "./store";
// import {positions,transitions,Provider as AlertProvider} from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// ReactDOM.render(
//   <Provider store={store}>
//   <AlertProvider template={AlertTemplate} >
//   <App />
//   </AlertProvider>
//   </Provider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import App from './App';
//import  createRoot  from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);
