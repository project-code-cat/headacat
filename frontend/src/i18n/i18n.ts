import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: {
        translation: {
          welcome: '환영합니다',
          login: {
            title: '로그인',
            username: '사용자 이름',
            password: '비밀번호',
            submit: '로그인하기',
          },
        },
      },
      en: {
        translation: {
          welcome: 'Welcome',
          login: {
            title: 'Login',
            username: 'Username',
            password: 'Password',
            submit: 'Sign In',
          },
        },
      },
    },
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
