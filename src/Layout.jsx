import PropTypes from "prop-types";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
          <Navbar/>
          {children}  
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
  };

export default Layout;
