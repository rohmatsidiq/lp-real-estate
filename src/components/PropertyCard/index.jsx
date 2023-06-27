import React from "react";

export default function PropertyCard({ name, price, image }) {
    return (
        <div className="border">
            <div className="bg-gray-400 h-56 overflow-hidden">
                <img className="w-full h-full" src={image} alt="image" />
            </div>
            <p className="mx-3 font-bold text-slate-800 text-xl">{name}</p>
            <p className="mx-3 mb-3">{price}/moth</p>
        </div>
    );
}
