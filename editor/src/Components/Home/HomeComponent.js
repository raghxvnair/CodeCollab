import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';

const HomeComponent = (props) => {
    const { createId } = props;
    return (
        <div className={styles.home}>
            <h1>CodeColab</h1>
            <p className={styles.heading}>A Collaborative Code editor for pair programming, interviews, teaching and a lot more. "CodeColab" is a code pair platform where users can share an interactive editor and write code together. It has language support for C++, Java and python. This application is based on the concept of operational transformation which forms the basis for a shared editor.</p>
            
            <Link to={`/${createId()}`}>
                <button className={`${styles.btn} btn_primary`}>Start Coding</button>
            </Link>

        </div>
    );
}

export default HomeComponent;