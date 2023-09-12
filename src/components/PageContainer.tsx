import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface SimpleContainerProps {
  children: React.ReactNode;
}

const containerStyle = {
  marginTop: '20px',
};

export default function SimpleContainer({ children }: SimpleContainerProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={containerStyle}>
        {children}
      </Container>
    </React.Fragment>
  );
}