import React from "react";
import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDataView from "../ui/pages/user-infos/UserDataView";
import { fakeBottles } from "./types";

describe("Tests UserDataView avec 0 et 2 bouteilles", () => {
    test("Affichage 0 bouteille", () => {
        render(<UserDataView fullBottles={[]} />);
        const nbrBottles = screen.getByTestId("nbr-bottles");
        expect(nbrBottles).toHaveTextContent("0");
    });

    test("Affichage 2 bouteilles", () => {
        render(<UserDataView fullBottles={fakeBottles} />);
        const nbrBottles = screen.getByTestId("nbr-bottles");
        expect(nbrBottles).toHaveTextContent("2");
        screen.debug();
    });
});
