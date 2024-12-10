import React from 'react';
import { FaPen } from 'react-icons/fa';
import Pill from '../ui/pill';
import Default from '../ui/defualt';
import Question from '../ui/question';
import Caffeine from '../ui/caffeine';
import DevInfo from '../ui/devinfo';

export const settingList = [
  {
    label: '기본 세팅',
    icon: <FaPen />,
    content: <Default />,
  },
  {
    label: '약 관리',
    icon: <FaPen />,
    content: <Pill />,
  },
  {
    label: '카페인 관리',
    icon: <FaPen />,
    content: <Caffeine />,
  },
  {
    label: '문의',
    icon: <FaPen />,
    content: <Question />,
  },
  {
    label: '개발자 정보',
    icon: <FaPen />,
    content: <DevInfo />,
  },
  {
    label: '로그아웃',
    icon: <FaPen />,
    content: <></>,
  },
];
