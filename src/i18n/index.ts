import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import sv from './locales/sv.json';
import en from './locales/en.json';
import ro from './locales/ro.json';

const savedLang = localStorage.getItem('lang') || 'sv';

i18n.use(initReactI18next).init({
  resources: {
    sv: { translation: sv },
    en: { translation: en },
    ro: { translation: ro },
  },
  lng: savedLang,
  fallbackLng: 'sv',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;