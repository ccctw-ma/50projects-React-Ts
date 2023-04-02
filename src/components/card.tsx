import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card: React.FC<{ moduleName: string }> = ({ moduleName }) => {
    return (
        <div className={styles.card}>
            <div>
                <h3>{moduleName}</h3>
            </div>
            <div>
                <Link to={moduleName}>1</Link>
            </div>
        </div>
    );
};

export default Card;
