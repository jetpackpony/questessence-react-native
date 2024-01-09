import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import en from "./translations/en";
import ru from "./translations/ru";

const i18n = new I18n({
  en,
  ru,
});

i18n.enableFallback = true;
i18n.locale = getLocales()[0].languageCode;

export default i18n;
