import React from "react";

import classes from "./layout.module.css";
import Card from "./Card";

export interface cardInterface {
  name: String;
  price: number;
  discount: number;
  unitsSold: number;
  description: String;
  categoryId: String;
  images: any[];
}

const items: cardInterface[] = [
  {
    name: "Refined Cotton Shirt",
    price: 123,
    discount: 34,
    unitsSold: 4,
    description:
      "Sed dolorem nulla ut laboriosam totam dolore incidunt mollitia. Sed nisi neque aperiam consequatur quam cupiditate doloremque non.",
    categoryId: "aeb50ed6-580d-a065-383a-e3932fbec6a1",
    images: [
      {
        productImageId: "31789b81-6348-18ea-a80f-6d33da2994d7",
        productId: "0bfff791-1a28-995b-594e-ae9f036380a4",
        url: "https://shoplly-api.techawks.io/storage/71qVS4kUPZL._AC_UL320_.jpg",
      },
      {
        productImageId: "be3a7edc-4d0a-1b87-0962-429a8950d29b",
        productId: "0bfff791-1a28-995b-594e-ae9f036380a4",
        url: "https://shoplly-api.techawks.io/storage/61pUul1oDlL._AC_UL320_.jpg",
      },
    ],
  },
  {
    name: "Refined Cotton Shirt",
    price: 123,
    discount: 34,
    unitsSold: 34,
    description:
      "Sed dolorem nulla ut laboriosam totam dolore incidunt mollitia. Sed nisi neque aperiam consequatur quam cupiditate doloremque non.",
    categoryId: "aeb50ed6-580d-a065-383a-e3932fbec6a1",
    images: [
      {
        productImageId: "31789b81-6348-18ea-a80f-6d33da2994d7",
        productId: "0bfff791-1a28-995b-594e-ae9f036380a4",
        url: "https://shoplly-api.techawks.io/storage/71qVS4kUPZL._AC_UL320_.jpg",
      },
      {
        productImageId: "be3a7edc-4d0a-1b87-0962-429a8950d29b",
        productId: "0bfff791-1a28-995b-594e-ae9f036380a4",
        url: "https://shoplly-api.techawks.io/storage/61pUul1oDlL._AC_UL320_.jpg",
      },
    ],
  },
];

import { Checkbox, Radio, Divider, Row, Col } from "antd";
import { useQuery } from "@apollo/client";
import { AllCategoriesQuery } from "../graphql/queries";

export default function Layout({ selectedTab }: { selectedTab: number }) {
  const [value, setValue] = React.useState(1);

  const onChangeRadio = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
  }

  const filters = ["Filter one"];

  const { loading, error, data } = useQuery(AllCategoriesQuery);
  console.log(selectedTab);
  return (
    <div className={classes.wrapper}>
      <div className={classes.filter}>
        Filter
        <Divider />
        {data?.categories.map((category: any, i: any) => (
          <div key={i} className={classes.filterContainer}>
            {category.subCategories.map((subCategory: any) => {
              return (
                <>
                  <Checkbox onChange={onChange}>{subCategory.name}</Checkbox>
                  <br />
                </>
              );
            })}
          </div>
        ))}
        <br />
        Sort
        <Divider />
        <Radio.Group onChange={onChangeRadio} value={value}>
          <Radio value={1}>Discounts</Radio>
          <br />
          <Radio value={2}>Best selling</Radio>
          <br />
          <Radio value={3}>Price, Low to High</Radio>
          <br />
          <Radio value={4}>Price, High to Low</Radio>
          <br />
        </Radio.Group>
      </div>
      <div className={classes.productContainer}>
        {data?.categories.map((category: any, i: any) => (
          <div key={i}>
            {category.products.map((product: any) => {
              return (
                <div className={classes.productItem}>
                  <Card key={i} item={product} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
