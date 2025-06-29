import { render, screen, fireEvent } from "@testing-library/react";
import RecipeSearchForm from "@/components/RecipeSearchForm";

describe("SearchForm", () => {
  it("calls onSearch with input value on submit", () => {
    const mockSearch = jest.fn();
    render(<RecipeSearchForm onSearch={mockSearch} />);

    const input = screen.getByTestId("search-input") as HTMLInputElement;
    const button = screen.getByTestId("search-button");

    fireEvent.change(input, { target: { value: "cake" } });
    fireEvent.click(button);

    expect(mockSearch).toHaveBeenCalledWith("cake");
  });
});
