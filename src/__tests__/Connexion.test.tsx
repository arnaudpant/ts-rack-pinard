import { render, screen } from "@testing-library/react";
import { useAuth } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import Connexion from "../ui/pages/connexion/Connexion";
import { authUserfake } from "./types";

vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );
    return {
        ...actual,
        Navigate: vi.fn(({ to }) => (
            <div data-testid="navigate" data-to={to} />
        )),
    };
});

describe("Connexion", () => {
    it("affiche ConnexionView si l'utilisateur n'est pas authentifié", () => {
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
                <Connexion />
            </BrowserRouter>
        );
        expect(screen.getByTestId("connexion-view")).toBeInTheDocument();
    });

    it("redirige vers /home-racks si l'utilisateur est authentifié et a complété l'onboarding", () => {
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
                <Connexion />
            </BrowserRouter>
        );

        const navigate = screen.getByTestId("navigate");
        expect(navigate).toHaveAttribute("data-to", "/home-racks");
    });

    it("redirige vers /boarding si l'utilisateur est authentifié mais n'a pas complété l'onboarding", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: {
                ...authUserfake,
                userDocument: {
                    ...authUserfake.userDocument,
                    onBoardingisCompleted: false,
                },
            },
            authUserIsLoading: false,
        } as any);

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Connexion />
            </BrowserRouter>
        );

        const navigate = screen.getByTestId("navigate");
        expect(navigate).toHaveAttribute("data-to", "/boarding");
    });
});
