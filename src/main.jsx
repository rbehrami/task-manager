// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// pages
import HomePage from './pages/HomePage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddNewTask from './pages/AddNewTask.jsx';
import CompletedTasks from './pages/CompletedTasks.jsx';
import PendingTasks from './pages/PendingTasks.jsx';
import InProgress from './pages/InProgress.jsx';
import EditTask from './pages/EditTask.jsx';
import AllTasks from './pages/AllTasks.jsx';
import PricingPage from './pages/PricingPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx'

// routes
import ProtectedRoute from './components/routes/ProtectedRoutes.jsx';
import DashboardContent from './components/DashboardContent.jsx';

// context
import {TaskProvider} from './context/TaskContext.jsx';

//Layout
import Layout from './HomePageLayout/Layout.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <>
    <Auth0Provider 
    domain="dev-ojklsbnisj7dy1qx.us.auth0.com"
    clientId="lcqkTp8wBAMpGbAQt3N86tmfOfSdWvA9"
    authorizationParams={{ redirect_uri: window.location.origin + '/dashboard' }}
  >
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TaskProvider>
          <BrowserRouter>
            <Routes>
              {/* Public route */}
             <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
              {/* Protected dashboard routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />}>
                  {/* Default content */}
                  <Route index element={<DashboardContent />} />
                  <Route path="addnewtask" element={<AddNewTask />} />
                  <Route path="alltasks" element={<AllTasks />} />
                  <Route path="completedtasks" element={<CompletedTasks />} />
                  <Route path="pendingtasks" element={<PendingTasks />} />
                  <Route path="inprogress" element={<InProgress />} />
                  <Route path="edit/:id" element={<EditTask />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </QueryClientProvider>
    </StrictMode>
  </Auth0Provider>
  <ToastContainer position="bottom-right" autoClose={3000} />
  </>
);
