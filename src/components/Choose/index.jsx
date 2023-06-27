import React from "react";
import ChooseCard from "../ChooseCard";

export default function Choose() {
    return (
        <section id="service" className="my-10 flex gap-3">
            <div>
                <img
                    className="w-full"
                    src="https://cdn.pixabay.com/photo/2019/03/11/02/28/cayman-islands-real-estate-4047675_640.jpg"
                    alt=""
                />
            </div>
            <div className="max-w-[500px]">
                <h1 className="text-5xl text-slate-800 font-bold mb-5">
                    Why Choose us?
                </h1>
                <p className="mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis minima commodi asperiores aperiam reprehenderit
                    maiores ut quisquam obcaecati sed ea?
                </p>
                <ChooseCard />
                <ChooseCard />
                <ChooseCard />
            </div>
        </section>
    );
}
