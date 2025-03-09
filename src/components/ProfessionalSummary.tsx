'use client';

import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);

interface ProfessionalSummaryProps {
  summary: string;
}

export function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <Paper
      sx={{ 
        p: 4, 
        mt: 4,
        mb: 4, 
        borderRadius: 2,
        background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
          transform: 'scale(1.02)'
        }
      }}
    >
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.8,
          color: '#5E5E5E',
          fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
          fontWeight: 300
        }}
      >
        {summary}
      </Typography>
    </Paper>
  );
} 