import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./index.css";
import Form from "./pages/Form";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    );
}
