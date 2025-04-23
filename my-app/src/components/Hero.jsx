import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        pt: 8
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2
            }}
          >
            Shaik Abdul Parvez
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: '#0088ff',
              mb: 4
            }}
          >
            Full-Stack Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'white',
              opacity: 0.8,
              maxWidth: '800px',
              mb: 4,
              lineHeight: 1.8
            }}
          >
            Skilled in Flutter, React.js, Node.js, MySQL, and Firebase. Experienced in building responsive web and mobile applications with smooth UI and robust backend integration. Currently exploring Machine Learning to solve real-world challenges.
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              href="https://linkedin.com/in/shaik-abdul-parvez-997399259"
              target="_blank"
              startIcon={<LinkedInIcon />}
              sx={{
                backgroundColor: '#0088ff',
                '&:hover': { backgroundColor: '#0066cc' }
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="mailto:abdulparvez12204@gmail.com"
              startIcon={<EmailIcon />}
              sx={{
                borderColor: '#0088ff',
                color: '#0088ff',
                '&:hover': { borderColor: '#0066cc', backgroundColor: 'rgba(0, 136, 255, 0.1)' }
              }}
            >
              Contact Me
            </Button>
          </Stack>
          
          <Typography variant="body2" sx={{ color: 'white', opacity: 0.6 }}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: '0.9rem' }} />
                abdulparvez12204@gmail.com
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1, fontSize: '0.9rem' }} />
                +91-9398304258
              </Box>
            </Stack>
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;