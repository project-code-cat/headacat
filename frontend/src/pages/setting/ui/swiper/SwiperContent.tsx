import React from 'react';
import { Paper } from '@mui/material';
import SwiperHeader from './SwiperHeader';

interface Props {
  content: React.ReactNode;
  setState: (state: boolean) => void;
}

const SwiperContent = (props: Props) => {
  const { content, setState } = props;

  return (
    <>
      <Paper sx={{ width: '100vw', height: '100vh' }}>
        <SwiperHeader setState={setState} />
        {content}
      </Paper>
    </>
  );
};
export default SwiperContent;
