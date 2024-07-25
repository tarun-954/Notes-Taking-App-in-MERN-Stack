import React, { useState } from 'react';
import styles from './form.module.scss';
import BrandLogo from '../../../../components/shared/brand';
import { Icon } from '@iconify/react';
import Input from '../../../../components/atoms/input';
import Button from '../../../../components/atoms/button';
function Form() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <section className={styles["form-container"]}>
            <BrandLogo />
            <div className={styles.form}>
                <article className={styles.google}>
                    <Icon icon="ri:google-fill" />
                    <h3>Join with Google</h3>
                </article>
               

                <div className={styles.option}>
                    <span>or join with email address</span>
                </div>
                <article className={styles.details}>
                    <Input value={email} placeholder={"Type Your secret code here "} onChange={(e) => setEmail(e.target.value)} />

                    <Input value={password} placeholder={"Enter your password"} onChange={(e) => setPassword(e.target.value)} />
                    <Button 
                text="Join with email"
                icon="ic:twotone-login"
                className={styles.emailBtn}
                />
                </article>
            </div>
        </section>
    );
}

export default Form;
