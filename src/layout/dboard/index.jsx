import React from "react";
import styled from 'styled-components';

const Element = ({className,left,right}) => {
    return (
        <div className={className}>
            <div className="left">{left}</div>
            <div className="right">{right}</div>
        </div>
    );
}

const DBoard = styled(Element)`
    width:100vw;
    height: 100vh;
    display:flex;

    .left{
        max-width:400px;
        flex:1;
        overflow:scroll;
    }
    .right{
        flex:2;
    }
`

export default DBoard;