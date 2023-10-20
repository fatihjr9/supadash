import PropTypes from "prop-types";
import Navbar from "./Navbar";

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className="mt-44 md:mt-36">
          {children}
        </div>
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Layout