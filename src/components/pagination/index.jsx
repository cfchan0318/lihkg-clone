import React from "react";
import Styled from "styled-components";

const Pagination = ({className}) => {
    
    return (
        <div className={className}>
            <div>
                上一頁
            </div>
            <div>
                第一頁
            </div>
            <div>
                下一頁
            </div>
        </div>
    );
}

const StyledPagination = Styled(Pagination)`
    width: 100%;
    display:flex;
    justify-content: space-around;
    color: #FFFFFE;

`

export default StyledPagination;