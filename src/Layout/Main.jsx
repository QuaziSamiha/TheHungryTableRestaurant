import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
