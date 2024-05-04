import * as React from 'react';
import Box from '@mui/material/Box';
import profile from './samrahprofile.jpeg'


export default function BoxSystemProps() {
  return (
    <Box
      height={350}
      width={300}
      my={4}
      display="flex"
      alignItems="center"
      sx={{
        border: '3px solid black',
        borderRadius: '0px 0px 0px 90px', // Adjust the border radius as needed
        overflow: 'hidden', // This ensures that the image within the box conforms to the border radius
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginLeft:'auto',

      }}
    >
      <img src={profile} alt="Portfolio" width={400} height={380} />
    </Box>
  );
}
