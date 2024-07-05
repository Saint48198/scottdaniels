import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

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
        <div className="App">
            <header className="App-header">
                <h1>{message}</h1>
            </header>
            <section id="about">
                <h2>About Me</h2>
                <p>I'm a passionate developer with experience in web and mobile applications.</p>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <div className="project">
                    <h3>Project 1</h3>
                    <p>Description of project 1.</p>
                </div>
                <div className="project">
                    <h3>Project 2</h3>
                    <p>Description of project 2.</p>
                </div>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    );
}

export default App;
