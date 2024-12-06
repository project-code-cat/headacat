import React from 'react';
import Home from '../../pages/home';
import Record from '../../pages/record';
import Statistics from '../../pages/statistics';
import Setting from '../../pages/setting';

const publicRoutes = [
  //dev temporary
  // {path: '/', component: <Home />},
  // { path: '/menu', component: <Menu /> },

  //Partner
  {path: '/home', component: <Home />},
  {path: '/record', component: <Record />},
  {path: '/statistics', component: <Statistics />},
  {path: '/setting', component: <Setting />},

  //Error
  // {path: '/error', component: <PageNotFound />},
];

export {publicRoutes};
