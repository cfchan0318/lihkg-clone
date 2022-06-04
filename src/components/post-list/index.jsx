import React from 'react'
import styled from 'styled-components'
import Post from '../post'

const Element = ({ className, posts }) => {
  return (
    <div className={className}>
      {posts.map((post, index) => (
        <div className="post">
          <Post
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

const PostList = styled(Element)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #16161a;
  padding:10px;
  height:100%;

  .post {
    margin-bottom:15px;
  }
`

export default PostList
