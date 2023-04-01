/*
 * @Author: msc
 * @Date: 2022-08-12 22:28:40
 * @LastEditTime: 2022-08-12 22:31:00
 * @LastEditors: msc
 * @Description:
 */

import React from "react";

import styles from "./index.module.css";
const KineticLoader: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.kinetic}></div>
        </div>
    );
};

export default KineticLoader;
