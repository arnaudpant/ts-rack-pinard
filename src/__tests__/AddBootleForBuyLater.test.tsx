import AddBootleForBuyLater from "../ui/pages/buy-later/AddBootleForBuyLater";
import { BrowserRouter } from "react-router-dom";
import {  render } from "@testing-library/react";

describe("AddBootleForBuyLater", () => {
    it("appelle window.scrollTo lors du montage du composant", () => {
        const scrollToMock = vi.fn();
        Object.defineProperty(window, "scrollTo", { value: scrollToMock });

        render(
            <BrowserRouter>
                <AddBootleForBuyLater />
            </BrowserRouter>
        );

        expect(scrollToMock).toHaveBeenCalledWith({ top: 0 });
    });
});
