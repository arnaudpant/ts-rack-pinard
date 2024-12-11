import RacksFalse from "../ui/pages/home-racks-sommelier/RacksFalse";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("RackFalse", () => {
    it("Appelle HandleClick lorsque le bouton est clique", () => {
        const mockHandleClick = vi.fn();
        render(<RacksFalse handleClick={mockHandleClick} />);

        expect(
            screen.getByText(
                "Il semblerait que vous n'ayez pas encore de racks à pinard"
            )
        ).toBeInTheDocument();

        fireEvent.click(screen.getByText("AJOUTER UN RACK"));
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
        screen.debug();
    });
});
