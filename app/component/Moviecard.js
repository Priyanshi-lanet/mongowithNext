import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/styles/common.module.css";
const Moviecard = (data) => {
  const { id, name, image_link, price, description } = data;
  console.log("data", data);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={data.data.image_link}
            alt={data.data.title}
            width={260}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{data.data.name.substring(0, 18)}</h2>
          <p>{`${data.data.description.substring(0, 66)} ...`}</p>
          <Link href={`/movies/${data.data.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
