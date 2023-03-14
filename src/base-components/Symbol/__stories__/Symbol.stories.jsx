import React from "react";
import SymbolConnected from "../SymbolConnected";

export default {
  title: "base-components/SymbolConnected",
  component: SymbolConnected,
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

export const Default = () => <SymbolConnected />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "300px",
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
      <SymbolConnected />
    </div>
  );
};
AdjustableSize.argTypes = {
  width: {
    control: { type: "number", min: 20, max: 3000, step: 30 },
    defaultValue: 300,
  },
  height: {
    control: { type: "number", min: 30, max: 3000, step: 30 },
    defaultValue: 300,
  },
  shape: { control: false },
  color: { control: false },
};

const Template = (args) => <SymbolConnected {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  shape: {
    control: "inline-radio",
    options: ["triangle", "rectangle", "circle"],
    defaultValue: "triangle",
  },
  color: {
    control: "inline-radio",
    options: ["red", "blue", "green", "lime", "pink"],
    defaultValue: "blue",
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "300px",
      }}
    >
      <Story />
    </div>
  ),
];
