import React from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => (
  <Box
    id="contact"
    sx={{
      py: 12,
      background: 'linear-gradient(180deg, #002647 0%, #001e3c 100%)',
    }}
  >
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Contact
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon sx={{ color: '#2196f3' }} />
                  <Typography sx={{ color: '#fff' }}>
                    <Link href="mailto:abdulparvez12204@gmail.com" sx={{ color: '#21cbf3' }}>
                      abdulparvez12204@gmail.com
                    </Link>
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon sx={{ color: '#2196f3' }} />
                  <Typography sx={{ color: '#fff' }}>
                    +91-9398304258
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LinkedInIcon sx={{ color: '#2196f3' }} />
                  <Typography sx={{ color: '#fff' }}>
                    <Link href="https://linkedin.com/in/shaik-abdul-parvez-997399259" target="_blank" sx={{ color: '#21cbf3' }}>
                      linkedin.com/in/shaik-abdul-parvez-997399259
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
              {/* Optional: Add a contact form below if you want */}
              {/* <Box component="form" sx={{ mt: 4 }}>
                <TextField fullWidth label="Your Name" margin="normal" />
                <TextField fullWidth label="Your Email" margin="normal" />
                <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
                <Button variant="contained" sx={{ mt: 2, background: '#2196f3' }}>Send Message</Button>
              </Box> */}
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default Contact;