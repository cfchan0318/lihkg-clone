import React from 'react'
import Styled from 'styled-components'
import StyledCustomButton from '../custom-button'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChannels } from '../../features/sidebar/sidebarSlice'

const Sidebar = ({ className, isOpen, closeOnClick }) => {
  const { channels } = useSelector((state) => state.sidebar)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch])

  return (
    <div className={className}>
      <div className="sidebar-header">
        <StyledCustomButton
          onClick={() => {
            closeOnClick()
          }}
        >
          <i className="fi fi-rr-cross-small" />
        </StyledCustomButton>
        
      </div>
      <div className="sidebar-channels">
        {channels.map(channel => (
          <div className="sidebar-channel" key={channel.id}>{channel.name}</div>
        ))}
        
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
    -webkit-transition: all 0.5s;
    
    .sidebar-header{
      width:100%;
      display:flex;
     
     justify-content:flex-end;
    }

    .sidebar-channels{
      width:100%;
      display:flex;
     
     justify-content:flex-end;
    }

    .sidebar-channel{
      background-color:white;
      color:black;
    }

    .fi{
      color:white;
    }
`

export default StyledSideBar
