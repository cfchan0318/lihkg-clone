import React from 'react'
import styled from 'styled-components'
import StyledCustomButton from '../custom-button'

const PostListHeader = ({ className, title }) => {
  const handleRefresh = (e) => {
    e.preventDefault()
    console.log('You clicked refresh.')
  }

  return (
    <div className={className}>
      <div className="post-list-header-left">
        <StyledCustomButton title="Referesh" onClick={handleRefresh}>
          <i className="fi fi-rr-menu-burger" />
        </StyledCustomButton>
      </div>
      <div className="post-list-header-center">{title}</div>
      <div className="post-list-header-right">
        <StyledCustomButton title="Referesh" onClick={handleRefresh}>
          <i className="fi fi-rr-refresh"></i>
        </StyledCustomButton>

        <StyledCustomButton title="Create New Post" onClick={handleRefresh}>
          <i className="fi fi-rr-add"></i>
        </StyledCustomButton>
      </div>
    </div>
  )
}

const StyledPostListHeader = styled(PostListHeader)`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #242629;
  display: flex;
  align-items: center;

  .post-list-header-left {
    flex: 1;
    padding-left: 10px;
    color: white;
  }
  .post-list-header-center {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fffffe;
  }
  .post-list-header-right {
    flex: 1;
    color: white;
    padding-right: 10px;
    gap: 5px;
    display: flex;
    justify-content: flex-end;
  }
`
export default StyledPostListHeader
