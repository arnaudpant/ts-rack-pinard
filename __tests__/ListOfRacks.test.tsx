import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListOfRacks from "../src/ui/components/layouts/bandeauRack/ListOfRacks";
import { authUserContext } from "../src/context/AuthUserContext";
import React from "react";

// Mock du composant ButtonRackSelected
vi.mock("./ButtonRackSelected", () => ({
    default: ({ rack }) => (
        <div data-testid={`rack-${rack.idrack}`}>{rack.name}</div>
    ),
}));

// Définition du type AuthUser basé sur l'erreur
type AuthUser = {
    uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
    photoURL: string;
    userDocument: UserDocument;
};

// Définition du type UserDocument (ajustez selon vos besoins)
type UserDocument = {
    racks: Array<{ idrack: string; name: string }>;
};

// Définition du type pour le contexte
type AuthContextType = {
    authUser: AuthUser | null;
    authUserIsLoading: boolean;
};

const createMockAuthContext = (
    authUser: AuthUser | null = null,
    authUserIsLoading = false
): AuthContextType => ({
    authUser,
    authUserIsLoading,
});

const renderWithAuthContext = (
    ui: React.ReactElement,
    contextValue: AuthContextType
) => {
    return render(
        <authUserContext.Provider value={contextValue as any}>
            {ui}
        </authUserContext.Provider>
    );
};

describe("ListOfRacks", () => {
    it("renders nothing when authUser is null", () => {
        renderWithAuthContext(<ListOfRacks />, createMockAuthContext(null));

        expect(
            screen.queryByText("Liste de vos racks:")
        ).not.toBeInTheDocument();
    });

    it("renders a message when the user has no racks", () => {
        const mockAuthUser: AuthUser = {
            uid: "1",
            email: "test@example.com",
            displayName: "Test User",
            emailVerified: true,
            photoURL: "",
            userDocument: { racks: [] },
        };
        renderWithAuthContext(
            <ListOfRacks />,
            createMockAuthContext(mockAuthUser)
        );

        expect(
            screen.getByText("Vous n'avez pas encore de racks.")
        ).toBeInTheDocument();
    });

    it("renders the list of racks when the user has racks", () => {
        const mockAuthUser: AuthUser = {
            uid: "1",
            email: "test@example.com",
            displayName: "Test User",
            emailVerified: true,
            photoURL: "",
            userDocument: {
                racks: [
                    { idrack: "1", name: "Rack 1" },
                    { idrack: "2", name: "Rack 2" },
                ],
            },
        };
        renderWithAuthContext(
            <ListOfRacks />,
            createMockAuthContext(mockAuthUser)
        );

        expect(screen.getByText("Liste de vos racks:")).toBeInTheDocument();
        expect(screen.getByTestId("rack-1")).toBeInTheDocument();
        expect(screen.getByTestId("rack-2")).toBeInTheDocument();
    });

    it("renders the racks in the correct order", () => {
        const mockAuthUser: AuthUser = {
            uid: "1",
            email: "test@example.com",
            displayName: "Test User",
            emailVerified: true,
            photoURL: "",
            userDocument: {
                racks: [
                    { idrack: "1", name: "Rack 1" },
                    { idrack: "2", name: "Rack 2" },
                ],
            },
        };
        renderWithAuthContext(
            <ListOfRacks />,
            createMockAuthContext(mockAuthUser)
        );

        const racks = screen.getAllByTestId(/^rack-/);
        expect(racks[0]).toHaveTextContent("Rack 1");
        expect(racks[1]).toHaveTextContent("Rack 2");
    });
});
