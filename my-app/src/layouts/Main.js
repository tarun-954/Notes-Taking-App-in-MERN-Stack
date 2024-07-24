import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Loader from "../components/shared/loader";
import SideBar from "../components/shared/sidebar";
function Main(){
    return(
       <Suspense fallback={<Loader />}>
       {/* SideBar */}
       <SideBar />
       <main className={styles.main}>
        {/* Navbar */}
        <section className={styles.content}>
            <Outlet />

        </section>

       </main>
       </Suspense>

    )
}
export default Main;