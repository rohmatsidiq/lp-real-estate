import React from "react";
import { Navbar } from "../../components";

export default function Home() {
    return (
        <div className="grid grid-cols-2">
            <div className="flex justify-end">
                <div className="bg-red-300 w-full max-w-[500px]">
                    <Navbar />
                </div>
            </div>
            <div className="bg-red-300">
                <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="image"
                />
            </div>
        </div>
    );
}
