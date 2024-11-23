import { render, screen, waitFor } from "@testing-library/react";
import { AuthUserProvider } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import Footer from "../ui/components/layouts/footer/Footer";

describe("Footer", () => {
    beforeEach(async () => {
        await waitFor(() => {
            render(
                <AuthUserProvider>
                    <BrowserRouter
                        future={{
                            v7_startTransition: true,
                            v7_relativeSplatPath: true,
                        }}
                    >
                        <Footer />
                    </BrowserRouter>
                </AuthUserProvider>
            );
        });
    });

    it("should render the year", async () => {
        const year = String(new Date().getFullYear());

        await waitFor(() => {
            const yearNow = screen.getByText(/Tous droits réservés/i);
            expect(yearNow).toBeInTheDocument();
            expect(yearNow).toHaveTextContent(`${year}`);
        });
    });
});