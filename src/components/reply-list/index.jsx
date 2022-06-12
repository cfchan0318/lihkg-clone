import React from "react";
import Styled from 'styled-components';
import StyledReply from "../reply";
import StyledPagination from "../pagination";

const ReplyList = ({ className }) => {
    return (
        <div className={className}>
            <StyledPagination></StyledPagination>
            <StyledReply></StyledReply>
            <StyledReply></StyledReply>
            <StyledReply></StyledReply>

        </div>
    );
}

const StyledReplyList = Styled(ReplyList)`
    padding:20px;
    display:flex;
    flex-direction:column;
    gap: 20px;
    overflow-y:scroll;
  height:calc(100vh - 60px);

`;

export default StyledReplyList