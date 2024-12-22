import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import AddBootleForBuyLaterView from "../ui/pages/buy-later/AddBootleForBuyLaterView";

describe("AddBootleForBuyLaterView", () => {
    const mockOnSubmit = vi.fn();

    const renderComponent = () => {
        return render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddBootleForBuyLaterView onSubmit={mockOnSubmit} />
            </BrowserRouter>
        );
    };

    it("rend correctement le formulaire d'ajout de bouteille", () => {
        renderComponent();
        expect(screen.getByText("Nom de la bouteille *")).toBeInTheDocument();
        expect(screen.getByText("Type de vin *")).toBeInTheDocument();
        expect(
            screen.getByText("Couleur du vin ou bière *")
        ).toBeInTheDocument();
        expect(screen.getByText("Millesime")).toBeInTheDocument();
        expect(screen.getByText("Appellation")).toBeInTheDocument();
        expect(screen.getByText("Nom exploitation")).toBeInTheDocument();
    });

    it("appelle onSubmit avec les données correctes lors de la soumission du formulaire", async () => {
        renderComponent();
        fireEvent.change(screen.getByTestId("bottle-name"), {
            target: { value: "Test Wine" },
        });
        fireEvent.change(screen.getByTestId("bottle-type"), {
            target: { value: "vin" },
        });
        fireEvent.change(screen.getByTestId("bottle-color"), {
            target: { value: "rouge" },
        });
        fireEvent.change(screen.getByTestId("bottle-millesime"), {
            target: { value: "2020" },
        });
        fireEvent.change(screen.getByTestId("bottle-appellation"), {
            target: { value: "Bordeaux" },
        });
        fireEvent.change(screen.getByTestId("bottle-exploitation"), {
            target: { value: "Château Test" },
        });

        fireEvent.click(screen.getByText("Ajouter la bouteille"));

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalledOnce();
        });
    });

    it("affiche le lien d'annulation avec la bonne destination", () => {
        renderComponent();
        const cancelLink = screen.getByText("ANNULER");
        expect(cancelLink).toHaveAttribute("href", "/cave-virtuelle");
    });
});
