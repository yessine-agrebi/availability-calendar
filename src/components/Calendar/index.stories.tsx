import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};
