'use client';

import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Education as EducationType } from '../types';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <MotionPaper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      elevation={0}
      sx={{ 
        p: 4, 
        borderRadius: 2,
        '&:hover': {
          transform: 'translateY(-5px)',
          transition: 'transform 0.3s ease-in-out',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show">
        {education.map((edu, index) => (
          <MotionBox
            key={index}
            variants={item}
            sx={{ mb: 2 }}
            whileHover={{ x: 10 }}
          >
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              {edu.degree}
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom
              sx={{
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              {edu.institution}
            </Typography>
          </MotionBox>
        ))}
      </motion.div>
    </MotionPaper>
  );
} 