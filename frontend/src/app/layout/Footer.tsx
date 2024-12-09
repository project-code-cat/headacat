import React from 'react';
import { BottomNavigationAction, BottomNavigation, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
// import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SettingsIcon from '@mui/icons-material/Settings';
import EventIcon from '@mui/icons-material/Event';

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const menuItems = [
    {
      label: 'Home',
      icon: <HomeIcon />,
      path: '/home',
    },
    {
      label: 'Record',
      icon: <EventIcon />,
      path: '/record',
    },
    {
      label: 'Medications',
      icon: <MedicationIcon />,
      path: '/medications',
    },
    {
      label: 'Equalizer',
      icon: <ShowChartIcon />,
      path: '/equalizerIcon',
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      path: '/settings',
    },
  ];

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 5,
        left: 0,
        right: 0,
      }}
      elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{}}>
        {menuItems.map(item =>
          item.label === 'Medications' ? (
            <BottomNavigationAction
              label={null}
              icon={item.icon}
              key={item.label}
              sx={{
                borderRadius: '10%',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '10px', // 안쪽으로 2px
                  bottom: '10px', // 안쪽으로 2px
                  right: '10px', // 안쪽으로 2px
                  left: '10px', // 안쪽으로 2px
                  border: '0.5px solid #000',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                },
                color: '#000',
              }}
            />
          ) : (
            <BottomNavigationAction
              label={item.label}
              icon={item.icon}
              key={item.label}
              sx={{
                '& .MuiBottomNavigationAction-label': {
                  fontSize: '0.4rem',
                },
              }}
            />
          ),
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
