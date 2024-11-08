import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeRacksView from "../ui/pages/home-racks-sommelier/HomeRacksView";
import React from "react";

// Mock des composants enfants
vi.mock("./RacksTrue", () => ({
    default: ({ handleClick }: { handleClick: () => void }) => (
        <div data-testid="racks-true" onClick={handleClick}>
            RacksTrue
        </div>
    ),
}));

vi.mock("./RacksFalse", () => ({
    default: ({ handleClick }: { handleClick: () => void }) => (
        <div data-testid="racks-false" onClick={handleClick}>
            RacksFalse
        </div>
    ),
}));

vi.mock("../../modules/modal/AddRackModal", () => ({
    default: ({ handleClick }: { handleClick: () => void }) => (
        <div data-testid="add-rack-modal" onClick={handleClick}>
            AddRackModal
        </div>
    ),
}));

describe("HomeRacksView", () => {
    it("renders RacksFalse when numberRacks is 0", () => {
        render(<HomeRacksView numberRacks={0} />);
        expect(screen.getByTestId("racks-false")).toBeInTheDocument();
        expect(screen.queryByTestId("racks-true")).not.toBeInTheDocument();
    });

    it("renders RacksTrue when numberRacks is greater than 0", () => {
        render(<HomeRacksView numberRacks={1} />);
        expect(screen.getByTestId("racks-true")).toBeInTheDocument();
        expect(screen.queryByTestId("racks-false")).not.toBeInTheDocument();
    });

    it("does not show AddRackModal initially", () => {
        render(<HomeRacksView numberRacks={0} />);
        expect(screen.queryByTestId("add-rack-modal")).not.toBeInTheDocument();
    });

    it("shows AddRackModal when RacksFalse is clicked", () => {
        render(<HomeRacksView numberRacks={0} />);
        fireEvent.click(screen.getByTestId("racks-false"));
        expect(screen.getByTestId("add-rack-modal")).toBeInTheDocument();
    });

    it("shows AddRackModal when RacksTrue is clicked", () => {
        render(<HomeRacksView numberRacks={1} />);
        fireEvent.click(screen.getByTestId("racks-true"));
        expect(screen.getByTestId("add-rack-modal")).toBeInTheDocument();
    });

    it("hides AddRackModal when it is clicked", () => {
        render(<HomeRacksView numberRacks={0} />);
        fireEvent.click(screen.getByTestId("racks-false"));
        expect(screen.getByTestId("add-rack-modal")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("add-rack-modal"));
        expect(screen.queryByTestId("add-rack-modal")).not.toBeInTheDocument();
    });

    it("applies correct min-height class based on numberRacks", () => {
        const { rerender } = render(<HomeRacksView numberRacks={0} />);
        expect(screen.getByTestId("racks-false").parentElement).toHaveClass(
            "min-h-[calc(100vh-118px)]"
        );

        rerender(<HomeRacksView numberRacks={1} />);
        expect(screen.getByTestId("racks-true").parentElement).toHaveClass(
            "min-h-[calc(100vh-234px)]"
        );
    });
});
