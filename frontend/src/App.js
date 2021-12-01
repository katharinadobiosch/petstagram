import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { Routes, Route } from "react-router-dom";

import Navbar from "./components/views/Navbar";
import "./App.css";

import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Profile from "./components/views/Profile";
import Signup from "./components/views/Signup";
import NewPost from "./components/views/NewPost";

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route exact path="/home" element={<Home />} />

                        <Route exact path="/login" element={<Login />} />

                        <Route exact path="/signup" element={<Signup />} />

                        <Route exact path="/profile" element={<Profile />} />

                        <Route exact path="/newpost" element={<NewPost />} />

                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default App;

////////////////////
