import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/entrance">entrance</NavLink>
       </li>

      </ul>

      <Outlet />
    </nav>
  );
};

export default Layout;
