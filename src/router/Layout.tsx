import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <header>
        EBASH
    </header>
    <Outlet />
    </>

  );
}

export default Layout;