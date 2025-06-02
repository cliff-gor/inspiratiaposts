import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import FilterForm from "../app/components/FilterForm";

describe("FilterForm", () => {
  it("renders input with correct value and updates on change", () => {
    const mockSetFilter = jest.fn();
    render(<FilterForm filter="test" setFilter={mockSetFilter} />);

    const input = screen.getByPlaceholderText(/filter by title/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test");

    fireEvent.change(input, { target: { value: "new value" } });
    expect(mockSetFilter).toHaveBeenCalledWith("new value");
  });
});