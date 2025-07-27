import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

//Test suite
describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});

describe("Hero Component", () => {
  test("render sign up button", () => {
    render(<Hero />);
    const signUpButton = screen.getByRole("button", { name: /Signup Now/i });
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveClass("btn-primary");
  });
});
