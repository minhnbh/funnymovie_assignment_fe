import { act, fireEvent, screen } from "@testing-library/react";
import { renderWrapper } from "@test/renderWrapper";
import { AuthServices } from "@services/auth.service";
import Register from ".";

describe("Should test register page", () => {
  it("Should render register form and submit it", () => {
    const spyRegister = jest.spyOn(AuthServices, "register").mockResolvedValue({
      status: 200,
      data: { data: { token: "", user: {} } },
    } as any);
    renderWrapper(<Register />);

    const nameInput = screen.getByRole("textbox", { name: "fullName" });
    const emailInput = screen.getByRole("textbox", { name: "email" });
    const passwordInput = screen.getByLabelText("password");
    const passwordConfirmInput = screen.getByLabelText("confirm");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordConfirmInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();

    act(() => {
      fireEvent.focus(emailInput);
      fireEvent.change(emailInput, {
        target: {
          value: "admin@gmail.com",
        },
      });
      fireEvent.blur(emailInput);

      fireEvent.focus(passwordInput);
      fireEvent.change(passwordInput, {
        target: {
          value: "123123123",
        },
      });
      fireEvent.blur(passwordInput);

      fireEvent.focus(passwordConfirmInput);
      fireEvent.change(passwordConfirmInput, {
        target: {
          value: "11111111",
        },
      });
      fireEvent.blur(passwordConfirmInput);

      fireEvent.focus(nameInput);
      fireEvent.change(nameInput, {
        target: {
          value: "Minh",
        },
      });
      fireEvent.blur(nameInput);
    });

    const registerButton = screen.getByRole("button", {
      name: "Register",
    });

    registerButton.click();

    expect(spyRegister).not.toBeCalled();

    fireEvent.change(passwordConfirmInput, {
      target: {
        value: "123123123",
      },
    });

    registerButton.click();
  });
});
