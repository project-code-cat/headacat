import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { settingList } from '../lib/SettingList';
import { Avatar, Divider } from '@mui/material';
import { IoIosArrowForward } from 'react-icons/io';
import useUserStore from '../../../shared/stores/useUserStore';
import useSettingStore from '../model/useSettingStore';

interface Props {
  setContent: (content: React.ReactNode) => void;
  setState: (state: boolean) => void;
}

const SettingList = (props: Props) => {
  const { setContent, setState } = props;
  const { userName } = useUserStore();
  const { setKey } = useSettingStore();

  const settingfn = (item: any) => {
    setContent(item.content);
    setState(true);
    setKey(item.key);
  };

  return (
    <>
      {settingList.map((item, i) => (
        <div key={i}>
          {i !== 0 && <Divider />}
          <ListItemButton
            sx={{
              width: '100%',
              height: item.key === 'user' ? '80px' : '60px',
            }}
            onClick={() => settingfn(item)}>
            {item.key === 'user' ? (
              <>
                <ListItemIcon>
                  <Avatar />
                </ListItemIcon>
                <ListItemText primary={userName} />
              </>
            ) : (
              <>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </>
            )}
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
