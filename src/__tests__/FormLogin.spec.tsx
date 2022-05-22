import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Form } from "../components";

describe("FormLogin", () => {
  beforeEach(() =>
    render(
      <ChakraProvider>
        <Form formType="login" />
      </ChakraProvider>
      // toast needs the provider
    )
  );
  it("should render login form", async () => {
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });
  it("should render an input with placeholder equal to name", () => {
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
  });
  it("should render an input with placeholder equal to password", () => {
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
  });
});
