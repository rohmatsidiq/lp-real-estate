import React from "react";
import { FcHome } from "react-icons/fc";

export default function ChooseCard() {
    return (
        <section
            id="explore"
            className="bg-white p-3 border rounded-xl mt-3 flex gap-2"
        >
            <FcHome className="text-6xl" />
            <div>
                <h1 className="font-bold text-xl text-teal-600">
                    Lorem ipsum dolor sit amet.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, dolor.
                </p>
            </div>
        </section>
    );
}
