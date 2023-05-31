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
      <>
          <div>
            <Head></Head>
          </div>
      </>
  )
}

export default LandingPage