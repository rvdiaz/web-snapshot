import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Gallery } from '../ui/Gallery';
import data from '../../dataSearch/dataSearch.json';

export const GalleryWrapper = (props) => {
  let title=props.title;
  const location=useLocation();
  let pathname=location.pathname.replace('/','');
  
  if(pathname===''){
    pathname=data.items[0];
  }
  if(pathname==='Search'){
    const queryParam=new URLSearchParams(location.search);
    pathname=queryParam.get('name');
    title=pathname;
  }

  const [first, setfirst] = useState('');

  useEffect(() => {
      setfirst(pathname);
  }, [location,setfirst,pathname])

  return (
    <div className="gallery">
        <h4 className="galleryTitle">
            {title} Pictures
        </h4>
        <Gallery query={first}/>
    </div>
  )
}
