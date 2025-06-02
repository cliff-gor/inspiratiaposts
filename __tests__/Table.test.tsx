import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PostTable from "../app/components/Table";

describe("Table", () => {
  const mockData = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
  ];

  it("renders table headers and rows", () => {
    render(<PostTable data={mockData} />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
  });
});
