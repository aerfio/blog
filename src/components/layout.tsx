import React from "react";
import { Sidebar } from "./sidebar";
import Footer from "./footer";
import "../styles/global.css";
import "../styles/theme.css";

const Layout: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => (
  <div className="h-screen bg-primary transition-colors duration-200 ease-out">
    <div className="sidebar_main-content_container">
      <Sidebar title={title}></Sidebar>
      <div className="main-content">
        <main className="h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
