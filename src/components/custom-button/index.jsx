import React from 'react'
import Styled from 'styled-components'

const CustomButton = ({ className, title, children, onClick }) => {
  return (
    <button type="button" title={title} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

const StyledCustomButton = Styled(CustomButton)`
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    outline: none;
    
  
    height:30px;
    width:30px;


   
    color: #fffffe;

    border-radius:10px;
    transition: all 0.3s ease;


    &:hover{
        border: none;
        outline: none;
        background-color:#72757e;
    }

    &:focus{
        border: none;
        outline: none;
    }

    &>i{
      font-size:14px;
   
    }


    i[class^="fi-rr-"]:before, i[class*=" fi-rr-"]:before, span[class^="fi-rr-"]:before, span[class*="fi-rr-"]:before{
      line-height:2;
    }
    
`

export default StyledCustomButton
