/*
 * @Author: msc
 * @Date: 2022-07-19 21:39:04
 * @LastEditTime: 2022-07-28 00:09:36
 * @LastEditors: msc
 * @Description:
 */

import React, { useState } from "react";
import styles from "./index.module.css";

interface Data {
  bgUrl: string;
  text: string;
}

// console.log(styles);


export default function ExpandingCards() {
  const data: Array<Data> = [
    {
      bgUrl:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      text: "Explore The World",
    },
    {
      bgUrl:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      text: "Wild Forest",
    },
    {
      bgUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      text: "Sunny Beach",
    },
    {
      bgUrl:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      text: "City on Winter",
    },
    {
      bgUrl:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      text: "Mountains - Clouds",
    },
  ];

  const [selectedIndex, setIndex] = useState<number>(0);

  return (
    <div className={styles.containers}>
      {data.map((e, index) => {
        return (
          <div
            key={e.bgUrl}
            className={`${styles.panel} ${
              index === selectedIndex && styles.active
            }`}
            style={{
              backgroundImage: `url(${e.bgUrl})`,
            }}
            onClick={() => setIndex(index)}
          >
            <h3>{e.text}</h3>
          </div>
        );
      })}
    </div>
  );
}
