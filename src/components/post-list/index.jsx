import React from 'react'
import styled from 'styled-components'
import StyledPost from '../post'

const PostList = ({ className, posts }) => {
  return (
    <div className={className}>
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <StyledPost
            key={index}
            user={post.user}
            title={post.title}
            pages={post.pages}
          />
        </div>
      ))}
    </div>
  )
}

const StyledPostList = styled(PostList)`
  display: inline-flex;
  flex-direction: column;
  background-color: #16161a;
  padding:10px;
  height:100%;
  overflow-y:scroll;

  .post {
    width:100%;
    margin-bottom:15px;
  }
`

export default StyledPostList;
