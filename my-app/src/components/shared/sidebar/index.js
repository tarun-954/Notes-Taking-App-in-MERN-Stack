import {Icon} from '@iconify/react';
import React from "react";
import styles from './sidebar.module.scss';
import BrandLogo from '../brand';
import SidebarItems from "../../../data/sidebar.json";

function SideBar(){
    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} type={"dark"} className={styles.logo} />
            <section>
            {SidebarItems.map((item,index)=>{
                <article key={index} className={styles.item}>
                    <Icon icon={item.icon} />
                </article>
            })}
            </section>
            <article className={styles.logout}>
                <Icon icon="ant-design:logout-outlined" />
                </article>
        </aside>
    )
}
export default SideBar;