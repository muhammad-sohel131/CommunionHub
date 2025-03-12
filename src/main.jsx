import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import HomePage from './pages/Home/home.jsx';
import EventsPage from './pages/Events/Events.jsx';
import AboutPage from './pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/events",
    element: <EventsPage />
  },
  {
    path: 'about',
    element: <AboutPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
