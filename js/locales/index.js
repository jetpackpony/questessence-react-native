import I18n from './i18n';

export const chooseTranslation = (text, locales) => {
  return text[locales.find(locale => text[locale])];
};

export const getLocales = () => {
  return I18n.locales.get();
};
