import React, { useState } from "react";
import classNames from "classnames";

import classes from "./tab.module.css";
import { useQuery } from "@apollo/client";
import { AllCategoriesQuery } from "../../graphql/queries";
import { useRouter } from "next/router";

const tabs = ["Furnitures", "Electronics"];

export default function Tab({
  setSelectedTabIndex,
}: {
  setSelectedTabIndex: any;
}) {
  const [selectedTab, setSelectedTab] = useState(0);
  const { loading, error, data } = useQuery(AllCategoriesQuery);
  const router = useRouter();
  const changeIndex = (index: number) => {
    setSelectedTab(index);
    setSelectedTabIndex(index);
  };
  return (
    <div className={classes.tabWrapper}>
      {data?.categories.map((category: any, i: any) => (
        <TabItem
          key={category.categoryId}
          name={category.name}
          index={i}
          selectedTab={selectedTab}
          setIndex={changeIndex}
        />
      ))}
    </div>
  );
}

interface ITabProp {
  name: string;
  index: number;
  selectedTab: number;
  setIndex: any;
}
function TabItem(prop: ITabProp) {
  return (
    <div
      className={classNames({
        tabItem: true,
        selected: prop.index === prop.selectedTab,
      })}
      onClick={() => prop.setIndex(prop.index)}
    >
      {prop.name}
    </div>
  );
}
