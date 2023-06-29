import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

const rootEl = document.getElementById('root')
const root = createRoot(rootEl);
import App from './App';

root.render(
    <StrictMode>
        <App></App>
    </StrictMode>
)