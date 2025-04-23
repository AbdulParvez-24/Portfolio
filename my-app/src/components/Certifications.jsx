import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText, Link } from '@mui/material';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: "Training Completion Certificate",
    issuer: "Coincent"
  },
  {
    name: "The Joy Of Computing Using Python",
    issuer: "NPTEL"
  },
  {
    name: "Problem Solving Through Programming In C",
    issuer: "NPTEL"
  },
  {
    name: "Smart Coder Smart Interviews (DSA)",
    issuer: "Smart Coder",
    link: "https://smartcoder.com/interviews/dsa" // Example link, replace with actual if available
  },
  {
    name: "Participation certification in Summer Of AI Internship Program",
    issuer: "Swecha"
  }
];

const Certifications = () => (
  <Box
    id="certifications"
    sx={{
      py: 12,
      background: 'linear-gradient(180deg, #001e3c 0%, #002647 100%)',
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
          Certifications
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
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
              <List>
                {certifications.map((cert, idx) => (
                  <ListItem key={idx} sx={{ color: '#fff', opacity: 0.9 }}>
                    <ListItemText
                      primary={
                        cert.link ? (
                          <Link href={cert.link} target="_blank" rel="noopener" sx={{ color: '#21cbf3' }}>
                            {cert.name}
                          </Link>
                        ) : (
                          cert.name
                        )
                      }
                      secondary={cert.issuer}
                      secondaryTypographyProps={{ sx: { color: '#2196f3', fontWeight: 500 } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default Certifications;