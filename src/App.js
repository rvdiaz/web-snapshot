import React from 'react'
import { Header } from './components/ui/Header'
import { GalleryWrapper } from './components/wrapper/GalleryWrapper'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import data from './dataSearch/dataSearch.json';
import { GalleryProvider } from './context/GalleryContext';
import { NotFoundPage } from './components/ui/NotFoundPage';

export const App = () => {
  const {items}=data;
  return (
    <GalleryProvider>
        <BrowserRouter basename="/web-snapshot">
        <div className="generalWrapper">
          <Header/>
          <Routes>
              <Route path='/' element={<GalleryWrapper title={items[0]}/>}></Route>
              {items.map((item,index)=>(
                <Route key={index} path={`/${item}`} element={<GalleryWrapper title={item}/>}/>
              ))}
              <Route 
                path='/Search' 
                element={<GalleryWrapper 
                />}/>
              <Route 
                path='*' 
                element={<NotFoundPage 
                />}/>
          </Routes>
       </div>
      </BrowserRouter>
    </GalleryProvider>

  )
}
