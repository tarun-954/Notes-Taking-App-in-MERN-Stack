import React, { useState } from "react";
import styles from './note.module.scss';
import { formatDate } from "../../../utils/formatDate";

function Note(props) {
    const { text, date, color } = props;
    const [expand, setExpand] = useState(false); // Correct usage
    const [noteText,setNoteText] = useState("");

    
    return (
        <article className={styles.container} style={{ backgroundColor: color }}>
            <div className={styles.content}>
                {
                    !text.length? 
                    (
                    <textarea 
                    value ={noteText}
                    className={styles.textarea}
                    onChange={(e)=>setNoteText(e.target.value)}
                    
                    /> 
                
                ) : ( 
                    <>
                   
                
                <p className={expand ? styles.expanded : ""}>{text}</p>           
                {text.length> 120 ? (<button onClick={() => setExpand((prev) => !prev)}>
                    {expand ? "read less" : "read more"}
                </button>
                ): null }
                </>
                    )}
            </div>
            <footer className={styles.footer}>
                {formatDate(date)}
            </footer>
        </article>
    );
}

export default Note;
