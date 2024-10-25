import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import EditIcon from '@mui/icons-material/Edit';
import Textarea from '@mui/joy/Textarea';

export default function InputModal({ inputModal }) {
    const [open, setOpen] = React.useState<boolean>(false);
    const [file, setFile] = React.useState<File | null>(null);
    const [judul, setJudul] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

    return (
      <React.Fragment>
        <Button
          variant="solid"
          color="primary"
          size="sm"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 'auto' }}
          onClick={() => setOpen(true)}>
          <EditIcon/>
          Edit
          {inputModal}
       </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>Ubah informasi data.</DialogContent>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Judul</FormLabel>
                <Input
                  autoFocus
                  placeholder="Judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  required/>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Deskripsi"
                  minRows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required/>
              </FormControl>
              <FormControl>
                <Input 
                  type="file" 
                  variant="soft"
                  color="neutral"
                  size="md" 
                  onChange={handleFileChange} />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
