import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from './Screenshot 2024-05-04 152418.png';
import image2 from './Screenshot 2024-05-04 152500.png';
import image3 from './Screenshot 2024-05-04 152526.png';
import image4 from './Screenshot 2024-05-04 152621.png';
import image5 from './Screenshot 2024-05-04 152710.png';
import image6 from './Screenshot 2024-05-04 152817.png';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 600, height: 550}} cols={2} rowHeight={164} >
      {itemData.map((item) => (
        <ImageListItem sx={{ border: '2px solid black'}} key={item.img}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
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
