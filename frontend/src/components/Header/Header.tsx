import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <header className={styles.header}>

            <div>
                <h1>ScottDaniels.co</h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
