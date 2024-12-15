import { ja as jaJPAdapter, ko as koKRdapter, enUS as enUSAdapter } from 'date-fns/locale';

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gb-nir',
    numberFormat: {
      code: 'en-US',
      currency: 'USD',
    },
  },
  {
    label: '한국어',
    value: 'ko',
    adapterLocale: koKRdapter,
    icon: 'flagpack:kr',
    numberFormat: {
      code: 'ko-KR',
      currency: 'KRW',
    },
  },
  {
    label: '日本語',
    value: 'ja',
    adapterLocale: jaJPAdapter,
    icon: 'flagpack:jp',
    numberFormat: {
      code: 'ja-JP',
      currency: 'JPY',
    },
  },
];

const windowLang = window.navigator.language.split('-')[0];

export const defaultLang = allLangs.find((lang) => lang.value === windowLang) || allLangs[1];
