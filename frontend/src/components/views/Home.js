import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
// import { Link } from "react-router-dom";
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
            method: "put",
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
                setData(newData);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const unlikePost = (id) => {
        fetch("/unlike", {
            method: "put",
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
                setData(newData);
            })
            .catch((err) => {
                console.log(err);
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
                                    {item.postedBy.username}
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

                                {/* UNLIKE */}
                                {/* <i
                                    className="material-icons"
                                    onClick={() => {
                                        unlikePost(item._id);
                                    }}
                                >
                                    favorite_border
                                </i> */}
                                {/* LIKE */}
                                {/* <i
                                    className="material-icons"
                                    onClick={() => {
                                        likePost(item._id);
                                    }}
                                    style={{ color: "red" }}
                                >
                                    favorite
                                </i> */}

                                <h6>{item.likes.length} likes</h6>
                                <p>{item.body}</p>
                                <input
                                    type="text"
                                    placeholder="add a comment"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;

// import React from "react";
// import styles from "../../../src/styles/Home.module.css";

// const Home = () => {
//     return (
//         <>
//             <div className={styles.card_container}>
//                 <div className={styles.home}>
//                     <div className="card home-card">
//                         <div className="card-image">
//                             <div className={styles.username}>Wolfgang</div>
//                             <img
//                                 className={styles.posting}
//                                 alt="That's my profile"
//                                 src="https://images.unsplash.com/photo-1617115184889-54c8935c11a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwYmlydGhkYXl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//                             />
//                         </div>

//                         <div className="card-content">
//                             <i className="material-icons">favorite_border</i>

//                             <h6>Title</h6>
//                             <p>
//                                 Last week we celebrated the first birthday of my
//                                 Bestie!
//                             </p>
//                             <input type="text" placeholder="add a comment" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.home}>
//                     <div className="card home-card">
//                         <div className="card-image">
//                             <div className={styles.username}>Wolfgang</div>
//                             <img
//                                 className={styles.posting}
//                                 alt="That's my profile"
//                                 src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                             />
//                         </div>

//                         <div className="card-content">
//                             <i className="material-icons">favorite_border</i>

//                             <h6>Title</h6>
//                             <p>My birthday party</p>
//                             <input type="text" placeholder="add a comment" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.home}>
//                     <div className="card home-card">
//                         <div className="card-image">
//                             <div className={styles.username}>Wolfgang</div>
//                             <img
//                                 className={styles.posting}
//                                 alt="That's my profile"
//                                 src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                             />
//                         </div>

//                         <div className="card-content">
//                             <i className="material-icons">favorite_border</i>

//                             <h6>Title</h6>
//                             <p>My birthday party</p>
//                             <input type="text" placeholder="add a comment" />
//                         </div>
//                     </div>
//                 </div>{" "}
//                 <div className={styles.home}>
//                     <div className="card home-card">
//                         <div className="card-image">
//                             <div className={styles.username}>Wolfgang</div>
//                             <img
//                                 className={styles.posting}
//                                 alt="That's my profile"
//                                 src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                             />
//                         </div>

//                         <div className="card-content">
//                             <i className="material-icons">favorite_border</i>

//                             <h6>Title</h6>
//                             <p>My birthday party</p>
//                             <input type="text" placeholder="add a comment" />
//                         </div>
//                     </div>
//                 </div>{" "}
//                 <div className={styles.home}>
//                     <div className="card home-card">
//                         <div className="card-image">
//                             <div className={styles.username}>Wolfgang</div>
//                             <img
//                                 className={styles.posting}
//                                 alt="That's my profile"
//                                 src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                             />
//                         </div>

//                         <div className="card-content">
//                             <i className="material-icons">favorite_border</i>

//                             <h6>Title</h6>
//                             <p>My birthday party</p>
//                             <input type="text" placeholder="add a comment" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;

///////////////////////////
