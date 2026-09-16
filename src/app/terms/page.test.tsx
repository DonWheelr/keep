import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TermsPage from "./page";

describe("TermsPage", () => {
  it("renders the Terms of Use heading", () => {
    render(<TermsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Terms of Use" })
    ).toBeInTheDocument();
  });

  it("links to the Privacy Policy", () => {
    render(<TermsPage />);

    const links = screen.getAllByRole("link", { name: "Privacy Policy" });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "/privacy");
    }
  });
});
