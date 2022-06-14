import React from 'react'
import Styled from 'styled-components'
import StyledCustomButton from '../custom-button'

const Sidebar = ({ className, isOpen, close }) => {
  return (
    <div className={className}>
      <div className="sidebar-header">
        <StyledCustomButton onClick={close}>
          <i className="fi fi-rr-cross-small" />
        </StyledCustomButton>
      </div>
    </div>
  )
}

const StyledSideBar = Styled(Sidebar)`
    z-index:1;
    position:fixed;
    top:0;
    left:-60px;
    overflow-x:hidden;
    padding:30px;
    height: 100vh;
    width: ${({ isOpen }) => (isOpen ? '320px' : '0px')};
    background-color:#242629;

    transition: all 0.5s;
    -webkit-transition: all 0.25s;
    
    .sidebar-header{
      width:100%;
      display:flex;
     
     justify-content:flex-end;
    }

    .fi{
      color:white;
    }
`

export default StyledSideBar
