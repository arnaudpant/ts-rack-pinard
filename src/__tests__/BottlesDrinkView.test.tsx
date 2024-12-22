import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { fakeBottles } from "./types";
import BottlesDrinkView from "../ui/pages/page-bottle-drink/BottlesDrinkView";

describe("BottlesDrinkView", () => {
    const mockHandleDelete = vi.fn();

    it("affiche correctement les en-têtes du tableau", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={fakeBottles}
                handleDelete={mockHandleDelete}
            />
        );
        const headers = [
            "Bouteilles",
            "Type de vin",
            "Couleur",
            "Appellation",
            "Date achat",
            "Date consommation",
            "Prix",
            "Supprimer",
        ];
        headers.forEach((header) => {
            expect(screen.getByText(header)).toBeInTheDocument();
        });
    });

    it("affiche correctement les données des bouteilles", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={fakeBottles}
                handleDelete={mockHandleDelete}
            />
        );
        expect(screen.getByText("Château Margaux")).toBeInTheDocument();
        expect(screen.getByText("Chablis Grand Cru AOC")).toBeInTheDocument();
    });

    it("affiche correctement les dates achat", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={fakeBottles}
                handleDelete={mockHandleDelete}
            />
        );
        expect(screen.getByText("17/02/2022")).toBeInTheDocument();
        expect(screen.getByText("21/06/2021")).toBeInTheDocument();
    });

    it("appelle handleDelete avec l'ID correct lors du clic sur le bouton supprimer", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={fakeBottles}
                handleDelete={mockHandleDelete}
            />
        );
        const deleteButtons = screen.getAllByTestId("supprimer");
        fireEvent.click(deleteButtons[0]);
        expect(mockHandleDelete).toHaveBeenCalledWith("fake-bottle-a");
        fireEvent.click(deleteButtons[1]);
        expect(mockHandleDelete).toHaveBeenCalledWith("fake-bottle-b");
    });

    it("affiche un message lorsqu'il n'y a pas de bouteilles consommées", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={[]}
                handleDelete={mockHandleDelete}
            />
        );
        expect(
            screen.getByText("Aucunes bouteilles consommées pour le moment")
        ).toBeInTheDocument();
    });
});
