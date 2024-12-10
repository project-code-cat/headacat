import * as React from 'react';
// import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Props = {
  position: Anchor;
  state: boolean;
  children: React.ReactNode;
  setState: (state: boolean) => void;
};

const SwipeDrawer = ({ position, state, setState, children }: Props) => {
  const toggleDrawer =
    (_anchor: Anchor, _open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(_open);
    };

  //   const list = (anchor: Anchor) => (
  //     <Box
  //       sx={{ width: '100vw' }}
  //       role="presentation"
  //       onClick={toggleDrawer(anchor, false)}
  //       onKeyDown={toggleDrawer(anchor, false)}>
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Box>
  //   );

  return (
    <>
      <SwipeableDrawer
        anchor={position}
        open={state}
        onClose={toggleDrawer(position, false)}
        onOpen={toggleDrawer(position, true)}>
        {children}
      </SwipeableDrawer>
    </>
  );
};

export default SwipeDrawer;
