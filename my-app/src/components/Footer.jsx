import React from 'react';
import { Box, Typography, Container, Stack, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => (
  <Box
    sx={{
      py: 3,
      background: 'linear-gradient(90deg, #001e3c 0%, #002647 100%)',
      color: '#fff',
      mt: 8
    }}
    component="footer"
  >
    <Container>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} Shaik Abdul Parvez. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href="mailto:abdulparvez12204@gmail.com" sx={{ color: '#21cbf3' }}>
            <EmailIcon />
          </Link>
          <Link href="https://linkedin.com/in/shaik-abdul-parvez-997399259" target="_blank" sx={{ color: '#21cbf3' }}>
            <LinkedInIcon />
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;