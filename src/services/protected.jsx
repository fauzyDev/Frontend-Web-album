import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login"/>
    }

    return children
}

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    children: PropTypes.object
}

export default ProtectedRoute