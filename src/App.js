import './App.css';
import ResponsiveAppBar from './Components/Navbar'
import BoxSystemProps from './Components/Profile'
import Aboutme from './sections/Aboutme';
import ProgressDials from './sections/Skills';
import StandardImageList1 from './sections/Projects'
import { Box } from '@mui/material';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div class='maininfo'>
        <div class="profileinfo">
          <h3>Hi,<br></br> I'm SAMRAH FATIMA ,<br></br>Front-End Developer</h3>
          <p>I design and develop experiences that make people’s lives simpler<br></br> through Web and Mobile apps.I work with Figma , HTML5, CSS3, JavaScript,<br></br> React, ReactNative and Flutter.</p><br></br>
          <div><button class='mainbutton'>Hire me</button> <button class='mainbutton'>See my projects</button></div>
        </div>
        <BoxSystemProps />
      </div>
      <Box id='aboutme'><Aboutme/></Box>
      <Box id='skills'><ProgressDials/></Box>
      <Box id='projects'><StandardImageList1/></Box>
    
    </div>
  );
}

export default App;
