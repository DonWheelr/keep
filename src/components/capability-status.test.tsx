import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CapabilityStatus } from "./capability-status";

describe("CapabilityStatus — default noun", () => {
  it("renders 'Current Capability' when no noun is given", () => {
    render(<CapabilityStatus status="current" />);
    expect(screen.getByText("Current Capability")).toBeInTheDocument();
  });

  it("renders 'Planned Capability' when no noun is given", () => {
    render(<CapabilityStatus status="planned" />);
    expect(screen.getByText("Planned Capability")).toBeInTheDocument();
  });

  it("renders bare 'Unknown' regardless of noun", () => {
    render(<CapabilityStatus status="unknown" />);
    expect(screen.getByText("Unknown")).toBeInTheDocument();
  });
});

describe("CapabilityStatus — context-specific noun", () => {
  it("renders 'Current Documentation' when noun is 'Documentation'", () => {
    render(<CapabilityStatus status="current" noun="Documentation" />);
    expect(screen.getByText("Current Documentation")).toBeInTheDocument();
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
