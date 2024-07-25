import React from 'react'
import styles from './button.module.scss';
import {Icon} from '@iconify/react';
function Button(props){
    const {text,icon,handleClick,className,isDisabled}=props
return (

<button className={`${styles.button} ${className}`} onClick={handleClick} disabled={isDisabled}>
                    <Icon icon={icon} />
                    <h3>{text}</h3>
                     
                </button>
                )
}

export default Button;