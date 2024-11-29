import { render, screen } from "@testing-library/react";
import { useAuth } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import Boarding from "../ui/pages/boarding/Boarding";

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
            <div data-testid="boarding" data-to={to} />
        )),
    };
});

describe("Boarding", () => {
    it("navigate to / si user non connecté", () => {
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
                <Boarding />
            </BrowserRouter>
        );
        expect(screen.getByTestId(/boarding/i)).toBeInTheDocument();
        expect(screen.getByTestId(/boarding/i)).toHaveAttribute("data-to", "/");
    });
});
