import React from "react";
import { expect, test, vi } from "vitest";
import {
    fireEvent,
    render,
    screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import RacksTrue from "../src/ui/pages/home-racks-sommelier/RacksTrue";

test("Clic sur ajouter un rack", () => {
    const callback = vi.fn();
    render(<RacksTrue handleClick={callback} />);
    const addRack = screen.getByText(/AJOUTER UN RACK/i);
    expect(addRack).toBeInTheDocument();
    fireEvent.click(addRack);
    expect(callback).toHaveBeenCalledOnce();
});
