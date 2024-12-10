import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

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

  return (
    <>
      <SwipeableDrawer
        anchor={position}
        open={state}
        onClose={toggleDrawer(position, false)}
        onOpen={toggleDrawer(position, true)}
        transitionDuration={{ enter: 600, exit: 400 }}
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: position === 'bottom' ? '25px' : '0',
            borderTopRightRadius: position === 'bottom' ? '25px' : '0',
          },
        }}>
        {children}
      </SwipeableDrawer>
    </>
  );
};

export default SwipeDrawer;
