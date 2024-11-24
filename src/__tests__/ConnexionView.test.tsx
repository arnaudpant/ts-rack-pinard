import { render, screen } from "@testing-library/react";
import ConnexionView from "../ui/pages/connexion/ConnexionView";
import { BrowserRouter } from "react-router-dom";

describe("ConnexionView", () => {
    it("Vérifie le lien Mot de passe perdu ?", () => {
        render(
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <ConnexionView />
            </BrowserRouter>
        );
        const forgotPasswordLink = screen.getByText("Mot de passe perdu ?");
        expect(forgotPasswordLink).toBeInTheDocument();
        expect(forgotPasswordLink).toHaveAttribute("href", "/forget-password");
        screen.debug()
    });
});
