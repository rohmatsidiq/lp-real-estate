import React from "react";
import PropertyCard from "../PropertyCard";

export default function Property() {
    return (
        <div className="max-w-[1000px] mx-auto p-3 my-5">
            <h1 className="text-center font-bold text-5xl text-slate-800">
                Property
            </h1>
            <p className="text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                corrupti?
            </p>
            <div className="grid grid-cols-3 gap-3 mt-5">
                <PropertyCard
                    name={"Green Village"}
                    price={"$750"}
                    image={
                        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
                    }
                />
                <PropertyCard
                    name={"Premium Residence"}
                    price={"$1050"}
                    image={
                        "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_640.jpg"
                    }
                />
                <PropertyCard
                    name={"Sultan Residance"}
                    price={"$1500"}
                    image={
                        "https://cdn.pixabay.com/photo/2017/06/18/21/31/house-2417321_640.jpg"
                    }
                />
                <PropertyCard
                    name={"Royal Resort"}
                    price={"$600"}
                    image={
                        "https://cdn.pixabay.com/photo/2018/08/10/15/44/ireland-3597097_640.jpg"
                    }
                />
                <PropertyCard
                    name={"Presiden Royal"}
                    price={"$850"}
                    image={
                        "https://cdn.pixabay.com/photo/2019/03/11/02/28/cayman-islands-real-estate-4047675_640.jpg"
                    }
                />
                <PropertyCard
                    name={"Merdeka Residance"}
                    price={"$900"}
                    image={
                        "https://cdn.pixabay.com/photo/2014/10/05/22/40/family-home-475879_640.jpg"
                    }
                />
            </div>
        </div>
    );
}
