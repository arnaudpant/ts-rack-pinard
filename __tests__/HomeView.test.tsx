import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeView from "../src/ui/pages/home/HomeView";

vi.mock("react-router-dom");

test("User non connecté affichage INSCRIPTION", () => {
    render(<HomeView isConnected={false} />);
    expect(screen.getByTestId("is-not-connected")).toBeInTheDocument();
});

test("User connecté affichage MES RACKS", () => {
    render(<HomeView isConnected={true} />);
    expect(screen.getByTestId("is-connected")).toBeInTheDocument();
});
