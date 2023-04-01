/*
 * @Author: msc
 * @Date: 2022-08-23 23:33:52
 * @LastEditTime: 2022-08-24 00:23:44
 * @LastEditors: msc
 * @Description:
 */

import React, { useState } from "react";
import styles from "./index.module.css";
const PasswordGenerator: React.FC = () => {
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(20);
    const [upper, setUpper] = useState<boolean>(true);
    const [lower, setLower] = useState<boolean>(true);
    const [hasNumber, setHasNumber] = useState<boolean>(true);
    const [hasSymbol, setHasSymbol] = useState<boolean>(true);

    const getRandomLower = () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    const getRandomUpper = () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    const getRandomNumber = () =>
        String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    const getRandomSymbol = () =>
        "!@#$%^&*(){}[]=<>/,."[Math.floor(Math.random() * 20)];
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2>Password Generator</h2>
                <div className={styles.resultContainer}>
                    <span>{password}</span>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            if (!password) return;
                            // const textarea = document.createElement("textarea");
                            // textarea.value = password;
                            // document.body.appendChild(textarea);
                            // textarea.select();
                            // document.execCommand("copy");
                            // textarea.remove();

                            navigator.clipboard.writeText(password).then(
                                () => {
                                    alert("Passowrd copied to clipboard");
                                },
                                () => {
                                    console.error("copy failed");
                                }
                            );
                        }}
                    >
                        copy
                    </button>
                </div>
                <div className={styles.settings}>
                    <div className={styles.setting}>
                        <label htmlFor="">Password Length</label>
                        <input
                            type="number"
                            id="length"
                            min={4}
                            max={20}
                            defaultValue={20}
                            onChange={(e) => {
                                setLength(e.target.valueAsNumber);
                            }}
                        />
                    </div>
                    <div className={styles.setting}>
                        <label htmlFor="">Include uppercase letters</label>
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            onChange={(e) => {
                                setUpper(e.target.checked);
                            }}
                        />
                    </div>
                    <div className={styles.setting}>
                        <label htmlFor="">Include lowercase letters</label>
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            onChange={(e) => {
                                setLower(e.target.checked);
                            }}
                        />
                    </div>
                    <div className={styles.setting}>
                        <label htmlFor="">Include numbers</label>
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            onChange={(e) => {
                                setHasNumber(e.target.checked);
                            }}
                        />
                    </div>
                    <div className={styles.setting}>
                        <label htmlFor="">Include symbols</label>
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            onChange={(e) => {
                                setHasSymbol(e.target.checked);
                            }}
                        />
                    </div>
                </div>
                <button
                    className={`${styles.btn} ${styles.btnLarge}`}
                    onClick={() => {
                        let generatePassword = "";
                        let count = 0;
                        for (let i = 0; i < length; i += count) {
                            count = 0;
                            generatePassword += lower ? getRandomLower() : "";
                            count += Number(lower);
                            generatePassword += upper ? getRandomUpper() : "";
                            count += Number(upper);
                            generatePassword += hasNumber
                                ? getRandomNumber()
                                : "";
                            count += Number(hasNumber);
                            generatePassword += hasSymbol
                                ? getRandomSymbol()
                                : "";
                            count += Number(hasSymbol);
                        }
                        setPassword(generatePassword);
                    }}
                >
                    Generate Password
                </button>
            </div>
        </div>
    );
};

export default PasswordGenerator;
