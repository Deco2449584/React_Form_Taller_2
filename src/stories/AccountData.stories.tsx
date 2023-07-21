// AccountData.stories.tsx
import { Story, Meta } from "@storybook/react";
import AccountData from "../components/Registro/AccountData";

export default {
  title: "Example/AccountData",
  component: AccountData,
} as Meta;

const Template: Story = () => <AccountData />;

export const Default = Template.bind({});
