import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './bootstrap.min.css';
import './index.css';

console.log("Server started on port 3000");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



