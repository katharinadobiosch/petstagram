import React from "react";
import styles from "../../../src/styles/Profile.module.css";

const Profile = () => {
    return (
        <>
            <div className={styles.profile_header}>
                <img
                    className={styles.profile_image}
                    alt="That's my profile"
                    src="https://images.unsplash.com/photo-1596854307809-6e754c522f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
                <div className={styles.info}>
                    <div className={styles.username}>Wolfgang</div>

                    <div className={styles.user_info}>
                        <div>678 Posts</div>
                        <div>67k Follower</div>
                        <div>784 Following</div>
                    </div>
                </div>
            </div>
            <div className={styles.border_header}></div>

            <div className={styles.gallery}>
                <img
                    className={styles.posting}
                    alt="That's my profile"
                    src="https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className={styles.posting}
                    alt="That's my profile"
                    src="https://images.unsplash.com/photo-1592503436012-61da703f6d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className={styles.posting}
                    alt="That's my profile"
                    src="https://images.unsplash.com/photo-1596854372407-baba7fef6e51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className={styles.posting}
                    alt="That's my profile"
                    src="https://images.unsplash.com/photo-1577981013335-2a43c0f0cce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className={styles.posting}
                    alt="That's my profile"
                    src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className={styles.posting}
                    alt="That's my profile"
                    src="https://images.unsplash.com/photo-1596854331442-3cf47265cefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
                />
            </div>
        </>
    );
};

export default Profile;

//////////////////////////////////////////////////////////
// import React from "react";

// const Profile = () => {
//     return (
//         <div style={{ maxWidth: "375px", margin: "0px auto" }}>
//             <div
//                 style={{
//                     margin: "18px 0px",
//                     borderBottom: "1px solid grey",
//                 }}
//             >
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "space-around",
//                     }}
//                 >
//                     <div>
//                         <img
//                             alt="That's my profile"
//                             style={{
//                                 width: "px",
//                                 height: "80px",
//                                 borderRadius: "80px",
//                             }}
//                             src="https://images.unsplash.com/photo-1596854307809-6e754c522f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                         />
//                     </div>
//                     <div>
//                         <h4>Wolfgang</h4>
//                         <h6>Email</h6>
//                         <div
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 width: "110%",
//                             }}
//                         >
//                             <h6
//                                 style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                 }}
//                             >
//                                 7410
//                                 <br />
//                                 Posts
//                             </h6>
//                             <h6>
//                                 23
//                                 <br />
//                                 Followers
//                             </h6>
//                             <h6>
//                                 56
//                                 <br />
//                                 Following
//                             </h6>
//                         </div>
//                     </div>
//                 </div>

//                 <div
//                     className="file-field input-field"
//                     style={{ margin: "10px" }}
//                 >
//                     <div className="btn #64b5f6 blue darken-1">
//                         <span>Update pic</span>
//                         <input type="file" />
//                     </div>
//                     <div className="file-path-wrapper">
//                         <input className="file-path validate" type="text" />
//                     </div>
//                 </div>
//             </div>
//             <div className="gallery">
//                 <img
//                     className="item"
//                     alt="Portrait of Wolfgang"
//                     src="https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//                 />
//                 <img
//                     className="item"
//                     alt="Portrait of Wolfgang"
//                     src="https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//                 />
//                 <img
//                     className="item"
//                     alt="Portrait of Wolfgang"
//                     src="https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//                 />
//                 <img
//                     className="item"
//                     alt="Portrait of Wolfgang"
//                     src="https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//                 />
//                 <img
//                     className="item"
//                     alt="Portrait of Wolfgang"
//                     src="https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//                 />
//                 <img
//                     className="item"
//                     alt="Portrait of Wolfgang"
//                     src="https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//                 />
//             </div>
//         </div>
//     );
// };

// export default Profile;
