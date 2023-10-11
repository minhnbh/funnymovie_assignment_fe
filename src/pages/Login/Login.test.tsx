import { act, fireEvent, screen } from "@testing-library/react";
import Login from ".";
import { renderWrapper } from "@test/renderWrapper";
import { AuthServices } from "@services/auth.service";

describe("Should test Login page", () => {
  it("Should render email input and password input", () => {
    const spyLogin = jest.spyOn(AuthServices, "login").mockResolvedValue({
      status: 200,
      data: { data: { token: "", user: {} } },
    } as any);
    renderWrapper(<Login />);

    const emailInput = screen.getByRole("textbox", { name: "email" });
    const passwordInput = screen.getByLabelText("password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    act(() => {
      fireEvent.change(emailInput, {
        target: {
          value: "admin@gmail.com",
        },
      });
      fireEvent.change(passwordInput, {
        target: {
          value: "123123123",
        },
      });
    });

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    loginButton.click();

    expect(spyLogin).toBeCalledWith({
      email: "admin@gmail.com",
      password: "123123123",
    });
  });
});
