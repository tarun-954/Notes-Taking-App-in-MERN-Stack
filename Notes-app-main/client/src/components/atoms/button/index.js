import React from 'react'
import styles from './button.module.scss';
import { Icon } from '@iconify/react';

function Button(props) {
    const {text, icon, handleClick, className, isDisbled} = props;

    return (
        <article className={`${styles.button} ${className}`} onClick={handleClick} disabled={isDisbled}>
            <Icon icon={icon} />
            <h3>{text}</h3>
        </article>
    )
}

export default Button
