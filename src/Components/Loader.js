import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Loader() {
  return (
    <Box 
      sx={{ 
        marginTop: '20%', 
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};
