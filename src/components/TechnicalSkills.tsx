'use client';

import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TechnicalSkills as TechnicalSkillsType } from '../types';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';

const MotionChip = motion(Chip);

const formatCategory = (category: string): string => {
  return category
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
    .trim();
};

interface TechnicalSkillsProps {
  skills: TechnicalSkillsType;
}

export function TechnicalSkills({ skills }: TechnicalSkillsProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        bgcolor: 'rgb(24, 33, 83)',
        py: { xs: 4, sm: 6 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: { xs: 3, sm: 4 },
            color: 'white',
            fontWeight: 300,
            fontSize: { xs: '1.75rem', sm: '2rem' },
          }}
        >
          Technical Skills
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 } }}>
          {Object.entries(skills).map(([category, items]) => (
            <Box key={category}>
              <Typography
                variant="h6"
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  color: 'white',
                  fontWeight: 400,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                }}
              >
                {formatCategory(category)}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 0.75, sm: 1 },
                }}
              >
                {items.map((skill: string) => (
                  <MotionChip
                    key={skill}
                    label={skill}
                    whileHover={{ 
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      height: { xs: '28px', sm: '32px' },
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 