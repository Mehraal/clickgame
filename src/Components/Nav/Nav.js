import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Click Game</a>
            </li>
            <NavMessage score={props.score} topScore={props.topScore} />
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Nav;
