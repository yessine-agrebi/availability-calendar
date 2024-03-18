import type { Meta, StoryObj } from "@storybook/react";
import { CalendarHead } from ".";
import { DayHeader } from "..";

const meta: Meta<typeof CalendarHead> = {
  title: "components/CalendarHead",
  component: CalendarHead,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    //React node to render in the Calendar component
    children: DayHeader({ day: "Monday" }),
    
  },
};
