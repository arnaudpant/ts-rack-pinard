import HomeRacksView from "../ui/pages/home-racks-sommelier/HomeRacksView";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );
    return {
        ...actual,
        Navigate: vi.fn(),
        useNavigate: vi.fn(),
    };
});

vi.mock("./RacksTrue", () => ({
    default: () => <div data-testid="racks-false">RacksTrue</div>,
}));

vi.mock("./RacksFalse", () => ({
    default: () => (
        <div data-testid="racks-false">RacksFalse</div>
    ),
}));

describe("HomeRacksView",  () => {
    it("applique la bonne classe min-height quand il n'y a pas de racks", () => {
        render(<HomeRacksView numberRacks={0} />);

        const container = screen.getByTestId("rack-width");
        expect(container).toHaveClass("min-h-[calc(100vh-232px)]");

    });

        it("applique la bonne classe min-height quand il n'y a pas de racks", () => {
            render(<HomeRacksView numberRacks={1} />);

            const container = screen.getByTestId("rack-width");
            expect(container).toHaveClass("min-h-[calc(100vh-272px)]");

            screen.debug();
        });
});
