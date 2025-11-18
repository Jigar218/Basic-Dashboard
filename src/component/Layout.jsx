import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => isMobile && setIsOpen(false);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/users":
        return "Users";
      case "/settings":
        return "Settings";
      default:
        return "";
    }
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />

      <div
        style={{
          marginLeft: isMobile ? "0px" : "200px",
          transition: "0.3s",
        }}
      >
        <Topbar title={getPageTitle()} toggleSidebar={toggleSidebar} />

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
