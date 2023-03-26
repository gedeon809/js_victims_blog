import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      backgroundColor: isActive ? "black" : "white",
      color: isActive ? "white" : "black",
      borderRadius: isActive ? "10px" : "0",
    };
  };

  return (
    <nav className="flex justify-between border text-center p-6">
      <NavLink to="/">
        <div className="mx-2 bg-stone-300 px-6 text-xl">LOGO</div>
      </NavLink>
      <ul className="flex justify-between mx-2">
        <li className="mx-1">
          <NavLink
            to="/"
            className="px-3 py-1 hover:bg-black"
            style={navLinkStyles}
          >
            Home
          </NavLink>
        </li>
        <li className="mx-1">
          <NavLink to="/login" className="px-3 py-1" style={navLinkStyles}>
            Log In
          </NavLink>
        </li>
        <li className="mx-1">
          <NavLink to="/signup" className="px-3 py-1" style={navLinkStyles}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
