import React from 'react'
import { NavLink } from 'react-router-dom';

export const TabMenu = (props) => {
    const {title}=props;

  const handleClick=()=>{
    console.log('click');
  }  

  return (
    <NavLink
        className="tab"
        to={`/${title}`}
    >
        {title}
    </NavLink>
  )
}
