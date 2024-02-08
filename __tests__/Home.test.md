import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/ui/pages/home/Home";
import useAuth from "../src/hooks/useFirebaseAuth";
import { AuthUserProvider } from "../src/context/AuthUserContext";

vi.mock("react-router-dom");
vi.mock("../../../context/AuthUserContext");


const wrapperAuthUserContext = ({ children }) => {
    return (
        <AuthUserProvider>
            {children}
        </AuthUserProvider>
    );
};


const fakeUser = {
    uid: "azerty",
    email: "fake-user@test.fr",
    displayName: "fakeuser",
    emailVerified: true,
    photoURL: null,
};


test("authUser null ", async () => {
    const { result } = renderHook(() => useAuth(), {
        wrapper: wrapperAuthUserContext, 
    });
     act(() => {
         render(<Home />);
     });
    expect(result.current.authUser).toBeNull();
});

test("authUser not null ", async () => {
    const { result } = renderHook(() => useAuth(), {
        wrapper: wrapperAuthUserContext,
    });
    act(() => {
        result.current.authUser = fakeUser;
    });
    render(<Home />);
    expect(result.current.authUser).not.toBeNull();

    screen.debug()
});

