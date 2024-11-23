import { expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { AuthUserProvider } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import ButtonRackSelected from "../ui/components/layouts/bandeauRack/ButtonRackSelected";
import { rackTest } from "./types";
import "@testing-library/jest-dom";

describe("ButtonRackSelected", () => {
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
                        <ButtonRackSelected
                            rack={rackTest}
                            key={rackTest.idrack}
                        />
                    </BrowserRouter>
                </AuthUserProvider>
            );
        });
    });

    it("Rack name should be Test A", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(`${rackTest.rackName}`);
    });
});
