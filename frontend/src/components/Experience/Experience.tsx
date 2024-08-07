import React from 'react';
import styles from './Experience.module.scss';

const Experience: React.FC = () => {
    console.log('Styles:');
    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div>
            <h2>Experience</h2>
            <div className="work-list-container">
                <ol>
                    <li>
                        <span className="date-range">Jul 2023 - Present</span>
                        <h3>Software Developer</h3>
                        <h4>Ford Motor Company</h4>
                        <span className="txt-job-location">Dearborn, MI</span>
                        <p>Full stack software engineer on embedded systems development team for a
                            multi-national
                            automotive manufacturing company.</p>
                    </li>
                    <li>
                        <span className="date-range">Dec 2022 -  Jul 2023</span>
                        <h3>Lead Software Engineer </h3>
                        <h4>Clarivate</h4>
                        <span className="txt-job-location">Ann Arbor, MI</span>
                        <p>Lead UI engineer/architect for Agile web application development team for an
                            educational
                            software and database company.</p>
                    </li>
                    <li>
                        <span className="date-range">Dec 2021 - Dec 2022</span>
                        <h3>Senior Software Engineer</h3>
                        <h4>Clarivate</h4>
                        <span className="txt-job-location">Ann Arbor, MI</span>
                        <p>Lead UI engineer/architect for Agile web application development team for an
                            educational
                            software and database company.</p>
                    </li>
                    <li>
                        <span className="date-range">Mar 2019 - Dec 2021</span>
                        <h3>Senior Software Engineer</h3>
                        <h4>ProQuest</h4>
                        <span className="txt-job-location">Ann Arbor, MI</span>
                        <p>Lead UI engineer/architect for Agile web application development team for an
                            educational
                            software and database company.</p>
                    </li>
                    <li>
                        <span className="date-range">Feb 2015 - Feb 2019</span>
                        <h3>Software Engineer</h3>
                        <h4>ProQuest</h4>
                        <span className="txt-job-location">Ann Arbor, MI</span>
                        <p>Lead UI engineer for Agile web application development team for an educational
                            software and database company.</p>
                    </li>
                    <li>
                        <span className="date-range">Apr 2013 - Dec 2015</span>
                        <h3>UI Engineer</h3>
                        <h4>ProQuest</h4>
                        <span className="txt-job-location">Ann Arbor, MI</span>
                        <p>Contract UI engineer for Agile web application development team for an educational
                            software and database company.</p>
                    </li>
                    <li>
                        <span className="date-range">Sep 2011 - Mar 2013</span>
                        <h3>Senior Web Developer</h3>
                        <h4>Digital Roots</h4>
                        <span className="txt-job-location">Novi, MI</span>
                        <p>Primary UI developer and UX designer for a social media monitoring and analytics
                            startup.</p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Experience;
