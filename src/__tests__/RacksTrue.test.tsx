import RacksTrue from "../ui/pages/home-racks-sommelier/RacksTrue";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("RackTrue", () => {
    it("Appelle HandleClick lorsque le bouton est clique", () => {
        const mockHandleClick = vi.fn();
        render(<RacksTrue handleClick={mockHandleClick} />);

        fireEvent.click(screen.getByText("AJOUTER UN RACK"));
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });
});
