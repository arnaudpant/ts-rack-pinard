import React from "react";
import { expect, test} from "vitest";
import { render,  screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottlePinard from "../src/ui/pages/page-rack/rack/bottles/BottlePinard";
import { BrowserRouter } from "react-router-dom";
import { fakeCaseEmpty, fakeBottle } from "./types";


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
