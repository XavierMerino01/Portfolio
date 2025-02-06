import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Xavier Merino Seuma.</p>
            <div>
                <a href="https://github.com/XavierMerino01" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a> </a>
                <a href="https://linkedin.com/in/xaviermerino" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;