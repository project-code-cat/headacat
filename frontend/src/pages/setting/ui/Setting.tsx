import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { settingList } from '../lib/SettingList';
import { Avatar, Divider } from '@mui/material';
import useUserStore from '../../../shared/stores/useUserStore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Setting = () => {
  const { userName } = useUserStore();

  return (
    <List
      sx={{ width: '100vw', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader">
      <ListItemButton sx={{ width: '100%', height: '75px' }}>
        <ListItemIcon>
          <Avatar />
        </ListItemIcon>
        <ListItemText primary={userName} />
        <ListItemIcon sx={{ mr: -4.5 }}>
          <ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />
        </ListItemIcon>
      </ListItemButton>
      {settingList.map((item, i) => (
        <div key={i}>
          <Divider />
          <ListItemButton sx={{ width: '100%', height: '75px' }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            <ListItemIcon sx={{ mr: -4.5 }}>
              <ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />
            </ListItemIcon>
          </ListItemButton>
        </div>
      ))}
    </List>
  );
};
export default Setting;
