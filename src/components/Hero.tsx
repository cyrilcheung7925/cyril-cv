'use client';

import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';
// Import icons
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Create motion components
const MotionAvatar = motion(Avatar);

interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

interface HeroProps {
  name: string;
  title: string;
  contact: ContactInfo;
  shortSummary: string;
  resumePath: string;
}

export function Hero({ name, title, contact, shortSummary, resumePath }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        height: 'auto',
        minHeight: { xs: '100vh', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: '80px', md: '100px' },
        pb: '48px',
        zIndex: 3,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.7)',
          zIndex: -2,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
          zIndex: -1,
        }
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          px: { xs: 2, sm: 4 }
        }}
      >
        <Box
          id="hero-content"
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
            backgroundColor: 'white',
            borderRadius: '8px 8px 0 0',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            width: '100%'
          }}
        >
          <Box sx={{ 
            px: { xs: 2, sm: 4 },
            py: { xs: 4, sm: 6 },
          }}>
            <MotionAvatar
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              sx={{
                width: { xs: 160, sm: 200 },
                height: { xs: 160, sm: 200 },
                margin: '0 auto 24px',
                cursor: 'pointer',
                border: '3px solid white',
                boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                borderRadius: '16px',
                '& .MuiAvatar-img': {
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                },
              }}
              src="/profilepic.png"
              alt={name}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  textAlign: 'center',
                  fontWeight: 300,
                  color: 'text.primary',
                  letterSpacing: '0.02em',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
              >
                {name}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  fontWeight: 300,
                  mt: { xs: 1, sm: 2 },
                  mb: { xs: 3, sm: 4 },
                  color: 'primary.main',
                  letterSpacing: '0.01em',
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                }}
              >
                {title}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto',
                  color: 'text.secondary',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  lineHeight: 1.6,
                }}
              >
                {shortSummary}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '2rem',
              }}
            >
              <Button
                component={motion.a}
                href={resumePath}
                download
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  bgcolor: '#116DFF',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 500,
                  boxShadow: '0 4px 12px rgba(17, 109, 255, 0.3)',
                  '&:hover': {
                    bgcolor: '#4A90E2',
                    boxShadow: '0 6px 16px rgba(17, 109, 255, 0.4)',
                  },
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </Box>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            justifyContent="center"
            sx={{
              width: '100%',
              py: { xs: 1.5, sm: 2 },
              px: { xs: 2, sm: 4 },
              bgcolor: 'rgb(24, 33, 83)',
              borderRadius: '0 0 8px 8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              visibility: isVisible ? 'visible' : 'hidden',
              pointerEvents: isVisible ? 'auto' : 'none'
            }}
          >
            {[
              {
                icon: <LinkedInIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: 'white' }} />,
                text: 'LinkedIn Profile',
                href: contact.linkedin,
                label: 'LinkedIn Profile'
              },
              {
                icon: <EmailIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: 'white' }} />,
                text: contact.email,
                href: `mailto:${contact.email}`,
                label: 'Email Address'
              },
              {
                icon: <PhoneIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: 'white' }} />,
                text: contact.phone,
                href: `tel:${contact.phone}`,
                label: 'Phone Number'
              }
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  target={item.label === 'LinkedIn Profile' ? '_blank' : undefined}
                  rel={item.label === 'LinkedIn Profile' ? 'noopener noreferrer' : undefined}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row', sm: 'column' },
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 0.5 },
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                  aria-label={item.label}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 32, sm: 40 },
                      height: { xs: 32, sm: 40 },
                      borderRadius: '50%',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontWeight: 400,
                      color: 'white',
                    }}
                  >
                    {item.text}
                  </Typography>
                </Link>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
} 