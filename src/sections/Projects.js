import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from '../Components/Screenshot 2024-05-04 152418.png';
import image2 from '../Components/Screenshot 2024-05-04 152500.png';
import image3 from '../Components/Screenshot 2024-05-04 152526.png';
import image4 from '../Components/Screenshot 2024-05-04 152621.png';
import image5 from '../Components/Screenshot 2024-05-04 152710.png';
import image6 from '../Components/Screenshot 2024-05-04 152817.png';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function StandardImageList1() {
  return (
    <div class='projectshead'>
      <h2>Projects</h2>
    <div class='projectsinfo'>
    <ImageList sx={{ width: 1000, height: 550 }} cols={3} rowHeight={194}  >
      {itemData.map((item) => (
        <ImageListItem sx={{ border: '2px solid black'}} key={item.img}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
              title={item.title}
              position="below"
            />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    </div>
  );
}

const itemData = [
  {
    img: image1,
    title: 'sign language detector',
  },
  {
    img: image2,
    title: 'voting system',
  },
  {
    img: image3,
    title: 'ocean odyssey',
  },
  {
    img: image4,
    title: 'to-do list',
  },
  {
    img: image5,
    title: 'careem app',
  },
  {
    img: image6,
    title: 'saylani landing page',
  },
];
