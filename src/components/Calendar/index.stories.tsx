import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from ".";
import { CalendarHead, DayHeader } from "..";

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
    //React node to render in the Calendar component
    children: <CalendarHead daysOfWeek={['Monday', 'Tuesday']} daysOfMonth={[new Date(), new Date()]} children={''} />,
    
  
  },
};
