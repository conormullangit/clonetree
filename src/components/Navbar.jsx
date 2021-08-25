import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/api/items">Home</NavLink>
      <NavLink to="/api/users/:username">My Account</NavLink>
      <NavLink to="/sign-out">Sign Out</NavLink>
    </nav>
  );
};

export default Navbar;