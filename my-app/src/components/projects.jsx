import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: "HostelMate",
      description: "Developed an Android app to help students find hostels or PGs based on their preferences, featuring a user-friendly interface for browsing nearby accommodations. Implemented JWT-based authentication for secure login.",
      image: "https://source.unsplash.com/random/800x600/?hostel",
      technologies: ["Flutter", "Dart", "Firebase", "Git"],
      github: "#",
      demo: "#"
    },
    {
      title: "EasyToLearn",
      description: "Leading the development of a platform providing career guidance, skill-building resources, and exam preparation (GATE, GRE, TOEFL). Spearheaded full-stack development using React, Node.js, Express.js, and MongoDB.",
      image: "https://source.unsplash.com/random/800x600/?education",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Speech Recognition",
      description: "Improved AI models for Telugu, significantly enhancing Automatic Speech Recognition (ASR) accuracy. Conducted data analysis and refined pronunciation & dialect recognition using collected Telugu audio/video samples.",
      image: "https://source.unsplash.com/random/800x600/?ai",
      technologies: ["AI", "Data Analysis", "Speech Recognition"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h2" sx={{ color: '#fff', mb: 2 }}>
                        {project.title}
                      </Typography>
                      <Typography sx={{ color: '#fff', opacity: 0.7, mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            sx={{
                              background: 'rgba(33, 150, 243, 0.1)',
                              color: '#2196f3',
                              borderRadius: '4px',
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2 }}>
                      <Button 
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{ color: '#fff' }}
                      >
                        Code
                      </Button>
                      <Button
                        startIcon={<LaunchIcon />}
                        href={project.demo}
                        target="_blank"
                        sx={{ color: '#2196f3' }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;