import HomeRacks from "../ui/pages/home-racks-sommelier/HomeRacks";
import { useAuth } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { authUserfake } from "./types";

// Mocks
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        Navigate: vi.fn(({ to }) => (
            <div data-testid="navigate" data-to={to} />
        )),
    };
});

vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

describe("HomeRack", () => {
    it("redirige vers '/' si l'utilisateur n'est pas authentifié", () => {
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
                <HomeRacks />
            </BrowserRouter>
        );

        expect(screen.getByTestId("navigate")).toHaveAttribute("data-to", "/");
    });

    it("Redirige vers /boarding si onBoarding non complete", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: {
                ...authUserfake,
                userDocument: {
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
                <HomeRacks />
            </BrowserRouter>
        );

        expect(screen.getByTestId("navigate")).toHaveAttribute(
            "data-to",
            "/boarding"
        );
    });
});
