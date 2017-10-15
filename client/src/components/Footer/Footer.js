import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer footer">
            <Link to="/">
                <span>Email Service</span>
            </Link>
            <span>Copyright &copy; Viktor Salnichenko 2017</span>
        </footer>
    )
};

export default Footer;