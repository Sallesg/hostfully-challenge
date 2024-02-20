import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, Mock } from "vitest";
import { Booking } from "@views/pages/Booking/Booking";
import { MemoryRouter } from "react-router-dom";
import { Router } from "./Router";

vi.mock("@views/pages/Booking/Booking");

describe("Router", () => {
  it("should render billing list page route", async () => {
    (Booking as Mock).mockReturnValue("Booking");
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    );

    expect(await screen.findByText("Booking")).toBeInTheDocument();
  });
});
