import React from "react";
import App from "./App";
import Header from "./Header";
import Note from "./Note";
import ReactDOM from "react-dom";
import Items from "./Items";

function clickHandle(event) {
    event.preventDefault();
    ReactDOM.render(<div>
        <Header />
        <Note />
        <Items
            name="Football"
            img="https://media.gettyimages.com/vectors/sports-doodles-vector-id1138038099?k=6&m=1138038099&s=612x612&w=0&h=ErsbpKijYhBTSAJ2tF8E0oOAVpOCpyrfhY_bgoIIuKE="

            tel="89885985"
            price="$60"
        />


        <Items
            name="Laptop"
            img="https://image.shutterstock.com/image-vector/laptop-cartoon-vector-illustration-computer-260nw-1292073241.jpg"
            tel="89885985"
            price="$200"
        />

        <Items
            name="Calculator"
            img="https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/176928/176928_o51?pgw=1&pgwact=1"
            tel="1139445"
            price="$50"
        />


    </div>, document.getElementById("root"));
}

function Login(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={clickHandle}>Login</button>
        </form>
    );
}

export default Login;
