import { render, screen, waitFor } from "@testing-library/react";
import { useAuth } from "../context/AuthUserContext";
import ListOfRacks from "../ui/components/layouts/bandeauRack/ListOfRacks";
import { authUserfake } from "./types";

// Mock du contexte AuthUser
vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

// Mock du composant ButtonRackSelected
vi.mock("../ui/components/layouts/bandeauRack/ButtonRackSelected", () => ({
    default: ({ rack }: { rack: { idrack: string; name: string } }) => (
        <div data-testid={`rack-${rack.idrack}`}>{rack.name}</div>
    ),
}));

describe("ListOfRacks", () => {
    beforeEach(() => {
        // Configuration du mock pour useAuth avant chaque test
        (useAuth as any).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        });
    });

    it("renders the component with correct headings when authUser exists", async () => {
        await waitFor(() => {
            render(
                <ListOfRacks />
            );
        });

        expect(
            screen.getByText(/La gestion de cave à vin simplifiée/)
        ).toBeInTheDocument();
        expect(screen.getByText(/Liste de vos racks:/)).toBeInTheDocument();

        screen.debug();
    });
});