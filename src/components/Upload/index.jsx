import { useState } from 'react';
import { Box, Button, Input, Textarea, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Logika untuk upload file
      console.log('File:', file);
      console.log('Title:', title);
      console.log('Description:', description);
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
