import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <a href="/" className="brand-logo left">
                        Petstagram
                    </a>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <a href="/login">Log in</a>
                        </li>
                        <li>
                            <a href="/signup">Sign in</a>
                        </li>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
