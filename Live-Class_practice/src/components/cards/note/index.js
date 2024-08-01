import React, { useState } from "react";
import styles from './note.module.scss';
import { formatDate } from "../../../utils/formatDate";

function Note(props) {
    const { text, date, color } = props;
    const [expand, setExpand] = useState(false); // Correct usage
    
    return (
        <article className={styles.container} style={{ backgroundColor: color }}>
            <div className={styles.content}>
                <p className={expand ? styles.expanded : ""}>{text}</p>           
                <button onClick={() => setExpand((prev) => !prev)}>
                    {expand ? "read less" : "read more"}
                </button>
            </div>
            <footer className={styles.footer}>
                {formatDate(date)}
            </footer>
        </article>
    );
}

export default Note;
