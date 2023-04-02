/*
 * @Author: msc
 * @Date: 2022-08-17 20:25:04
 * @LastEditTime: 2022-08-17 22:54:41
 * @LastEditors: msc
 * @Description:
 */

import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

interface Repo {
    name: string;
    html_url: string;
}

interface UserInfo {
    name: string;
    login: string;
    bio?: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    repos: Array<Repo>;
}
export default function GithubProfiles() {
    const [userName, setUserName] = useState<string>("");
    const [errorInfo, setErrorInfo] = useState<string>("");
    const [userInfo, setUserInfo] = useState<UserInfo>();
    const search = useRef<HTMLInputElement>(null);
    const APIURL = "https://api.github.com/users/";

    useEffect(() => {
        if (userName.length !== 0) {
            (async () => {
                Promise.all([
                    await fetch(APIURL + userName),
                    await fetch(APIURL + userName + "/repos?sort=created"),
                ])
                    .then(async (arr) => {
                        if (arr.every((e) => e.ok)) {
                            const data1 = await arr[0].json();
                            const data2 = await arr[1].json();
                            console.log(data1, data2);
                            setUserInfo({
                                ...data1,
                                repos: data2,
                            });
                            setErrorInfo("");
                        } else {
                            return Promise.reject(
                                "No Information with this username"
                            );
                        }
                    })
                    .catch((error) => {
                        setErrorInfo(error);
                    });
            })();
        }
    }, [userName]);
    return (
        <div className={styles.main}>
            <form
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    setUserName(
                        (e.currentTarget.children[0] as HTMLInputElement).value
                    );
                    search.current!.value = "";
                }}
            >
                <input
                    type="text"
                    id="search"
                    placeholder="Search a Github User"
                    ref={search}
                />
            </form>

            <main>
                {userName.length !== 0 && (
                    <div className={styles.card}>
                        {errorInfo.length ? (
                            errorInfo
                        ) : (
                            <>
                                <img
                                    src={userInfo?.avatar_url}
                                    alt={userInfo?.name}
                                    className={styles.avatar}
                                />
                                <div className={styles.userInfo}>
                                    <h2>{userInfo?.name || userInfo?.login}</h2>
                                    {userInfo?.bio ? <p>{userInfo.bio}</p> : ""}
                                    <ul>
                                        <li>
                                            {userInfo?.followers}{" "}
                                            <strong>Followers</strong>
                                        </li>
                                        <li>
                                            {userInfo?.following}{" "}
                                            <strong>Following</strong>
                                        </li>
                                        <li>
                                            {userInfo?.public_repos}{" "}
                                            <strong>Repos</strong>
                                        </li>
                                    </ul>
                                    <div>
                                        {userInfo?.repos.map((repo) => {
                                            return (
                                                <a
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    className={styles.repo}
                                                    rel="noreferrer"
                                                    key={repo.html_url}
                                                >
                                                    {repo.name}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
