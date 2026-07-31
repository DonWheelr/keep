import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Callout } from "./callout";

describe("Callout — supported variants", () => {
  it("renders the reasonable-inference variant with its label and content", () => {
    render(
      <Callout variant="reasonable-inference">
        This is designed to scale under load.
      </Callout>
    );

    expect(screen.getByText("Reasonable Inference")).toBeInTheDocument();
    expect(
      screen.getByText("This is designed to scale under load.")
    ).toBeInTheDocument();
  });

  it("renders the unknown variant with its label and content", () => {
    render(
      <Callout variant="unknown">
        Whether this is detected has not been determined.
      </Callout>
    );

    expect(screen.getByText("Unknown")).toBeInTheDocument();
    expect(
      screen.getByText("Whether this is detected has not been determined.")
    ).toBeInTheDocument();
  });

  it("distinguishes variants by border style, not color alone", () => {
    const { container: inferenceContainer } = render(
      <Callout variant="reasonable-inference">Claim.</Callout>
    );
    const { container: unknownContainer } = render(
      <Callout variant="unknown">Claim.</Callout>
    );

    expect(inferenceContainer.querySelector('[role="note"]')).toHaveClass(
      "border-solid"
    );
    expect(unknownContainer.querySelector('[role="note"]')).toHaveClass(
      "border-dashed"
    );
  });
});

describe("Callout — accessibility", () => {
  it("uses the ARIA note role on a block-level container", () => {
    render(<Callout variant="reasonable-inference">Claim.</Callout>);

    const note = screen.getByRole("note");
    expect(note.tagName).toBe("DIV");
  });

  it("conveys its variant through real visible text, not color or an icon alone", () => {
    const { container } = render(
      <Callout variant="unknown">Claim.</Callout>
    );

    expect(container.querySelector("svg")).toBeNull();
    expect(screen.getByRole("note")).toHaveTextContent("Unknown");
  });
});

describe("Callout — distinct from Citation and CapabilityStatus", () => {
  it("renders as a block container, not an inline badge or inline text span", () => {
    render(<Callout variant="reasonable-inference">Claim.</Callout>);

    const note = screen.getByRole("note");
    // Citation and CapabilityStatus are both inline (span); Callout must not be.
    expect(note.tagName).not.toBe("SPAN");
    expect(note.className).not.toContain("inline-flex");
  });
});
