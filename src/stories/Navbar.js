import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "../views/Layout/Navbar";
import Layout from "../views/Layout";

storiesOf("Navbar", module)
  .add("Default navbar", () => <Navbar />)
  .add("Sidebar interaction", () => (
    <Layout>
      <div>Page Content!</div>
    </Layout>
  ));
