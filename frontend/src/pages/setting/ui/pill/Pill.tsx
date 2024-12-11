import React from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Paper,
} from '@mui/material';
import { PiPillFill } from 'react-icons/pi';
import { MdMoreVert } from 'react-icons/md';
import useSettingStore from '../../model/useSettingStore';

interface PillInfo {
  name: string;
  lastTaken: string;
}

const Pill = () => {
  const { setStateD } = useSettingStore();
  // const [pills, setPills] = React.useState<PillInfo[]>([
  //   {
  //     name: '비타민 C',
  //     lastTaken: '2024-03-21',
  //   },
  // ]);

  const handleAddPill = () => {
    setStateD(true);
  };

  return (
    <>
      <Paper
        sx={{
          width: '100%',
          height: '100%',
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Box
            sx={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Button
              sx={{
                m: 2,
                width: '100%',
                borderRadius: '10px',
                border: '1px solid',
              }}
              onClick={handleAddPill}>
              약 추가
            </Button>
          </Box>
        </Box>

        {pills.map((pill, index) => (
          <Card
            key={index}
            sx={{
              width: '80%',
              margin: 'auto',
              mt: 2,
              borderRadius: '10px',
              border: '1px solid',
              borderColor: 'primary.main',
            }}
            onClick={handleAddPill}>
            <CardHeader
              avatar={
                <Box
                  sx={{
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <PiPillFill size={18} />
                </Box>
              }
              action={
                <IconButton aria-label="settings">
                  <MdMoreVert />
                </IconButton>
              }
              title={pill.name}
              subheader={`마지막 복용: ${pill.lastTaken}`}
            />
          </Card>
        ))}
      </Paper>
    </>
  );
};

export default Pill;

export const pills: PillInfo[] = [
  {
    name: '비타민 C',
    lastTaken: '2024-03-21',
  },
  {
    name: '비타민 C',
    lastTaken: '2024-03-21',
  },
];
