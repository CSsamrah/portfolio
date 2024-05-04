import './App.css';
import ResponsiveAppBar from './Components/Navbar'
import BoxSystemProps from './Components/Profile'
import Aboutme from './sections/Aboutme';
import ProgressDials from './sections/Skills';
import StandardImageList1 from './sections/Projects'
import { Box } from '@mui/material';



function App() {
  function downloadResume() {
    // Replace 'resume.pdf' with the path to your resume file
    const resumeUrl = './frontend_resume';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Samrah_Fatima_Resume.pdf'; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div class='maininfo'>
        <div class="profileinfo">
          <h3>Hi,<br></br> I'm SAMRAH FATIMA ,<br></br>Front-End Developer</h3>
          <p>I design and develop experiences that make people’s lives simpler<br></br> through Web and Mobile apps.I work with Figma , HTML5, CSS3, JavaScript,<br></br> React, ReactNative and Flutter.</p><br></br>
          <div><button class='mainbutton' onClick={downloadResume}>Download Resume</button>   
          <a href="#projects">  <button class='mainbutton'>See my projects</button></a></div>
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
