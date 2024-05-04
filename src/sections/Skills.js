import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const ProgressDialContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  marginRight: theme.spacing(4), // Add spacing between dials
}));

const ProgressDial = ({ label, progress }) => {
  return (
    <ProgressDialContainer>
      <CircularProgress
        variant="determinate"
        size={150}
        thickness={4}
        value={progress}
        color={progress >= 50 ? "success" : progress >= 40 ? "warning" : "error"}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <CircularProgress
        variant="determinate"
        size={150}
        thickness={4}
        value={100}
        sx={{
          color: 'rgba(0, 0, 0, 0.20)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 25,
          bottom: 0,
          right: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" component="div" color="text.primary">{`${Math.round(progress)}%`}</Typography>
        <Typography variant="caption" component="div" color="text.primary" sx={{ color: 'black', fontWeight:'600',fontSize:'1em' }}>{label}</Typography>
      </Box>
    </ProgressDialContainer>
  );
};

export default function ProgressDials() {
  return (
    <div class='progress'>
    <h3>Skills</h3>
      <ProgressDial label="Python" progress={90} />
      <ProgressDial label="C++" progress={80} />
      <ProgressDial label="HTML" progress={95} />
      <ProgressDial label="CSS" progress={90} />
      <ProgressDial label="JavaScript" progress={70} />
      <ProgressDial label="Django" progress={60} />
      <ProgressDial label="Django REST Framework" progress={75} />
      <ProgressDial label="React-JS" progress={60} />

    </div>
  );
}
