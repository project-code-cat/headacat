import React from 'react';
import { FaPen } from 'react-icons/fa';
import Pill from '../ui/pill';
import Default from '../ui/default';
import Question from '../ui/question';
import Caffeine from '../ui/caffeine';
import DevInfo from '../ui/devinfo';
import User from '../ui/user';

export const settingList = [
  {
    key: 'user',
    label: '사용자 정보',
    icon: <FaPen />,
    content: <User />,
  },
  {
    key: 'default',
    label: '기본 세팅',
    icon: <FaPen />,
    content: <Default />,
  },
  {
    key: 'pill',
    label: '두통 관리',
    icon: <FaPen />,
    content: <Pill />,
  },
  {
    key: 'caffeine',
    label: '카페인 관리',
    icon: <FaPen />,
    content: <Caffeine />,
  },
  {
    key: 'question',
    label: '문의',
    icon: <FaPen />,
    content: <Question />,
  },
  {
    key: 'devinfo',
    label: '개발자 정보',
    icon: <FaPen />,
    content: <DevInfo />,
  },
  {
    key: 'logout',
    label: '로그아웃',
    icon: <FaPen />,
    content: <></>,
  },
];
