import React from 'react'
import styles from './note.module.scss';
import { formatDate } from '../../../utils/formatDate';
import { useState } from 'react';
// import Button from '../../atoms/button';
import Button from '../../atoms/button';

function Note(props) {
    const { text, date, color } = props;
    const [expand, setExpand] = useState(false);
    const [noteText, setNoteText] = useState("");

    const handleSave = () => {

    }

    return (
        <article className={styles.container} style={{ backgroundColor: color }}>
            <div className={styles.content}>

                {

                    !text.length ? <>
                    <textarea 
                        placeholder="Start typing..." 
                        value={noteText} 
                        onChange={(e)=> setNoteText(e.target.value)} 
                        className={styles.textarea}
                    />
                    </> : 
                    <>
                    <p className={expand ? styles.expanded : ""}>{text.substring(0,150)}</p>
                    {text.length>150 ? <button onClick={()=>setExpand((prev) => !prev)}>
                        Read {expand ? "less" : "more"}
                    </button> : null}
                    </>

                }


            </div>
            <footer className={styles.footer}>
                <div>{formatDate(date)}</div>
                {noteText.length ? (<Button text={'save'} className={styles.saveBtn} handleClick={handleSave}/>) : null}
            </footer>
        </article>
    )
}

export default Note
