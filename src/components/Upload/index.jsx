import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/joy';
import ProgressCount from './Progress';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Textarea from '@mui/joy/Textarea';
import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Alerts from '../Utils/Notification';

const UploadForm = () => {
    const [token, setToken] = useState(null);
    const [alert, setAlert] = useState(false)
    const [colors, setColor] = useState('')
    const [message, setMessage] = useState('')
    const [file, setFile] = useState(null);
    const [judul, setJudul] = useState('');
    const [description, setDescription] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {
      const getToken = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/v1/csrf', { withCredentials: true });
          setToken(response.data.csrfToken);
        } catch (error) {
          console.error('Harap refresh halaman', error);
        }
      };
      getToken();
    }, []);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
     
      const formData = new FormData();
      formData.append('file', file);
      formData.append('judul', judul);
      formData.append('description', description);

      setIsUploading(true); 

      try {
        const response = await axios.post('http://localhost:5000/api/v1/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-csrf-token': token,
          },
          withCredentials: true,  
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted)
          }
        });
        
        setJudul(response?.data?.data || "");
        setDescription(response?.data?.data || "");
        setFile(response?.data?.data || null);
        setMessage("Berhasil mengunggah file")
        setColor("success")
        setAlert(true)
      } catch (error) {
        console.error('Terjadi error saat mengupload', error);
      } finally {
        setIsUploading(false)
        setUploadProgress(0)
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
          mt: 4 }} 
          onSubmit={handleSubmit}>

        <Card variant="soft">
          <Typography level="h4" gutterBottom>
            Upload File
          </Typography>

          {alert && ( <Alerts color={colors} message={message} close={() => setAlert(false)} /> )}

          <Input
            autoFocus
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

          <Input 
            type="file" 
            variant="soft"
            color="neutral"
            size="md" 
            onChange={handleFileChange}
            required 
          />

          {isUploading && (
            <Box sx={{ width: '100%', mt: 2 }}>
              <ProgressCount progress={uploadProgress}/>
            </Box>
          )}
          
          <span className="text-base font-semibold">Max file 20MB</span>
          
          <Button type="submit" variant="solid" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CloudUploadIcon fontSize="large"/>
            Upload
          </Button>
        </Card>
      </Box>
    );
};

export default UploadForm;
