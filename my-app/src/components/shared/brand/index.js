import React from 'react';
import BrandImg from '../../../assets/brand.svg';
import styles from './brand.module.scss';

function BrandLogo(){
    return (
        <article className={styles.brand}>
            <img src={BrandImg} alt="brand-logo"/>
            <h1>NOTE.<span>me</span>
            </h1>
        </article>
    


    )
}
export default BrandLogo;

