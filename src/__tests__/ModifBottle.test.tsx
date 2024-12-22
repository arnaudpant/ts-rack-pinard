import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { fakeBottle, fakeBottleTwo } from "./types";
import ModifBottle from "../ui/pages/page-rack/rack/bottles/ModifBottle";

// Mocks
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useLocation: vi.fn(() => ({
            state: fakeBottleTwo,
        })),
        useNavigate: () => mockNavigate,
    };
});

vi.mock("../hooks/useUpdateRacks", () => ({
    default: vi.fn(() => ({
        updateRacks: mockUpdateRacks,
        addNewBottleInrack: vi.fn(),
        deletedRack: vi.fn(),
        deleteBottle: vi.fn(),
        deletedBottleDrink: vi.fn(),
        deletedBottleFavoris: vi.fn(),
        consommeBottle: vi.fn(),
        addBottleForBuyLater: vi.fn(),
    })),
}));

const mockUpdateRacks = vi.fn();
const mockNavigate = vi.fn();

describe("ModifBottle", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("rend le formulaire de modification de la fake bouteille correctement", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <ModifBottle />
            </BrowserRouter>
        );

        expect(screen.getByTestId("name-bottle")).toHaveValue("Château Lepape");
        expect(screen.getByTestId("millesime-bottle")).toHaveValue(2011);
        expect(screen.getByTestId("appellation-bottle")).toHaveValue(
            "Lepape AOC"
        );
    });

    it("soumet le formulaire avec les données modifiées", async () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <ModifBottle />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByTestId("name-bottle"), {
            target: { value: "New Wine Name" },
        });
         fireEvent.change(screen.getByTestId("appellation-bottle"), {
             target: { value: "piquette AOC" },
         });

        fireEvent.click(screen.getByText("Modifier la bouteille"));

        await waitFor(() => {
            expect(mockUpdateRacks).toHaveBeenCalled();
            expect(mockUpdateRacks).toHaveBeenCalledWith(
                expect.objectContaining({
                    nom: "New Wine Name",
                    appellation: "piquette AOC",
                })
            );
            expect(mockNavigate).toHaveBeenCalledWith("/rack/125", {
                state: "125",
            });
        });
    });

    // it("désactive le bouton de soumission pour le rack de démonstration", () => {
    //     vi.mocked(useLocation).mockReturnValue({
    //         state: { ...mockBottle, rackId: "314" },
    //     });

    //     render(
    //         <BrowserRouter>
    //             <ModifBottle />
    //         </BrowserRouter>
    //     );

    //     expect(screen.getByText("Modifier la bouteille")).toBeDisabled();
    // });

    // it("affiche le lien d'annulation avec le bon état", () => {
    //     render(
    //         <BrowserRouter>
    //             <ModifBottle />
    //         </BrowserRouter>
    //     );

    //     const cancelLink = screen.getByText("ANNULER");
    //     expect(cancelLink).toHaveAttribute("href", "/rack/rack1");
    // });
});
