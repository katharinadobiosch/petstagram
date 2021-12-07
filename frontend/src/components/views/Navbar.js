import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
// import M from "materialize-css";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
    // const searchModal = useRef(null);
    // const [search, setSearch] = useState("");
    // const [userDetails, setUserDetails] = useState([]);

    const { state, dispatch } = useContext(UserContext);
    // let navigate = useNavigate();

    // useEffect(() => {
    //     M.Modal.init(searchModal.current);
    // }, []);

    const logout = (event) => {
        event.preventDefault();

        localStorage.clear();
        dispatch({ type: "CLEAR" });
        // navigate("/");
        window.location.replace("/");
    };

    const renderedList = () => {
        if (state) {
            return [
                <form onSubmit={logout}>
                    <li key="1">
                        <Link to="/profile">
                            <i className="material-icons">account_circle</i>
                        </Link>
                    </li>
                    ,
                    <li key="2">
                        <Link to="/newpost">
                            <i className="material-icons">add_a_photo</i>
                        </Link>
                    </li>
                    ,
                    <li>
                        <button
                            type="submit"
                            className="btn red darken-3
"
                        >
                            Log out
                        </button>
                    </li>
                    ,
                </form>,
            ];
        } else {
            return [
                <li key="3">
                    <Link to="/login">Log in</Link>
                </li>,
                <li key="4">
                    <Link to="/signup">Sign up</Link>
                </li>,
            ];
        }
    };

    return (
        <div>
            <nav className={styles.nav_container}>
                <div className={styles.nav_items}>
                    <Link
                        to={state ? "/" : "/login"}
                        className="brand-logo left"
                    >
                        <div className={styles.logo}>Petstagram</div>
                    </Link>
                    <div className={styles.icons}>
                        <ul id="nav-mobile" className="right">
                            {renderedList()}
                            {/* <li>
                                <Link to="/login">Log in</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign up</Link>
                            </li> */}
                            {/* <li>
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
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

// import React, { useContext } from "react";
// import { UserContext } from "../../App";
// import styles from "../../styles/Navbar.module.css";

// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <div>
//             <nav className={styles.nav_container}>
//                 <div className={styles.nav_items}>
//                     <Link to="/home" className="brand-logo left">
//                         <div className={styles.logo}>Petstagram</div>
//                     </Link>
//                     <div className={styles.icons}>
//                         <ul id="nav-mobile" className="right">
//                             <li>
//                                 <Link to="/login">Log in</Link>
//                             </li>
//                             <li>
//                                 <Link to="/signup">Sign up</Link>
//                             </li>
//                             <li>
//                                 <Link to="/profile">
//                                     <i className="material-icons">
//                                         account_circle
//                                     </i>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/newpost">
//                                     <i className="material-icons">
//                                         add_a_photo
//                                     </i>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;

//////////////////////////////////
