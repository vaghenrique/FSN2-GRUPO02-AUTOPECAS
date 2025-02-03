import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { CartProvider } from "../src/components/CartContext";
=======
>>>>>>> a19ee82dabcdfdc9cae8f4b61fd9dea2a20bf64e

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
     <CartProvider> {/* Certifique-se de que está englobando toda a aplicação */}
      <App />
    </CartProvider>
=======
    <App />
>>>>>>> a19ee82dabcdfdc9cae8f4b61fd9dea2a20bf64e
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
