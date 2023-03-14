const webpack = require("../webpack.config");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    // Filter css rules
    config.module.rules = config.module.rules.filter(
      (rule) => rule.test?.toString() !== "/\\.css$/"
    );

    // Concat our rules into storybook webpack rules
    config.module.rules = config.module.rules.concat(webpack.module.rules);

    // Merge our alias config into storybook resolve alias
    Object.assign(config.resolve.alias, { ...webpack.resolve.alias });

    // Return updated config storybook webpack
    return config;
  },
};
