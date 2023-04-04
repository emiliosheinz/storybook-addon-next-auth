import { StorybookConfig } from "@storybook/nextjs";

const config : StorybookConfig = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  addons: [/*"../preset.js", */"@storybook/addon-essentials"],
};

export default config;