import { useEffect } from "react";
import { useState } from "react";

export default function Form() {
    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    const [posts, setPosts] = useState("");

    const handleSimpan = () => {
        let arrPost = JSON.parse(localStorage.getItem("post") || "[]");

        arrPost.push(post);
        localStorage.setItem("post", JSON.stringify(arrPost));
        getPosts();
    };

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            handleSimpan();
        }
    };

    const getPosts = () => {
        setPosts(JSON.parse(localStorage.getItem("post")));
    };

    const handleHapus = (e, i) => {
        let arrPost = JSON.parse(localStorage.getItem("post"));
        arrPost.splice(i, 1);
        localStorage.setItem("post", JSON.stringify(arrPost));
        getPosts();
    };

    const handleEdit = (e, i) => {
        let arrPost = JSON.parse(localStorage.getItem("post"));
        arrPost[i].title = "halo gaes";
        localStorage.setItem("post", JSON.stringify(arrPost));
        getPosts();
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor="title">Judul</label>
                <input
                    onChange={(e) => {
                        setPost({ ...post, title: e.target.value });
                    }}
                    className="border"
                    type="text"
                    id="title"
                />
            </div>
            <div className="flex flex-col mt-3">
                <label htmlFor="body">Body</label>
                <textarea
                    onKeyDown={handleEnter}
                    onChange={(e) => {
                        setPost({ ...post, body: e.target.value });
                    }}
                    className="border"
                    name="body"
                    id="body"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <button
                onClick={handleSimpan}
                className="bg-green-600 px-4 py-2 rounded-full mt-3"
            >
                Simpan
            </button>
            <hr />
            {posts != "" &&
                posts.map((e, i) => (
                    <div key={i}>
                        <h1>{e.title}</h1>
                        <p>{e.body}</p>
                        <button
                            onClick={() => {
                                handleHapus(e, i);
                            }}
                            className="bg-red-500 px-3 py-2  rounded-full text-white"
                        >
                            Hapus
                        </button>
                        <button
                            onClick={() => {
                                handleEdit(e, i);
                            }}
                            className="bg-yellow-500 px-3 py-2  rounded-full text-white"
                        >
                            Edit
                        </button>
                        <hr />
                    </div>
                ))}
        </div>
    );
}
