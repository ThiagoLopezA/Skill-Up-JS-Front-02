import React from "react";
import Navbar from "./Navbar";

export default function NavbarContainer() {
  const elements = [
    { text: "Home", route: "/" },
    { text: "Actions", route: "/actions" },
  ];
  return <Navbar elements={elements} />;
}
