import { create } from 'zustand';

interface User {
  userNo: number;
  userName: string;
  userGender: string;
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
  setUserGender: (userGender: string) => void;
  setUserBirth: (userBirth: string) => void;
}

const useUserStore = create<UserState>(set => ({
  userNo: 1,
  userName: 'CHIIKAWA',
  userGender: 'M',
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
