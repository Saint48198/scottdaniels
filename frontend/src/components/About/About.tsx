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
                    <ul className="list-site-links-icons">
                        <li>
                            <a href="https://www.linkedin.com/in/scottrdaniels/" target="_blank" aria-label="LinkedIn">
                                <img src="/img/linkedin-24x24.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Saint48198" target="_blank" aria-label="GitHub">
                                <img src="/img/github-24x24.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/saint48198/?hl=en" target="_blank"
                               aria-label="Instagram">
                                <img src="/img/instagram-24x24.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="https://500px.com/p/saint48198?view=photos" target="_blank" aria-label="500px">
                                <img src="/img/500px-24x24.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
