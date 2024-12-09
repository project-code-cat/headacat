import React from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import FlareIcon from '@mui/icons-material/Flare';
import DateRangeIcon from '@mui/icons-material/DateRange';
const logo = '/svg/HeadaCat.svg';

const Header = () => {
  return (
    <AppBar
      position="static"
      enableColorOnDark
      // color="primary"
      sx={{ backgroundColor: 'white', height: '50px' }}>
      <Toolbar>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              color: '#E0BBE4',
              display: 'flex',
              alignItems: 'center',
              mb: '7px',
              pl: '10px',
            }}>
            <FlareIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>

          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: '8rem',
                height: 'auto',
              }}
            />
          </Box>

          <IconButton
            edge="end"
            aria-label="date"
            sx={{
              color: '#E0BBE4',
              display: 'flex',
              alignItems: 'center',
              mb: '7px',
              pr: '10px',
            }}>
            <DateRangeIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
