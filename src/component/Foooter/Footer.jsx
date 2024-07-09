import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <hr style={{ width: "90%", marginTop: 20 }} />
            <span className="name">
                Made by{" "}
                Mukesh Ghildiyal
            </span>
            <div className="iconContainer">
                <a href="" target="__blank">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
                <a href="" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="" target="__blank">
                    <i className="fab fa-youtube fa-2x"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;
