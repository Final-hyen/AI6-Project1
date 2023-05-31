import React from 'react';
import Join from '../../Join/Join'
import Head from '../../Main/MainHeader'
import styled from 'styled-components'
function JoinPage () {
    return(
        <Main>
            <Head></Head>
            <Join></Join>
        </Main>
    )
}

export default JoinPage;

const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;