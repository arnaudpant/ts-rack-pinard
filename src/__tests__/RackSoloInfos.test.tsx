import RackSoloInfos from "../ui/pages/page-rack/rack/RackSoloInfos";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { fakeBottles } from "./types";

describe("RackSoloInfos", () => {
    it("affiche le bon nombre total de bouteilles", () => {
        render(<RackSoloInfos bottles={fakeBottles} />);
        const totalRow = screen.getByText(
            "Nombre de bouteilles"
        ).nextElementSibling;
        expect(totalRow).toHaveTextContent("2");
    });

    it("affiche le bon nombre de bouteilles de vin", () => {
        render(<RackSoloInfos bottles={fakeBottles} />);
        const totalRow =
            screen.getByText("Bouteilles de vin").nextElementSibling;
        expect(totalRow).toHaveTextContent("2");
    });

    it("affiche le bon nombre de bouteilles de vin rouge", () => {
        render(<RackSoloInfos bottles={fakeBottles} />);
        const totalRow = screen.getByText("Rouge").nextElementSibling;
        expect(totalRow).toHaveTextContent("1");
    });

    it("affiche le bon nombre de bouteilles de vin blanc", () => {
        render(<RackSoloInfos bottles={fakeBottles} />);
        const totalRow = screen.getByText("Rouge").nextElementSibling;
        expect(totalRow).toHaveTextContent("1");
    });

    it("affiche le bon nombre de bouteilles de champagne", () => {
        render(<RackSoloInfos bottles={fakeBottles} />);
        const totalRow = screen.getByText(
            "Bouteilles de champagne"
        ).nextElementSibling;
        expect(totalRow).toHaveTextContent("0");
    });

    it("affiche le bon nombre de bouteilles de biere", () => {
        render(<RackSoloInfos bottles={fakeBottles} />);
        const totalRow = screen.getByText("Bière").nextElementSibling;
        expect(totalRow).toHaveTextContent("0");
    });

    it("affiche le bon nombre de bouteilles de cidre", () => {
        render(<RackSoloInfos bottles={fakeBottles} />);
        const totalRow = screen.getByText("Cidre").nextElementSibling;
        expect(totalRow).toHaveTextContent("0");
    });
});
