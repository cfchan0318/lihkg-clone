import React from 'react'
import styled from 'styled-components'

const PostHeader = ({ className }) => {
  return (
    <div className={className}>
      <span className='post-title'>asd</span>
    </div>
  )
}

const StyledPostHeader = styled(PostHeader)`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #242629;
  display:flex;
  align-items:center;
  padding-left:20px;

  .post-title{

      color: #FFFFFE;
  }
  
`
export default StyledPostHeader;
