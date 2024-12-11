import * as React from 'react';
import List from '@mui/material/List';
import SettingList from './SettingList';
import SwipeDrawer from '../../../widgets/drawer/SwipeableDrawer';
import SwiperContent from './swiper/SwiperContent';
import useSettingStore from '../model/useSettingStore';

const Setting = () => {
  const { stateD, setStateD } = useSettingStore();
  const [state, setState] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<React.ReactNode>(null);

  return (
    <>
      <List
        sx={{ width: '100vw', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader">
        <SettingList setContent={setContent} setState={setState} />
      </List>
      <SwipeDrawer position="right" state={state} setState={setState}>
        <SwiperContent content={content} setState={setState} />
        <SwipeDrawer position="right" state={stateD} setState={setStateD}>
          <SwiperContent content={<></>} setState={setStateD} />
        </SwipeDrawer>
      </SwipeDrawer>
    </>
  );
};
export default Setting;
