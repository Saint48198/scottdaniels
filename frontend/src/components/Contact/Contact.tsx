import React from 'react';
import styles from './Contact.module.scss';
import {Button, Textarea, Input, Heading} from '@chakra-ui/react'

const Contact: React.FC = () => {

    if (!styles) {
        console.error('Styles object is undefined');
    } else {
        console.log('Styles object:', styles);
    }

    return (
        <div className={styles.contactContent}>
            <Heading as='h2' mb={2}>Contact</Heading>
            <form>
                <Input type="text" name="name" placeholder="Your Name" aria-label="your name"/>
                <Input type="email" name="email" placeholder="Your Email" aria-label="your email"/>
                <Textarea name="message" placeholder="Your Message" aria-label="message" />
                <Button colorScheme='blue'>Send</Button>
            </form>
        </div>
    );
};

export default Contact;
