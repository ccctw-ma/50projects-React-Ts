/*
 * @Author: msc
 * @Date: 2022-09-21 22:42:00
 * @LastEditTime: 2022-09-22 00:08:26
 * @LastEditors: msc
 * @Description:
 */

import React, { useRef, useState } from "react";
import styles from "./index.module.css";
interface Quiz {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct: string;
}

const QuizApp = () => {
    const quizData: Array<Quiz> = [
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ];

    const [index, setIndex] = useState<number>(0);
    const [answer, setAnswer] = useState<string>("");
    const [score, setScore] = useState<number>(0);
    const questions = useRef<HTMLUListElement>(null);
    const handleClick = () => {
        if (index === -1) {
            setScore(0);
            setAnswer("");
            setIndex(0);
        } else {
            questions.current!.childNodes.forEach(
                (e) => ((e as any).childNodes[0].checked = false)
            );
            setScore((pre) => pre + +(answer === quizData[index].correct));
            setAnswer("");
            setIndex((pre) => {
                if (pre === 3) {
                    return -1;
                } else {
                    return pre + 1;
                }
            });
        }
    };
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>
                        {index === -1
                            ? `You answered ${score}/${4} questions correctly`
                            : quizData[index].question}
                    </h2>
                    {index >= 0 && (
                        <ul ref={questions}>
                            {["a", "b", "c", "d"].map((c) => {
                                const quiz = quizData[index];
                                return (
                                    <li key={c}>
                                        <input
                                            type="radio"
                                            id={c}
                                            name="answer"
                                            className={styles.answer}
                                            onChange={(e) => {
                                                console.log(e.target.id);
                                                setAnswer(e.target.id);
                                            }}
                                        />
                                        <label htmlFor={c}>
                                            {(quiz as any)[c]}
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                <button id="submit" onClick={handleClick}>
                    {index === -1 ? "Reload" : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default QuizApp;
