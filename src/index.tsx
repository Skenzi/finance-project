import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import router from './app/routes';

const root = document.getElementById('app');

if (root) {
    createRoot(root).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
}
