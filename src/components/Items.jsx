import React from "react";

function Items(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img className="circle-img" src={props.img} alt="avatar_img" />
            </div>
            <div className="bottom">
                <p className="info">{props.course}</p>
                <p className="info">{props.tel}</p>
                <p className="info">{props.price}</p>
            </div>
        </div>
    );
}

export default Items;