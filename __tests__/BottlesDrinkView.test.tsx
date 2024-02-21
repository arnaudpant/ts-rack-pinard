import React from "react";
import { expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottlesDrinkView from "../src/ui/pages/page-bottle-drink/BottlesDrinkView";
import { fakeBottles } from "./types";

test("Affichage de 0 bouteille consommée", () => {
    render(<BottlesDrinkView bottlesDrink={[]} handleDelete={() => {}} />);
    const msg = screen.getByText(
        /Aucunes bouteilles consommées pour le moment/i
    );
    expect(msg).toBeInTheDocument();
});

test("Affichage de 2 bouteilles consommées", () => {
    render(
        <BottlesDrinkView bottlesDrink={fakeBottles} handleDelete={() => {}} />
    );
    const msg = screen.queryByText(
        /Aucunes bouteilles consommées pour le moment/i
    );
    expect(msg).not.toBeInTheDocument();
});

test("Affichage des données", () => {
    render(
        <BottlesDrinkView bottlesDrink={fakeBottles} handleDelete={() => {}} />
    );
    const table = screen.getAllByRole("table");
    const thread = screen.getAllByRole("row");
    expect(table).toHaveLength(1);
    expect(thread).toHaveLength(3);
});

test("Clic sur supprimer", () => {
    const clicSuppr = vi.fn();
    render(
        <BottlesDrinkView
            bottlesDrink={fakeBottles}
            handleDelete={() => clicSuppr()}
        />
    );
    const btnSuppr = screen.getAllByTestId(/supprimer/i);
    fireEvent.click(btnSuppr[0]);
    expect(clicSuppr).toHaveBeenCalledOnce();
    fireEvent.click(btnSuppr[1]);
    expect(clicSuppr).toHaveBeenCalledTimes(2);
});
test("Affichage de la date formatée", () => {
    render(
        <BottlesDrinkView bottlesDrink={fakeBottles} handleDelete={() => {}} />
    );
    const dateFormate = screen.getByText("17/02/2022");
    const dateNotFormate = screen.queryByText("2022/02/17");
    expect(dateNotFormate).not.toBeInTheDocument();
    expect(dateFormate).toBeInTheDocument();
});
