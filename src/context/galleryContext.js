import { createContext, useState } from "react";

export const GalleryContext=createContext();

export const GalleryProvider=(props)=>{
    const [images, setimages] = useState([]);
    const [loading, setloading] = useState(false);

    const search=(query)=>{
        
    }
    
    return (
        <GalleryContext.Provider value={{images,loading,search}}>
            {props.children}
        </GalleryContext.Provider>
    )
}

