import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Navbar } from "../views/Layout/Navbar";

storiesOf("Navbar", module).add("Default navbar", () => (
  <Navbar
    auth={{ avatar: null }}
    history={[]}
    signout={() => {
      action("Signout clicked")();
      return Promise.resolve();
    }}
  />
));
