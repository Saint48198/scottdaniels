import React from 'react';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div>
            <h2>Skills</h2>
            <div className="container-skillList">
                <ul>
                    <li>
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Spring</li>
                            <li>PHP</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Database</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </li>
                    <li>
                        <h3>DevOps</h3>
                        <ul>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>Jenkins</li>
                            <li>Git</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
