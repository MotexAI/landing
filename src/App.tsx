import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { HomePage } from './pages/HomePage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { InformationPage } from './pages/InformationPage';
import { FinancingPage } from './pages/FinancingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ChatPage } from './pages/ChatPage';
import { AmplitudeTracker } from './components/AmplitudeTracker';

// Component to sync language with URL
function LanguageSync() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const path = location.pathname;
    const langFromPath = path.startsWith('/en') ? 'en' : path.startsWith('/es') ? 'es' : null;
    
    // If URL has language prefix, sync language state
    if (langFromPath && langFromPath !== language) {
      setLanguage(langFromPath);
    }
    
    // If URL doesn't have language prefix, redirect to Spanish (default)
    if (!path.startsWith('/en') && !path.startsWith('/es')) {
      if (path === '/') {
        navigate('/es', { replace: true });
      } else {
        const newPath = `/es${path}`;
        navigate(newPath, { replace: true });
      }
    }
  }, [location.pathname]); // Only depend on pathname to avoid loops

  return null;
}

function AppRoutes() {
  return (
    <>
      <AmplitudeTracker />
      <LanguageSync />
      <Routes>
        <Route path="/es" element={<HomePage />} />
        <Route path="/en" element={<HomePage />} />
        <Route path="/es/stories" element={<StoriesPage />} />
        <Route path="/en/stories" element={<StoriesPage />} />
        <Route path="/es/stories/:slug" element={<StoryDetailPage />} />
        <Route path="/en/stories/:slug" element={<StoryDetailPage />} />
        <Route path="/es/information" element={<InformationPage />} />
        <Route path="/en/information" element={<InformationPage />} />
        <Route path="/es/financing" element={<FinancingPage />} />
        <Route path="/en/financing" element={<FinancingPage />} />
        <Route path="/es/contact" element={<ContactPage />} />
        <Route path="/en/contact" element={<ContactPage />} />
        <Route path="/es/privacy" element={<PrivacyPage />} />
        <Route path="/en/privacy" element={<PrivacyPage />} />
        <Route path="/es/terms" element={<TermsPage />} />
        <Route path="/en/terms" element={<TermsPage />} />
        <Route path="/es/:lawType/:country/chat" element={<ChatPage />} />
        <Route path="/en/:lawType/:country/chat" element={<ChatPage />} />
        {/* Fallback for old routes without language prefix */}
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:slug" element={<StoryDetailPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>);
}
