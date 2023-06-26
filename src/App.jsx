import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./index.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
