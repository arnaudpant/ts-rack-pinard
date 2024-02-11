import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonRackSelected from '../src/ui/components/layouts/bandeauRack/ButtonRackSelected'
import { BrowserRouter } from "react-router-dom";

const rackTest = {
    idrack: "testA",
    rackName: "Test A",
    columns: 3,
    rows: 4,
    bottles: [],
};

const stateA = "testA"
const stateB = "testB"

test('Test couleur button rackId different', ()=>{
    render(<BrowserRouter><ButtonRackSelected rack={rackTest} state={stateB} /></BrowserRouter>);
    const buttonRack = screen.getByRole('button')
    expect(buttonRack).toBeInTheDocument()
    expect(buttonRack).toHaveClass("text-vin600");
})

test("Test couleur button rackId egal", () => {
    render(
        <BrowserRouter>
            <ButtonRackSelected rack={rackTest} state={stateA} />
        </BrowserRouter>
    );
    const buttonRack = screen.getByRole("button");
    expect(buttonRack).toBeInTheDocument();
    expect(buttonRack).toHaveClass("text-fond");
});