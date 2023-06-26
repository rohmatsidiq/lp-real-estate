import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

export default function FeaturedCard({ src, kt, km, lt }) {
    return (
        <div>
            <img src={src} alt="" />
            <div className="mt-3 text-slate-600 flex gap-5">
                <div className="flex items-center gap-2">
                    <FaBed />
                    <p>{kt}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaBath />
                    <p>{km}</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdHomeWork />
                    <p>{lt}</p>
                </div>
            </div>
        </div>
    );
}
