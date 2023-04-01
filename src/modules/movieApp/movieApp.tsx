/*
 * @Author: msc
 * @Date: 2022-08-04 22:04:31
 * @LastEditTime: 2022-08-05 00:06:32
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

interface Movie {
    backdrop_path: string;
    id: number;
    overview: string;
    poster_path: string;
    vote_average: number;
    title: string;
}

const MovieApp: React.FC = () => {
    const API_URL =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCH_API =
        'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
    const getMovies = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    };

    const search = useRef<HTMLInputElement>(null);

    const getClassByRate = (rate: number): string => {
        if (rate >= 8) {
            return styles.green;
        } else if (rate >= 5) {
            return styles.orange;
        } else {
            return styles.red;
        }
    };

    const [movies, setMovies] = useState<Array<Movie>>([]);

    useEffect(() => {
        (async () => {
            const movies: Array<Movie> = await getMovies(API_URL);
            console.log(movies);
            setMovies(movies);
        })();
    }, []);

    return (
        <div className={styles.main}>
            <header>
                <form
                    id="form"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        console.log(e);

                        const searchTerm = (
                            (e.target as HTMLFormElement)[0] as HTMLInputElement
                        ).value;
                        console.log(searchTerm);

                        if (searchTerm && searchTerm !== "") {
                            const movies = await getMovies(
                                SEARCH_API + searchTerm
                            );
                            setMovies(movies);
                            (
                                (
                                    e.target as HTMLFormElement
                                )[0] as HTMLInputElement
                            ).value = "";
                        }
                    }}
                >
                    <input
                        type="text"
                        id="search"
                        className={styles.search}
                        placeholder="search"
                        ref={search}

                        // onSubmitCapture={(e) => {
                        //     e.preventDefault();
                        //     console.log(e);
                        // }}
                    />
                </form>
            </header>

            <main>
                {movies.map((m) => {
                    return (
                        <div className={styles.movie} key={m.id}>
                            <img
                                src={`${IMG_PATH + m.poster_path}`}
                                alt={m.title}
                            />
                            <div className={styles.movieInfo}>
                                <h3>{m.title}</h3>
                                <span
                                    className={`${getClassByRate(
                                        m.vote_average
                                    )}`}
                                >
                                    {m.vote_average}
                                </span>
                            </div>
                            <div className={styles.overview}>
                                <h3>overview</h3>
                                {m.overview}
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};

export default MovieApp;
