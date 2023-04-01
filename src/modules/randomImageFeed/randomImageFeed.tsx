import React from "react";
import styles from "./index.module.css";

export default function RandomImageFeed() {
    const unsplashURL = "https://source.unsplash.com/random/";

    const rows = 5;
    const getRandom = () => Math.floor(Math.random() * 10) + 300;

    const getRandomSize = () => `${getRandom()}x${getRandom()}`;

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Random Image Feed</h1>
            <div className={styles.container}>
                {new Array(rows * 3).fill(0).map((e, i) => {
                    return (
                        <img
                            key={i}
                            src={`${unsplashURL}${getRandomSize()}`}
                            alt=""
                        />
                    );
                })}
            </div>
        </div>
    );
}
