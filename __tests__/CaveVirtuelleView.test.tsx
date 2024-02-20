import React from "react";
import { expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Bottle } from "../src/types/RacksTypes";
import CaveVirtuelleView from '../src/ui/pages/cave-virtuelle/CaveVirtuelleView'

const fakeBottles: Bottle[] = [
    {
        id: "fake-bottle-a",
        millesime: 2024,
        type: "vin",
        couleur: "rouge",
        gout: "",
        pays: "France",
        appellation: "Bordeaux",
        exploitation: "Chateau Piquette",
        cuvee: "medaille argent",
        accords: [],
        prix: 25,
        achat: "2022-02-17",
        rackId: "314",
        index: 3,
        drink: "",
    },
    {
        id: "fake-bottle-b",
        millesime: 2012,
        type: "vin",
        couleur: "blanc",
        gout: "sec",
        pays: "France",
        appellation: "Montlouis",
        exploitation: "Benoit",
        cuvee: "",
        accords: [],
        prix: 12,
        achat: "2024-01-03",
        rackId: "314",
        index: 4,
        drink: "22/02/2024",
    },
];

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