import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import styles from "./index.module.css";

type Insect = {
    src: string;
    name: string;
};

type InsectItem = Insect & {
    x: number;
    y: number;
    id: number;
    rotate: number;
};

export default function InsectCatchGame() {
    const [index, setIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [insectsList, setInsectList] = useState<Array<InsectItem>>([]);

    const screen1 = useRef<HTMLDivElement>(null);
    const screen2 = useRef<HTMLDivElement>(null);
    const screen3 = useRef<HTMLDivElement>(null);
    const message = useRef<HTMLHeadingElement>(null);

    const insects: Array<Insect> = useMemo(
        () => [
            {
                src: "http://pngimg.com/uploads/fly/fly_PNG3946.png",
                name: "Fly",
            },
            {
                src: "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
                name: "Mosquito",
            },
            {
                src: "http://pngimg.com/uploads/spider/spider_PNG12.png",
                name: "Spider",
            },
            {
                src: "http://pngimg.com/uploads/roach/roach_PNG12163.png",
                name: "Roach",
            },
        ],
        []
    );

    const createInsect = useCallback(
        (_index = index) => {
            const [x, y] = getRandomLocation();
            setInsectList((pre) => {
                return [
                    ...pre,
                    {
                        id: Date.now(),
                        name: insects[_index].name,
                        src: insects[_index].src,
                        x,
                        y,
                        rotate: Math.random() * 360,
                    },
                ];
            });
        },
        [index, insects]
    );

    const getRandomLocation = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = Math.random() * (width - 200) + 100;
        const y = Math.random() * (height - 200) + 100;
        return [x, y];
    };

    const startGame = () => {
        setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);
    };

    const newTime: string = useMemo(() => {
        let m = Math.floor(time / 60);
        let s = time % 60;
        let nm = `${m < 10 ? "0" : ""}${m}`;
        let ns = `${s < 10 ? "0" : ""}${s}`;
        return nm + ":" + ns;
    }, [time]);

    const insectDivs = useMemo(() => {
        return insectsList.map((insect) => {
            return (
                <div
                    key={insect.id}
                    className={styles.insect}
                    style={{
                        top: `${insect.y}px`,
                        left: `${insect.x}px`,
                    }}
                    onClick={(e) => {
                        e.currentTarget.classList.add(styles.caught);
                        setScore((s) => s + 1);
                        setTimeout(() => {
                            setInsectList((pre) => {
                                return pre.filter(
                                    (item) => item.id !== insect.id
                                );
                            });
                        }, 2000);
                        setTimeout(createInsect, 1000);
                        setTimeout(createInsect, 1500);
                    }}
                >
                    <img
                        src={insect.src}
                        alt={insect.name}
                        style={{ rotate: `${insect.rotate}deg` }}
                    />
                </div>
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [insectsList]);

    useEffect(() => {
        if (score >= 20) {
            message.current!.classList.add(styles.visible);
        }
    }, [score]);

    return (
        <div className={styles.main}>
            <div className={styles.screen} ref={screen1}>
                <h1>Catch The Insect</h1>
                <button
                    className={styles.btn}
                    onClick={() => {
                        screen1.current!.classList.add(styles.up);
                    }}
                >
                    Play Game
                </button>
            </div>
            <div className={styles.screen} ref={screen2}>
                <h1>What is your "favorite" insect?</h1>
                <ul className={styles.insectsList}>
                    {insects.map((i, index) => {
                        return (
                            <li key={i.name}>
                                <button
                                    className={styles.chooseInsectBtn}
                                    onClick={() => {
                                        setIndex(index);
                                        screen2.current!.classList.add(
                                            styles.up
                                        );
                                        setTimeout(() => {
                                            createInsect(index);
                                        }, 1000);
                                        startGame();
                                    }}
                                >
                                    <p>{i.name}</p>
                                    <img src={i.src} alt={i.name} />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div
                className={`${styles.screen} ${styles.gameContainer}`}
                ref={screen3}
            >
                <h3 id="time" className={styles.time}>
                    Time: {newTime}
                </h3>
                <h3 className={styles.score}>Score: {score}</h3>
                <h5 className={styles.message} ref={message}>
                    Are you annoyed yet? <br />
                    You are playing an impossible game!!
                </h5>
                {insectDivs}
            </div>
        </div>
    );
}
