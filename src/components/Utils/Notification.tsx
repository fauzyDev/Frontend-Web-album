import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Alerts({ message, color, close }) {
    return (
      <Box sx={{ width: '100%', mb: 2  }}>
        <Alert 
        variant="solid"
        color={color}
        endDecorator={
         <IconButton
         variant="solid"
         color={color}
         onClick={close}>
         <CloseRoundedIcon />
         </IconButton>}>
        {message}
        </Alert>
      </Box>
    );
  }