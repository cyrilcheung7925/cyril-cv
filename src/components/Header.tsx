'use client';

import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { motion, AnimatePresence } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const MotionAppBar = motion(AppBar);

interface HeaderProps {
  name: string;
  resumePath: string;
}

export function Header({ name, resumePath }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Check which section is currently in view
      const sections = ['hero', 'summary', 'experience', 'skills', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <MotionAppBar
        position="fixed"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        sx={{
          backgroundColor: isScrolled ? 'rgb(24, 33, 83)' : 'transparent',
          boxShadow: isScrolled ? 1 : 'none',
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button
            onClick={() => scrollToSection('#hero')}
            sx={{
              color: '#fff',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              fontWeight: 500,
              textTransform: 'none',
              position: 'relative',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              letterSpacing: '0.02em',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: activeSection === 'hero' ? '100%' : '0%',
                height: '2px',
                background: 'linear-gradient(90deg, #64ffda 0%, #00b4d8 100%)',
                boxShadow: activeSection === 'hero' ? '0 0 10px rgba(100, 255, 218, 0.5)' : 'none',
                transition: 'all 0.3s ease',
              }
            }}
          >
            {name}
          </Button>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                startIcon={<DownloadIcon />}
                href={resumePath}
                download
                sx={{
                  color: '#fff',
                  mr: 2,
                  backgroundColor: 'rgba(100, 255, 218, 0.15)',
                  border: '1px solid #64ffda',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.25)',
                    border: '1px solid #64ffda',
                    boxShadow: '0 0 15px rgba(100, 255, 218, 0.3)',
                  },
                }}
              >
                Download CV
              </Button>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: '#fff',
                    mx: 1,
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: activeSection === item.href.slice(1) ? '100%' : '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #64ffda 0%, #00b4d8 100%)',
                      boxShadow: activeSection === item.href.slice(1) ? '0 0 10px rgba(100, 255, 218, 0.5)' : 'none',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </MotionAppBar>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
                backgroundColor: 'rgb(24, 33, 83)',
              },
            }}
          >
            <Box sx={{ pt: 8 }}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => scrollToSection('#hero')}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: '#ffffff',
                        fontWeight: activeSection === 'hero' ? 600 : 500,
                        fontSize: '1.1rem'
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      },
                      backgroundColor: activeSection === 'hero' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                      borderLeft: activeSection === 'hero' ? '3px solid #64ffda' : '3px solid transparent',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href={resumePath}
                    download
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: '#ffffff',
                        fontWeight: 500,
                        fontSize: '1rem'
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      },
                    }}
                  >
                    <DownloadIcon sx={{ mr: 1, color: '#ffffff' }} />
                    <ListItemText primary="Download CV" />
                  </ListItemButton>
                </ListItem>
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      onClick={() => scrollToSection(item.href)}
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: '#ffffff',
                          fontWeight: activeSection === item.href.slice(1) ? 600 : 500,
                          fontSize: '1rem'
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        },
                        backgroundColor: activeSection === item.href.slice(1) ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                        borderLeft: activeSection === item.href.slice(1) ? '3px solid #64ffda' : '3px solid transparent',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
} 