import React from "react";
import { expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormConnexion from "../ui/pages/connexion/ConnexionView";
import { BrowserRouter } from "react-router-dom";
import { FormsType } from "../types/Forms";

const formType: FormsType = {
    errors: false,
    control: null,
    register: null,
    handleSubmit: () => {},
    onSubmit: () => {},
    isLoading: false,
};

test("Test fomulaire connexion", async () => {
    const onSubmit = vi.fn();
    render(
        <BrowserRouter>
            <FormConnexion />
        </BrowserRouter>
    );
    const emailUser = "usertest@test.fr";
    const passwordUser = "mypassword";

    const emailWrite = screen.getByLabelText(/E-mail/i);
    const passwordWrite = screen.getByLabelText(/Mot de passe/i);
    const btnSubmit = screen.getByRole("button", { name: /Se connecter/i });

    expect(emailWrite).toBeInTheDocument();
    expect(passwordWrite).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();

    fireEvent.change(emailWrite, { target: { value: emailUser } });
    fireEvent.change(passwordWrite, { target: { value: passwordUser } });
});
