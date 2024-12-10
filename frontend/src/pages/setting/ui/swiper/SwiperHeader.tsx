import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';
import useSettingStore from '../../model/useSettingStore';
import { settingList } from '../../lib/SettingList';

interface Props {
  setState: (state: boolean) => void;
}

const SwiperHeader = (props: Props) => {
  const { setState } = props;
  const { key } = useSettingStore();

  return (
    <AppBar
      position="static"
      sx={{
        height: '50px',
        bgcolor: theme => theme.palette.background.default,
      }}>
      <Toolbar>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            // justifyContent: 'space-between',
            alignItems: 'center',
            // position: 'relative',
          }}>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              mb: '7px',
              pl: '10px',
            }}
            onClick={() => setState(false)}>
            <IoIosArrowBack size={20} />
          </IconButton>
          <Typography sx={{ fontSize: '1rem', ml: 1, pb: 0.5 }}>
            {settingList.map(item => (item.key === key ? item.label : ''))}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SwiperHeader;
