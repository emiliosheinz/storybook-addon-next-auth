import React from "react";

import { Page as PageComponent } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
};

export const Page = (args) => <PageComponent {...args} />;
