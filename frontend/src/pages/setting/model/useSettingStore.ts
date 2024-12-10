import { create } from 'zustand';

interface Setting {
  key: string;
}

interface SettingState extends Setting {
  setKey: (key: string) => void;
}

const useSettingStore = create<SettingState>(set => ({
  key: 'setting',
  setKey: key => set(() => ({ key })),
}));

export default useSettingStore;
