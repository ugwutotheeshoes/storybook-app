import { Button } from "../components/Button";
import { render } from "@testing-library/react";

test("should render", () => {
  render(<Button label="Button" />);
});
