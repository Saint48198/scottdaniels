import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <footer>
            <div>
                <p>&copy; Copyright Scott Daniels Software Development</p>
            </div>
        </footer>
    );
};

export default Footer;
