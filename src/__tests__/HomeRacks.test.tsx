import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeRacks from "../ui/pages/home-racks-sommelier/HomeRacks";
import { useAuth } from "../context/AuthUserContext";
import HomeRacksView from "../ui/pages/home-racks-sommelier/HomeRacksView";
import React from "react";

// Mock des dépendances
vi.mock("../../../context/AuthUserContext");
vi.mock("./HomeRacksView", () => ({
    default: vi.fn(() => (
        <div data-testid="home-racks-view">HomeRacksView</div>
    )),
}));

describe("HomeRacks", () => {
    it("redirects to home when user is not authenticated", () => {
        vi.mocked(useAuth).mockReturnValue({ authUser: null });

        const { container } = render(
            <MemoryRouter>
                <HomeRacks />
            </MemoryRouter>
        );

        expect(container.innerHTML).toMatch(/navigate/i);
        expect(container.innerHTML).toMatch(/to="\//);
    });

    it("redirects to boarding when onBoarding is not completed", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: { userDocument: { onBoardingisCompleted: false } },
        });

        const { container } = render(
            <MemoryRouter>
                <HomeRacks />
            </MemoryRouter>
        );

        expect(container.innerHTML).toMatch(/navigate/i);
        expect(container.innerHTML).toMatch(/to="\/boarding/);
    });

    it("renders HomeRacksView when user is authenticated and onBoarding is completed", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: {
                userDocument: {
                    onBoardingisCompleted: true,
                    racks: [{ id: "1" }, { id: "2" }],
                },
            },
        });

        render(<HomeRacks />);

        expect(screen.getByTestId("home-racks-view")).toBeInTheDocument();
        expect(HomeRacksView).toHaveBeenCalledWith(
            { numberRacks: 2 },
            expect.anything()
        );
    });

    it("handles empty racks array", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: {
                userDocument: {
                    onBoardingisCompleted: true,
                    racks: [],
                },
            },
        });

        render(<HomeRacks />);

        expect(screen.getByTestId("home-racks-view")).toBeInTheDocument();
        expect(HomeRacksView).toHaveBeenCalledWith(
            { numberRacks: 0 },
            expect.anything()
        );
    });

    it("handles undefined racks", () => {
        vi.mocked(useAuth).mockReturnValue({
            authUser: {
                userDocument: {
                    onBoardingisCompleted: true,
                    racks: undefined,
                },
            },
        });

        render(<HomeRacks />);

        expect(screen.getByTestId("home-racks-view")).toBeInTheDocument();
        expect(HomeRacksView).toHaveBeenCalledWith(
            { numberRacks: 0 },
            expect.anything()
        );
    });
});
