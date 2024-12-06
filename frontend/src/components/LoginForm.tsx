import {useTranslation} from 'react-i18next';

function LoginForm() {
  const {t} = useTranslation();

  return (
    <div>
      <h1>{t('login.title')}</h1>
      <form>
        <div>
          <label>{t('login.username')}</label>
          <input type="text" />
        </div>
        <div>
          <label>{t('login.password')}</label>
          <input type="password" />
        </div>
        <button type="submit">{t('login.submit')}</button>
      </form>
    </div>
  );
}

export default LoginForm;
