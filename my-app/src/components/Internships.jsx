import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const internships = [
  {
    role: "Software Development Intern (Project Lead)",
    company: "EasyToLearn, B V Raju Institute of Technology",
    period: "Jan 2024 – Present (Ongoing)",
    details: [
      "Leading the development of EasyToLearn, a platform providing career guidance, skill-building resources, and exam preparation (GATE, GRE, TOEFL, etc.) for freshers.",
      "Spearheading full-stack development using React, Node.js, Express.js, and MongoDB, ensuring scalability and robust backend integration.",
      "Designed personalized learning hub with analytics, skill building, and AI-driven recommendations to enhance user engagement.",
      "Currently in the deployment phase, leading a team to optimize user experience and plan future updates with advanced features."
    ]
  },
  {
    role: "AI Intern",
    company: "Swecha",
    period: "May 2024 – June 2024",
    details: [
      "Improved AI models for Telugu, significantly enhancing Automatic Speech Recognition (ASR) accuracy.",
      "Conducted data analysis and refined pronunciation & dialect recognition using collected Telugu audio/video samples.",
      "Presented findings at internal reviews, earning recognition for advancements in ASR technology."
    ]
  },
  {
    role: "AI Tester Intern",
    company: "Dynamic Tangent",
    period: "Feb 2025 – Present",
    details: [
      "Contributing to AI testing initiatives by ensuring model accuracy and performance.",
      "Collaborating with teams to enhance AI functionalities while adhering to company policies.",
      "Assisting in developing testing strategies to improve AI model reliability and efficiency."
    ]
  }
];

const Internships = () => (
  <Box
    id="internships"
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
          Internship Experience
        </Typography>
        <Grid container spacing={4}>
          {internships.map((intern, idx) => (
            <Grid item xs={12} md={4} key={idx}>
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
                  <Typography variant="h6" sx={{ color: '#2196f3', fontWeight: 700, mb: 1 }}>
                    {intern.role}
                  </Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 500, mb: 1 }}>
                    {intern.company}
                  </Typography>
                  <Typography sx={{ color: '#fff', opacity: 0.7, mb: 2 }}>
                    {intern.period}
                  </Typography>
                  <List dense>
                    {intern.details.map((detail, i) => (
                      <ListItem key={i} sx={{ color: '#fff', opacity: 0.85, pl: 0 }}>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default Internships;