import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import styles from "../../../src/styles/Home.module.css";

const Home = () => {
    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
        fetch("/allposts", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setData(result.posts);
            });
    }, []);

    const likePost = (id) => {
        fetch("/like", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                postId: id,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                //   console.log(result)
                const newData = data.map((item) => {
                    if (item._id === result._id) {
                        return result;
                    } else {
                        return item;
                    }
                });
                console.log(result);
                setData(newData);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const unlikePost = (id) => {
        fetch("/unlike", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                postId: id,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                //   console.log(result)
                const newData = data.map((item) => {
                    if (item._id === result._id) {
                        return result;
                    } else {
                        return item;
                    }
                });
                console.log(result);
                setData(newData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const newComment = (comment, postId) => {
        // event.preventDefault();
        // event.target[0].value, item._id;

        fetch("/comment", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                postId,
                text: comment,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                const newData = data.map((item) => {
                    if (item._id === result._id) {
                        return result;
                    } else {
                        return item;
                    }
                });
                setData(newData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const deleteMyComment = (commentId) => {
    //     // ("/deletemycomment/:postId", requiredLogin, (req, res) => {

    //     fetch(`/deletemycomment/${commentId}`, {
    //         method: "DELETE",
    //         headers: {
    //             Authorization: localStorage.getItem("token"),
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((result) => {
    //             const newData = data.map((item) => {
    //                 if (item._id === result._id) {
    //                     return result;
    //                 } else {
    //                     return item;
    //                 }
    //             });
    //             setData(newData);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    const deleteMyComment = (commentId) => {
        console.log("button was clicked");
        fetch(`/deletemycomment/${commentId}`, {
            method: "DELETE",
            headers: {
                Authorization: localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                let newData = data.map((item) => {
                    if (item._id === result._id) {
                        return result;
                    } else {
                        return item;
                    }
                });
                setData(newData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteMyPost = (postId) => {
        // ("/deletemypost/:postId", requiredLogin, (req, res) => {

        fetch(`/deletemypost/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                const newData = data.filter((item) => {
                    return item._id !== result._id;
                });
                setData(newData);
            });
    };

    return (
        <div className={styles.card_container}>
            <div className={styles.home}>
                {data?.map((item) => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <div className="card-image">
                                <div className={styles.username}>
                                    {/* MY CODE */}
                                    <Link
                                        to={
                                            item.postedBy._id !== state._id
                                                ? "/profile/" +
                                                  item.postedBy._id
                                                : "/profile"
                                        }
                                    >
                                        {item.postedBy.username}
                                    </Link>

                                    {/* DELETE MY POST */}
                                    {item.postedBy._id === state._id && (
                                        <i
                                            className="material-icons"
                                            style={{
                                                float: "right",
                                            }}
                                            onClick={() =>
                                                deleteMyPost(item._id)
                                            }
                                        >
                                            delete
                                        </i>
                                    )}
                                </div>

                                <img
                                    className={styles.posting}
                                    alt="That's my profile"
                                    src={item.image}
                                />
                            </div>

                            <div className="card-content">
                                {item.likes.includes(state._id) ? (
                                    <i
                                        className="material-icons"
                                        style={{ color: "red" }}
                                        onClick={() => {
                                            unlikePost(item._id);
                                        }}
                                    >
                                        favorite
                                    </i>
                                ) : (
                                    <i
                                        className="material-icons"
                                        onClick={() => {
                                            likePost(item._id);
                                        }}
                                    >
                                        favorite_border
                                    </i>
                                )}

                                <h6>{item.likes.length} likes</h6>
                                <p>{item.body}</p>
                                {item.comments.map((user) => {
                                    return (
                                        <h6 key={user._id}>
                                            <span style={{ fontWeight: "500" }}>
                                                {user.postedBy.username}
                                            </span>
                                            {` ${user.text}`}

                                            {/* {comment.commentedBy._id === state._id && <i
     style={‌{ cursor: "pointer" }}
     onClick={() => deleteMyComment(item._id, comment._id)}
     className="material-icons right">delete</i>} */}

                                            {/* DELETE COMMENT */}
                                            {user.postedBy._id ===
                                                state._id && (
                                                <i
                                                    className="material-icons"
                                                    style={{
                                                        float: "right",
                                                    }}
                                                    onClick={() =>
                                                        deleteMyComment(
                                                            user._id
                                                        )
                                                    }
                                                >
                                                    delete
                                                </i>
                                            )}
                                        </h6>
                                    );
                                })}
                                {/* <form onSubmit={newComment}> */}
                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        newComment(
                                            event.target[0].value,
                                            item._id
                                        );
                                    }}
                                >
                                    <input
                                        type="text"
                                        placeholder="add a comment"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
