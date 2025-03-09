import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useCallback } from 'react';

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Box 
      sx={{ 
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      >
        <IconButton
          component={motion.button}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            color: '#ffffff',
            bgcolor: '#4a90e2',
            width: 48,
            height: 48,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              bgcolor: '#357abd',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>

      <Box
        component="footer"
        sx={{
          width: '100%',
          bgcolor: '#f5f5f5',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 4,
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            component={motion.a}
            href="https://github.com/cyrilcheung7925"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              color: 'rgba(0, 0, 0, 0.7)',
              '&:hover': {
                color: '#4a90e2',
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component={motion.a}
            href="https://www.linkedin.com/in/cyrilcheungmingyin/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              color: 'rgba(0, 0, 0, 0.7)',
              '&:hover': {
                color: '#4a90e2',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
} 