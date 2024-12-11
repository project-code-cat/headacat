import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Setting {
  key: string;
  stateD: boolean;
}

interface SettingState extends Setting {
  setKey: (key: string) => void;
  setStateD: (state: boolean) => void;
}

const useSettingStore = create<SettingState>()(
  devtools(
    set => ({
      key: 'setting',
      stateD: false,
      setKey: key => set({ key }),
      setStateD: state => set({ stateD: state }),
    }),
    { name: 'Setting' },
  ),
);

export default useSettingStore;
