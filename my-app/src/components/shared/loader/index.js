import  React from 'react'
import styles from './loader.module.scss';
import BrandLogo from '../brand';
import Progressbar from '../../atoms/progress-bar';
function Loader(){
    return (
        <article className={styles.container}>
            <BrandLogo />
            <Progressbar />


        </article>
    );
}
export default Loader;