import React, { useEffect, useState, useContext } from "react";
import styles from "../../../src/styles/Profile.module.css";
import { UserContext } from "../../App";
import { useParams } from "react-router";

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const { state, dispatch } = useContext(UserContext);
    const { userid } = useParams();
    console.log(userid);
    const [showfollow, setShowFollow] = useState();

    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                // !!ADDED;
                setUserProfile(result);
            });
    }, []);

    const followUser = () => {
        fetch("/follow", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                followId: userid,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: "UPDATE",
                    payload: {
                        following: data.following,
                        followers: data.followers,
                    },
                });
                localStorage.setItem("user", JSON.stringify(data));
                setUserProfile((prevState) => {
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            followers: [...prevState.user.followers, data._id],
                        },
                    };
                });
                setShowFollow(false);
            });
    };
    const unfollowUser = () => {
        fetch("/unfollow", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                unfollowId: userid,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: "UPDATE",
                    payload: {
                        following: data.following,
                        followers: data.followers,
                    },
                });
                localStorage.setItem("user", JSON.stringify(data));

                setUserProfile((prevState) => {
                    const newFollower = prevState.user.followers.filter(
                        (item) => item != data._id
                    );
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            followers: newFollower,
                        },
                    };
                });
                setShowFollow(true);
            });
    };

    return (
        <>
            {userProfile ? (
                <div>
                    <div className={styles.profile_header}>
                        <img
                            className={styles.profile_image}
                            alt="That's my profile"
                            src="https://images.unsplash.com/photo-1596854307809-6e754c522f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        />
                        <div className={styles.info}>
                            <div className={styles.username}>
                                {userProfile.user.username}
                            </div>
                            {/* <div className={styles.username}>
                                {userProfile.user.email}
                            </div> */}

                            <div className={styles.user_info}>
                                <div>
                                    {userProfile.posts.length}
                                    <br /> Posts
                                </div>

                                <div>
                                    67k <br />
                                    Follower
                                </div>
                                <div>
                                    784 <br />
                                    Following
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.border_header}></div>

                    <div className={styles.gallery}>
                        {userProfile.posts.map((item) => {
                            return (
                                <img
                                    key={item._id}
                                    className={styles.posting}
                                    src={item.image}
                                    alt={item.title}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <h2>loading...</h2>
            )}
        </>
    );
};

export default UserProfile;

// // WORKS
// import React, { useEffect, useState, useContext } from "react";
// import styles from "../../../src/styles/Profile.module.css";

// import { UserContext } from "../../App";
// import { useParams } from "react-router-dom";

// const UserProfile = () => {
//     const [userProfile, setUserProfile] = useState(null);

//     const { state, dispatch } = useContext(UserContext);
//     const { userid } = useParams();

//     useEffect(() => {
//         fetch(`/user/${userid}`, {
//             headers: {
//                 Authorization: "Bearer " + localStorage.getItem("jwt"),
//             },
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 //console.log(result)

//                 setUserProfile(result);
//             });
//     }, []);

//     return (
//         <>
//             {userProfile ? (
//                 <div style={{ maxWidth: "550px", margin: "0px auto" }}>
//                     <div
//                         style={{
//                             display: "flex",
//                             justifyContent: "space-around",
//                             margin: "18px 0px",
//                             borderBottom: "1px solid grey",
//                         }}
//                     >
//                         <div>
//                             <img
//                                 alt="this is a profile"
//                                 style={{
//                                     width: "160px",
//                                     height: "160px",
//                                     borderRadius: "80px",
//                                 }}
//                                 src="https://images.unsplash.com/photo-1596854307809-6e754c522f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                             />
//                         </div>
//                         <div>
//                             <h4>{userProfile.user.name}</h4>
//                             <h5>{userProfile.user.email}</h5>
//                             <div
//                                 style={{
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     width: "108%",
//                                 }}
//                             >
//                                 <h6>{userProfile.posts.length} posts</h6>
//                                 <h6>120 followers</h6>
//                                 <h6>20 following</h6>
//                             </div>

//                             <button
//                                 style={{
//                                     margin: "10px",
//                                 }}
//                                 className="btn waves-effect waves-light #64b5f6 blue darken-1"
//                             >
//                                 Follow
//                             </button>

//                             <button
//                                 style={{
//                                     margin: "10px",
//                                 }}
//                                 className="btn waves-effect waves-light #64b5f6 blue darken-1"
//                             >
//                                 UnFollow
//                             </button>
//                         </div>
//                     </div>

//                     <div className="gallery">
//                         {userProfile.posts.map((item) => {
//                             return (
//                                 <img
//                                     key={item._id}
//                                     className="item"
//                                     src={item.image}
//                                     alt={item.title}
//                                 />
//                             );
//                         })}
//                     </div>
//                 </div>
//             ) : (
//                 <h2>loading...!</h2>
//             )}
//         </>
//     );
// };

// export default UserProfile;
