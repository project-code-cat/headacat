import { create } from 'zustand';

interface User {
  userNo: number;
  userName: string;
  userGender: 'M' | 'F';
  userBirth: string;
}

interface UserState extends User {
  // getUserInfo: (user: {
  //   userNo: number;
  //   userName: string;
  //   userGender: string;
  //   userBirth: string;
  // }) => void;
  setUserName: (userName: string) => void;
  setUserGender: (userGender: 'M' | 'F') => void;
  setUserBirth: (userBirth: string) => void;
}

const useUserStore = create<UserState>(set => ({
  userNo: 1,
  userName: 'CHIIKAWA',
  userGender: 'F',
  userBirth: '2024-12-09',
  // getUserInfo: user =>
  //   set(() => ({
  //     ...user,
  //   })),
  setUserName: userName =>
    set(() => ({
      userName,
    })),
  setUserGender: userGender =>
    set(() => ({
      userGender,
    })),
  setUserBirth: userBirth =>
    set(() => ({
      userBirth,
    })),
}));

export default useUserStore;
