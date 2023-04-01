/*
 * @Author: msc
 * @Date: 2022-08-01 20:58:31
 * @LastEditTime: 2022-08-01 21:58:36
 * @LastEditors: msc
 * @Description:
 */

import { useRef, useState } from "react";
import styles from "./index.module.css";

export default function RandomChoicePicker() {
    const [text, setText] = useState<string>();

    const tags = useRef<HTMLDivElement>(null);

    const randomSelect = () => {
        console.log(tags.current?.children);

        const tagList: HTMLCollection | undefined = tags.current?.children;

        const pickRandomTag = (
            tagList: HTMLCollection | undefined
        ): HTMLDivElement | null => {
            return tagList?.item(
                Math.floor(Math.random() * tagList.length)
            ) as HTMLDivElement;
        };

        const times: number = 30;

        const interval = setInterval(() => {
            const randomTag: HTMLDivElement | null = pickRandomTag(tagList);
            randomTag?.classList.add(styles.highlight);
            setTimeout(() => {
                randomTag?.classList.remove(styles.highlight);
            }, 100);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => {
                const randomTag: HTMLDivElement | null = pickRandomTag(tagList);
                randomTag?.classList.add(styles.highlight);
            }, 100);
        }, times * 100);
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h3>
                    Enter all of the choices divided by a comma(','). <br />
                    Press enter when you're done
                </h3>
                <textarea
                    placeholder="Enter choices here..."
                    id="textarea"
                    onKeyUp={(e) => {
                        const key = e.key;
                        if (key === "Enter") {
                            (e.target as HTMLTextAreaElement).value = "";
                            setTimeout(() => {
                                randomSelect();
                            }, 50);
                        } else {
                            const text = (e.target as HTMLTextAreaElement)
                                .value;

                            setText(text);
                        }
                    }}
                ></textarea>
                <div id="tags" ref={tags}>
                    {text?.split(",").map((t, i) => {
                        t = t.trim();
                        return (
                            t.length !== 0 && (
                                <div className={styles.tag} key={i}>
                                    {t}
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
