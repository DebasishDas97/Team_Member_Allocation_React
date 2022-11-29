import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Employee = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Employee;
