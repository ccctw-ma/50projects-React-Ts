/*
 * @Author: msc
 * @Date: 2022-09-07 22:57:15
 * @LastEditTime: 2022-09-13 20:51:01
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function VerifyAccountUi() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const codes = container.current!.childNodes;
        codes.forEach((code, idx) => {
            (code as HTMLInputElement).addEventListener("keydown", (e) => {
                if (e.key >= "0" && e.key <= "9") {
                    code.nodeValue = "";
                    idx <= 4 &&
                        setTimeout(
                            () => (codes[idx + 1] as HTMLInputElement).focus(),
                            10
                        );
                } else if (e.key === "Backspace" && idx !== 0) {
                    setTimeout(
                        () => (codes[idx - 1] as HTMLInputElement).focus(),
                        10
                    );
                }
            });
        });
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2>Verify Your Account</h2>
                <p>
                    We emailed you the six digit code to cool_guy@email.com{" "}
                    <br /> Enter the code below to confirm your email address.
                </p>
                <div className={styles.codeContainer} ref={container}>
                    <input
                        type="number"
                        className={styles.code}
                        placeholder="0"
                        min={0}
                        max={9}
                        required
                    />
                    <input
                        type="number"
                        className={styles.code}
                        placeholder="0"
                        min={0}
                        max={9}
                        required
                    />
                    <input
                        type="number"
                        className={styles.code}
                        placeholder="0"
                        min={0}
                        max={9}
                        required
                    />
                    <input
                        type="number"
                        className={styles.code}
                        placeholder="0"
                        min={0}
                        max={9}
                        required
                    />
                    <input
                        type="number"
                        className={styles.code}
                        placeholder="0"
                        min={0}
                        max={9}
                        required
                    />
                    <input
                        type="number"
                        className={styles.code}
                        placeholder="0"
                        min={0}
                        max={9}
                        required
                    />
                </div>
                <small className={styles.info}>
                    This is design only. We didn't actually send you an email as
                    we don't have your email, right?
                </small>
            </div>
        </div>
    );
}
