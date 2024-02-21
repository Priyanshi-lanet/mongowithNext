import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Nav from "@/app/component/Nav";
const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href={"/"}>
          <div>{"NEXT JS APP"}</div>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
