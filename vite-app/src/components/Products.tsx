import React, { useEffect, useState } from "react";

import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";

const Products = ({ input }) => {
  const [data, setData] = useState<[]>([]);

  console.log(data);

  const getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    let data = await res.data;
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      {data
        .map((data) => (
          <div key={data.id}>
            <Card className="w-[300px] h-full" key={data.id} title={data.title}>
              <img src={data.image} alt="" />
              <Meta description={data.description}></Meta>
            </Card>
          </div>
        ))
        .filter((dt) => {
          if (dt.title?.includes(input) ) {
            return dt;
          } else if (dt.description.includes(input)) {
            return dt;
          }
        })}
    </>
  );
};

export default Products;
