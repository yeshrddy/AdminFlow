import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useSelectedLayoutSegment = () => {
  const location = useLocation();
  const [selectedLayout, setSelectedLayout] = useState('');

  useEffect(() => {
    const path = location.pathname;

    if (path === '/') {
      setSelectedLayout('home');
    } else if (path.includes('/settings')) {
      setSelectedLayout('settings');
    } else {
      setSelectedLayout('default');
    }
  }, [location]);

  return selectedLayout;
};

export default useSelectedLayoutSegment;
