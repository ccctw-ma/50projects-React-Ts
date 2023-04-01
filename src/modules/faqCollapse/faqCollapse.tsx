/*
 * @Author: msc
 * @Date: 2022-07-29 21:01:15
 * @LastEditTime: 2022-07-29 21:39:10
 * @LastEditors: msc
 * @Description:
 */

import React from "react";
import styles from "./index.module.css";

interface Faq {
    title: string;
    text: string;
}

export default function FaqCollapse() {
    const faqs: Array<Faq> = [
        {
            title: "Why shouldn't we trust atoms?",
            text: "They make up everything",
        },
        {
            title: "What do you call someone with no body and no nose?",
            text: "Nobody knows.",
        },
        {
            title: "What's the object-oriented way to become wealthy?",
            text: "Inheritance.",
        },
        {
            title: "How many tickles does it take to tickle an octopus?",
            text: "Ten-tickles!",
        },
        {
            title: "What is: 1 + 1?",
            text: "Depends on who are you asking.",
        },
    ];
    return (
        <div className={styles.main}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.container}>
                {faqs.map((faq: Faq, i: number) => {
                    return (
                        <div className={`${styles.faq}`} key={i}>
                            <h3 className={styles.title}>{faq.title}</h3>
                            <p className={styles.text}>{faq.text}</p>
                            <button
                                className={styles.toggle}
                                onClickCapture={(e) => {
                                    e.currentTarget.parentElement?.classList.toggle(
                                        styles.active
                                    );
                                    e.currentTarget.innerText =
                                        e.currentTarget.innerText === "打开"
                                            ? "关闭"
                                            : "打开";
                                }}
                            >
                                打开
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
