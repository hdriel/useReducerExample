import React from "react";
import SymbolDesigner from "../SymbolDesigner";

export default {
  title: "components/SymbolDesigner",
  component: SymbolDesigner,
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

export const Default = () => <SymbolDesigner />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "1200px",
        height: "800px",
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <SymbolDesigner {...args} />;

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
      <SymbolDesigner value={6} />
    </div>
  );
};
AdjustableSize.argTypes = {
  width: {
    control: { type: "number", min: 20, max: 3000, step: 30 },
    defaultValue: 1000,
  },
  height: {
    control: { type: "number", min: 30, max: 3000, step: 30 },
    defaultValue: 700,
  },
  value: { control: false },
};

export const Custom = Template.bind({});
Custom.argTypes = {
  value: {
    control: "inline-radio",
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];
