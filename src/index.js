import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import i18next from "./i18n";
import { I18nextProvider } from "react-i18next";
import * as serviceWorker from "./serviceWorker";
import common_es from "./Translations/es/common.json";
import common_en from "./Translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    es: {
      common: common_es
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,

  document.getElementById("root")
);

serviceWorker.unregister();
