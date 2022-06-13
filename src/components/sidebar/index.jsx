import React from 'react'
import Styled from 'styled-components'

const Sidebar = ({ className, isOpen }) => {
  return <div className={className}>asdasd</div>
}

const StyledSideBar = Styled(Sidebar)`
    position:fixed;
    top:0;
    left:0;
    height: 100vh;
    width: 300px;
    background-color:white;

    transition: all 0.5s;
    -webkit-transition: all 0.25s;
    z-index:99;
    
    display:${({isOpen}) => isOpen? 'block':'none'}
`

export default StyledSideBar
