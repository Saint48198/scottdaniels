import React from 'react';
import styles from './Education.module.scss';
import {Heading} from "@chakra-ui/react";

const Education: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div className={styles.educationContent}>
            <Heading as='h2' mb={2}>Education</Heading>
            <div className="container-educationList">
                <ol>
                    <li>
                        <h3>Boston University</h3>
                        <h4>Master of Science (MS) in Computer Information Systems</h4>
                        <span>2014 - 2017</span> / <span className="txt-degree-location">Boston, MA</span>
                    </li>
                    <li>
                        <h3>Washtenaw Community College</h3>
                        <h4>Associate in Applied Science (AAS) in Internet Professional</h4>
                        <span>2006 - 2009</span> / <span className="txt-degree-location">Ann Arbor, MI</span>
                    </li>
                    <li>
                        <h3>University of Phoenix</h3>
                        <h4>Master of Business Administration (MBA) in E-Business</h4>
                        <span>2003 - 2005</span> / <span className="txt-degree-location">Phoenix, AZ</span>
                    </li>
                    <li>
                        <h3>Siena Heights University</h3>
                        <h4>Bachelor of Arts (BA) in Business Administration</h4>
                        <span>1996 - 2000</span> / <span className="txt-degree-location">Adrian, MI </span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Education;
