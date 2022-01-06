import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <main>
        {children}
        <Cart open={open} setOpen={setOpen} />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
