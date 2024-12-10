import React from 'react';
import { BottomNavigationAction } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import MedicationIcon from '@mui/icons-material/Medication';
// import SettingsIcon from '@mui/icons-material/Settings';
// import EventIcon from '@mui/icons-material/Event';
import { useLocation, useNavigate } from 'react-router-dom';
import SwipeDrawer from '../../widgets/drawer/SwipeableDrawer';
import Medications from '../../pages/medications';
import { FaChartLine } from 'react-icons/fa6';
import { PiPillFill } from 'react-icons/pi';
import { IoHomeSharp } from 'react-icons/io5';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';

const FooterIcon = () => {
  const [state, setState] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const iconSize = 20;
  const iconBigSize = 28;

  const menuItems = [
    {
      label: 'Home',
      icon: <IoHomeSharp size={iconSize} />, // 기본 사이즈
      selectedIcon: <IoHomeSharp size={iconBigSize} />, // 선택됐을 때 큰 사이즈
      path: '/home',
    },
    {
      label: 'Record',
      icon: <FaRegCalendarCheck size={iconSize} />,
      selectedIcon: <FaRegCalendarCheck size={iconBigSize} />,
      path: '/record',
    },
    {
      label: 'Medications',
      icon: <PiPillFill size={iconSize} />,
      selectedIcon: <PiPillFill size={iconBigSize} />,
      path: '/',
    },
    {
      label: 'Statistics',
      icon: <FaChartLine size={iconSize} />,
      selectedIcon: <FaChartLine size={iconBigSize} />,
      path: '/statistics',
    },
    {
      label: 'Setting',
      icon: <IoMdSettings size={iconSize} />,
      selectedIcon: <IoMdSettings size={iconBigSize} />,
      path: '/setting',
    },
  ];

  const location = useLocation();
  const currentPath = location.pathname;

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
                top: '10px',
                bottom: '10px',
                right: '10px',
                left: '10px',
                border: '0.5px solid ',
                borderColor: 'primary.main',
                borderRadius: 'inherit',
                pointerEvents: 'none',
              },
              color: 'primary.main',
            }}
            onClick={() => setState(true)}
          />
        ) : (
          <BottomNavigationAction
            label={currentPath === item.path ? null : item.label}
            icon={currentPath === item.path ? item.selectedIcon : item.icon}
            key={item.label}
            sx={{
              '& .MuiBottomNavigationAction-label': {
                pt: '5px',
                fontSize: '0.5rem',
                visibility: 'visible',
                opacity: 1,
              },

              '& .MuiBottomNavigationAction-label.Mui-selected': {
                display: 'none', // 선택된 상태에서 레이블 숨김
              },
              minWidth: 'auto',
              padding: '6px 0',
              color: 'primary.main',
            }}
            onClick={() => navigate(item.path)}
          />
        ),
      )}
      <SwipeDrawer position="bottom" state={state} setState={setState}>
        <Medications />
      </SwipeDrawer>
    </>
  );
};

export default FooterIcon;
