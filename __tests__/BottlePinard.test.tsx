import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottlePinard from "../src/ui/pages/page-rack/rack/bottles/BottlePinard";
import { Bottle } from "../src/types/RacksTypes";
import { BrowserRouter } from "react-router-dom";

const fakeBottle: Bottle = {
    id: "fake-bottle",
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
    achat: null,
    rackId: "314",
    index: 3,
};
const fakeCaseEmpty: Bottle = {
    id: "fake-empty",
    millesime: null,
    type: "vide",
    couleur: "",
    gout: "",
    pays: null,
    appellation: null,
    exploitation: null,
    cuvee: null,
    accords: [],
    prix: null,
    achat: null,
    rackId: "314",
    index: 2,
};

test("Rendu case vide", () => {
    render(
        <BrowserRouter>
            <BottlePinard bottle={fakeCaseEmpty} nbrColums={3} />
        </BrowserRouter>
    );
    const caseEmpty = screen.getByTestId(/case-empty/i);
    expect(caseEmpty).toBeInTheDocument();
});

test("Rendu bouteille dans case", () => {
    render(
        <BrowserRouter>
            <BottlePinard bottle={fakeBottle} nbrColums={3} />
        </BrowserRouter>
    );
    const caseEmpty = screen.queryByTestId(/case-empty/i);
    expect(caseEmpty).not.toBeInTheDocument();
});

test("taille case < 6", () => {
    render(
        <BrowserRouter>
            <BottlePinard bottle={fakeBottle} nbrColums={3} />
        </BrowserRouter>
    );
    const bottle = screen.getByTestId(/bottle/i)
    expect(bottle).toBeInTheDocument()
    expect(bottle).not.toHaveClass("hidden");
    expect(bottle).toHaveTextContent(/Bordeaux/i);
});

test("taille case > 6", () => {
    render(
        <BrowserRouter>
            <BottlePinard bottle={fakeBottle} nbrColums={7} />
        </BrowserRouter>
    );
    const bottle = screen.getByTestId(/bottle/i);
    expect(bottle).toBeInTheDocument();
    expect(bottle).toHaveClass("hidden");
    expect(bottle).toHaveTextContent(/Bordeaux/i);
});
