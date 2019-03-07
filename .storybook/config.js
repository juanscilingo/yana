import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import "antd/dist/antd.css";
import "./storybook.css";

addParameters({
  options: {
    theme: themes.dark
  }
});

function loadStories() {
  require("../src/stories/Navbar");
  require("../src/stories/Sidebar");
}

configure(loadStories, module);
