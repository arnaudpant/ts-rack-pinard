import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { fakeBottles } from "./types";
import CaveVirtuelleView from "../ui/pages/cave-virtuelle/CaveVirtuelleView";

describe("CaveVirtuelleView", () => {

    const mockHandleDelete = vi.fn();

    const renderComponent = () => {
        return render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <CaveVirtuelleView
                    bottlesForLater={fakeBottles}
                    handleDelete={mockHandleDelete}
                />
            </BrowserRouter>
        );
    };

    it("rend correctement le titre et le bouton d'ajout", () => {
        renderComponent();
        expect(
            screen.getByText("Liste des bouteilles à sauvegarder")
        ).toBeInTheDocument();
        expect(screen.getByText("Ajouter une bouteille")).toBeInTheDocument();
    });

    it("affiche correctement les en-têtes du tableau", () => {
        renderComponent();
        const headers = [
            "Bouteilles",
            "Type",
            "Couleur",
            "Appellation",
            "Exploitation",
            "Millésime",
            "Supprimer",
        ];
        headers.forEach((header) => {
            expect(screen.getByText(header)).toBeInTheDocument();
        });
    });

    it("affiche correctement les données des bouteilles", () => {
        renderComponent();
        
    });

    it("appelle handleDelete avec l'ID correct lors du clic sur le bouton supprimer", () => {
        renderComponent();
        const deleteButtons = screen.getAllByTestId("supprimer");
        fireEvent.click(deleteButtons[0]);
        expect(mockHandleDelete).toHaveBeenCalledWith("fake-bottle-a");
    });

    it("le lien 'Ajouter une bouteille' pointe vers la bonne route", () => {
        renderComponent();
        const addButton = screen.getByText("Ajouter une bouteille");
        expect(addButton).toHaveAttribute("href", "/buy-later");
    });
});
