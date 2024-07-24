import React from 'react';
import BrandLightImg from '../../../assets/brand-light.svg';
import BrandDarkImg from '../../../assets/brand-dark.svg';

import styles from './brand.module.scss';

function BrandLogo(props){
    const {logoOnly,type="light",className}=props;

    return (
        <article className={`${styles.brand} ${className}`}>
            <img src={type=="light" ? BrandLightImg :BrandDarkImg} alt="brand-logo"/>
            {!logoOnly ? (
   <h1>NOTE.<span>me</span>
            </h1>
            ): null}
         
        </article>
    


    )
}
export default BrandLogo;

