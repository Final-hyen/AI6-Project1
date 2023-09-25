import React, { useEffect, useState } from "react";
import DetailPresentation from "./DetailPresentation";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosClient
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return <DetailPresentation product={product} />;
};

export default DetailContainer;
