import React from 'react'
import styles from './button.module.scss';

function Button(props){
    const {text,icon,handleClick,className}=props
return (

<article className={styles.google}>
                    <Icon icon="ri:google-fill" />
                    <h3>Join with Google</h3>
                </article>
                )
}

export default Button;