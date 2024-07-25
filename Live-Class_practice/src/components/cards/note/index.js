import React from "react";
import styles from './note.module.scss';
function Note(){
    return (
    <article className={styles.container}>
        <div className={styles.content}>
    <p>This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍 </p>            
        </div>
        <footer className={styles.footer}>
        <p>July, 25 2024</p>
        </footer>
</article>
    );
}
export default Note;


