import React from "react";
import styles from "../../../src/styles/NewPost.module.css";

const NewPost = () => {
    return (
        <>
            <div className={styles.card_container}>
                <div className="card input field">
                    {" "}
                    <div className={styles.home}>
                        <input type="text" placeholder="title" />
                        <input type="text" placeholder="Body" />

                        <div className="file-field input-field">
                            <div className="btn #64b5f6 blue darken-1">
                                <span>UPLOAD IMAGE</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input
                                    className="file-path validate"
                                    type="text"
                                />
                            </div>
                        </div>
                        <button
                            className="btn waves-effect waves-light #64b5f6 blue darken-1
"
                        >
                            SUBMIT POST{" "}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPost;
