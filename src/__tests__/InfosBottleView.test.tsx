import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { fakeBottle, fakeBottleTwo } from "./types";
import InfosBottleView from "../ui/pages/page-bootle-info/InfosBottleView";

describe("InfosBottleView", () => {
    const mockHandlers = {
        handleAddRemoveFavoris: vi.fn(),
        handleDeleteBottle: vi.fn(),
        handleConsommeBottle: vi.fn(),
    };

    it("rend correctement les informations de la bouteille", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <InfosBottleView
                    bottleInfos={fakeBottle}
                    bottleInFavoris={false}
                    {...mockHandlers}
                />
            </BrowserRouter>
        );

        expect(screen.getByText("Château Margaux")).toBeInTheDocument();
        expect(screen.getByText("2015")).toBeInTheDocument();
        expect(screen.getByText("Margaux AOC")).toBeInTheDocument();
        expect(screen.getByText("Château Margaux")).toBeInTheDocument();
        expect(screen.getByText("Cabernet Sauvignon")).toBeInTheDocument();
        expect(screen.getByText("Prix: 600 €")).toBeInTheDocument();
        expect(screen.getByText(/FRANCE/i)).toBeInTheDocument();
        expect(screen.getByText("blanc")).toBeInTheDocument();
        expect(screen.getByText("plein")).toBeInTheDocument();
        expect(screen.getByText("A boire")).toBeInTheDocument();
        expect(screen.getByText("agneau")).toBeInTheDocument();
    });

    it("Le bouton Supprimer est disable qund le rackid = 314", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <InfosBottleView
                    bottleInfos={fakeBottle}
                    bottleInFavoris={false}
                    {...mockHandlers}
                />
            </BrowserRouter>
        );

        const favorisButton = screen.getByTestId("btn-delete");
        expect(favorisButton).toBeInTheDocument();
        expect(favorisButton).toBeDisabled();
    });

    it("appelle handleAddRemoveFavoris quand le bouton favoris est cliqué", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <InfosBottleView
                    bottleInfos={fakeBottleTwo}
                    bottleInFavoris={true}
                    {...mockHandlers}
                />
            </BrowserRouter>
        );

        const favorisButton = screen.getByTestId("btn-delete");
        expect(favorisButton).toBeInTheDocument();
        expect(favorisButton).not.toBeDisabled();
        fireEvent.click(favorisButton);
        expect(mockHandlers.handleDeleteBottle).toHaveBeenCalledOnce();
    });

    it("appelle handleConsommeBottle quand le bouton Boire est cliqué", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <InfosBottleView
                    bottleInfos={fakeBottleTwo}
                    bottleInFavoris={true}
                    {...mockHandlers}
                />
            </BrowserRouter>
        );

        const boireButton = screen.getByRole("button", { name: /boire/i });
        fireEvent.click(boireButton);
        expect(mockHandlers.handleConsommeBottle).toHaveBeenCalled();
    });

    it("appelle handleDeleteBottle quand le bouton Supprimer est cliqué", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <InfosBottleView
                    bottleInfos={fakeBottle}
                    bottleInFavoris={false}
                    {...mockHandlers}
                />
            </BrowserRouter>
        );

        const supprimerButton = screen.getByRole("button", {
            name: /supprimer/i,
        });
        fireEvent.click(supprimerButton);
        expect(mockHandlers.handleDeleteBottle).toHaveBeenCalled();
    });


    it("affiche le bon lien de retour pour un rack normal", () => {
        render(
            <BrowserRouter future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}>
                <InfosBottleView
                    bottleInfos={fakeBottleTwo}
                    bottleInFavoris={false}
                    {...mockHandlers}
                />
            </BrowserRouter>
        );

        const retourLink = screen.getByRole("link", { name: /retour/i });
        expect(retourLink).toHaveAttribute("href", "/rack/125");
    });

    it("affiche le bon lien de retour pour le rack de démonstration", () => {
        render(
            <BrowserRouter>
                <InfosBottleView
                    bottleInfos={fakeBottle}
                    bottleInFavoris={false}
                    {...mockHandlers}
                />
            </BrowserRouter>
        );

        const retourLink = screen.getByRole("link", { name: /retour/i });
        expect(retourLink).toHaveAttribute("href", "/demonstration");
    });
});
