import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/NavBar";
import Profile from "../components/Profile";
import Contact from "./contact";

// markup
export default function IndexPage() {
  return (
    <>
      <Nav />
      <Profile />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
