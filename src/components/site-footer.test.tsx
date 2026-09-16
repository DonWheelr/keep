import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SiteFooter } from "./site-footer";

describe("SiteFooter — legal links", () => {
  it("renders a real Privacy Policy link to /privacy", () => {
    render(<SiteFooter />);

    const link = screen.getByRole("link", { name: "Privacy Policy" });
    expect(link).toHaveAttribute("href", "/privacy");
  });

  it("renders a real Terms of Use link to /terms", () => {
    render(<SiteFooter />);

    const link = screen.getByRole("link", { name: "Terms of Use" });
    expect(link).toHaveAttribute("href", "/terms");
  });
});
