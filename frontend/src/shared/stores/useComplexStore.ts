import {create} from 'zustand';

interface User {
  id: number;
  name: string;
}

interface ComplexState {
  users: User[];
  loading: boolean;
  error: string | null;
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
  fetchUsers: () => Promise<void>;
}

const useComplexStore = create<ComplexState>(set => ({
  users: [],
  loading: false,
  error: null,
  addUser: user =>
    set(state => ({
      users: [...state.users, user],
    })),
  removeUser: id =>
    set(state => ({
      users: state.users.filter(user => user.id !== id),
    })),
  fetchUsers: async () => {
    set({loading: true});
    try {
      const response = await fetch('https://api.example.com/users');
      const users = await response.json();
      set({users, loading: false});
    } catch (error) {
      set({error: '사용자 데이터를 불러오는데 실패했습니다', loading: false});
    }
  },
}));

export default useComplexStore;
