import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import "antd/dist/antd.css";
import "./storybook.css";
import "../src/index.css";

addParameters({
  options: {
    theme: themes.dark
  }
});

function loadStories() {
  require("../src/stories/Navbar");
  require("../src/stories/Sidebar");
  require("../src/stories/LoginForm");
  require("../src/stories/NotFound");
}

configure(loadStories, module);
