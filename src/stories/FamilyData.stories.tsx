// FamilyData.stories.tsx
import { Story, Meta } from "@storybook/react";
import FamilyData from "../components/Registro/FamilyData";

export default {
  title: "Example/FamilyData",
  component: FamilyData,
} as Meta;

const Template: Story = () => <FamilyData />;

export const Default = Template.bind({});
