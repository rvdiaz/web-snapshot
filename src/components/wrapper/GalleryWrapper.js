import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Gallery } from '../ui/Gallery';

export const GalleryWrapper = (props) => {
  const {title}=props;
  const location=useLocation();
  const pathname=location.pathname.replace('/','');
  const [first, setfirst] = useState('');

  useEffect(() => {
    setfirst(pathname);
  }, [pathname,setfirst])

  return (
    <div className="gallery">
        <h4 className="galleryTitle">
            {title} Pictures
        </h4>
        <Gallery query={first}/>
    </div>
  )
}
