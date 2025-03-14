import { createBrowserRouter } from 'react-router-dom';
import GameDetailPage from '../pages/GameDetailPage';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';
import ErrorPage from '@/pages/ErrorPage';
import AboutUsPage from '@/pages/AboutUsPage';
import ContactUsPage from '@/pages/ContactUsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
      { path: 'about-us', element: <AboutUsPage /> },
      { path: 'contact-us', element: <ContactUsPage /> },
    ],
  },
]);
export default router;
