import React from "react";
import styles from "../../styles/Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className={styles.nav_container}>
                <div className={styles.nav_items}>
                    <Link to="/home" className="brand-logo left">
                        <div className={styles.logo}>Petstagram</div>
                    </Link>
                    <div className={styles.icons}>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link to="/login">Log in</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <i className="material-icons">
                                        account_circle
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/newpost">
                                    <i className="material-icons">
                                        add_a_photo
                                    </i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
