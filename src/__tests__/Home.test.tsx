import Home from "../ui/pages/accueil/Home";
import { useAuth } from "../context/AuthUserContext";
import { authUserfake } from "./types";
import { BrowserRouter, Navigate } from "react-router-dom";
import { render, screen } from "@testing-library/react";

// Mock du contexte AuthUser
vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

// Mock des hooks et composants
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );
    return {
        ...actual,
        Navigate: vi.fn(),
    };
});

describe("Home", () => {
    it("redirige vers /home-racks si l'utilisateur est authentifié", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        } as any);
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Home />
            </BrowserRouter>
        );
        expect(Navigate).toHaveBeenCalledWith(
            { to: "/home-racks", replace: true },
            {}
        );
    });

    it("affiche le contenu de la page d'accueil si l'utilisateur n'est pas authentifié", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: null,
            authUserIsLoading: false,
        } as any);
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Home />
            </BrowserRouter>
        );
        expect(
            screen.getByText(
                "La gestion de cave à vin simplifiée: votre collection à portée de main !"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByAltText("bouteille de vin devant une cave a vin")
        ).toBeInTheDocument();
    });
});
