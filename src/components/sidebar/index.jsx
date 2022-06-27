import React from 'react'
import Styled from 'styled-components'
import StyledCustomButton from '../custom-button'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChannels,toggleSidebar } from '../../features/sidebar/sidebarSlice'

const Sidebar = ({ className, isOpen, closeOnClick }) => {
  const { channels } = useSelector((state) => state.sidebar)
  const dispatch = useDispatch()

  const handleChannelOnClick = (id, name) => {
    console.log(id + " : " + name);
    dispatch(toggleSidebar());
  }

  React.useEffect(() => {
    dispatch(fetchChannels())
  }, [dispatch])

  return (
    <div className={className}>
      <div className="sidebar-content">
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
          {channels.map((channel) => (
            <div className="sidebar-channel" key={channel.id}>
              <StyledCustomButton title={channel.name} onClick={()=>handleChannelOnClick(channel.id,channel.name)}>{channel.name}</StyledCustomButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const StyledSideBar = Styled(Sidebar)`
    z-index:1;
    position:fixed;
    top:0;
    padding-top:30px;
    height: 100vh;
    width: ${({ isOpen }) => (isOpen ? '320px' : '0px')};
    background-color:#242629;

    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;

    .sidebar-content{
     padding-left:30px;
     padding-right:30px;
    }
    
    .sidebar-header{
      width:100%;
      min-width:0px;
      display:flex;
      justify-content:flex-end;
      flex-wrap:no-wrap;
      overflow:hidden;

    }

    .sidebar-channels{
      width:100%;
      display:flex;
      flex-wrap: wrap;
      gap: 1rem 0;
    }

    .sidebar-channel{
      width: 50%;
      white-space: nowrap;
      word-break:break-word;
      overflow:hidden;
      display:flex;
      color:#fffffe;
      justify-content:center;
    }

    .fi{
      color:white;
    }
`

export default StyledSideBar
