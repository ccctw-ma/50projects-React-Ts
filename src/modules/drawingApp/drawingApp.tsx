/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: msc
 * @Date: 2022-08-11 21:39:54
 * @LastEditTime: 2022-08-11 22:52:01
 * @LastEditors: msc
 * @Description:
 */

import React, { useRef, useState } from "react";
import styles from "./index.module.css";

const DrawingApp: React.FC = () => {
    const [color, setColor] = useState<string>("black");
    const [size, setSize] = useState<number>(10);
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const canvas = useRef<HTMLCanvasElement>(null);

    let x: number | undefined;
    let y: number | undefined;

    const drawCircle = (x: number, y: number) => {
        const ctx = canvas.current?.getContext("2d");
        ctx!.beginPath();
        ctx!.arc(x, y, size, 0, Math.PI * 2);
        ctx!.fillStyle = color;
        ctx!.fill();
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
        const ctx = canvas.current?.getContext("2d");
        ctx!.beginPath();
        ctx!.moveTo(x1, y1);
        ctx!.lineTo(x2, y2);
        ctx!.strokeStyle = color;
        ctx!.lineWidth = size * 2;
        ctx!.stroke();
    };

    return (
        <div
            className={styles.main}
            onMouseUp={() => {
                setIsPressed(false);
                x = undefined;
                y = undefined;
            }}
        >
            <canvas
                width={800}
                height={600}
                ref={canvas}
                onMouseDown={(e) => {
                    setIsPressed(true);
                    x = e.clientX - e.currentTarget.offsetLeft;
                    y = e.clientY - e.currentTarget.offsetTop;
                }}
                onMouseMove={(e) => {
                    if (isPressed) {
                        const x2 = e.clientX - e.currentTarget.offsetLeft;
                        const y2 = e.clientY - e.currentTarget.offsetTop;
                        drawCircle(x2, y2);
                        drawLine(x!, y!, x2, y2);
                        x = x2;
                        y = y2;
                    }
                }}
            ></canvas>
            <div className={styles.toolbox}>
                <button
                    onClick={() => {
                        setSize(Math.max(5, size - 5));
                    }}
                >
                    -
                </button>
                <span>{size}</span>
                <button
                    onClick={() => {
                        setSize(Math.min(50, size + 5));
                    }}
                >
                    +
                </button>
                <input
                    type="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        const ctx = canvas.current?.getContext("2d");
                        ctx!.clearRect(
                            0,
                            0,
                            canvas.current!.width,
                            canvas.current!.height
                        );
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default DrawingApp;
