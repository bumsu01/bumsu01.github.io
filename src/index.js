import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MaterialUIControllerProvider>
            <App />
        </MaterialUIControllerProvider>
    </BrowserRouter>
);