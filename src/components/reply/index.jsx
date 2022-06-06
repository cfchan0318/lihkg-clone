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
    </div>
  )
}

const StyledReply = Styled(reply)`
    min-height: 200px;
    border-radius: 10px;
    background-color:#242629;
    padding: 30px;
    margin:10px;

    
    .reply-header-left-reply{
      display:flex;
      align-items:center;
      gap:5px;
    }


    .reply-header{
      display:flex;
      color:white

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
`
export default StyledReply
