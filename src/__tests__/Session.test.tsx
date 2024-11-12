import { render, screen, waitFor } from "@testing-library/react";
import { useAuth } from "../context/AuthUserContext";
import { authUserfake } from "./types";
import Session from "../ui/components/session/Session";

// Mock du contexte AuthUser
vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));


describe("Spinner", () => {
    it("renders the component spinner when authUserIsLoading is true", async () => {
        (useAuth as any).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: true,
        });
        await waitFor(() => {
            render(<Session children={"Children"}/>);
        });

        expect(screen.getByTestId("spinner")).toBeInTheDocument();
        expect(screen.queryByText(/Children/i)).not.toBeInTheDocument();
    });
    
    
    it("renders the children when authUserIsLoading is false", async () => {
        (useAuth as any).mockReturnValue({
            authUser: null,
            authUserIsLoading: false,
        });
        await waitFor(() => {
            render(<Session children={"Children"} />);
        });
        expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
        expect(screen.getByText(/Children/i)).toBeInTheDocument();
    });
});
