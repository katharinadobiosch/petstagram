import React, { useEffect, createContext, useReducer, useContext } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";

import Navbar from "./components/views/Navbar";
import "./App.css";

import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Profile from "./components/views/Profile";
import Signup from "./components/views/Signup";
import NewPost from "./components/views/NewPost";
import { reducer, initialState } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        // IF USER IS LOGGED IN THE URL ROUTES WORKS
        if (user) {
            dispatch({ type: "USER", payload: user });
            navigate("/");
            // IF USER IS NOT LOGGED IN, USER WILL GO TO /LOGIN
        } else {
            // if (!navigate.location.pathname.startsWith("/reset"))
            navigate("/login");
        }
    }, []);

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/login" element={<Login />} />

                <Route exact path="/signup" element={<Signup />} />

                <Route exact path="/profile" element={<Profile />} />

                <Route exact path="/newpost" element={<NewPost />} />

                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <UserContext.Provider value={{ state, dispatch }}>
                <Router>
                    <Navbar />
                    <main>
                        <Routing />
                    </main>
                </Router>
            </UserContext.Provider>
        </>
    );
};

export default App;
