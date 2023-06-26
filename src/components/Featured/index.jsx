import React from "react";
import FeaturedCard from "../FeaturedCard";

export default function Featured() {
    return (
        <section className="mt-10">
            <h1 className="text-center text-slate-600 font-bold text-5xl">
                Featured
            </h1>
            <div className="grid grid-cols-3 gap-3 max-w-[1000px] mx-auto mt-5">
                <FeaturedCard
                    src="https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_640.jpg"
                    kt="4"
                    km="2"
                    lt="2"
                />
                <FeaturedCard
                    src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_640.jpg"
                    kt="3"
                    km="1"
                    lt="1"
                />
                <FeaturedCard
                    src="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_640.jpg"
                    kt="3"
                    km="2"
                    lt="2"
                />
            </div>
        </section>
    );
}
