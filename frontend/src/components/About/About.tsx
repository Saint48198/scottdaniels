import React from 'react';
import styles from './About.module.scss';
import {Heading, Text} from "@chakra-ui/react";

const About: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div className={styles.aboutContent}>
            <Heading as='h2' mb={2}>About Me</Heading>
            <div>
                <Text fontSize='xl'>I'm a passionate developer with experience in web and mobile applications.</Text>
            </div>
            <div>
                <img alt="" src="https://placehold.co/250x400"/>
                <div>
                    <ul className={"list-site-links-icons"}>
                        <li>
                            <a href=""><i>LinkedIn</i></a>
                            <a href=""><i>GitHub</i></a>
                            <a href=""><i>Instagram</i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
