/*
 * @Author: msc
 * @Date: 2022-07-23 17:02:09
 * @LastEditTime: 2022-07-23 18:08:27
 * @LastEditors: msc
 * @Description:
 */

import React, { useRef, useState } from "react";
import styles from "./index.module.css";
import { SearchIcon } from "@heroicons/react/solid";

export default function HiddenSearch() {
    const [open, setOpen] = useState<boolean>(false);
    const input = useRef<HTMLInputElement>(null);

    return (
        <div className={styles.container}>
            <div className={`${styles.search} ${open && styles.active}`}>
                <input
                    type="text"
                    ref={input}
                    className={styles.input}
                    placeholder="Hello World"
                />

                <button
                    className={styles.btn}
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <SearchIcon width={"40px"} style={{ marginLeft: "5px" }} />
                </button>
            </div>
        </div>
    );
}
