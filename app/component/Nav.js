import React from "react";
import style from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav style={style.navbar}>
      <div>
        <ul className={style.navbarList}>
          <li className={style.navbarItem}>
            <Link className={style.navbarLink} href={"/"}>
              home
            </Link>
          </li>
          <li className={style.navbarItem}>
            <Link className={style.navbarLink} href={"/about"}>
              About
            </Link>
          </li>
          <li className={style.navbarItem}>
            <Link className={style.navbarLink} href={"/movies"}>
              Beauty Products
            </Link>
          </li>
          <li className={style.navbarItem}>
            <Link className={style.navbarLink} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
