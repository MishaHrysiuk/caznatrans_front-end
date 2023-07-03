import React from "react";
import useLocalStorage from "use-local-storage";
import Switch from "react-switch";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
    const [theme, setTheme] = useLocalStorage<"dark" | "ligth">(
        "theme",
        "dark"
    );

    const switchTheme = () => {
        const newTheme = theme === "ligth" ? "dark" : "ligth";
        setTheme(newTheme);
    };

    return (
        <div className="App" data-theme={theme}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
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
                    ,<span> and </span>
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
            </header>
        </div>
    );
}

export default App;
