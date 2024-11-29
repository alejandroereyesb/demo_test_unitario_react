import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();
  // });

  it("renders Vite + React", () => {
    const { container } = render(<App title="React" />);
    const h1 = container.querySelector("#title");
    expect(h1.textContent).contains("Vite + React");
  });

  it('Learn React link has href', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toHaveAttribute('href', 'https://react.dev');
  });

  it("Aprendre React is inside a link", () => {
    const { container } = render(<App title="React" />);
    const p = container.querySelector("a > p");
    expect(p.textContent).contains("aprende react!");
  });

  it("Aprendre React link has href", () => {
    const { container } = render(<App title="React" />);
    const a = container.querySelectorAll("a")[2];
    expect(a).toHaveAttribute('href', 'https://react.dev');
  });

});

describe('App wit buttons', () => {
    it('App works', () => {
        const { container } = render(<App />)
        // console.log(container)
        const buttons = container.querySelectorAll('section > button')
      
        expect(buttons[0].textContent).toBe('+1')
        expect(buttons[1].textContent).toBe('+10')
        expect(buttons[2].textContent).toBe('+100')
        expect(buttons[3].textContent).toBe('+1000')
      
        const result = container.querySelector('span')
        expect(result.textContent).toBe('0')
        fireEvent.click(buttons[0])
        expect(result.textContent).toBe('1')
        fireEvent.click(buttons[1])
        expect(result.textContent).toBe('11')
        fireEvent.click(buttons[2])
        expect(result.textContent).toBe('111')
        fireEvent.click(buttons[3])
        expect(result.textContent).toBe('1111')
        fireEvent.click(buttons[2])
        expect(result.textContent).toBe('1211')
        fireEvent.click(buttons[1])
        expect(result.textContent).toBe('1221')
        fireEvent.click(buttons[0])
        expect(result.textContent).toBe('1222')
    })
});
