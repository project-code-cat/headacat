import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicRoutes } from './allRoutes';

const restrictedRoutes: string[] = ['/', '/login'];

const RouteChangeTracker = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const menuRoutes: string[] = [];
    publicRoutes.forEach(route => {
      menuRoutes.push(route.path);
    });

    if (!menuRoutes.includes(location.pathname)) {
      navigate('/home');
    }

    //login したらログイン画面に行かないようにする
    if (restrictedRoutes.includes(location.pathname)) {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  return null;
};

export default RouteChangeTracker;
