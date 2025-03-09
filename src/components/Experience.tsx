'use client';

import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Experience as ExperienceType } from '../types';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);
const MotionListItem = motion(ListItem);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <MotionPaper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      elevation={0}
      sx={{ 
        p: 4, 
        mb: 4, 
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
          Professional Experience
        </Typography>
      </motion.div>
      
      <motion.div variants={container} initial="hidden" animate="show">
        {experiences.map((exp, index) => (
          <MotionBox
            key={index}
            variants={item}
            sx={{ mb: 4 }}
            whileHover={{ x: 10 }}
          >
            <Typography variant="h6" gutterBottom>
              {exp.jobTitle} - {exp.company}
            </Typography>
            <Typography 
              variant="body2" 
              gutterBottom 
              sx={{ 
                mb: 2, 
                color: 'primary.main',
                fontWeight: 500
              }}
            >
              {exp.duration}
            </Typography>
            <List dense disablePadding>
              {exp.description.map((desc, idx) => (
                <MotionListItem
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  disableGutters
                  sx={{ py: 0.5 }}
                >
                  <ListItemText 
                    primary={desc}
                    primaryTypographyProps={{ 
                      variant: 'body1',
                      sx: {
                        display: 'list-item',
                        listStyleType: 'disc',
                        marginLeft: 2,
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />
                </MotionListItem>
              ))}
            </List>
            {index < experiences.length - 1 && (
              <Divider sx={{ my: 3 }} />
            )}
          </MotionBox>
        ))}
      </motion.div>
    </MotionPaper>
  );
} 