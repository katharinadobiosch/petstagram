import React, { useState } from "react";
import M from "materialize-css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
    // const history = useHistory();
    let navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    // useEffect(() => {
    //     if (url) {
    //         fetch("/newpost", {
    //             method: "post",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: "Bearer " + localStorage.getItem("jwt"),
    //             },
    //             body: JSON.stringify({
    //                 title,
    //                 body,
    //                 imageUrl: url,
    //             }),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 if (data.error) {
    //                     M.toast({
    //                         html: data.error,
    //                         classes: "#c62828 red darken-3",
    //                     });
    //                 } else {
    //                     M.toast({
    //                         html: "Created post Successfully",
    //                         classes: "#43a047 green darken-1",
    //                     });
    //                     // history.push("/");
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     }
    // }, [url]);

    const sendNewPostDetails = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "petstagram");
        data.append("cloud_name", "www-katharinadobiosch-com");
        fetch(
            "https://api.cloudinary.com/v1_1/www-katharinadobiosch-com/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
            .then((res) => res.json())
            .then((data) => {
                // CHECK IF IMAGE IS UPLOADING TO CLOUDINARY
                // console.log(data);

                setUrl(data.url);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch("http://localhost:5000/newpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({ title, body, imageUrl: url }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error, classes: "pink accent-2" });
                } else {
                    // localStorage.setItem("jwt", data.token);
                    // localStorage.setItem("user", JSON.stringify(data.user));

                    M.toast({
                        html: "Uploaded post successfully",
                        classes: "green lighten-2",
                    });
                    // history.push("/");
                    navigate("/");

                    // IF THE USER IS LOGGED IN, NAVIGATE TO HOME
                    // <Navigate to="/home" replace />;
                }
                // console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div
            className="card input-filed"
            style={{
                margin: "30px auto",
                maxWidth: "500px",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Uplaod Image</span>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button
                className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={() => sendNewPostDetails()}
            >
                Submit post
            </button>
        </div>
    );
};

export default NewPost;
// import React, { useState } from "react";
// import styles from "../../../src/styles/NewPost.module.css";

// const NewPost = () => {
//     const SendContent = (event) => {
//         event.preventDefault();

//         const title = event.target.title.value;
//         const body = event.target.body.value;
//         const file = event.target.file.files[0];

//         const userContent = {
//             title,
//             body,
//             // image,
//             file,
//             // filesList,
//         };
//         console.log(userContent);

//         // const data = new FormData();
//         // data.append("file", image);
//         const [image, setImage] = useState("");
//         event.setImage(file);
//     };

//     return (
//         <form onSubmit={SendContent}>
//             <div className={styles.card_container}>
//                 <div className="card input field">
//                     <div className={styles.home}>
//                         <input type="text" placeholder="title" name="title" />
//                         <input type="text" placeholder="content" name="body" />

//                         <div className="file-field input-field">
//                             <div className="btn #64b5f6 blue darken-1">
//                                 <span>UPLOAD IMAGE</span>

//                                 <input type="file" name="file" />
//                             </div>
//                             <div className="file-path-wrapper">
//                                 <input
//                                     className="file-path validate"
//                                     type="text"
//                                 />
//                             </div>
//                         </div>
//                         <button
//                             type="submit"
//                             className="btn waves-effect waves-light #64b5f6 blue darken-1
// "
//                         >
//                             SUBMIT POST
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default NewPost;
