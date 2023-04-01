/*
 * @Author: msc
 * @Date: 2022-09-05 22:26:10
 * @LastEditTime: 2022-09-05 22:40:33
 * @LastEditors: msc
 * @Description:
 */

import React, { useState } from "react";
import styles from "./index.module.css";
export default function MobileTabNavigation() {
    const [index, setIndex] = useState<number>(0);

    return (
        <div className={styles.main}>
            <div className={styles.phone}>
                <img
                    src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                    alt="home"
                    className={`${styles.content} ${
                        index === 0 && styles.show
                    }`}
                />
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="work"
                    className={`${styles.content}${index === 1 && styles.show}`}
                />
                <img
                    src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
                    alt="blog"
                    className={`${styles.content} ${
                        index === 2 && styles.show
                    }`}
                />
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                    alt="about"
                    className={`${styles.content} ${
                        index === 3 && styles.show
                    }`}
                />
                <nav>
                    <ul>
                        <li
                            className={(index === 0 && styles.active) || ""}
                            onClick={() => setIndex(0)}
                        >
                            <p>Home</p>
                        </li>
                        <li
                            className={(index === 1 && styles.active) || ""}
                            onClick={() => setIndex(1)}
                        >
                            <p>Work</p>
                        </li>
                        <li
                            className={(index === 2 && styles.active) || ""}
                            onClick={() => setIndex(2)}
                        >
                            <p>Blog</p>
                        </li>
                        <li
                            className={(index === 3 && styles.active) || ""}
                            onClick={() => setIndex(3)}
                        >
                            <p>About Us</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
