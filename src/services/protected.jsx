import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import axios from "axios"

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async () =>{
            try {
                const response = await axios.get('http://localhost:5000/api/v1/check-login', {
                    withCredentials: true,
                });
                
                if (response.data?.[0]?.data?.Authenticated) {
                    setIsAuthenticated(true)
                } else {
                    setIsAuthenticated(false)
                    navigate('/login')
                }
            } catch  {
                console.error("Error user is not login");
                setIsAuthenticated(false)
                navigate('/login')
            }
        }
        checkAuth()
    }, [navigate])

    return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute