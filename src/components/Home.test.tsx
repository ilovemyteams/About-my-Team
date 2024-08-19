import { render } from "@testing-library/react";
import React from "react";

import Home from "./Home";

describe("HomePart Component", () => {
    it("renders without crashing", () => {
        expect(() => render(<Home />)).not.toThrow();
    });

    it('renders the "TEST JEST" heading', () => {
        const { getByText } = render(<Home />);
        const headingElement = getByText(/TEST JEST/i);
        expect(headingElement).toBeInTheDocument();
    });

    // Додайте інші тести, якщо потрібно, для перевірки конкретної функціональності компонента
});
