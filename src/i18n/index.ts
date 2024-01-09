import { getLocales } from "expo-localization";
import i18n from "./i18n";

export const chooseTranslation = (textOptions) => {
  const locale = getLocales().find(({ languageCode }) =>
    textOptions.hasOwnProperty(languageCode),
  );
  return textOptions[locale.languageCode];
};

export function translate(textID) {
  return i18n.t(textID);
}
