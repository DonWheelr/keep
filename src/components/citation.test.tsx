import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Citation } from "./citation";

describe("Citation — rendering per supported source type", () => {
  it("renders an internal-doc source as plain readable text, no link", () => {
    render(
      <Citation
        source={{ type: "internal-doc", label: "WEBSITE_ARCHITECTURE.md" }}
      />
    );

    expect(screen.getByText("WEBSITE_ARCHITECTURE.md")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders a repo-path source with both label and path, no link", () => {
    render(
      <Citation
        source={{
          type: "repo-path",
          label: "KEEP application severity system",
          path: "src/lib/severity.ts",
        }}
      />
    );

    expect(
      screen.getByText("KEEP application severity system")
    ).toBeInTheDocument();
    expect(screen.getByText("src/lib/severity.ts")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders an external source as a real accessible link", () => {
    render(
      <Citation
        source={{
          type: "external",
          label: "Example Standards Body",
          href: "https://example.org/standard",
        }}
      />
    );

    const link = screen.getByRole("link", { name: "Example Standards Body" });
    expect(link).toHaveAttribute("href", "https://example.org/standard");
  });
});

describe("Citation — accessibility", () => {
  it("gives the external link a discernible, non-generic accessible name", () => {
    render(
      <Citation
        source={{
          type: "external",
          label: "Example Standards Body",
          href: "https://example.org/standard",
        }}
      />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAccessibleName("Example Standards Body");
    expect(link.textContent?.toLowerCase()).not.toBe("click here");
  });

  it("does not convey the source label through color/link styling alone for non-external types", () => {
    render(
      <Citation source={{ type: "internal-doc", label: "Internal Note" }} />
    );

    // internal-doc/repo-path citations carry no interactive/link semantics —
    // the label is plain readable text, not an affordance implied by color.
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("uses a real <code> element for a repo path, not a styled span", () => {
    const { container } = render(
      <Citation
        source={{
          type: "repo-path",
          label: "Design tokens",
          path: "src/app/globals.css",
        }}
      />
    );

    const code = container.querySelector("code");
    expect(code).not.toBeNull();
    expect(code).toHaveTextContent("src/app/globals.css");
  });
});

describe("Citation — whitespace when inline prose continues after it", () => {
  it("keeps a real space before prose that immediately follows it, with no explicit separator in the JSX", () => {
    // Regression test. JSX strips the leading whitespace of every line of a
    // text node that follows an element — even a line that had a literal
    // space in the source — unless an explicit `{" "}` expression sits
    // between them. Relying on page authors to remember that separator
    // shipped this exact bug twice (footer copy, then five spots on the
    // Evaluate KEEP page). Citation now supplies its own trailing space so
    // the correct spacing holds regardless of how the surrounding JSX is
    // written. Deliberately no `{" "}` between the two elements below —
    // that's the point of the test.
    render(
      <p>
        Some claim ends here.
        <Citation source={{ type: "internal-doc", label: "Test Source" }} />
        Continuing sentence starts right after it.
      </p>
    );

    expect(document.body.textContent).toContain(
      "Test Source) Continuing sentence starts right after it."
    );
  });
});
