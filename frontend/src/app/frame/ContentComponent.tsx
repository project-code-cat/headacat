import { Paper } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ContentComponent = ({ children }: Props) => {
  return <Paper sx={{ width: '100vw', height: '100vh' }}>{children}</Paper>;
};

export default ContentComponent;
