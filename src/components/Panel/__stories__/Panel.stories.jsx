import React from "react";
import Panel from "../Panel";

export default {
  title: "components/Panel",
  component: Panel,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "96vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Panel />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        height: "500px",
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustableSize = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px red solid",
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
    >
      <Panel />
    </div>
  );
};
AdjustableSize.argTypes = {
  width: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 150,
  },
  height: {
    control: { type: "number", min: 50, max: 2000, step: 50 },
    defaultValue: 150,
  },
  label: { control: false },
};

const Template = (args) => <Panel {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: {
    control: { type: "string" },
    defaultValue: "Holla",
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "150px",
        height: "150px",
      }}
    >
      <Story />
    </div>
  ),
];
