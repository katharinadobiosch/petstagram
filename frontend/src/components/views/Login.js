import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import M from "materialize-css";

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    let navigate = useNavigate();

    const SendData = (event) => {
        // const history = useHistory();
        // let navigate = useNavigate();
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        // let navigate = useNavigate();

        const userData = {
            username,
            password,
        };

        console.log(userData);

        // IS SENDING THE REQUETS TO LOCALHOST 3000
        // TO SOLVE IT: ADD CODE SNIPPET TO BACKEND APP.JS FILE
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error, classes: "pink accent-2" });
                } else {
                    localStorage.setItem("jwt", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    dispatch({ type: "USER", payload: data.user });

                    M.toast({
                        html: "Logged in successfully",
                        classes: "green lighten-2",
                    });

                    // IF THE USER IS LOGGED IN, NAVIGATE TO HOME
                    navigate("/");
                }
                // console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form onSubmit={SendData}>
            <div className="card auth-card input-field">
                <h2>Petstagram</h2>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button
                    type="submit"
                    className="btn waves-effect waves-light #64b5f6 blue darken-1
"
                >
                    Log in
                </button>
                <h5>
                    <Link to="/signup">Don't have an account?!</Link>
                </h5>
            </div>
        </form>
    );
};

export default Login;
