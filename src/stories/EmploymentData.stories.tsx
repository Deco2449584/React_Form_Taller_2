// EmploymentData.stories.tsx
import { Story, Meta } from "@storybook/react";
import EmploymentData from "../components/Registro/EmploymentData";

export default {
  title: "Example/EmploymentData",
  component: EmploymentData,
} as Meta;

const Template: Story = () => <EmploymentData />;

export const Default = Template.bind({});
