'use client';

import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import cvData from '../../data/cv.json';
import { Hero } from '../components/Hero';
import { TechnicalSkills } from '../components/TechnicalSkills';
import { ProfessionalSummary } from '../components/ProfessionalSummary';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import type { CV } from '../types';
import { Header } from '../components/Header';
import { Contact } from '../components/Contact';
import { Footer } from '@/components/Footer';
import Head from 'next/head';

const title = "Cyril CV";
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const cv: CV = cvData;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Box 
          sx={{ 
            bgcolor: 'background.default', 
            minHeight: '100vh',
            position: 'relative',
          }}
        >
          <Header 
            name={cv.name} 
            resumePath={cv.resumePath}
          />
          
          <Hero 
            name={cv.name} 
            title={cv.title} 
            contact={cv.contact}
            shortSummary={cv.shortSummary}
            resumePath={cv.resumePath}
          />
          
          <Box 
            sx={{ 
              position: 'relative',
              zIndex: 2,
              mb: 8
            }}
          >
            <Container 
              maxWidth="md" 
              component={motion.div}
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} id="summary">
                <ProfessionalSummary summary={cv.summary} />
              </motion.div>
            </Container>
          </Box>

          <Box sx={{ bgcolor: '#f5f5f5', position: 'relative', zIndex: 1 }}>
            <Container 
              maxWidth="md" 
              component={motion.div}
              variants={container}
              initial="hidden"
              animate="show"
              sx={{ 
                py: 8 
              }}
            >
              <motion.div variants={item} id="experience">
                <Experience experiences={cv.experience} />
              </motion.div>
            </Container>
          </Box>

          <Box id="skills">
            <TechnicalSkills skills={cv.technicalSkills} />
          </Box>

          <Box sx={{ bgcolor: '#f5f5f5' }}>
            <Container 
              maxWidth="md" 
              component={motion.div}
              variants={container}
              initial="hidden"
              animate="show"
              sx={{ py: 8 }}
            >
              <motion.div variants={item} id="education">
                <Education education={cv.education} />
              </motion.div>
            </Container>
          </Box>

          <Box id="contact">
            <Contact contact={cv.contact} />
          </Box>

          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}
