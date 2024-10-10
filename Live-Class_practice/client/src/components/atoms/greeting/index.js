import React from "react";
import styles from "./greeting.module.scss";
function Greeting(){
    return (
        <section className={styles.container}>
            <h2>
                Hello,
                 <span>
                Tarun! 👋🏼
                 
                </span>
                 
            </h2>
          
            <p>All your notes here, in one place!</p>

        </section>
    )
}
export default Greeting;