import React from 'react';
import {
  FaCoffee,
  FaInfo,
  FaPen,
  FaQuestion,
  FaSignOutAlt,
} from 'react-icons/fa';
import Caffeine from '../ui/caffeine/Caffeine';
import { PiPillFill } from 'react-icons/pi';
import { User } from '../ui/user';
import { Default } from '../ui/default';
import { DevInfo } from '../ui/devinfo';
import { Question } from '../ui/question';
import { Pill } from '../ui/pill';

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
    label: '약 관리',
    icon: <PiPillFill />,
    content: <Pill />,
  },
  {
    key: 'caffeine',
    label: '카페인 관리',
    icon: <FaCoffee />,
    content: <Caffeine />,
  },
  {
    key: 'question',
    label: '문의',
    icon: <FaQuestion />,
    content: <Question />,
  },
  {
    key: 'devinfo',
    label: '개발자 정보',
    icon: <FaInfo />,
    content: <DevInfo />,
  },
  {
    key: 'logout',
    label: '로그아웃',
    icon: <FaSignOutAlt />,
    content: <></>,
  },
];
