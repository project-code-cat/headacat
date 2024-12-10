import React from 'react';
import { SettingsInputComponent } from '@mui/icons-material';
import Pill from '../ui/pill';
import Default from '../ui/defualt';
import Question from '../ui/question';
import Caffeine from '../ui/caffeine';
import DevInfo from '../ui/devinfo';

export const settingList = [
  {
    label: '기본 세팅',
    icon: <SettingsInputComponent />,
    content: <Default />,
  },
  {
    label: '약 관리',
    icon: <SettingsInputComponent />,
    content: <Pill />,
  },
  {
    label: '카페인 관리',
    icon: <SettingsInputComponent />,
    content: <Caffeine />,
  },
  {
    label: '문의',
    icon: <SettingsInputComponent />,
    content: <Question />,
  },
  {
    label: '개발자 정보',
    icon: <SettingsInputComponent />,
    content: <DevInfo />,
  },
  {
    label: '로그아웃',
    icon: <SettingsInputComponent />,
    content: <></>,
  },
];
