import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="mainSection">
      <Header />
      <div className="pageSection">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
