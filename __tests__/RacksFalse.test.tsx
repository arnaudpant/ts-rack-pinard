import React from "react";
import { expect, test, vi } from "vitest";
import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RacksFalse from "../src/ui/pages/home-racks-sommelier/RacksFalse";


test('Clic sur ajouter un rack', () => {
    const callback = vi.fn()
    render(<RacksFalse handleClick={callback} />);
    const addRack = screen.getByText(/AJOUTER UN RACK/i);
    expect(addRack).toBeInTheDocument()
    fireEvent.click(addRack);
    expect(callback).toHaveBeenCalledOnce()
})