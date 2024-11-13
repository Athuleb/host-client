import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';

import axios from 'axios';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Explore() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const getImage = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/gallery/')
      console.log('API Response:', response);
      console.log(' Response:', response.data);
      if (Array.isArray(response.data.photos)) {
        setImages(response.data.photos);
      } else {
        console.error('API response is not an array');
      }
    }
    catch (error) {
      console.error('Error fetching images:', error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div style={{ paddingTop: '10vh' }}>
      {loading ? (
        <ImageList sx={{ width: '100%', minHeight: '100vh' }} variant="masonry" cols={4} gap={8}>
          {[...Array(8)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              animation="wave"
              width="100%"
              height={121} 
              style={{ borderRadius: '4px' }}
            />
          ))}
        </ImageList>
      ) : (
        <ImageList sx={{ width: '100%', height: 'auto' }} variant="masonry" cols={5} >
          {images.map((item, index) => {
            const aspectRatio = item.width / item.height;
            const cols = aspectRatio > 1 ? 2 : 1; 
            const rows = aspectRatio > 1.5 ? 2 : 1; 
            return (
              <ImageListItem key={index} cols={cols} rows={rows}>
                <img
                  src={item.src.original}
                  alt={item.title || 'Image'}
                  //loading="lazy"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      )}
    </div>
  );
}
