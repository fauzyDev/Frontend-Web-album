import React from "react";
import Card from '@mui/joy/Card';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet'; 
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import AlertModal from "../../Modal";
import InputModal from "../../Modal/Input";
import { getData } from "../../../services/api";

const Tables = () => {
      const [data, setData] = React.useState([]);

      React.useEffect(() => {
        const fetch = async () => {
        const response = await getData('/api/data');
        setData(response);
      };

      fetch();
    }, []);

    return (
      <Card variant="soft" sx={{ overflow: 'auto', padding: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography level="h3">Data List</Typography>
        </Box>
      
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
              {data[0]?.data?.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Box
                      component="img"
                      src={data.url}
                      sx={{
                        borderRadius: '8px',
                        width: { xs: '50px', md: '60px' },
                        height: { xs: '80px', md: '100px' },
                        objectFit: 'cover'
                      }}
                      alt="image"
                    />
                  </td>
                  <td><Typography level="body1">{data.judul}</Typography></td>
                  <td><Typography level="body2" sx={{ whiteSpace: 'pre-line' }}>{data.description}</Typography></td>
                  <td>
                    <InputModal/>
                  </td>
                  <td>
                    <AlertModal modal="Hapus" url={data.url}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Box>
    </Card>
  );
}

export default Tables;