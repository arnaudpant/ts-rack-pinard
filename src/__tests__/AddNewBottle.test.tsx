import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import AddNewBottle from "../ui/pages/page-rack/rack/bottles/AddNewBottle";
import { useAuth } from "../context/AuthUserContext";
import { authUserfake, fakeBottle } from "./types";
import useUpdateRacks from "../hooks/useUpdateRacks";

// Mocks
vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

vi.mock("../hooks/useUpdateRacks", () => ({
    default: vi.fn(() => ({
        updateRacks: vi.fn(() => fakeBottle),
        addNewBottleInrack: vi.fn(),
        deletedRack: vi.fn(),
        deleteBottle: vi.fn(),
        deletedBottleDrink: vi.fn(),
        deletedBottleFavoris: vi.fn(),
        consommeBottle: vi.fn(),
        addBottleForBuyLater: vi.fn(),
    })),
}));

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useLocation: vi.fn(() => ({
            state: { id: "testId", rackId: "testRackId" },
        })),
        useNavigate: () => vi.fn(),
    };
});

describe("AddNewBottle", () => {
    it("rend le formulaire d'ajout de bouteille correctement", () => {
        (useAuth as any).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        });

        vi.mocked(useUpdateRacks).mockReturnValue({
            updateRacks: () => fakeBottle,
            addNewBottleInrack: vi.fn(),
            deletedRack: vi.fn(),
            deleteBottle: vi.fn(),
            deletedBottleDrink: vi.fn(),
            deletedBottleFavoris: vi.fn(),
            consommeBottle: vi.fn(),
            addBottleForBuyLater: vi.fn(),
        });

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddNewBottle />
            </BrowserRouter>
        );

        expect(
            screen.getByText(/Dupliquer la dernière bouteille/i)
        ).toBeInTheDocument();
    });


    it("affiche le bouton ANNULER avec le bon lien", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddNewBottle />
            </BrowserRouter>
        );

        const cancelButton = screen.getByText("ANNULER");
        expect(cancelButton).toHaveAttribute("href", "/rack/testRackId");
    });
});
