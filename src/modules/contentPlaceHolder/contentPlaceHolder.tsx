/*
 * @Author: msc
 * @Date: 2022-08-15 20:15:46
 * @LastEditTime: 2022-08-15 22:17:21
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const ContentPlaceHolder: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    return (
        <div className={styles.main}>
            <button
                onClick={() => {
                    setLoading(!loading);
                }}
            >
                click
            </button>
            <div className={styles.card}>
                <div
                    className={`${styles.cardHeader} ${
                        loading && styles.animatedBg
                    } `}
                >
                    {!loading && (
                        <img
                            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                            alt=""
                        />
                    )}
                </div>
                <div className={styles.cardContent}>
                    <h3
                        className={`
                            ${styles.cardTitle} 
                            ${loading && styles.animatedBg}
                            ${loading && styles.animatedBgText}
                        `}
                    >
                        {!loading && "Lorem ipsum dolor sit amet"}
                    </h3>
                    <p className={styles.cardExcerpt}>
                        {!loading &&
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"}
                        {loading && (
                            <div>
                                <span
                                    className={`${styles.animatedBg} ${styles.animatedBgText}`}
                                >
                                    &nbsp;
                                </span>
                                <span
                                    className={`${styles.animatedBg} ${styles.animatedBgText}`}
                                >
                                    &nbsp;
                                </span>
                                <span
                                    className={`${styles.animatedBg} ${styles.animatedBgText}`}
                                >
                                    &nbsp;
                                </span>
                            </div>
                        )}
                    </p>
                    <div className={styles.author}>
                        <div
                            className={`${styles.profileImg} ${
                                loading && styles.animatedBg
                            }`}
                        >
                            {!loading && (
                                <img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt=""
                                />
                            )}
                        </div>
                        <div className={styles.authorInfo}>
                            <strong
                                className={`${loading && styles.animatedBg} ${
                                    loading && styles.animatedBgText
                                }`}
                            >
                                {!loading && "John Doe"}
                            </strong>
                            <small
                                className={`${loading && styles.animatedBg} ${
                                    loading && styles.animatedBgText
                                }`}
                            >
                                {!loading && "Oct 08, 2020"}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentPlaceHolder;
