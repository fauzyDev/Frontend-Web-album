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

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
  }
interface SignInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

export default function Login() {
    const handleSubmit = (event: React.FormEvent<SignInFormElement>) => {
      event.preventDefault();
      const formElements = event.currentTarget.elements;
      const data = {
        email: formElements.email.value,
        password: formElements.password.value,
      };
      alert(JSON.stringify(data, null, 2));
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
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <FormControl required>
                <FormLabel sx={{ color: '#555' }}>Username</FormLabel>
                <Input type="username" name="username" placeholder="Masukkan username" />
              </FormControl>
              <FormControl required>
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
