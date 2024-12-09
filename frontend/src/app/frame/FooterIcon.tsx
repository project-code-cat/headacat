import React from 'react';
import { BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SettingsIcon from '@mui/icons-material/Settings';
import EventIcon from '@mui/icons-material/Event';

const FooterIcon = () => {
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
    <>
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
                border: '0.5px solid ',
                borderColor: 'primary.main',
                borderRadius: 'inherit',
                pointerEvents: 'none',
              },
              color: 'primary.main',
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
              color: 'primary.500',
            }}
          />
        ),
      )}
    </>
  );
};

export default FooterIcon;