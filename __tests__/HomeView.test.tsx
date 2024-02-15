import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeView from "../src/ui/pages/accueil/HomeView";
import { BrowserRouter } from "react-router-dom";


test("User non connecté affichage INSCRIPTION", async () => {
    render(<BrowserRouter><HomeView isConnected={false} /></BrowserRouter>);
    const notConnected = await screen.findByTestId("is-not-connected");
    expect(notConnected).toBeInTheDocument();
});

test("User connecté affichage MES RACKS", () => {
    render(<BrowserRouter><HomeView isConnected={true} /></BrowserRouter>);
    expect(screen.queryByTestId("is-connected")).not.toBeInTheDocument();
});
