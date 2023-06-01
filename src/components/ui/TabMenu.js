import React from 'react'

export const TabMenu = (props) => {
    const {title}=props;

  const handleClick=()=>{
    console.log('click');
  }  

  return (
    <a
        className="tab"
        onClick={handleClick}
    >
        {title}
    </a>
  )
}
