import { render, screen, waitFor } from "@testing-library/react";
import { AuthUserProvider } from "../context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";
import ButtonRackSelected from "../ui/components/layouts/bandeauRack/ButtonRackSelected";
import { rackTest } from "./types";

describe("ButtonRackSelected", () => {
    beforeEach(async () => {
        await waitFor(() => {
            render(
                <AuthUserProvider>
                    <BrowserRouter>
                        <ButtonRackSelected rack={rackTest} key={rackTest.idrack} />
                    </BrowserRouter>
                </AuthUserProvider>
            );
        });
    });

    it("Rack name should be Test A", () => {
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(`${rackTest.rackName}`);
    });

});
