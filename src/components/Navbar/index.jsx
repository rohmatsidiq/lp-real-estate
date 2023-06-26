import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div>
                <p>LOGO</p>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/"}>Featured</Link>
                    <Link to={"/"}>Services</Link>
                    <Link to={"/"}>Explore</Link>
                    <Link to={"/"}>Contact</Link>
                </nav>
            </div>
        </div>
    );
}
