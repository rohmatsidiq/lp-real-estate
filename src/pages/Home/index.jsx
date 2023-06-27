import React from "react";
import { Choose, Featured, Footer, Navbar, Property } from "../../components";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className="grid grid-cols-2">
                <div className="flex justify-end">
                    <div className="w-full max-w-[500px] p-3">
                        <Navbar />
                        <div className="flex flex-col items-center justify-center h-full">
                            <div>
                                <h1 className="font-bold text-5xl text-slate-600">
                                    Modern Real Estate
                                </h1>
                                <p className="my-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquid, provident
                                    veritatis alias placeat ratione id iure
                                    voluptas asperiores optio perspiciatis.
                                </p>
                                <Link
                                    to={"/"}
                                    className="bg-teal-600 text-white px-4 py-2 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-200"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-red-300">
                    <img
                        className="w-full"
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="image"
                    />
                </div>
            </section>
            <Featured />
            <Choose />
            <Property />
            <Footer />
        </>
    );
}
