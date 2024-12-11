import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Setting {
  key: string;
}

interface SettingState extends Setting {
  setKey: (key: string) => void;
}

const useSettingStore = create<SettingState>()(
  devtools(
    set => ({
      key: 'setting',
      setKey: key => set({ key }),
    }),
    { name: 'Setting' },
  ),
);

export default useSettingStore;
