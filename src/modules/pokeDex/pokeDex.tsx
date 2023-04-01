/*
 * @Author: msc
 * @Date: 2022-09-01 23:20:14
 * @LastEditTime: 2022-09-02 00:04:09
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

interface Poke {
    id: number;
    name: string;
    types: Array<{ type: { name: string } }>;
}

export default function PokeDex() {
    const pokemon_count = 150;
    const colors = {
        fire: "#FDDFDF",
        grass: "#DEFDE0",
        electric: "#FCF7DE",
        water: "#DEF3FD",
        ground: "#f4e7da",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#98d7a5",
        bug: "#f8d5a3",
        dragon: "#97b3e6",
        psychic: "#eaeda1",
        flying: "#F5F5F5",
        fighting: "#E6E0D4",
        normal: "#F5F5F5",
    };

    const [pokes, setPokes] = useState<Array<Poke>>([]);

    useEffect(() => {
        (async () => {
            for (let i = 101; i <= pokemon_count * 10; i++) {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${i}`
                );
                const data: Poke = await res.json();
                setPokes((pokes) => [...pokes, data]);
            }
        })();
    }, []);

    return (
        <div className={styles.main}>
            <h1>Pokedex</h1>
            <div className={styles.pokeContainer}>
                {pokes.map((poke) => {
                    const name =
                        poke.name[0].toUpperCase() + poke.name.slice(1);
                    const id = poke.id.toString().padStart(3, "0");
                    const pokeTypes = poke.types.map((type) => type.type.name);
                    const type =
                        Object.keys(colors).find(
                            (type) => pokeTypes.indexOf(type) > -1
                        ) || "fire";
                    const color = colors[type as keyof typeof colors];
                    return (
                        <div
                            className={styles.pokemon}
                            key={poke.id}
                            style={{ backgroundColor: color }}
                        >
                            <div className={styles.imgContainer}>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
                                    alt={`${poke.name}`}
                                />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.number}>#{id}</span>
                                <h3 className={styles.name}>{name}</h3>
                                <small className={styles.type}>
                                    Type: <span>{type}</span>
                                </small>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
