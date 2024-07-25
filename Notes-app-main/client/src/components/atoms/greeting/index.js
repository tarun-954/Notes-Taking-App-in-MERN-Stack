import React from "react";
import styles from "./greeting.module.scss";

function Greeting() {
    return (
        <section className={styles.container}>
            <h1>
                Hello, <span>Hardik! 👋🏼</span>
            </h1>
            <p>All your notes are here, in one place.</p>
        </section>
    );
}

export default Greeting;
