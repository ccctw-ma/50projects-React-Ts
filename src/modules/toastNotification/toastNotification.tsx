/*
 * @Author: msc
 * @Date: 2022-08-16 22:44:10
 * @LastEditTime: 2022-08-16 23:31:58
 * @LastEditors: msc
 * @Description:
 */

import { useRef } from "react";
import styles from "./index.module.css";
interface Toast {
    message: string;
    type: string;
    id: number;
}
export default function ToastNotification() {
    const toasts = useRef<HTMLDivElement>(null);

    const types = ["info", "success", "error"];

    return (
        <div className={styles.main}>
            <div ref={toasts} className={styles.toasts}></div>
            <button
                className={styles.btn}
                onClick={() => {
                    const type = types[~~(Math.random() * 3)];
                    const notice = document.createElement("div");
                    notice.classList.add(styles.toast);
                    notice.classList.add(styles[type]);
                    notice.innerText = type;
                    toasts.current!.appendChild(notice);
                    setTimeout(() => {
                        notice.remove();
                    }, 3000);
                }}
            >
                Show Notification
            </button>
        </div>
    );
}
