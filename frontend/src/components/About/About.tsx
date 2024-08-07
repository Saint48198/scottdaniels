import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div>
            <h2>About Me</h2>
            <div>
                <p>I'm a passionate developer with experience in web and mobile applications.</p>
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
