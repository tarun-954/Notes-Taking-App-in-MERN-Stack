import React from 'react';
import styles from './form.module.scss';
import BrandLogo from '../../../../components/shared/brand';
function Form(){
    return (
        <section className={styles["form-container"]}>
           
            <BrandLogo />
        </section>
    );
    
}
export default Form;
