import styled from 'styled-components'
import React from 'react'

const Element = ({ className,id,user,title,pages }) => {
    return (
        <div className={className}>
            <div className='post-header'>
                <div className='post-info'>
                    <div className='post-user'>{user}</div>
                   
                </div>
                <div className='post-pages'>{pages}頁</div>
            </div>
            <div className='post-content'>
                <span className='post-title'>{title}</span>
            </div>
        </div>
    );
}

const Post = styled(Element)`
  min-height: 100px;
  
 
  border-radius: 10px;
  background-color:#242629;
  padding: 30px;

  .post-header{
      display:flex;
      margin-bottom:10px;
  }
  .post-info{
      flex:10;
      display:flex;
  }
  .post-user{
      color:#fffffe;
      font-size:16px;
  }
  .post-pages{
      flex:2;
      display:flex;
      justify-content: flex-end;
      color: #7f5af0;
      font-size:16px;
  }

  .post-content>span{
      font-size: 18px;
      color:#94a1b2;
      
  }

`

export default Post;
