import React from "react";
import { expect, it, vi, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottlesDrinkView from "../ui/pages/page-bottle-drink/BottlesDrinkView";
import { Bottle } from "../types/RacksTypes";

// Mock pour la fonction dateFormater
vi.mock("../../../utils/utils", () => ({
    dateFormater: vi.fn((date) => (date ? "Formatted Date" : "")),
}));

describe("BottlesDrinkView", () => {
    const mockHandleDelete = vi.fn();

    const mockBottles: Bottle[] = [
        {
            id: "1",
            type: "vin",
            couleur: "rouge",
            appellation: "Bordeaux",
            exploitation: "Château Test",
            achat: "2023-01-01",
            prix: 20,
            millesime: 2020,
            gout: "",
            pays: "France",
            cuvee: null,
            accords: [],
            rackId: "1",
            index: 0,
            drink: null,
        },
        {
            id: "2",
            type: "vin",
            couleur: "blanc",
            appellation: "Bourgogne",
            exploitation: "Domaine Test",
            achat: "2023-02-01",
            prix: 25,
            millesime: 2021,
            gout: "",
            pays: "France",
            cuvee: null,
            accords: [],
            rackId: "1",
            index: 1,
            drink: null,
        },
    ];

    it("renders the title correctly", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={[]}
                handleDelete={mockHandleDelete}
            />
        );
        expect(
            screen.getByText("Liste des bouteilles consommées")
        ).toBeInTheDocument();
    });

    it("displays a message when there are no bottles", () => {
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

    it("renders the table with correct headers when there are bottles", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={mockBottles}
                handleDelete={mockHandleDelete}
            />
        );
        const headers = [
            "Bouteilles",
            "Type de vin",
            "Appellation",
            "Exploitation",
            "Date achat",
            "Prix",
            "Supprimer",
        ];
        headers.forEach((header) => {
            expect(screen.getByText(header)).toBeInTheDocument();
        });
    });

    it("renders the correct number of rows for bottles", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={mockBottles}
                handleDelete={mockHandleDelete}
            />
        );
        const rows = screen.getAllByRole("row");
        // +1 for the header row
        expect(rows.length).toBe(mockBottles.length + 1);
    });

    it("displays correct bottle information", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={mockBottles}
                handleDelete={mockHandleDelete}
            />
        );
        expect(screen.getByText("Rouge")).toBeInTheDocument();
        expect(screen.getByText("Bordeaux")).toBeInTheDocument();
        expect(screen.getByText("Château Test")).toBeInTheDocument();
        expect(screen.getByText("20€")).toBeInTheDocument();
    });

    it("calls handleDelete when delete button is clicked", () => {
        render(
            <BottlesDrinkView
                bottlesDrink={mockBottles}
                handleDelete={mockHandleDelete}
            />
        );
        const deleteButtons = screen.getAllByTestId("supprimer");
        fireEvent.click(deleteButtons[0]);
        expect(mockHandleDelete).toHaveBeenCalledWith("1");
    });
});
