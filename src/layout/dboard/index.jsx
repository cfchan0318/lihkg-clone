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
        flex:1;
       
    }
    .right{
        flex:2;
    }

    @media (max-width: 767px) {
        .right {
          display: none;
        }
      }
    
      @media (min-width: 992px) {
        .left {
          max-width:400px;
        }
      }
`

export default DBoard;