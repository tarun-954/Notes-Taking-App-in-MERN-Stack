import React from "react";
import styles from './note.module.scss';
function Note(props){
    const {text, date}=props;
    return (
    <article className={styles.container}>
        <div className={styles.content}>
    <p>{text}</p>            
        </div>
        <footer className={styles.footer}>
        {date}
        </footer>

      
</article>
    );
}
export default Note;


