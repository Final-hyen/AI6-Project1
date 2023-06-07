import React from 'react';
import ImageSlider from './Body';
import styled from "styled-components";

const Body = () => {
    const images = [
        'https://images.pexels.com/photos/5007234/pexels-photo-5007234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2356344/pexels-photo-2356344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
    const address = [
        '/outer',
        '/top',
        '/bottom',
    ]

    return (
        <Contain>
            <ImageSlider address={address} images={images}/>
        </Contain>
    )
}

export default Body; 

const Contain = styled.div`
// width: 100vw;
height: 80vh;

margin-top: 3em;

display: flex;
justify-content: center;
`