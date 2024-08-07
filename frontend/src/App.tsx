import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PageHeader from "./components/PageHeader/PageHeader";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

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
                <PageHeader />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="skiils">
                <Skills />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
}

export default App;
