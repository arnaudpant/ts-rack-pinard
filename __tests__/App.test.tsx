import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from '../src/App'
import React from "react";

test('test de fonctionnement', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
})