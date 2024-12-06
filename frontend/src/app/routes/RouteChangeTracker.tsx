import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
// import { RootState } from 'src/store/store';
// import LoginInitialize from '../pages/auth/LoginInitialize';
import {publicRoutes} from './allRoutes';

const RouteChangeTracker = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const restrictedRoutes: string[] = ['/', '/login'];
    const menuRoutes: string[] = [];
    publicRoutes.forEach(route => {
      menuRoutes.push(route.path);
    });

    if (!menuRoutes.includes(location.pathname)) {
      navigate('/error');
    }

    //login したらログイン画面に行かないようにする
    if (restrictedRoutes.includes(location.pathname)) {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  return null;
};

export default RouteChangeTracker;
