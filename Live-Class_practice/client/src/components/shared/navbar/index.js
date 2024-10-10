import React, { useState } from "react";
import styles from './navbar.module.scss';
import {Icon} from '@iconify/react';
import Input from '../../atoms/input';
function Navbar(){
const [searchText,setSearchText]=useState("");
return (
<header className={styles.header}>
    <article className={styles['search-bar']}>
    <Icon icon={"circum:search"}  />
        <Input 
      type="text"
    value={searchText}
    className={styles['field']}
placeholder="Search Notes"
onChange={(e)=>setSearchText(e.target.value)}
/>
    </article>
    <div className={styles.theme}>
        <Icon icon={"f7:sunset"} />
    </div>
</header>

    );
}
export default Navbar;