import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function AlertModal({ modal, url }) {
  const [open, setOpen] = React.useState<boolean>(false);

    const handle = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      try {
        const data = await axios.delete(`http://localhost:5000/api/data/${url}`, {
          withCredentials: true
      });
        console.log(data)
      } catch (error) {
        console.error(error, "Gagal menghapus data")
      }
    }

    return (
      <React.Fragment>
        <Button
          variant="solid"
          color="danger"
          size="sm"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 'auto' }}
          onClick={() => setOpen(true)}>
          <DeleteIcon/>
          {modal}
        </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Peringatan
          </DialogTitle>
          <Divider />
          <DialogContent>
            Apakah yakin untuk menghapus data ini?
          </DialogContent>
          <DialogActions>
            <Button type="submit"className="rounded" variant="solid" color="danger" onClick={handle}>
              Konfirmasi
            </Button>
            <Button className="rounded" variant="solid" color="primary" onClick={() => setOpen(false)}>
              Batal
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
