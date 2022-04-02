import classes from "./navbar.module.css";

import Image from "next/image";

import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import logo from "../../public/Icons/logo.svg";
import bag from "../../public/Icons/bag.svg";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <Image src={logo} />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className={classes.profileWrapper}>
        <div className={classes.cartBag}>
          <Image src={bag} />
        </div>
        <div className={classes.profile}>
          <Avatar icon={<UserOutlined />} size="large" />
        </div>
      </div>
    </div>
  );
}
