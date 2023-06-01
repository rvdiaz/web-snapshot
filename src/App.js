import React from 'react'
import { Header } from './components/ui/Header'
import { GalleryWrapper } from './components/wrapper/GalleryWrapper'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import data from './dataSearch/dataSearch.json';
import { GalleryProvider } from './context/GalleryContext';

export const App = () => {
  const {items}=data;
  return (
    <GalleryProvider>
        <BrowserRouter>
        <div className="generalWrapper">
          <Header/>
          <Routes>
              <Route path='/' exact element={<GalleryWrapper title={items[0]}/>}></Route>
              {items.map((item,index)=>(
                <Route key={index} path={`/${item}`} element={<GalleryWrapper title={item}/>}/>
              ))}
          </Routes>
          <GalleryWrapper/>
       </div>
      </BrowserRouter>
    </GalleryProvider>

  )
}
