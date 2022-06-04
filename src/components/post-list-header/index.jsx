import React from 'react'
import styled from 'styled-components'

const PostListHeader = ({ className }) => {
  return (
    <div className={className}>
      <div class="post-list-header-left"></div>
      <div class="post-list-header-center">React</div>
      <div class="post-list-header-right"></div>
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
  }
  .post-list-header-center {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fffffe;
  }
  .post-list-header-right {
    flex: 1;
  }
`
export default StyledPostListHeader
