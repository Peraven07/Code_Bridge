import React from "react";
import { render, screen } from "@testing-library/react";

import Dashboard from "../Dashboard";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders VEselection image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("VisualEditorSelection-image")).toBeInTheDocument();
});

test("renders VEThemeselection image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("VEThemeSelection-image")).toBeInTheDocument();
});

test("renders VECustomize image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("VECustomize-image")).toBeInTheDocument();
});

test("renders ThemeDownload image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("ThemeDownload-image")).toBeInTheDocument();
});

test("renders ThemeCompare image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("ThemeCompare-image")).toBeInTheDocument();
});

test("renders NoCustomTheme image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("NoCustomTheme-image")).toBeInTheDocument();
});

test("renders NoCustomTheme1 image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("NoCustomTheme1-image")).toBeInTheDocument();
});

test("renders YesCustomTheme image", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("YesCustomTheme-image")).toBeInTheDocument();
});