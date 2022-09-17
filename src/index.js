import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContext from './app/AppContext';

const tkn = localStorage.getItem('token')
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <AppContext stored_token={tkn}>
            <App />
        </AppContext>
);