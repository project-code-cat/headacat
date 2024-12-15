import React, { useContext } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { GoNorthStar } from 'react-icons/go';
import { ColorModeContext } from '../../shared/theme/ColorModeProvider';
import { FaCalendarDay } from 'react-icons/fa6';
import { VscColorMode } from 'react-icons/vsc';

const logo = '/headacat/svg/HeadaCat.svg';

const Header = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="static"
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
            }}>
            <GoNorthStar size={20} />
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
              mr: '-300px',
            }}
            onClick={colorMode.toggleColorMode}>
            <VscColorMode size={20} />
          </IconButton>
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
            <FaCalendarDay size={20} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
