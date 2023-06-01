import React from 'react'
import {TabMenu} from './TabMenu';
import dataSearch from '../../dataSearch/dataSearch.json';

export const Tabs = () => {
  const {items}=dataSearch;
  return (
    <div className='gridContainer'>
      {items.map((item,index)=>(
        <TabMenu title={item} key={index}/>
      ))}
    </div>
  )}