import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PrivacyPage from "./page";

describe("PrivacyPage", () => {
  it("renders the Privacy Policy heading", () => {
    render(<PrivacyPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Privacy Policy" })
    ).toBeInTheDocument();
  });

  it("links to Terms of Use", () => {
    render(<PrivacyPage />);

    const link = screen.getByRole("link", { name: "Terms of Use" });
    expect(link).toHaveAttribute("href", "/terms");
  });
});
