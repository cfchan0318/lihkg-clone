import React from 'react'
import styled from 'styled-components'

const PostHeader = ({ className }) => {
  return (
    <div className={className}>
      <div className="post-header-left">
        <span>asdasd</span>
      </div>
      <div className="post-header-right">
      <i className="fi fi-rr-star"></i>
      <i className="fi fi-rr-reply-all"></i>
        <i className="fi fi-rr-thumbs-up"></i>
        <i className="fi fi-rr-thumbs-down"></i>
        <i className="fi fi-rr-picture"></i>
        <i className="fi fi-rr-share"></i>
      </div>
    </div>
  )
}

const StyledPostHeader = styled(PostHeader)`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #242629;
  display: flex;
  align-items: center;

  .post-header-left {
    padding-left: 20px;
    color: #fffffe;
    overflow-x: hidden;
    flex: 2;
  }

  .post-header-right {
    padding-right: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 20px;
    flex: 2;
  }

  .fi {
    color: #fffffe;
  }
`
export default StyledPostHeader
