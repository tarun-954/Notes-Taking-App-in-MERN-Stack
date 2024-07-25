import React from 'react'
import styles from './navbar.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import Input from '../../atoms/input';

function Navbar() {
    const [searchText, setSearchText] = React.useState('');
    return (
        <header className={styles.header}>
            <article className={styles['search-bar']}>
                <Icon icon="bx:bx-search" />
                <Input
                    type="text"
                    placeholder="Search Notes"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    className={styles['field']}
                />
            </article>
            <div className={styles.theme}>
                <Icon icon="vaadin:sun-down" />
            </div>
        </header>
    )
}

export default Navbar
