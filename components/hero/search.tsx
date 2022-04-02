import React, { useState } from "react";

import classes from "./search.module.css";

import { Input } from "antd";

import Image from "next/image";
import searchIc from "../../public/Icons/search.svg";
interface IProps {
  onSearch: () => void;
}
export default function Search(props: IProps) {
  const [search, setSearch] = useState("");
  return (
    <div className={classes.searchWrapper}>
      <Input
        prefix={<Image src={searchIc} />}
        placeholder="Search"
        className={classes.search}
        allowClear
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onPressEnter={props.onSearch}
      />
    </div>
  );
}
