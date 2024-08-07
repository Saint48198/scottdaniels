import React from 'react';
import styles from './PageHeader.module.scss';

const PageHeader: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div>
            <h2>Hi, I am Scott Daniels.</h2>
            <p>Fullstack Software Developer focused on the Frontend</p>
            <button>Download Resume</button>
        </div>
    );
};

export default PageHeader;
