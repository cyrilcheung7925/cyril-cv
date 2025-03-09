'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Contact as ContactType } from '../types';
// Import icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ContactProps {
  contact: ContactType;
}

export function Contact({ contact }: ContactProps) {
  const contactItems = [
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: contact.linkedin,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
      label: 'Location',
      value: contact.location,
      href: `https://www.google.com/maps/place/${encodeURIComponent(contact.location)}`,
    },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        bgcolor: '#1a1a2e',
        color: '#ffffff',
        py: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(26, 26, 46, 0.95), rgba(26, 26, 46, 0.98))',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 300,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            color: '#ffffff',
          }}
        >
          Contact Me
        </Typography>

        <Grid 
          container 
          spacing={{ xs: 4, md: 6 }} 
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {contactItems.map((item) => (
            <Grid 
              item
              xs={12} 
              sm={6} 
              md={3} 
              key={item.label}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    sx={{
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: 'inherit',
                      '&:hover': {
                        '& .icon-container': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                          bgcolor: '#4a90e2',
                        },
                        '& .contact-text': {
                          color: '#4a90e2',
                        }
                      },
                    }}
                  >
                    <Box
                      className="icon-container"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: '#2c2c44',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        color: '#ffffff',
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="body1"
                      className="contact-text"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 400,
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Link>
                ) : (
                  <>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: '#2c2c44',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        color: '#ffffff',
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 400,
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                      }}
                    >
                      {item.value}
                    </Typography>
                  </>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 