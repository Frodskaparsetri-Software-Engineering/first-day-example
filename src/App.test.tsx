import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';

describe("App", () => {

  it("should render a greeting text", () => {
    // Arrange
    // Act
    const sut = render(<App/>);
    const result = sut.getByText("Hello World");

    // Assert
    expect(result.hidden).toBeFalsy();
  });

  describe("when pushing the toggle button", () => {
    it("should hide the greeting text", async () => {
      // Arrange
      const dom = render(<App/>);
      const sut = dom.getByRole("button");

      // Act
      fireEvent.click(sut);
      const greeting = await dom.getByText("Hello World");

      // Assert
      expect(greeting.hidden).toBeTruthy();
    });

    it("should reveal the greeting text when toggled twice", async () => {
      // Arrange
      const dom = render(<App/>);
      const sut = dom.getByRole("button");

      // Act
      fireEvent.click(sut); // hide
      fireEvent.click(sut); // re-reveal

      const greeting = await dom.getByText("Hello World");

      // Assert
      expect(greeting.hidden).toBeFalsy();
    });
  });
});

