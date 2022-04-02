import React from "react";
import Image from "next/image";
import { cardInterface } from "./Layout";
import { Card as ItemHolder } from "antd";
const { Meta } = ItemHolder;
import { Button } from "antd";

import classes from "./card.module.css";

import discount from "../public/Icons/discount.svg";

export default function Card({ item }: { item: cardInterface }) {
  return (
    <>
      <div className={classes.cardWrapper}>
        <div className={classes.cardImg}>
          <img
            src={item.images[0]["url"]}
            alt=""
            height={200}
            width={290}
            style={{
              objectFit: "contain",
              minHeight: "200px",
              maxHeight: "200px",
            }}
          />
          {item.discount && (
            <div className={classes.discount}>
              <Image src={discount} />
              <p>{item.discount}</p>
            </div>
          )}
        </div>
        <br />
        <div className={classes.title}>
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
        </div>
        <br />
        <Button
          shape="round"
          block
          type="primary"
          onClick={() => {}}
          style={{ backgroundColor: "black", border: "black" }}
        >
          ADD TO CART
        </Button>
      </div>
    </>
  );
}
