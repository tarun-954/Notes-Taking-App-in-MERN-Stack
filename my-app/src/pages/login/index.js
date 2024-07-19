import React from 'react';
import Left from './section/left';  
import Form from './section/form';  
import styles from './login.module.scss';

function Login(){
    return (
        <main className={styles.container}>
            <Left />
            <Form />
        </main>
    );
}
export default Login;
