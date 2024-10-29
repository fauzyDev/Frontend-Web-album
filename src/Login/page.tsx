import * as React from 'react';
import { useNavigate } from "react-router-dom"
import { CssVarsProvider } from '@mui/joy/styles';
import axios from 'axios';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface FormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    password: HTMLInputElement;
  }
interface SignInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

export default function Login() {
    const [alert, setAlert] = React.useState(false);
    const [color, setColor] = React.useState<'success' | 'danger'>('success');
    const [token, setToken] = React.useState<string | null>(null);
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()

    React.useEffect(() => {
      const getToken = async () => {
        try {
          const response = await axios.get('https://api-web-album.vercel.app/api/v1/csrf', { withCredentials: true })
          setToken(response.data.csrfToken)
        } catch (error) {
          console.error('Gagal mendapatkan token:', error);
        }
      }
      getToken()
    }, [])

    const handleSubmit = async (event: React.FormEvent<SignInFormElement>) => {
      event.preventDefault();
      setAlert(false);
      const formElements = event.currentTarget.elements;
      const username = formElements.username.value;
      const password = formElements.password.value;

      // validasi
      if (!username || !password) {
        if (!username && !password) {
          setMessage('Username dan password tidak boleh kosong');
        } else if (!username) {
          setMessage('Username tidak boleh kosong');
        } else if (!password) {
          setMessage('Password tidak boleh kosong');
        }
        setColor('danger');
        setAlert(true);
        return;
      }

      // proses login
      const data = { username, password }
      setLoading(true);
        try {
          const response = await axios.post('https://api-web-album.vercel.app/api/v1/login', data, {
            headers: { 
              'Content-Type': 'application/json',
              'x-csrf-token': token
            },
              withCredentials: true,  
          })
            
            if (response.data?.[0]?.data?.Success) {
              setMessage('Login berhasil');
              setColor('success');
              setAlert(true);
              setTimeout(() => {
                navigate('/pages/dashboard')
                setLoading(false);
              }, 1000)
            } else {
              setMessage('Username atau password salah');
              setColor('danger');
              setAlert(true);
              setLoading(false);
            } 

          } catch (error) {
            console.error('Error',error)
            if (axios.isAxiosError(error) && error.response) {
              setMessage(`Error: ${error.response.data.message || 'Terjadi kesalahan'}`);
            } else {
              setMessage('Terjadi kesalahan pada koneksi');
            }
            setColor('danger');
            setAlert(true);
            setLoading(false);
          } 
        };

  return (
    <CssVarsProvider defaultMode="dark" modeStorageKey="joy-mode-scheme-dark">
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#32383E', // Latar belakang abu-abu yang lebih lembut
          padding: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: 350,
            padding: 3,
            boxShadow: 'lg',
            borderRadius: 'md',
            backgroundColor: '#636B74', // Warna putih untuk kontras dengan latar belakang abu-abu
          }}
        >
          <CardContent>
            <Typography level="h4" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#FBFCFE' }}>
              Selamat Datang
            </Typography>
            <Typography level="inherit" sx={{ textAlign: 'center', mb: 2, color: '#FBFCFE' }}>
              Login untuk melanjutkan
            </Typography>
            {/* alert */}
            {alert && (
              <Alert
                sx={{ mb: 2 }}
                color={color}
                variant="solid"
                endDecorator={
                  <IconButton
                    variant="solid"
                    color={color}
                    onClick={() => setAlert(false)}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                }
              >
                {message}
              </Alert>
            )}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel sx={{ color: '#FBFCFE' }}>Username</FormLabel>
                <Input type="text" name="username" placeholder="Masukkan username"/>
              </FormControl>
              <FormControl>
                <FormLabel sx={{ color: '#FBFCFE' }}>Password</FormLabel>
                <Input type="password" name="password" placeholder="Masukkan password"/>
              </FormControl>
              <Button type="submit" loading={loading} loadingPosition="start" variant="solid" sx={{ mt: 2, backgroundColor: '#007FFF', color: '#FFFFFF', '&:hover': { backgroundColor: '#0059B2' } }}>
              {loading ? 'Loading...' : 'Login'}
              </Button>
            </Box>
            <a href="/" className="text-center underline font-semibold">
            Kembali ke beranda 
            </a>
          </CardContent>
        </Card>
      </Box>
    </CssVarsProvider>
  );
}