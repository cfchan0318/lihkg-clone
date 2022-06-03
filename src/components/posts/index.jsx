import styled from 'styled-components'
import React from 'react'

const Element = ({ className }) => {
    return (
        <div className={className}>
            <div className='post-header'>
                <div className='post-info'>
                    <div className='user'>
                        <span>cfchan0318</span>
                    </div>
                </div>
                <div className='post-pages'>1頁</div>
            </div>
            <div className='post-content'>
                <span>有冇人有自己嘅side project?</span>
            </div>
        </div>
    );
}

const Post = styled(Element)`
  height: 100px;
  width: 400px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;

  .post-header{
      display:flex;
      margin-bottom:20px;
  }
  .post-info{
      flex:10;
      display:flex;
  }
  .post-pages{
      flex:2;
      display:flex;
      justify-content: flex-end;
  }

  .post-content>span{
      font-size: 18px;
  }

`

export default Post;
