import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import AddRackPage from "../ui/pages/home-racks-sommelier/AddRackPage";
import { useAuth } from "../context/AuthUserContext";
import { authUserfake } from "./types";
import { FirestoreUpdateDocument } from "../api/Firestore";
import { toast } from "react-toastify";

// Mock du hook useAuth
vi.mock("../context/AuthUserContext", () => ({
    useAuth: vi.fn(),
}));

vi.mock("../api/Firestore", () => ({
    FirestoreUpdateDocument: vi.fn(),
}));

vi.mock("react-toastify", () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
    },
}));

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    };
});

describe("AddRackPage", () => {
    it("rend le formulaire d'ajout de rack correctement", () => {
        (useAuth as any).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        });
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddRackPage />
            </BrowserRouter>
        );

        expect(screen.getByText("Ajouter un rack")).toBeInTheDocument();
        expect(screen.getByLabelText("Entrez un nom")).toBeInTheDocument();
    });

    it("affiche Le nom du rack est requis quand input vide", async () => {
        (useAuth as any).mockReturnValue({
            authUser: authUserfake,
            authUserIsLoading: false,
        });
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddRackPage />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole("button", { name: "AJOUTER" }));

        await waitFor(() => {
            expect(
                screen.getByText("Le nom du rack est requis")
            ).toBeInTheDocument();
        });
    });

    it("ajoute un nouveau rack avec succès", async () => {
        vi.mocked(FirestoreUpdateDocument).mockResolvedValue({
            data: true,
            error: undefined,
        });

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddRackPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText(/Entrez un nom/i), {
            target: { value: "Nouveau Rack test" },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de colonnes/i), {
            target: { value: 5 },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de rangées/i), {
            target: { value: 3 },
        });
        fireEvent.click(screen.getByRole("button", { name: "AJOUTER" }));

        await waitFor(() => {
            expect(FirestoreUpdateDocument).toHaveBeenCalled();
        });
    });

    it("gère les erreurs lors de l'ajout d'un rack", async () => {
        vi.mocked(FirestoreUpdateDocument).mockResolvedValue({
            error: { code: "erreur", message: "Erreur d'ajout" },
        });

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddRackPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText("Entrez un nom"), {
            target: { value: "Nouveau Rack" },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de colonnes/i), {
            target: { value: 5 },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de rangées/i), {
            target: { value: 3 },
        });

        fireEvent.click(screen.getByRole("button", { name: "AJOUTER" }));

        await waitFor(() => {
            expect(FirestoreUpdateDocument).toHaveBeenCalled();
            expect(toast.error).toHaveBeenCalledWith("Erreur d'ajout");
        });
    });

    it("limite le nombre de colonnes à 10", async () => {
        vi.mocked(FirestoreUpdateDocument).mockResolvedValue({
            data: true,
            error: undefined,
        });

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddRackPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText(/Entrez un nom/i), {
            target: { value: "Nouveau Rack test" },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de colonnes/i), {
            target: { value: 11 },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de rangées/i), {
            target: { value: 3 },
        });
        fireEvent.click(screen.getByRole("button", { name: "AJOUTER" }));

        await waitFor(() => {
            expect(screen.getByText("10 colonnes maximum")).toBeInTheDocument();
        });
    });

    it(" nombre de colonnes superieur a 0", async () => {
        vi.mocked(FirestoreUpdateDocument).mockResolvedValue({
            data: true,
            error: undefined,
        });

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddRackPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText(/Entrez un nom/i), {
            target: { value: "Nouveau Rack test" },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de colonnes/i), {
            target: { value: 0 },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de rangées/i), {
            target: { value: 3 },
        });
        fireEvent.click(screen.getByRole("button", { name: "AJOUTER" }));

        await waitFor(() => {
            expect(screen.getByText("1 colonne minimum")).toBeInTheDocument();
        });
    });

    it(" nombre de rangee superieur a 1", async () => {
        vi.mocked(FirestoreUpdateDocument).mockResolvedValue({
            data: true,
            error: undefined,
        });

        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <AddRackPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText(/Entrez un nom/i), {
            target: { value: "Nouveau Rack test" },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de colonnes/i), {
            target: { value: 5 },
        });
        fireEvent.change(screen.getByPlaceholderText(/Nombre de rangées/i), {
            target: { value: 0 },
        });
        fireEvent.click(screen.getByRole("button", { name: "AJOUTER" }));

        await waitFor(() => {
            expect(screen.getByText("1 rangée minimum")).toBeInTheDocument();
        });
    });
});
