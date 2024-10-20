const { render, fireEvent, screen } = require("@testing-library/react");
const { default: LoginFormComponent } = require("./login-form.component");

test("Component is loaded", () => {
  expect(render(<LoginFormComponent />));
});

test("Login form submits successfully", () => {
  const onSubmit = jest.fn();
  const username = "John";

  expect(render(<LoginFormComponent onSubmit={onSubmit} />));

  fireEvent.change(screen.getByLabelText(/Username/i), {
    target: { value: username },
  });

  fireEvent.click(screen.getByRole("button"), { name: /submit/i });

  expect(onSubmit).toHaveBeenCalledWith(username);
});
