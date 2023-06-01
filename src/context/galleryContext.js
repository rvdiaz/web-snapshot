import { createContext, useState } from "react";

export const GalleryContext=createContext();

export const GalleryProvider=(props)=>{
    const [images, setimages] = useState([]);
    const [loading, setloading] = useState(false);

    const search=(query)=>{
        //axios request here
    }
    
    return (
        <GalleryProvider.Provider value={{images,loading,search}}>
            {props.children}
        </GalleryProvider.Provider>
    )
}

