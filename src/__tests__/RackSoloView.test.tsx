import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Bottle } from "../types/RacksTypes";
import RackSoloView from "../ui/pages/page-rack/rack/RackSoloView";
import { rackTest } from "./types";

// Mock des hooks et composants
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );
    return {
        ...actual,
        useNavigate: vi.fn(),
    };
});

vi.mock("./bottles/BottlePinard", () => ({
    default: ({ bottle }: { bottle: Bottle }) => (
        <div data-testid={`bottle-${bottle.id}`}>{bottle.nom}</div>
    ),
}));

vi.mock("./RackSoloInfos", () => ({
    default: () => (
        <div>Infos</div>
    ),
}));

describe("RackSoloView", () => {
    const mockNavigate = vi.fn();

    beforeEach(() => {
        vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    });

    it("renders the rack with correct grid class", async () => {
        render(
            <BrowserRouter>
                <RackSoloView rack={rackTest} />
            </BrowserRouter>
        );

        await waitFor(() => {
            const gridElement = screen.getByTestId("bottlesArr");
            expect(gridElement).toHaveClass("grid-cols-2");
        });
    });

    it("renders bottle 1 correctly", () => {
        render(
            <BrowserRouter>
                <RackSoloView rack={rackTest} />
            </BrowserRouter>
        );

        expect(screen.getByText(/Margaux AOC/i)).toBeInTheDocument();
    });

    it("render 2 bottles correctly", () => {
        render(
            <BrowserRouter>
                <RackSoloView rack={rackTest} />
            </BrowserRouter>
        );
        expect(screen.getAllByTestId(/appellation-bouteille/i)).toHaveLength(2);
    });
});
