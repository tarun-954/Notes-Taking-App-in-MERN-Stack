import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Loader from "../components/shared/loader";
import SideBar from "../components/shared/sidebar";
import Navbar from "../components/shared/navbar";
function Main(){
    return(
        <main className={styles.container}>
       <Suspense fallback={<Loader />}>
       {/* SideBar */}
       <SideBar />
       <div className={styles.main}>
        {/* Navbar */}
        <Navbar />
        <section className={styles.content}>
            <Outlet />

        </section>

       </div>
       
       </Suspense>
</main>
    )
}
export default Main;