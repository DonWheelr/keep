import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CapabilityStatus } from "./capability-status";

describe("CapabilityStatus — four-state capability model", () => {
  it("renders 'Validated Capability' when no noun is given", () => {
    render(<CapabilityStatus status="validated" />);
    expect(screen.getByText("Validated Capability")).toBeInTheDocument();
  });

  it("renders 'Evaluation Capability' when no noun is given", () => {
    render(<CapabilityStatus status="evaluation" />);
    expect(screen.getByText("Evaluation Capability")).toBeInTheDocument();
  });

  it("renders 'Planned Capability' when no noun is given", () => {
    render(<CapabilityStatus status="planned" />);
    expect(screen.getByText("Planned Capability")).toBeInTheDocument();
  });

  it("renders bare 'Unknown' regardless of noun", () => {
    render(<CapabilityStatus status="unknown" />);
    expect(screen.getByText("Unknown")).toBeInTheDocument();
  });

  it("distinguishes validated and evaluation with different colors", () => {
    const { container: validatedContainer } = render(
      <CapabilityStatus status="validated" />
    );
    const { container: evaluationContainer } = render(
      <CapabilityStatus status="evaluation" />
    );

    const validatedSpan = validatedContainer.querySelector("span");
    const evaluationSpan = evaluationContainer.querySelector("span");

    expect(validatedSpan).toHaveClass("bg-status-validated-bg");
    expect(evaluationSpan).toHaveClass("bg-status-evaluation-bg");
    expect(validatedSpan?.className).not.toBe(evaluationSpan?.className);
  });
});

describe("CapabilityStatus — context-specific noun", () => {
  it("renders 'Validated Documentation' when noun is 'Documentation'", () => {
    render(<CapabilityStatus status="validated" noun="Documentation" />);
    expect(screen.getByText("Validated Documentation")).toBeInTheDocument();
  });

  it("renders 'Evaluation Documentation' when noun is 'Documentation'", () => {
    render(<CapabilityStatus status="evaluation" noun="Documentation" />);
    expect(screen.getByText("Evaluation Documentation")).toBeInTheDocument();
  });

  it("renders 'Planned Documentation' when noun is 'Documentation'", () => {
    render(<CapabilityStatus status="planned" noun="Documentation" />);
    expect(screen.getByText("Planned Documentation")).toBeInTheDocument();
  });

  it("still renders bare 'Unknown' when a noun is given", () => {
    render(<CapabilityStatus status="unknown" noun="Documentation" />);
    expect(screen.getByText("Unknown")).toBeInTheDocument();
  });
});

describe("CapabilityStatus — 'current' backward-compatible alias", () => {
  it("renders 'Current Documentation', matching the Documentation page's existing usage", () => {
    render(<CapabilityStatus status="current" noun="Documentation" />);
    expect(screen.getByText("Current Documentation")).toBeInTheDocument();
  });

  it("renders visually identical to 'validated' (same color classes)", () => {
    const { container: currentContainer } = render(
      <CapabilityStatus status="current" />
    );
    const { container: validatedContainer } = render(
      <CapabilityStatus status="validated" />
    );

    const currentSpan = currentContainer.querySelector("span");
    const validatedSpan = validatedContainer.querySelector("span");

    expect(currentSpan).toHaveClass("bg-status-validated-bg");
    expect(currentSpan).toHaveClass("text-status-validated-fg");
    expect(currentSpan?.className).toBe(validatedSpan?.className);
  });
});
