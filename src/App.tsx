import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import Switch from "react-switch";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "./logo.svg";
import "./App.css";

const languages = [
    { code: "ua", name: "Українська", country_code: "ua" },
    { code: "en", name: "English", country_code: "uk" },
];

function App() {
    const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));
    const { t } = useTranslation();
    const [theme, setTheme] = useLocalStorage<"dark" | "ligth">(
        "theme",
        "dark"
    );

    const switchTheme = () => {
        const newTheme = theme === "ligth" ? "dark" : "ligth";
        setTheme(newTheme);
    };

    const switchLang = () => {
        i18next.changeLanguage(lang === "en" ? "ua" : "en");
        setLang(lang === "en" ? "ua" : "en");
    };
    return (
        <div className="App" data-theme={theme}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <iframe
                    src="https://track2.ruptela.com/?track-link=b4LSpmhexoAosQm_i-0jtQ"
                    width="95%"
                    height="550px"
                ></iframe>
                <p>{t("main")}</p>
                <span>
                    <span>{t("Learn")} </span>
                    <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> {t("and")} </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
                <Switch onChange={switchTheme} checked={theme === "dark"} />
                <Switch onChange={switchLang} checked={lang === "en"} />
            </header>
        </div>
    );
}

export default App;
