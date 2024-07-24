import {Icon} from '@iconify/react';
import React from "react";
import styles from './sidebar.module.scss';
import BrandLogo from '../brand';
import sideData from "../../../data/sidebar.json";

function SideBar(){
    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} className={styles.logo} />
            <section>
            {sideData.map((item)=>{
                <article className={styles.item}>
                    <Icon icon={item.icon} />
                </article>
            })}
            </section>
            <article>
                <Icon icon="ant-design:logout-outlined" />
                </article>
        </aside>
    )
}
export default SideBar;