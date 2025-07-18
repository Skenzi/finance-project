import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import router from './app/routes';

createRoot(document.getElementById('app')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
