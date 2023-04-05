import { StorybookConfig } from "@storybook/nextjs";

export const config: StorybookConfig['previewAnnotations'] = (entry = []) => [
  ...entry, 
  require.resolve("../esm/preset/preview")
];