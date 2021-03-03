import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Login from "./Login";



function App() {
    var isloggedin = false;
    return <div className="container">{
        <Login />
    }</div>;

}



export default App;
