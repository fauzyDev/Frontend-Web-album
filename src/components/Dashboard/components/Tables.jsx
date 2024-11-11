import React from 'react';
import Card from '@mui/joy/Card';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet'; 
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertModal from "../../Modal";
import InputModal from "../../Modal/Input";
import axios from 'axios';
import { getData } from "../../../services/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Alerts from '../../Utils/Notification';

const Tables = () => {
    const [token, setToken] = React.useState(null);
    const [alert, setAlert] = React.useState(false);
    const [colors, setColor] = React.useState('danger');
    const [message, setMessage] = React.useState('');

    // react query instance
    const queryClient = useQueryClient()

    // fetch data base url
    const fetchData = async () => {
    const response = await getData('/api/data');
    return response[0].data
    }

    // fetch data react query
    const { data, refetch } = useQuery({ queryKey: ['data'], queryFn: fetchData, gcTime: 1, refetchInterval: 20000 })

    // fetch csrf tokem
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

    // function delete react query mutation
    const mutation = useMutation({ mutationFn: async (id) => {
      await axios.delete('http://localhost:5000/api/data', {
        data: { id },
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': token,
        },
        withCredentials: true
      });
    },
    onSettled: async () => {
      refetch()
      return await queryClient.invalidateQueries({ queryKey: ['data'] })
    }
  })

    // function handle delete component
    const handleDetete = (id) => { 
      mutation.mutate(id)

      if (data) {
        setMessage('Data berhasil dihapus')
        setColor('danger')
        setAlert(true)
      }
      setTimeout(() => {
        setAlert(false)
      }, 2000)
    }

    return (
      <Card variant="soft" sx={{ overflow: 'auto', padding: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography level="h3">Data List</Typography>
        </Box>

        {alert && ( <Alerts color={colors} message={message} close={() => setAlert(false)} /> )}

      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <Sheet sx={{ minWidth: '100%' }}>
          <Table 
            borderAxis="both" 
            stickyHeader
            stripe="odd"
            variant="outlined"
            sx={{
              minWidth: '600px',
              '& thead': {
                position: 'sticky',
                top: 0,
                backgroundColor: '#1a1a1a',
                zIndex: 999,  
              },
              '& thead th': {
                padding: '12px 16px',
                backgroundColor: '#1a1a1a',
                borderBottom: '2px solid #444',
              },
              '& tbody td': {
                padding: '12px 16px',
                borderBottom: '1px solid #444',
                wordWrap: 'break-word',
              },
              
              '@media (max-width: 600px)': {
                '& tbody td': {
                  padding: '8px 10px',
                },
                '& thead th': {
                  fontSize: '0.9rem', 
                },
              },
            }}>

            <thead>
              <tr>
                <th>No.</th>
                <th>Item</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Edit</th>
                <th>Hapus</th>
              </tr>
            </thead>
            <tbody>
              {data?.length ? 
              (data?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Box
                      component="img"
                      src={item.url}
                      sx={{
                        borderRadius: '8px',
                        width: { xs: '50px', md: '60px' },
                        height: { xs: '80px', md: '100px' },
                        objectFit: 'cover'
                      }}
                      alt="image"
                    />
                  </td>
                  <td><Typography level="body1">{item.judul}</Typography></td>
                  <td><Typography level="body2" sx={{ whiteSpace: 'pre-line' }}>{item.description}</Typography></td>
                  <td>
                    <InputModal modal="Edit" icon={<EditIcon/>} id={item.id}/>
                  </td>
                  <td>
                    <AlertModal modal="Hapus" icon={<DeleteIcon/>} id={item.id} onDelete={handleDetete}/>
                  </td>
                </tr>
              ))) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>Tidak ada data</td>
                </tr>)}
            </tbody>
          </Table>
        </Sheet>
      </Box>
    </Card>
  );
}

export default Tables;