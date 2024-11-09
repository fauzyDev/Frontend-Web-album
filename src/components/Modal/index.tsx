import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function AlertModal({ modal, icon, id, onDelete }) {
    const [open, setOpen] = React.useState<boolean>(false);

    const handle = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      onDelete(id)
      setOpen(false)
    }
    
    return (
      <React.Fragment>
        <Button
          variant="solid"
          color="danger"
          size="sm"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 'auto' }}
          onClick={() => setOpen(true)}>
          {icon}
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
