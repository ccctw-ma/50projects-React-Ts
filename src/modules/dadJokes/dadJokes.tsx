/* eslint-disable react/jsx-no-comment-textnodes */
/*
 * @Author: msc
 * @Date: 2022-07-28 21:11:29
 * @LastEditTime: 2022-07-28 21:27:37
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function DadJokes() {
    const [joke, setJoke] = useState<string>("Hello dadJokes");
    const generateJoke = async () => {
        const config = {
            headers: {
                Accept: "application/json",
            },
        };
        const res = await fetch("https://icanhazdadjoke.com", config);
        const data: any = await res.json();
        setJoke(data.joke);
    };

    useEffect(() => {
        generateJoke();
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h3>Don't Laugh Challenge</h3>
                <div id="joke" className={styles.joke}>
                    {joke}
                </div>
                <button
                    id="jokeBtn"
                    className={styles.btn}
                    onClick={generateJoke}
                >
                    Get Another Joke
                </button>
            </div>
        </div>
    );
}
