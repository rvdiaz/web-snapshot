import React from 'react'
import { Tabs } from './Tabs';
import { InputSearch } from './InputSearch'

export const Header = () => {
  return (
    <div className="header">
        <h1 className="mainTitle">
            Snapshot
        </h1>
        <InputSearch/>
        <Tabs/>
    </div>
  )
}
