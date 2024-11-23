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
    it("renders the component with correct headings when authUser exists", async () => {
        (useAuth as any).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        });
        await waitFor(() => {
            render(<ListOfRacks />);
        });

        expect(
            screen.getByText(/La gestion de cave à vin simplifiée/)
        ).toBeInTheDocument();
        expect(screen.getByText(/Liste de vos racks:/)).toBeInTheDocument();
    });

    
    it("renders the component with correct headings when authUser is null", async () => {
        (useAuth as any).mockReturnValue({
            authUser: null,
            authUserIsLoading: false,
        });
        await waitFor(() => {
            render(<ListOfRacks />);
        });

        expect(
            screen.queryByText(/La gestion de cave à vin simplifiée/)
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText(/Liste de vos racks:/)
        ).not.toBeInTheDocument();
    });
});
