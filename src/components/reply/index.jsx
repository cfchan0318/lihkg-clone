import React from 'react'
import Styled from 'styled-components'

const reply = ({ className }) => {
  return (
    <div className={className}>
      <div className="reply-header">
        <div className="reply-header-left">
          <div>#1 asdasd123 12 Days ago</div>

          <div className="reply-header-left-reply">
            <i className="fi fi-rr-comment-alt" />
            <span>Reply</span>
          </div>
        </div>

        <div className="reply-header-right">asdasd</div>
      </div>

      <div className="reply-content">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham
      </div>

      <div className="reply-footer">
        <div className='upvote'>
            <i className="fi fi-rr-thumbs-up" />
            <span>123</span>
        </div>
        <div className='downvote'>
          <i className="fi fi-rr-thumbs-down" />
          <span>123</span>
        </div>
      </div>
    </div>
  )
}

const StyledReply = Styled(reply)`
    border-radius: 10px;
    background-color:#242629;
    padding: 30px;
    display:flex;
    flex-direction: column;
    gap:20px;


    .reply-header{
      display:flex;
      color:white;
      flex:1;
      
    }
    
    .reply-header-left-reply{
      display:flex;
      align-items:center;
      gap:5px;
    }
    .upvote{
      display:flex;
      align-items:center;
      gap:5px;
    }

    .downvote{
      display:flex;
      align-items:center;
      gap:5px;
    }

    .reply-header-left{
      display:flex;
      flex:2;
      align-items:center;
      gap:20px;
    }
    .reply-header-right{
      flex:1;
      display:flex;
      justify-content:flex-end;
    }


    .reply-content{
      flex:3;
      color:#94a1b2;
    
      width:100%;
      min-width: 0;
    }
    .reply-footer{
      flex:1;
      display:flex;
      gap:10px;
      color:white;
      min-height:30px;
      width:100%;
    }

`
export default StyledReply
