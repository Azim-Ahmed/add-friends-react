import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className = "HeaderStyle">
          <img src="https://i.pinimg.com/originals/bb/88/f8/bb88f8d4e2d96b895fec74a87910f1ae.png" alt=""/>
            <nav className = "Navbar">
                <a href="/friend" >Friend Request</a>
                <a href="/add">Add</a>
                <a href="/delete">Cancel</a>
            </nav>
        </div>
    );
};

export default Header;