import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

import styles from './sidebar.module.scss';
import BrandLogo from '../brand';

import sidebarData from '../../../data/sidebar.json';

import utils from '../../../utils/localStorage';
import types from '../../../config/types';

function Sidebar() {
    const navigate = useNavigate();

    const handleClick = (item) => {
        if(item.path==="/notes"){
            let data = utils.getFromLocalStorage(types.NOTES_DATA);
            let updatedData = [{id: data.length+1, text: "", createdAt: new Date().toISOString, color: "rgba(174, 223, 232, 0.4)"}, ...data];
            utils.addToLocalStorage(types.NOTES_DATA, updatedData);
        }
    }

    const handleLogout = () => {
        utils.removeFromLocalStorage('auth_key');
        navigate('/');
    }
    
    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} type={"dark"} className={styles.logo}/>
            <section>
                {
                    sidebarData.map((item,index) => {
                        return (
                            <article key={index} className={styles.item} onClick={() => handleClick(item)}>
                                <Icon icon={item.icon} />
                            </article>
                        );
                    })
                }
            </section>
            <article className={styles.logoutBtn}>
                <Icon icon={"material-symbols:logout"} onClick={handleLogout}/>
            </article>
        </aside>
    )
}

export default Sidebar
