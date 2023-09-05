import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("renders learn react link", () => {
        const { getByText } = render(<App />);

        expect(getByText(/learn/i)).toBeInTheDocument();
    });

    // Tests that the App component renders without crashing
    it("renders without crashing", () => {
        render(<App />);
    });

    // Tests that the Switch component toggles the theme between light and dark
    it("toggles theme", () => {
        const { getByRole } = render(<App />);
        const switchElement = getByRole("switch") as HTMLInputElement;
        fireEvent.click(switchElement);
        expect(switchElement.checked).toBe(false);
        fireEvent.click(switchElement);
        expect(switchElement.checked).toBe(true);
    });

    // Tests that the Switch component is checked when the theme is dark
    it("switch is checked when theme is dark", () => {
        const { getByRole } = render(<App />);
        const switchElement = getByRole("switch") as HTMLInputElement;
        expect(switchElement.checked).toBe(true);
    });

    // Tests that the Switch component is unchecked when the theme is light
    it("switch is unchecked when theme is light", () => {
        const { getByRole } = render(<App />);
        const switchElement = getByRole("switch") as HTMLInputElement;
        fireEvent.click(switchElement);
        expect(switchElement.checked).toBe(false);
    });
    // Tests that the theme is persisted in local storage
    it("persists theme in local storage", () => {
        const { getByRole } = render(<App />);
        const switchElement = getByRole("switch");
        fireEvent.click(switchElement);
        expect(window.localStorage.getItem("theme")).toBe('"dark"');
    });

    // Tests that clicking on React, Redux, Redux Toolkit, and React Redux links opens a new tab
    it("clicking on links opens new tab", () => {
        const { getByText } = render(<App />);
        const reactLink = getByText("React");
        const reduxLink = getByText("Redux");
        const reduxToolkitLink = getByText("Redux Toolkit");
        const reactReduxLink = getByText("React Redux");
        expect(reactLink).toHaveAttribute("target", "_blank");
        expect(reduxLink).toHaveAttribute("target", "_blank");
        expect(reduxToolkitLink).toHaveAttribute("target", "_blank");
        expect(reactReduxLink).toHaveAttribute("target", "_blank");
    });
});
