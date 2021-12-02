import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import M from "materialize-css";

const Signup = () => {
    let navigate = useNavigate();

    const SendData = (event) => {
        // const history = useHistory();
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const userData = {
            username,
            email,
            password,
        };

        console.log(userData);

        //   if (
        //       !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        //           email
        //       )
        //   ) {
        //       M.toast({
        //           html: "invalid email",
        //           classes: "#c62828 red darken-3",
        //       });
        //       return;
        //   }

        // IS SENDING THE REQUETS TO LOCALHOST 3000
        // TO SOLVE IT: ADD CODE SNIPPET TO BACKEND APP.JS FILE
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "pink accent-2" });
                } else {
                    M.toast({
                        html: data.message,
                        classes: "green lighten-2",
                    });
                    // IF THE USER IS SIGNED UP, NAVIGATE TO LOGIN

                    navigate("/login");
                }
                // console.log(data);
            });
    };

    return (
        <form onSubmit={SendData}>
            <div className="card auth-card input-field">
                <h2>Petstagram</h2>
                <input type="text" placeholder="username" name="username" />
                <input type="text" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />

                <button
                    type="submit"
                    className="btn waves-effect waves-light #64b5f6 blue darken-1
"
                >
                    Sign up
                </button>
                <h5>
                    <Link to="/login">Already have an account?</Link>
                </h5>
            </div>
        </form>
    );
};

export default Signup;
