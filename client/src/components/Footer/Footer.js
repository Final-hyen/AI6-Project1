import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <Div>
            COPYRIGHT © 9UCCI. All rights reserved.
            <br />
            메일 문의  9UCCI@elice.com 전화 문의 010-1234-0458
        </Div>
    )
}

export default Footer;

const Div = styled.div `
  width : 100%;

  color : #D9D9D9;
  text-align : right;
  font-size : 1.1em;
  font-weight:700;
  
  background: #a9a9a9;
`