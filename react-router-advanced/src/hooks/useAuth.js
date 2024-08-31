import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isAuthenticated;
};

export default useAuth;