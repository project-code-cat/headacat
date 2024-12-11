import React from 'react';
import { Box, Button, Divider, Paper } from '@mui/material';
import { PiPillFill } from 'react-icons/pi';

const Pill = () => {
  return (
    <>
      <Paper sx={{ width: '100%', height: '100%' }}>
        <Button onClick={() => {}}>약 추가</Button>
        <Divider />
        <Box
          sx={{
            border: '1px solid ',
            borderRadius: '10px',
            borderColor: 'primary.main',
            width: '100%',
            p: 2,
          }}>
          <Box
            sx={{
              borderRadius: '25%',
              border: '1px solid',
              borderColor: 'black.main',
            }}>
            <PiPillFill size={20} />
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Pill;
