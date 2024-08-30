import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white min-w-[180px]">
      <div className="flex lg:flex-col ">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-300 lg:border-none hover:text-gray-800 ${
              isActive ? "bg-gray-100 text-gray-700" : "text-white"
            }`
          }
        >
          Contacts
        </NavLink>
        <NavLink
          to="/charts-and-maps"
          end
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-300 lg:border-none hover:text-gray-800 ${
              isActive ? "bg-gray-100 text-gray-800" : "text-white"
            }`
          }
        >
          Charts And Maps
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
