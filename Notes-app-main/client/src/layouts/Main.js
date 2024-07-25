import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../components/shared/loader';
import styles from './layout.module.scss';
import Sidebar from '../components/shared/sidebar';
import Navbar from '../components/shared/navbar';
import utils from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';

function Main() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = utils.getFromLocalStorage('auth_key');
    if(!token) {
      navigate('/');
    }
  });

  return (
    <main className={styles.container}>
    <Suspense fallback={<Loader />}>
        <Sidebar />
        <div className={styles.main}>
            <Navbar />
            <section className={styles.content}>
                <Outlet />
            </section>
        </div>
    </Suspense>
    </main>
  );
}

export default Main
