import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../app/components/Pagination";

describe("Pagination", () => {
  it("renders current page and total pages", () => {
    const setCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        setCurrentPage={setCurrentPage}
      />
    );

    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
  });

  it("calls setCurrentPage on next/prev click", () => {
    const setCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={3}
        setCurrentPage={setCurrentPage}
      />
    );

    fireEvent.click(screen.getByText("Previous"));
    fireEvent.click(screen.getByText("Next"));

    expect(setCurrentPage).toHaveBeenCalledWith(1);
    expect(setCurrentPage).toHaveBeenCalledWith(3);
  });

  it("disables buttons at limits", () => {
    const setCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={1}
        setCurrentPage={setCurrentPage}
      />
    );

    expect(screen.getByText("Previous")).toBeDisabled();
    expect(screen.getByText("Next")).toBeDisabled();
  });
});
