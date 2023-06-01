import React from 'react'
import { InputSearch } from './components/ui/InputSearch'
import { Tabs } from './components/ui/Tabs'
import { GalleryWrapper } from './components/wrapper/GalleryWrapper'

export const App = () => {
  return (
    <div className="generalWrapper">
        <div className="header">
            <h1 className="mainTitle">
                Snapshot
            </h1>
            <InputSearch/>
            <Tabs/>
        </div>
        <GalleryWrapper/>
    </div>
  )
}
