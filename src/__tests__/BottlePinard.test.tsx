import BottlePinard from "../ui/pages/page-rack/rack/bottles/BottlePinard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { fakeBottle, fakeCaseEmpty } from "./types";



describe("BottlePinard", () => {
    it("Show bottle not empty", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <BottlePinard bottle={fakeBottle} nbrColums={1} />
            </BrowserRouter>
        );

        expect(
            screen.getByTestId(/appellation-bouteille/i)
        ).toBeInTheDocument();
        expect(screen.getByTestId(/circle-not-empty/i)).toBeInTheDocument();
        expect(screen.queryByTestId(/circle-empty/i)).not.toBeInTheDocument();
    });

    it("Show bottle empty", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <BottlePinard bottle={fakeCaseEmpty} nbrColums={1} />
            </BrowserRouter>
        );

        expect(screen.getByTestId(/circle-empty/i)).toBeInTheDocument();
        expect(
            screen.queryByTestId(/circle-not-empty/i)
        ).not.toBeInTheDocument();
    });

    it("Show bottle colums < 6", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <BottlePinard bottle={fakeCaseEmpty} nbrColums={5} />
            </BrowserRouter>
        );

        const textClassP = screen.getByTestId(/appellation-bouteille/i);

        expect(textClassP).toBeInTheDocument();
        expect(textClassP).not.toHaveClass("hidden");
    });

    it("Show bottle colums = 6", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <BottlePinard bottle={fakeCaseEmpty} nbrColums={6} />
            </BrowserRouter>
        );

        const textClassP = screen.getByTestId(/appellation-bouteille/i);

        expect(textClassP).toBeInTheDocument();
        expect(textClassP).toHaveClass("hidden");
    });

    it("Show bottle vin blanc", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <BottlePinard bottle={fakeBottle} nbrColums={1} />
            </BrowserRouter>
        );

        expect(screen.getByTestId(/circle-not-empty/i)).toHaveClass("#E1CE9A");
    });
});
