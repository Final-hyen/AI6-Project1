import React from "react";
import { Contain, Figure, Grid, Img } from "./ProductPageCSS";

const ProductPresentation = ({ products, category }) => {
  return (
    <Contain>
      <Grid>
        {products.map((product, idx) => (
          <Figure key={idx}>
            <a href={`/detail/${product._id}`}>
              <Img src={product.imgUrl} alt="제품 이미지" />
              <p>{product.company}</p>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </a>
          </Figure>
        ))}
      </Grid>
    </Contain>
  );
};

export default ProductPresentation;
