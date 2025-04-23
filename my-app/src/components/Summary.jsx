import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

const Summary = () => {
  const skills = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Frontend Development",
      description: "Expertise in React.js, Next.js, and modern JavaScript. Creating responsive and interactive user interfaces with Material-UI and other modern frameworks."
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      title: "Backend Development",
      description: "Proficient in Node.js, Express, and database management. Experience with RESTful APIs and server-side architecture."
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: "Cloud & DevOps",
      description: "Familiar with AWS services, Docker containerization, and CI/CD pipelines. Experience with version control using Git."
    }
  ];

  return (
    <Box
      id="about"
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
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: '#fff',
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            Full Stack Developer with a passion for building scalable web applications
            and solving complex problems. Experienced in modern JavaScript frameworks
            and cloud technologies.
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.08)',
                      }
                    }}
                  >
                    <Box sx={{ color: '#2196f3', mb: 2 }}>
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, fontWeight: 600, color: '#fff' }}
                    >
                      {skill.title}
                    </Typography>
                    <Typography
                      sx={{ color: '#fff', opacity: 0.7, lineHeight: 1.7 }}
                    >
                      {skill.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Summary;