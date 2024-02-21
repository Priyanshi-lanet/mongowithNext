"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Moviecard from "@/app/component/Moviecard";
import style from "@/app/styles/common.module.css";
const movies = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const callApi = () => {
      const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setProductList(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    callApi();
  }, []); // Empty dependency array
  return (
    <>
      <section className={style.movieSection}>
        <div className={style.containor}>
          <h1>Movies Page</h1>
          <div className={style.card_section}>
            {productList.map((i) => (
              <Moviecard key={i.id} data={i} />
            ))}
          </div>
        </div>
      </section>
      {/* <Link herf="/movies/hgfdsh"> Go to</Link> */}
    </>
  );
};

export default movies;
