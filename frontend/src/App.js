// import React from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Redirect,
//     Switch,
// } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import "./App.css";

// import Home from "./components/views/Home";
// import Login from "./components/views/Login";
// import Profile from "./components/views/Profile";
// import Signup from "./components/views/Signup";

// const App = () => {
//     return (
//         <>
//             <Router>
//                 <Navbar />
//                 <main>
//                     <Routes>
//                         <Route path="/" exact component={Home} />

//                         <Route path="/signup" exact component={Signup} />

//                         <Route path="/login" exact component={Login} />

//                         <Route path="/profile" exact component={Profile} />
//                     </Routes>
//                 </main>
//             </Router>
//         </>
//     );
// };

// export default App;

////////////////////////////////////////////////////////

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Profile from "./components/views/Profile";
import Signup from "./components/views/Signup";

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" exact component={Home} />

                        <Route path="/login" exact component={Login} />

                        <Route path="/signup" exact component={Signup} />

                        <Route path="/profile" exact component={Profile} />

                        {/* <Redirect to="/" /> */}
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default App;

////////////////////
