import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
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
    const [message, setMessage] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<SignInFormElement>) => {
      event.preventDefault();
      const formElements = event.currentTarget.elements;
      const username = formElements.username.value;
      const password = formElements.password.value;

      // validasi
      if (!username || !password) {
        setMessage('Username dan password tidak boleh kosong');
        setColor('danger');
        setAlert(true);
        return;
      }

    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (!csrfToken) {
        setMessage('Terjadi kesalahan, Harap refresh halaman');
        setColor('danger');
        setAlert(true);
        return;
      }

      setMessage('Login berhasil');
      setColor('success');
      setAlert(true);
    };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e0e0e0', // Latar belakang abu-abu yang lebih lembut
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
            backgroundColor: '#ffffff', // Warna putih untuk kontras dengan latar belakang abu-abu
          }}
        >
          <CardContent>
            <Typography level="h4" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
              Selamat Datang
            </Typography>
            <Typography level="inherit" sx={{ textAlign: 'center', mb: 2, color: '#666' }}>
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
                <FormLabel sx={{ color: '#555' }}>Username</FormLabel>
                <Input type="text" name="username" placeholder="Masukkan username" />
              </FormControl>
              <FormControl>
                <FormLabel sx={{ color: '#555' }}>Password</FormLabel>
                <Input type="password" name="password" placeholder="Masukkan password" />
              </FormControl>
              <Button type="submit" sx={{ mt: 2, backgroundColor: '#007FFF', color: '#fff', '&:hover': { backgroundColor: '#0059B2' } }}>
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </CssVarsProvider>
  );
}
