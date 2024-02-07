import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/ui/pages/Home";
import useAuth from "../src/hooks/useFirebaseAuth";
import { AuthUserProvider } from "../src/context/AuthUserContext";
import { BrowserRouter } from "react-router-dom";


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
const fakeUserNull = null

test("Initialisation de Home avec le context ", async () => {
    const { result } = renderHook(() => useAuth(), {
        wrapper: wrapperAuthUserContext, 
    });
    expect(result.current.authUser).toBeNull();
    act(()=> {
        result.current.authUser = fakeUser
        render(<BrowserRouter><Home /></BrowserRouter>);
    })
    expect(result.current.authUser).not.toBeNull()
    screen.debug()
});
