import { render, screen, fireEvent } from "@testing-library/react";
import SidebarHamburger from "./navigationBar";
import { NavigationContext } from "../../context/navigationContext";

// Mock context to wrap the component for context testing
const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <NavigationContext.Provider {...providerProps}>
      {ui}
    </NavigationContext.Provider>,
    renderOptions
  );
};

describe("SidebarHamburger", () => {
  test("renders hamburger icon and logo", () => {
    render(<SidebarHamburger />);
    expect(screen.getByTestId("hamburger-icon")).toBeInTheDocument();
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  test("toggles menu on click", () => {
    render(<SidebarHamburger />);
    fireEvent.click(screen.getByTestId("hamburger-icon"));
    // Depending on how you've implemented "isOpen", check if the menu appears
    expect(screen.getByTestId("sidebar")).toHaveClass("open");
  });

  test("uses context to change styles", () => {
    const providerProps = {
      value: { isPaymentsPage: true, isAboutPage: false },
    };
    customRender(<SidebarHamburger />, { providerProps });
    // Assuming specific styles are applied based on context
    expect(screen.getByTestId("sidebar")).toHaveStyle(
      `backgroundColor: '#4657d743'`
    );
  });
});
