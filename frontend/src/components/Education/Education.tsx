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
                        <h3>Master of Science (MS) in Computer Information Systems</h3>
                        <span>2014 - 2017</span>
                        <h4>Boston University</h4>
                        <span className="txt-degree-location">Boston, MA</span>
                    </li>
                    <li>
                        <h3>Associate in Applied Science (AAS) in Internet Professional</h3>
                        <span>2006 - 2009</span>
                        <h4>Washtenaw Community College</h4>
                        <span className="txt-degree-location">Ann Arbor, MI</span>
                    </li>
                    <li>
                        <h3>Master of Business Administration (MBA) in E-Business</h3>
                        <span>2003 - 2005</span>
                        <h4>University of Phoenix</h4>
                        <span className="txt-degree-location">Phoenix, AZ</span>
                    </li>
                    <li>
                        <h3>Bachelor of Arts (BA) in Business Administration</h3>
                        <span>1996 - 2000</span>
                        <h4>Siena Heights University</h4>
                        <span className="txt-degree-location">Adrian, MI </span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Education;
