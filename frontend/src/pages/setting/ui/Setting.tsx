import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Paper } from '@mui/material';
import useUserStore from '../../../shared/stores/useUserStore';
import { IoIosArrowForward } from 'react-icons/io';
import SettingList from './SettingList';
import SwipeDrawer from '../../../widgets/drawer/SwipeableDrawer';
import User from './user';

const Setting = () => {
  const [state, setState] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<React.ReactNode>(null);

  const { userName } = useUserStore();

  const settingfn = () => {
    setContent(<User />);
    setState(true);
  };

  return (
    <>
      <List
        sx={{ width: '100vw', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader">
        <ListItemButton
          sx={{ width: '100%', height: '75px' }}
          onClick={() => settingfn()}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          <ListItemText primary={userName} />
          <ListItemIcon sx={{ mr: -4.5 }}>
            <IoIosArrowForward size={20} />
          </ListItemIcon>
        </ListItemButton>
        <SettingList setContent={setContent} setState={setState} />
      </List>
      <SwipeDrawer position="right" state={state} setState={setState}>
        <Paper sx={{ width: '100vw', height: '100vh' }}>{content}</Paper>
      </SwipeDrawer>
    </>
  );
};
export default Setting;
