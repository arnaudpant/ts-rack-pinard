import React from "react";
import { expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CaveVirtuelleView from "../ui/pages/cave-virtuelle/CaveVirtuelleView";
import { fakeBottles } from "./types";

test("Affichage de 0 bouteille", () => {
    render(<CaveVirtuelleView bottlesForLater={[]} handleDelete={() => {}} />);
    const bottleA = screen.queryByText(/Chateau Piquette/i);
    const bottleB = screen.queryByText(/Montlouis/i);
    expect(bottleA).not.toBeInTheDocument();
    expect(bottleB).not.toBeInTheDocument();
});

test("Affichage de 1 bouteille Chateau Piquette + 1 bouteille Montlouis", () => {
    render(
        <CaveVirtuelleView
            bottlesForLater={fakeBottles}
            handleDelete={() => {}}
        />
    );
    const bottleA = screen.getByText(/Chateau Piquette/i);
    const bottleB = screen.getByText(/Montlouis/i);
    expect(bottleA).toBeInTheDocument();
    expect(bottleB).toBeInTheDocument();
});

test("Clic sur supprimer", () => {
    const clicSuppr = vi.fn();
    render(
        <CaveVirtuelleView
            bottlesForLater={fakeBottles}
            handleDelete={() => clicSuppr()}
        />
    );
    const btnSuppr = screen.getAllByTestId(/supprimer/i);
    fireEvent.click(btnSuppr[0]);
    expect(clicSuppr).toHaveBeenCalledOnce();
    fireEvent.click(btnSuppr[1]);
    expect(clicSuppr).toHaveBeenCalledTimes(2);
});
