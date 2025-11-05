import type { StorybookConfig } from "@storybook/nextjs-vite";
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  "stories": [
    "../ui/**/*.mdx",
    "../ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  async viteFinal(config) {
    config.plugins?.push(svgr());
    return config;
  },
};
export default config;