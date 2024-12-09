import React from 'react';
import { Paper, BottomNavigation } from '@mui/material';
import FooterIcon from './FooterIcon';

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <FooterIcon />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
