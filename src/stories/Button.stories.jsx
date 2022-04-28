import React from "react";

import { Button } from "../components/Button";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(args.onClick).toHaveBeenCalled();
};

Primary.args = {
  label: "Button",
};
