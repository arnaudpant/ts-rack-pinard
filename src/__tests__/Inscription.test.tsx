import { render, screen } from "@testing-library/react";
import { useAuth } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import { authUserfake } from "./types";
import Inscription from "../ui/pages/inscription/Inscription";

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

describe("Inscription", () => {
    it("navigate to home-racks si user connecté", () => {
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
                <Inscription />
            </BrowserRouter>
        );

        expect(screen.getByTestId(/navigate/i)).toBeInTheDocument();
        expect(screen.getByTestId(/navigate/i)).toHaveAttribute(
            "data-to",
            "/home-racks"
        );
    });

    it("affiche inscriptionBox si user non connecté", () => {
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
                <Inscription />
            </BrowserRouter>
        );

        expect(screen.getByTestId(/inscription-view/i)).toBeInTheDocument();
    });
});
