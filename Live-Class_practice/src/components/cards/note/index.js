import React, { useState } from "react";
import styles from './note.module.scss';
import { formatDate } from "../../../utils/formatDate";

function Note(props) {
    const { text, date, color } = props;
    const [expand, setExpand] = useState(false); // Correct usage
    
    return (
        <article className={styles.container} style={{ backgroundColor: color }}>
            <div className={styles.content}>
                <p className={expand ? styles.expanded : ""}>{text.substring(0,10000000000)}</p>           
                {text.length> 120 ? <button onClick={() => setExpand((prev) => !prev)}>
                    {expand ? "read less" : "read more"}
                </button>
                : null }
            </div>
            <footer className={styles.footer}>
                {formatDate(date)}
            </footer>
        </article>
    );
}

export default Note;
