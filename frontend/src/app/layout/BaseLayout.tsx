import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppLayout from '../frame/AppLayout';
import Header from '../frame/Header';
import ContentComponent from '../frame/ContentComponent';
import Footer from '../frame/Footer';
import { ColorModeProvider } from '../theme/ColorModeProvider';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <AppLayout>
        <Header />
        <ContentComponent>{children}</ContentComponent>
        <Footer />
      </AppLayout>
    </ColorModeProvider>
  );
};
export default BaseLayout;
