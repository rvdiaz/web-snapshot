import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const InputSearch = () => {
  const input=useRef(null);
  const navigate=useNavigate();
  
  const handlerSubmit=(e)=>{
    e.preventDefault();
    if(input.current.value!=='')
      navigate(`Search?name=${input.current.value}`);
  }

  return (
    <form 
      className="searcherWrapper"
      onSubmit={handlerSubmit}
      >
        <input
          ref={input}
        />
        <button
          type="submit"
        >
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
              fillRule="evenodd"
            />
          </svg>
        </button>
    </form>
  )
}
