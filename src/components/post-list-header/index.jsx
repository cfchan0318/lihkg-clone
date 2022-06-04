import React from 'react'
import styled from 'styled-components'

const PostListHeader = ({ className }) => {
  return (
    <div className={className}>
      <div class="post-list-header-left">
        <i onClick={() => { console.log("open")}} class="fi fi-rr-menu-burger" />   
      </div>
      <div class="post-list-header-center">React</div>
      <div class="post-list-header-right">
        <i class="fi fi-rr-refresh" />
        <i class="fi fi-rr-add"></i>
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
    padding-left:10px;
    color:white;
  }
  .post-list-header-center {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fffffe;
  }
  .post-list-header-right {
    flex: 1;
    color:white;
    padding-right:10px;
    display: flex;
    justify-content: flex-end;
  }

  .fi-rr-refresh{
    margin-right: 20px;
  }
`
export default StyledPostListHeader
