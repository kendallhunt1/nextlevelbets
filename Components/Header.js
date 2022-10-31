import react from 'react';
import '../Styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logoWrapper">
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/0/85.png" alt="Logo" />
                </div>
            </div>
            <div className="navWrapper">
                <div className="nav">
                    <a href="#">About</a>
                    <a href="#">Membership</a>
                    <a href="#">Sign Up</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header;