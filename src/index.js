import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContext from './app/AppContext';
import DashboardContext from './context/DashboardContext';

const tkn = localStorage.getItem('token')
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <AppContext stored_token={tkn}>
            <DashboardContext>
                <App />
            </DashboardContext>
        </AppContext>
);