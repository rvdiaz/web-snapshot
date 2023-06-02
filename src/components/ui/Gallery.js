import React, { useContext, useEffect } from 'react'
import { GalleryContext } from '../../context/GalleryContext';
import { Image } from './Image';
import { Loading } from './Loading';
import { NotFoundImages } from './NotFoundImages';

export const Gallery = (props) => {
  const {query}=props;
  const {images,loading,search}=useContext(GalleryContext);

  useEffect(() => {
    search(query);
  }, [query])

  
  if(loading)
    return <Loading/>;
  
  return (
    images.length>0
      ?
    <div className="gridContainer">
      {
        images.map((img,index)=>(
          <Image 
              id={img.id}
              farm={img.farm}
              server={img.server}
              secret={img.secret}
              key={index}
          />
      ))}
    </div>
    :
    <NotFoundImages/>
  )
}
