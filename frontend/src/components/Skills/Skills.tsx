import React from 'react';
import styles from './Skills.module.scss';
import {Heading} from "@chakra-ui/react";

const Skills: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div className={styles.skillsContent}>
            <Heading as='h2' mb={2}>Skills</Heading>
            <div className="container-skillList">
                <ul>
                    <li>
                        <Heading as='h3' size={"md"} mb={1.5}>Frontend</Heading>
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
                        <Heading as='h3' size={"md"}  mb={1.5}>Backend</Heading>
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
                        <Heading as='h3' size={"md"} mb={1.5}>Database</Heading>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </li>
                    <li>
                        <Heading as='h3' size={"md"} mb={1.5}>DevOps</Heading>
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
