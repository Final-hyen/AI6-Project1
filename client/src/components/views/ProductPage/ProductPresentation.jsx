import React, {useEffect} from "react";
import { Contain, Figure, Grid, Img } from "./ProductPageCSS";
import { H1 } from "../../Admin/ProductGetCSS";

const ProductPresentation = ({ products, category }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          img.style.filter = "none";
          observer.unobserve(img);
        }
      });
    });
    const images = document.querySelectorAll(".lazy");
    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach(img => observer.unobserve(img))
    }
  },[products])
  return (
    <Contain>
      <H1>{category} Products</H1>
      <Grid>
        {products.map((product, idx) => (
          <Figure key={idx}>
            <a href={`/detail/${product._id}`}>
              <Img className="productItem lazy" data-src={product.imgUrl} alt="제품 이미지" />
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
