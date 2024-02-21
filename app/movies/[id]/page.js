"use client"; // This is a client component 👈🏽
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/common.module.css";
const page = ({ params }) => {
  const id = params.id;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const callApi = () => {
      console.log("insideeee");
      const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const filtersdata = data.filter((i) => i.id == id);
          setProductList(filtersdata);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    callApi();
  }, []); // Empty dependency array

  // const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
  //         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  //     }
  // };

  // const res = await fetch(url, options);
  // const data = await res.json();
  //   const main_data = data[0].details;

  return (
    <>
      {productList.map((product) => (
        <div key={product.id}>
          <div>
            <div>
              <img
                src={product.image_link}
                alt={product.name}
                width={600}
                height={300}
              />
            </div>
            <div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default page;
