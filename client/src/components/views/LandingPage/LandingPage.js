import React from 'react'
import Head from '../../Main/MainHeader';
import styled from 'styled-components'
import Body from '../../Main/MainBody';
import Footer from '../../Footer/Footer';

function LandingPage() {
  // useEffect(()=>{
  //   axios.get('/api/hello')
  //   .then(res=>{console.log(res.data)})
  // },[])


  return (
      <Main>
        <Head></Head>
        <Body></Body>
      </Main>
  )
}

export default LandingPage

const Main = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;