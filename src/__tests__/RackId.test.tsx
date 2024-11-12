import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthUserContext";
import RackId from "../ui/pages/page-rack/RackId";
import { authUserfake } from "./types";

// Mock de react-router-dom
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );
    return {
        ...actual,
        useLocation: vi.fn(),
    };
});

// Mock du hook useAuth
vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

// Mock du composant RackSoloView
vi.mock("../ui/components/layouts/rack/RackSoloView", () => ({
    default: () => <div data-testid="rack-solo-view">RACK SOLO VIEW</div>,
}));

describe("RackId", () => {
    beforeEach(() => {
        vi.mocked(useLocation).mockReturnValue({
            state: authUserfake.userDocument.racks[0].idrack,
        } as any);

        // Mock useEffect sans l'exécuter immédiatement
        vi.mock("react", async () => {
            const actual = await vi.importActual<typeof import("react")>(
                "react"
            );
            return {
                ...actual,
                useEffect: vi.fn(),
            };
        });

        window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
    });

    it("renders RackSoloView when rack is found", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        } as any);

        render(
            <BrowserRouter>
                <RackId />
            </BrowserRouter>
        );

        expect(screen.getByTestId("rack-solo-view")).toBeInTheDocument();
    });

    it("displays 'Rack non trouvé' when rack is not found", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: null,
            authUserIsLoading: false,
        } as any);

        render(
            <BrowserRouter>
                <RackId />
            </BrowserRouter>
        );

        expect(screen.getByText("Rack non trouvé")).toBeInTheDocument();
    });
});
