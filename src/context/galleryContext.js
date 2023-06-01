import axios from "axios";
import { createContext, useState } from "react";

export const GalleryContext=createContext();

export const GalleryProvider=(props)=>{
    const [images, setimages] = useState([]);
    const [loading, setloading] = useState(true);
    const apiKey=process.env.REACT_APP_APIKEY;
  
    const search=(query)=>{
        axios({
            method: 'get',
            url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
          })
            .then(function (response) {
                setimages(response.data.photos.photo);
                setloading(false);
            })
            .catch(()=>{
                console.log("error");
            })
    }
    
    return (
        <GalleryContext.Provider value={{images,loading,search,setloading}}>
            {props.children}
        </GalleryContext.Provider>
    )
}

