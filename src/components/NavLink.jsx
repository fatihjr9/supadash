import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div>
      <Link to={to} className={isActive ? "text-[#4747FF] p-2 bg-[#F0F0FF] rounded-md font-medium transition" : "hover:bg-[#F0F0FF] hover:text-[#4747FF] p-2 rounded-md font-normal text-gray-400 transition"}>
        {children}
      </Link>
    </div>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  actived: PropTypes.string,
};


export default NavLink;
