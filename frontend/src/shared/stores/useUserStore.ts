import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserState {
  userName: string;
  userGender: 'M' | 'F';
  userBirth: string;
  setUserName: (name: string) => void;
  setUserGender: (gender: 'M' | 'F') => void;
  setUserBirth: (birth: string) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    set => ({
      userName: 'CHIIKAWA',
      userGender: 'F',
      userBirth: '2020-01-01',
      setUserName: name => set({ userName: name }),
      setUserGender: gender => set({ userGender: gender }),
      setUserBirth: birth => set({ userBirth: birth }),
    }),
    { name: 'User' },
  ),
);

export default useUserStore;
