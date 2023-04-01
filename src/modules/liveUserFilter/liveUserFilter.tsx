/*
 * @Author: msc
 * @Date: 2022-09-13 22:31:31
 * @LastEditTime: 2022-09-13 23:15:44
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";

interface User {
    piture: {
        large: string;
    };
    name: {
        first: string;
        last: string;
    };
    location: {
        city: string;
        country: string;
    };
}
export default function LiveUserFilter() {
    const [userList, setUserList] = useState<Array<User>>([]);

    const [search, setSearch] = useState<string>("");

    const filterUserList = useMemo(() => {
        const s = search.toLowerCase();
        return userList.filter((u) =>
            [
                u.name.first,
                u.name.last,
                u.location.city,
                u.location.country,
            ].some((ss) => ss.toLowerCase().includes(s))
        );
    }, [search, userList]);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://randomuser.me/api?results=50", {
                mode: "cors",
            });

            const { results } = await res.json();
            setUserList(results);
        })();
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h4 className={styles.title}>Live User Filter</h4>
                    <small className={styles.subtitle}>
                        Search by name and/or location
                    </small>
                    <input
                        type="text"
                        id="filter"
                        placeholder="Search"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </header>
                <ul id="result" className={styles.userList}>
                    {filterUserList.length === 0 && (
                        <li>
                            <h3>Loading...</h3>
                        </li>
                    )}
                    {filterUserList.length !== 0 &&
                        filterUserList.map((user, i) => {
                            return (
                                <li key={i}>
                                    <img
                                        src={user.piture?.large}
                                        alt={user.name.first}
                                    />
                                    <div className={styles.userInfo}>
                                        <h4>
                                            {user.name.first} {user.name.last}
                                        </h4>
                                        <p>
                                            {user.location.city}{" "}
                                            {user.location.country}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
