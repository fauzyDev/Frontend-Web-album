import * as React from 'react';
import { Box } from '@mui/joy';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import ProgressCount from '../Upload/Progress';
import axios from 'axios';

export default function InputModal({ modal, icon, id }) {
    const [open, setOpen] = React.useState<boolean>(false);
    const [file, setFile] = React.useState<File | null>(null);
    const [judul, setJudul] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');
    const [token, setToken] = React.useState<null>(null)
    const [isUploading, setIsUploading] = React.useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = React.useState<number>(0);

    React.useEffect(() => {
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

      const formData = {
        id: id,
        judul,
        description,
        file
      }

      setIsUploading(true);

      try {
        const response = await axios.patch('http://localhost:5000/api/data', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-csrf-token': token,
          },
          withCredentials: true,  
          onUploadProgress: (progressEvent) => {
            const percentCompleted = progressEvent.total ? Math.round((progressEvent.loaded * 100) / progressEvent.total) : 0;
            setUploadProgress(percentCompleted)
          }
        });
        
        setJudul(response?.data?.data || "");
        setDescription(response?.data?.data || "");
        setFile(response?.data?.data || null);
      } catch (error) {
        console.error('Terjadi error saat mengupload', error);
      } finally {
        setIsUploading(false)
        setUploadProgress(0)
      }
      setOpen(false);
    }

    return (
      <React.Fragment>
        <Button
          variant="solid"
          color="primary"
          size="sm"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 'auto' }}
          onClick={() => setOpen(true)}>
          {icon}
          {modal}
       </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>Ubah informasi data.</DialogContent>
          <form
            onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Judul</FormLabel>
                <Input
                  autoFocus
                  placeholder="Judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Deskripsi"
                  minRows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
              </FormControl>
              <FormControl>
                <Input 
                  type="file" 
                  variant="soft"
                  color="neutral"
                  size="md" 
                  onChange={handleFileChange} />
              </FormControl>

              {isUploading && (
                <Box sx={{ width: '100%', mt: 2 }}>
                  <ProgressCount progress={uploadProgress}/>
                </Box>
              )}

              <Button type="submit">Simpan</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
