import React, { useEffect, useState } from 'react';
import { axiosClient } from '../../utils/axiosClient';
import styled from 'styled-components'
import ProductTable from '../ProductTable/productTable';

const ProductGet = () => {
    
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axiosClient.get('/products',)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(e => console.log(e.message))
    },[])


    return (
        <>
        {product.map((product, Idx) => (
        <Wrap key={Idx}>
            <img src={product.imgUrl} />
            <Div>
                <div>Product Name = {product.title}</div>
                <div>Product Description = {product.description}</div>
                <div>Product Price = {product.price}</div>
                <button onClick={async ()=>{
                    await axiosClient.delete(`/products/${product.product_no}`, {withCredentials : true})
                      .then(res => console.log(res.data))
                      .catch(e => console.log(e.message))
                }}>DELETE</button>
            </Div>
        </Wrap>
        ))
        }
        <ProductTable></ProductTable>
    
    </>
)
}


export default ProductGet;

const Wrap = styled.div`
    display : flex;
    flex-direction : row;

    padding-top : 30px;

    img {
        width : 400px;
    }
`


const Div = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-Items : left;

    font-size : 20px;
    font-weight : 700;

    margin-left : 20px;
`

