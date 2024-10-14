import { Button, Stack } from '@mui/material';
import React from 'react';

export default function Dashboard({ onButtonClick }) {
  return (
    <Stack 
      spacing={2} 
      direction='row' 
      justifyContent="center"
      style={{ marginTop: '20px' }} 
    >
      <Button variant="contained" color='primary' onClick={onButtonClick}>Item No.1</Button>
      <Button variant="contained" color='secondary' onClick={onButtonClick}>Item No.2</Button>
      <Button variant="contained" color='warning' onClick={onButtonClick}>Item No.3</Button>
    </Stack>
  );
};
