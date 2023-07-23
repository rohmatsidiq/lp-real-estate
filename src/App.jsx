import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./index.css";
import Form from "./pages/Form";
import Excel from "./pages/Excel";
import Calender from "./pages/Home/Calender";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/excel" element={<Excel />} />
            <Route path="/calender" element={<Calender />} />
        </Routes>
    );
}
