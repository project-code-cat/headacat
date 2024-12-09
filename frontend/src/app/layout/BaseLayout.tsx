import React from 'react';

import ContentComponent from './ContentComponent';
import Footer from './Footer';
import AppLayout from './AppLayout';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({children}: Props) => {
  return (
    <AppLayout>
      <Header />
      <ContentComponent>{children}</ContentComponent>
      <Footer />
    </AppLayout>
  );
};
export default BaseLayout;
