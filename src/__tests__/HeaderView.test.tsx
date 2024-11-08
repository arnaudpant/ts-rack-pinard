import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderView from "../ui/components/layouts/header/HeaderView";
import { BrowserRouter, useNavigate } from "react-router-dom";
import React from "react";

// Mock des dépendances
vi.mock("react-router-dom", async () => {
    const actualModule = await vi.importActual("react-router-dom");
    return {
        ...(actualModule as object),
        useNavigate: () => vi.fn(),
    };
});

vi.mock("../../../design-syst/avatar/Avatar", () => ({
    default: ({ src, width, height }) => (
        <img
            src={src}
            width={width}
            height={height}
            alt="Avatar"
            data-testid="avatar-img"
        />
    ),
}));

vi.mock("./HeaderMenu", () => ({
    default: () => <div data-testid="header-menu">Menu</div>,
}));

const renderHeaderView = (props: {
    onBoardingisCompleted: boolean;
    scrAvatar: string;
}) => {
    return render(
        <BrowserRouter>
            <HeaderView {...props} />
        </BrowserRouter>
    );
};

describe("HeaderView", () => {
    it("renders the title correctly", () => {
        renderHeaderView({ onBoardingisCompleted: true, scrAvatar: "" });
        expect(screen.getByText("RACKS A VIN 🍾")).toBeInTheDocument();
    });

    it("hides home button and avatar when onBoarding is not completed", () => {
        renderHeaderView({ onBoardingisCompleted: false, scrAvatar: "" });
        expect(screen.queryByTestId("btn-back-home")).not.toBeVisible();
        expect(screen.queryByTestId("avatar")).not.toBeVisible();
    });

    it("shows home button and avatar when onBoarding is completed", () => {
        renderHeaderView({ onBoardingisCompleted: true, scrAvatar: "" });
        expect(screen.getByTestId("btn-back-home")).toBeVisible();
        expect(screen.getByTestId("avatar")).toBeVisible();
    });

    it("renders default avatar when scrAvatar is empty", () => {
        renderHeaderView({ onBoardingisCompleted: true, scrAvatar: "" });
        const avatarImg = screen.getByTestId("avatar-img");
        expect(avatarImg).toHaveAttribute("src", "/avatar-default.png");
    });

    it("renders custom avatar when scrAvatar is provided", () => {
        const customAvatarSrc = "https://example.com/custom-avatar.jpg";
        renderHeaderView({
            onBoardingisCompleted: true,
            scrAvatar: customAvatarSrc,
        });
        const avatarImg = screen.getByTestId("avatar-img");
        expect(avatarImg).toHaveAttribute("src", customAvatarSrc);
    });

    it("renders HeaderMenu component", () => {
        renderHeaderView({ onBoardingisCompleted: true, scrAvatar: "" });
        expect(screen.getByTestId("header-menu")).toBeInTheDocument();
    });

    it("calls navigate function when home button is clicked", () => {
        const navigateMock = vi.fn();
        vi.mocked(useNavigate).mockReturnValue(navigateMock);

        renderHeaderView({ onBoardingisCompleted: true, scrAvatar: "" });
        fireEvent.click(screen.getByTestId("btn-back-home"));
        expect(navigateMock).toHaveBeenCalledWith("/home-racks");
    });
});
