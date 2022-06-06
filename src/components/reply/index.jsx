import React from 'react'
import Styled from 'styled-components'

const reply = ({ className }) => {
  return (
    <div className={className}>
      <div className="reply-header">
        sadsd
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

    .reply-header{
      display:flex;
    }
`
export default StyledReply
