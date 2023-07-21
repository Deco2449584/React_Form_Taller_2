// AcademicData.stories.tsx
import { Story, Meta } from "@storybook/react";
import AcademicData from "../components/Registro/AcademicData";

export default {
  title: "Example/AcademicData",
  component: AcademicData,
} as Meta;

const Template: Story = () => <AcademicData />;

export const Default = Template.bind({});
