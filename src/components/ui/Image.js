import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Image = (props) => {
  const {id,farm,server,secret}=props;
  const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

  return (
    <div className='imageWrapper'>
      <img src={url}/>
    </div>
  )
}
