import { expect, test, vi, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import HeaderView from "../src/ui/components/layouts/header/HeaderView";

vi.mock("react-router-dom");
vi.mock("../../../../components/ui/dropdown-menu");

describe("Header", () => {
    test("Affichage du titre + pas de bouton retour Accueil + pas d avatar", () => {
        render(
            <HeaderView
                handleHome={() => {}}
                onBoardingisCompleted={false}
                scrAvatar={""}
            />
        );
        expect(
            screen.getByRole("heading", { name: /RACKS A PINARD 🍾/i })
        ).toBeInTheDocument();
        expect(screen.getByTestId(/btn-back-home/i)).toHaveClass("hidden");
        expect(screen.getByTestId(/avatar/i)).toHaveClass("hidden");
    });

    test("bouton retour Accueil + avatar affiché", () => {
        render(
            <HeaderView
                handleHome={() => {}}
                onBoardingisCompleted={true}
                scrAvatar={"https://www.fake-avatar.jpg"}
            />
        );
        expect(screen.queryByTestId(/btn-back-home/i)).not.toHaveClass(
            "hidden"
        );
        expect(screen.queryByTestId(/avatar/i)).not.toHaveClass("hidden");
    });

    test("clic sur bouton retour Accueil", () => {
        const callback = vi.fn();
        render(
            <HeaderView
                handleHome={callback}
                onBoardingisCompleted={true}
                scrAvatar={"https://www.fake-avatar.jpg"}
            />
        );
        const btnHome = screen.queryByTestId(/btn-back-home/i);
        if (btnHome) {
            fireEvent.click(btnHome);
        }
        expect(callback).toHaveBeenCalledOnce();
    });
});
