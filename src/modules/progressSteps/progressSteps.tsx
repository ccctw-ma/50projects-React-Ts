/*
 * @Author: msc
 * @Date: 2022-07-20 20:42:24
 * @LastEditTime: 2022-07-26 22:50:54
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef, useState } from "react";

import styles from "./index.module.css";

export default function ProgressSteps() {
  const [index, setIndex] = useState<number>(1);
  const btn1 = useRef<HTMLButtonElement>(null);
  const btn2 = useRef<HTMLButtonElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progress.current!.style.width = `${((index - 1) / 3) * 100}%`;
  }, [index]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className={styles.containers}>
        <div className={styles.progressContainers}>
          <div className={styles.progress} ref={progress} />
          <div className={`${styles.circle} ${index >= 1 && styles.active}`}>1</div>
          <div className={`${styles.circle} ${index >= 2 && styles.active}`}>2</div>
          <div className={`${styles.circle} ${index >= 3 && styles.active}`}>3</div>
          <div className={`${styles.circle} ${index >= 4 && styles.active}`}>4</div>
        </div>
        <div className={styles.buttonContainers}>
          <button
            className={styles.btn}
            ref={btn1}
            disabled={index === 1}
            onClick={() => setIndex(index === 1 ? 1 : index - 1)}
          >
            prev
          </button>
          <button
            className={styles.btn}
            ref={btn2}
            disabled={index === 4}
            onClick={() => setIndex(index === 4 ? 4 : index + 1)}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
