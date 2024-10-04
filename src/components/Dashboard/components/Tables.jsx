import Card from '@mui/joy/Card';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';

const Tables = () => {
  return (
    <Card variant="soft" sx={{ overflow: 'auto' }}>
      <Table 
        borderAxis="bothBetween"
        stickyFooter
        stickyHeader
        stripe="even"
        variant="outlined" 
        sx={{ 
          minWidth: '600px',  
          '& thead th:nth-child(1)': { width: '40%' }, 
          '& tbody td': { wordWrap: 'break-word' } 
        }}
      >
        <thead>
          <tr>
            <th>Item</th>
            <th>Judul</th>
            <th>Deskripsi</th>
            <th>Edit</th>
            <th>Hapus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image</td>
            <td>Gambar 17 Agustus</td>
            <td>Lomba balap karung</td>
            <td>
              <Button variant="solid" color="primary" size="sm" sx={{ minWidth: 'auto' }}>Edit</Button> {/* Sesuaikan lebar tombol */}
            </td>
            <td>
              <Button variant="solid" color="danger" size="sm" sx={{ minWidth: 'auto' }}>Hapus</Button> {/* Sesuaikan lebar tombol */}
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}

export default Tables;
