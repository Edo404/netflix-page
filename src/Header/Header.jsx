import { useState } from 'react'
import './Header.css'

function Header(){
    return(
        <div className="container">
            <img src="src/assets/netflix1.png" alt="logo" className="logo" />
            <div className='btns'>
                <button className="translate">English</button>
                <button className="sign-in">Sign In</button>
            </div>            
        </div>
    );
}

export default Header