import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { BrowserRouter, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthUserContext";
import HomeView from "../ui/pages/accueil/HomeView";
import { authUserfake } from "./types";

// Mock du hook useAuth
vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

// Mock de react-router-dom
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );
    return {
        ...actual,
        Navigate: vi.fn(() => null),
    };
});

describe("HomeView", () => {
    it("redirects to /home-racks when user is authenticated", () => {
        (useAuth as any).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        });

        render(<HomeView />);

        expect(vi.mocked(Navigate)).toHaveBeenCalledWith(
            { to: "/home-racks", replace: true },
            {}
        );
    });

    it("renders login and registration links when user is not authenticated", () => {
        (useAuth as any).mockReturnValue({
            authUser: null,
            authUserIsLoading: false,
        });

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <HomeView />
            </BrowserRouter>
        );

        expect(screen.getByTestId("btn-not-connected")).toBeInTheDocument();
        expect(screen.getByText("INSCRIPTION")).toBeInTheDocument();
        expect(screen.getByText("CONNEXION")).toBeInTheDocument();
        expect(screen.getByText("DEMONSTRATION")).toBeInTheDocument();
    });

    it("has correct links for unauthenticated user", () => {
        vi.mocked(useAuth).mockReturnValue({ authUser: null } as any);

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <HomeView />
            </BrowserRouter>
        );

        expect(screen.getByText("INSCRIPTION")).toHaveAttribute(
            "href",
            "/inscription"
        );
        expect(screen.getByText("CONNEXION")).toHaveAttribute(
            "href",
            "/connexion"
        );
        expect(screen.getByText("DEMONSTRATION")).toHaveAttribute(
            "href",
            "/demonstration"
        );
    });
});
