import React, { useContext } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { ColorModeContext } from '../theme/ColorModeProvider';

// const logo = '/svg/HeadaCat.svg';
const logo = '/headacat/svg/HeadaCat.svg';

const Header = () => {
  // const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="static"
      // enableColorOnDark
      sx={{
        height: '50px',
        bgcolor: theme => theme.palette.background.default,
      }}>
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
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              mb: '7px',
              pl: '10px',
            }}
            onClick={colorMode.toggleColorMode}>
            <FlareIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>

          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: '8rem',
                height: 'auto',
              }}
            />
          </Box>

          <IconButton
            edge="end"
            aria-label="date"
            sx={{
              color: 'primary.main',
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
