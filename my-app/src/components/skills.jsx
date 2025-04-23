import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Dart", level: 75 }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 }
      ]
    },
    {
      category: "Database Systems",
      skills: [
        { name: "MongoDB (NoSQL)", level: 75 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Firebase Console", level: 70 }
      ]
    },
    {
      category: "Other Tools & Version Control",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Leadership Qualities", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 85 }
      ]
    }
  ];

  return (
    <Box
      id="skills"
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
            Technical Skills
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 3,
                        color: '#fff',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}
                    >
                      {category.category}
                    </Typography>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography sx={{ color: '#fff' }}>
                            {skill.name}
                          </Typography>
                          <Typography sx={{ color: '#2196f3' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              background: 'linear-gradient(90deg, #2196f3, #21cbf3)',
                            }
                          }}
                        />
                      </Box>
                    ))}
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

export default Skills;