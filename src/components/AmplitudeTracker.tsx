import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/amplitude';

export function AmplitudeTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pageName = location.pathname || '/';
    trackPageView(pageName, {
      path: location.pathname,
      search: location.search,
      hash: location.hash,
    });
  }, [location]);

  return null;
}

