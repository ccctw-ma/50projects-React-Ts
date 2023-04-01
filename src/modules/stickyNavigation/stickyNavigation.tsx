/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: msc
 * @Date: 2022-08-15 22:36:20
 * @LastEditTime: 2022-08-15 23:10:23
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef } from "react";

import styles from "./index.module.css";
const StickyNavigation: React.FC = () => {
    const nav = useRef<HTMLElement>(null);
    const fixNav = () => {
        // console.log(window.scrollY, nav.current!.offsetHeight);

        if (window.scrollY > nav.current!.offsetHeight + 150) {
            nav.current!.classList.add(styles.active);
        } else {
            nav.current!.classList.remove(styles.active);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", fixNav);
        return () => {
            window.removeEventListener("scroll", fixNav);
        };
    }, []);
    return (
        <div className={styles.main}>
            <nav className={styles.nav} ref={nav}>
                <div className={styles.container}>
                    <h1 className={styles.logo}>
                        <a href="#">My Website</a>
                    </h1>
                    <ul>
                        <li>
                            <a href="#" className={styles.current}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#one">About</a>
                        </li>
                        <li>
                            <a href="#two">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles.hero}>
                <div className={styles.container}>
                    <h1>Welcome To My Website</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores, consequuntur?
                    </p>
                </div>
            </div>

            <section className={`${styles.container} ${styles.content}`}>
                <h2 id="one">Content One</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione dolorem voluptates eveniet tempora ut cupiditate
                    magnam, sapiente, hic quo in ipsum iste soluta eaque
                    perferendis nihil recusandae dolore officia aperiam corporis
                    similique. Facilis quos tempore labore totam! Consectetur
                    molestiae iusto ducimus error reiciendis aspernatur dolor,
                    modi dolorem sit architecto, voluptate magni sunt unde est
                    quas? Voluptates a dolorum voluptatum quo perferendis aut
                    sit. Aspernatur libero laboriosam ab eligendi omnis delectus
                    earum labore, placeat officiis sint illum rem voluptas ipsum
                    repellendus iste eius recusandae quae excepturi facere, iure
                    rerum sequi? Illum velit delectus dicta et iste dolorum
                    obcaecati minus odio eligendi!
                </p>

                <h3 id="two">Content Two</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur provident nostrum possimus inventore nisi
                    laboriosam consequatur modi nulla eos, commodi, omnis
                    distinctio! Maxime distinctio impedit provident, voluptates
                    illo odio nostrum minima beatae similique a sint sapiente
                    voluptatum atque optio illum est! Tenetur tempora doloremque
                    quae iste aperiam hic cumque repellat?
                </p>
            </section>
        </div>
    );
};

export default StickyNavigation;
