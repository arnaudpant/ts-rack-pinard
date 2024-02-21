import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonRackSelected from "../src/ui/components/layouts/bandeauRack/ButtonRackSelected";
import { BrowserRouter } from "react-router-dom";
import { rackTest } from "./types";

test("Test couleur button rackId different", () => {
    render(
        <BrowserRouter>
            <ButtonRackSelected rack={rackTest} />
        </BrowserRouter>
    );
    const buttonRack = screen.getByRole("button");
    const linkA = screen.getByRole("link", { name: "Test A" });
    expect(buttonRack).toBeInTheDocument();
    expect(linkA).toBeInTheDocument();
    expect(buttonRack).not.toHaveClass("text-vin600");
    expect(linkA).toHaveAttribute("href", "/rack/testA");
});
