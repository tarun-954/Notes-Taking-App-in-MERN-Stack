import React from "react";
import styles from "./notes.module.scss";
import Wrapper from "../../components/hoc/wrapper";
import Greeting from "../../components/atoms/greeting";
import Note from "../../components/cards/note";
function Notes(){
    return (
       <section className={styles.container}>
     <Greeting />
     <main>
        <Note />
     </main>
       </section>
    )
}
export default Wrapper(Notes);