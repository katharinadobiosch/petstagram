import React from "react";
import styles from "../../../src/styles/Home.module.css";

const Home = () => {
    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.home}>
                    <div className="card home-card">
                        <div className="card-image">
                            <div className={styles.username}>Wolfgang</div>
                            <img
                                className={styles.posting}
                                alt="That's my profile"
                                src="https://images.unsplash.com/photo-1617115184889-54c8935c11a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwYmlydGhkYXl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            />
                        </div>

                        <div className="card-content">
                            <i className="material-icons">favorite_border</i>

                            <h6>Title</h6>
                            <p>
                                Last week we celebrated the first birthday of my
                                Bestie!
                            </p>
                            <input type="text" placeholder="add a comment" />
                        </div>
                    </div>
                </div>
                <div className={styles.home}>
                    <div className="card home-card">
                        <div className="card-image">
                            <div className={styles.username}>Wolfgang</div>
                            <img
                                className={styles.posting}
                                alt="That's my profile"
                                src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            />
                        </div>

                        <div className="card-content">
                            <i className="material-icons">favorite_border</i>

                            <h6>Title</h6>
                            <p>My birthday party</p>
                            <input type="text" placeholder="add a comment" />
                        </div>
                    </div>
                </div>
                <div className={styles.home}>
                    <div className="card home-card">
                        <div className="card-image">
                            <div className={styles.username}>Wolfgang</div>
                            <img
                                className={styles.posting}
                                alt="That's my profile"
                                src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            />
                        </div>

                        <div className="card-content">
                            <i className="material-icons">favorite_border</i>

                            <h6>Title</h6>
                            <p>My birthday party</p>
                            <input type="text" placeholder="add a comment" />
                        </div>
                    </div>
                </div>{" "}
                <div className={styles.home}>
                    <div className="card home-card">
                        <div className="card-image">
                            <div className={styles.username}>Wolfgang</div>
                            <img
                                className={styles.posting}
                                alt="That's my profile"
                                src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            />
                        </div>

                        <div className="card-content">
                            <i className="material-icons">favorite_border</i>

                            <h6>Title</h6>
                            <p>My birthday party</p>
                            <input type="text" placeholder="add a comment" />
                        </div>
                    </div>
                </div>{" "}
                <div className={styles.home}>
                    <div className="card home-card">
                        <div className="card-image">
                            <div className={styles.username}>Wolfgang</div>
                            <img
                                className={styles.posting}
                                alt="That's my profile"
                                src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            />
                        </div>

                        <div className="card-content">
                            <i className="material-icons">favorite_border</i>

                            <h6>Title</h6>
                            <p>My birthday party</p>
                            <input type="text" placeholder="add a comment" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
