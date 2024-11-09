import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AuthUserProvider } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import HeaderView from "../ui/components/layouts/header/HeaderView";

// Mock de useNavigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = (await vi.importActual("react-router-dom")) as any;
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe("HeaderView", () => {
    it("onBoardingisCompleted is true", async () => {

        await waitFor(() => {
            render(
                <AuthUserProvider>
                    <BrowserRouter>
                        <HeaderView
                            onBoardingisCompleted={true}
                            scrAvatar={""}
                        />
                    </BrowserRouter>
                </AuthUserProvider>
            );
        });
        const divHidden = screen.getByTestId("btn-back-home");
        expect(divHidden).toBeInTheDocument();
        expect(divHidden).not.toHaveClass("hidden");
    });

    it("onBoardingisCompleted is false", async () => {

        await waitFor(() => {
            render(
                <AuthUserProvider>
                    <BrowserRouter>
                        <HeaderView
                            onBoardingisCompleted={false}
                            scrAvatar={""}
                        />
                    </BrowserRouter>
                </AuthUserProvider>
            );
        });
        const divHidden = screen.getByTestId("btn-back-home");
        expect(divHidden).toHaveClass("hidden");
    });

    it("should navigate to /home-racks when btn-back-home is clicked", async () => {
        await waitFor(() => {
            render(
                <AuthUserProvider>
                    <BrowserRouter>
                        <HeaderView
                            onBoardingisCompleted={true}
                            scrAvatar={""}
                        />
                    </BrowserRouter>
                </AuthUserProvider>
            );
        });

        const backHomeButton = screen.getByTestId("btn-back-home");
        expect(backHomeButton).toBeInTheDocument();

        fireEvent.click(backHomeButton);

        expect(mockNavigate).toHaveBeenCalledWith("/home-racks");
    });
});
