import React from 'react';
import { Typography } from '@mui/material';
import useUserStore from '../../../../shared/stores/useUserStore';
import { useImmer } from 'use-immer';
import CountInput from './CountInput';

const Birth = () => {
  const { userBirth, setUserBirth } = useUserStore();

  const initialDate = userBirth
    ? {
        year: parseInt(userBirth.split('-')[0], 10),
        month: parseInt(userBirth.split('-')[1], 10),
        day: parseInt(userBirth.split('-')[2], 10),
      }
    : { year: 2000, month: 1, day: 1 };

  const [date, setDate] = useImmer(initialDate);

  const changeCount = (type: 'year' | 'month' | 'day', newValue: number) => {
    setUserBirth(`${newValue}-${date.month}-${date.day}`);
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: '0.8rem',
          color: 'grey.500',
          ml: 2,
          variant: 'standard',
          mt: 4,
        }}>
        생일
      </Typography>
      <CountInput
        count={date.year}
        setCount={(newValue: number) => {
          setDate(draft => {
            draft.year = newValue;
          });
        }}
        type="year"
        changeCount={changeCount}
      />
      <CountInput
        count={date.month}
        setCount={(newValue: number) => {
          setDate(draft => {
            draft.month = newValue;
          });
        }}
        type="month"
        changeCount={changeCount}
      />
      <CountInput
        count={date.day}
        setCount={(newValue: number) => {
          setDate(draft => {
            draft.day = newValue;
          });
        }}
        type="day"
        changeCount={changeCount}
      />
    </>
  );
};

export default Birth;
