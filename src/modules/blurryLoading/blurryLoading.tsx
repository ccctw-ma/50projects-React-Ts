import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function BlurryLoading() {
  const bg = useRef<HTMLElement>(null);

  const text = useRef<HTMLDivElement>(null);

  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ): number => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useEffect(() => {
    let load: number = 0;
    let int: string | number | NodeJS.Timeout | undefined;

    const blurring = () => {
      load++;
      if (load > 99) {
        clearInterval(int);
      }
      text.current!.innerText = `${load}%`;
      text.current!.style.opacity = String(scale(load, 0, 100, 1, 0));
      bg.current!.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    };

    int = setInterval(blurring, 30);
    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.bg} ref={bg}></section>
      <div className={styles.loadingText} ref={text}>
        0%
      </div>
    </div>
  );
}
