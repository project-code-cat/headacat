import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { settingList } from '../lib/SettingList';
import { Divider } from '@mui/material';
import { IoIosArrowForward } from 'react-icons/io';

interface Props {
  setContent: (content: React.ReactNode) => void;
  setState: (state: boolean) => void;
}

const SettingList = (props: Props) => {
  const { setContent, setState } = props;

  const settingfn = (item: any) => {
    setContent(item.content);
    setState(true);
  };

  return (
    <>
      {settingList.map((item, i) => (
        <div key={i}>
          <Divider />
          <ListItemButton
            sx={{ width: '100%', height: '65px' }}
            onClick={() => settingfn(item)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            <ListItemIcon sx={{ mr: -4.5 }}>
              <IoIosArrowForward size={20} />
            </ListItemIcon>
          </ListItemButton>
        </div>
      ))}
    </>
  );
};
export default SettingList;
