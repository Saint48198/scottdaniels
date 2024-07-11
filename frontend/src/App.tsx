import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Header from "./components/Header/Header";

const App: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        axios.get('/api')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className="main-content App">
            <Header />
            <section className="header-txt">
                <h2>Hi, I am Scott Daniels.</h2>
                <p>Fullstack Software Developer focused on the Frontend</p>
                <button>Download Resume</button>
            </section>
            <section id="about">
            <h2>About Me</h2>
                <div>
                    <p>I'm a passionate developer with experience in web and mobile applications.</p>
                </div>
                <div>
                    <img alt={""} src="https://placehold.co/250x400"/>
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


            </section>
            <section id="experience">
                <h2>Experience</h2>
                <div>
                    <ol>
                        <li>
                            <span>Jul 2023 - Present</span>
                            <h3>Software Developer</h3>
                            <h4>Ford Motor Company</h4>
                            <span className="txt-job-location">Dearborn, MI</span>
                            <p>Full stack software engineer on embedded systems development team for a multi-national
                                automotive manufacturing company.</p>
                        </li>
                        <li>
                            <span>Dec 2022 -  Jul 2023</span>
                            <h3>Lead Software Engineer </h3>
                            <h4>Clarivate</h4>
                            <span className="txt-job-location">Ann Arbor, MI</span>
                            <p>Lead UI engineer/architect for Agile web application development team for an educational
                                software and database company.</p>
                        </li>
                        <li>
                            <span>Dec 2021 - Dec 2022</span>
                            <h3>Senior Software Engineer</h3>
                            <h4>Clarivate</h4>
                            <span className="txt-job-location">Ann Arbor, MI</span>
                            <p>Lead UI engineer/architect for Agile web application development team for an educational
                                software and database company.</p>
                        </li>
                        <li>
                            <span>Mar 2019 - Dec 2021</span>
                            <h3>Senior Software Engineer</h3>
                            <h4>ProQuest</h4>
                            <span className="txt-job-location">Ann Arbor, MI</span>
                            <p>Lead UI engineer/architect for Agile web application development team for an educational
                                software and database company.</p>
                        </li>
                        <li>
                            <span>Feb 2015 - Feb 2019</span>
                            <h3>Software Engineer</h3>
                            <h4>ProQuest</h4>
                            <span className="txt-job-location">Ann Arbor, MI</span>
                            <p>Lead UI engineer for Agile web application development team for an educational
                                software and database company.</p>
                        </li>
                        <li>
                            <span>Apr 2013 - Dec 2015</span>
                            <h3>UI Engineer</h3>
                            <h4>ProQuest</h4>
                            <span className="txt-job-location">Ann Arbor, MI</span>
                            <p>Contract UI engineer for Agile web application development team for an educational
                                software and database company.</p>
                        </li>
                        <li>
                            <span>Sep 2011 - Mar 2013</span>
                            <h3>Senior Web Developer</h3>
                            <h4>Digital Roots</h4>
                            <span className="txt-job-location">Novi, MI</span>
                            <p>Primary UI developer and UX designer for a social media monitoring and analytics startup.</p>
                        </li>
                    </ol>
                </div>
            </section>
            <section id="skiils">
                <h2>Skills</h2>
                <div>
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
            </section>
            <section id="education">
                <h2>Education</h2>
                <div>
                    <ol>
                        <li>
                            <span>2014 - 2017</span>
                            <h3>Master of Science (MS) in Computer Information Systems</h3>
                            <h4>Boston University</h4>
                            <span className="txt-degree-location">Boston, MA</span>
                        </li>
                        <li>
                            <span>2006 - 2009</span>
                            <h3>Associate in Applied Science (AAS) in Internet Professional</h3>
                            <h4>Washtenaw Community College</h4>
                            <span className="txt-degree-location">Ann Arbor, MI</span>
                        </li>
                        <li>
                            <span>2003 - 2005</span>
                            <h3>Master of Business Administration (MBA) in E-Business</h3>
                            <h4>University of Phoenix</h4>
                            <span className="txt-degree-location">Phoenix, AZ</span>
                        </li>
                        <li>
                            <span>1996 - 2000</span>
                            <h3>Bachelor of Arts (BA) in Business Administration</h3>
                            <h4>Siena Heights University</h4>
                            <span className="txt-degree-location">Adrian, MI </span>
                        </li>
                    </ol>
                </div>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="email" name="email" placeholder="Your Email"/>
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>

            <footer>
                <p>&copy; Copyright Scott Daniels Software Development</p>
            </footer>
        </div>
    );
}

export default App;
