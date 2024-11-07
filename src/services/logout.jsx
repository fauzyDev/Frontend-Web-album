import IconButton from '@mui/joy/IconButton';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handle = async () => {
        try {
            await axios.post('http://localhost:5000/api/v1/logout', { }, {
                withCredentials: true, 
            });
            navigate('/'); 
        } catch (error) {
            console.error('Error saat logout:', error);
        }
    };

    return (
        <IconButton size="sm" variant="plain" color="neutral" onClick={handle}>
            <LogoutRoundedIcon />
        </IconButton>
    );
}

export default Logout;
