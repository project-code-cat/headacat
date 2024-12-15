import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './locales/langs/en.json';
import translationKo from './locales/langs/ko.json';
import translationJa from './locales/langs/ja.json';
import { defaultLang } from './locales/config-lang';
import { localStorageGetItem } from '../shared/utils/storage-available';

const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      ko: { translations: translationKo },
      ja: { translations: translationJa },
    },
    lng,
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
