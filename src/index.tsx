import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import App from "./App";
import "./index.css";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        supportedLngs: ["en", "ua"],
        fallbackLng: "en",
        detection: {
            order: ["localStorage", "htmlTag", "path", "subdomain"],
            caches: ["localStorage"],
        },
        backend: {
            loadPath: "/assets/locales/{{lng}}/translation.json",
        },
        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </React.StrictMode>
);
