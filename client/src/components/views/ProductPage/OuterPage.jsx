import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import { Contain, Figure, Grid, Img } from "./ProductPageCSS";


const GetOuterProduct = () => {
  const [outers, setOuters] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setOuters(res.data.filter((product) => product.category === "outer"));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Contain>
      <Grid>
        {outers.map((outer, idx) => (
          <Figure key={idx}>
            <a href={`/detail/${outer._id}`}>
              <Img src={outer.imgUrl} alt="제품 이미지" />
              <p>{outer.company}</p>
              <p>{outer.title}</p>
              <p>{outer.price}</p>
            </a>
          </Figure>
        ))}
      </Grid>
    </Contain>
  );
};

export default GetOuterProduct;
