/*
 * @Author: msc
 * @Date: 2022-07-27 21:49:50
 * @LastEditTime: 2022-07-27 22:12:16
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export default function SoundBoard() {
    const audio = useRef<HTMLAudioElement>(null);

    const [music, setMusic] = useState<string>("applause");

    useEffect(() => {
        audio.current?.pause();
        audio.current!.src = `https://50projects50days.com/projects/sound-board/sounds/${music}.mp3`;
        audio.current?.play();
    }, [music]);

    return (
        <div className={styles.container}>
            <audio
                src="https://50projects50days.com/projects/sound-board/sounds/applause.mp3"
                ref={audio}
            ></audio>
            {["applause", "boo", "gasp", "tada", "victory", "wrong"].map(
                (m, i) => {
                    return (
                        <div
                            className={styles.box}
                            key={m + i}
                            onClick={() => {
                                if (m !== music) {
                                    setMusic(m);
                                }
                                audio.current?.play();
                            }}
                        >
                            {m}
                        </div>
                    );
                }
            )}
        </div>
    );
}
