import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Button, Input, Typography } from '@mui/joy';
import Textarea from '@mui/joy/Textarea';
import Card from '@mui/joy/Card';

const UploadForm = () => {
    const [token, setToken] = useState(null)
    const [file, setFile] = useState(null);
    const [judul, setJudul] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
      const getToken = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/v1/csrf', { withCredentials: true })
          setToken(response.data.csrfToken)
        } catch (error) {
          console.error('Harap refresh halaman', error);
        }
      }
      getToken()
    }, [])

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
     
      const formData = new FormData()
      formData.append('file', file)
      formData.append('judul', judul)
      formData.append('description', description)

      try {
        const response = await axios.post('http://localhost:5000/api/v1/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-csrf-token': token,
          },
          withCredentials: true,  
        });
        
        setJudul(response?.data?.data || "");
        setDescription(response?.data?.data || "");
        setFile(response?.data?.data || null);
      } catch (error) {
        console.error('Terjadi error saat mengupload', error);
      }
    };

    return (
      <Box
        component="form"
        sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        width: 400, 
        margin: '0 auto', 
        mt: 4 
      }}
      onSubmit={handleSubmit}
    >
    <Card variant="soft">
      <Typography level="h4" gutterBottom>
          Upload File
      </Typography>
      
      <Input
        placeholder="Judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        required
      />
      
      <Textarea
        placeholder="Deskripsi"
        minRows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      
      <Button component="label" variant="outlined">
          Pilih File
        <input 
          type="file" 
          hidden 
          onChange={handleFileChange} 
          />
        </Button>
      
        {file && (
          <Typography>
            File terpilih: {file.name}
          </Typography>
        )}
      
        <Button type="submit" variant="solid" color="primary">
          Upload
        </Button>
      </Card>
    </Box>
  );
};

export default UploadForm;
