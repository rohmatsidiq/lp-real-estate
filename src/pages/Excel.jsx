import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

export default function Excel() {
    const [produk, setProduk] = useState("");
    let newProduk = [];
    const getProduk = async () => {
        const res = await axios.get(
            "https://newapi.muslimafiyahpublishing.com/produk/get"
        );
        setProduk(res.data.data);
    };
    useEffect(() => {
        getProduk();
    }, []);

    for (let i = 0; i < produk.length; i++) {
        newProduk.push({
            kode_produk: produk[i].kode_produk,
            nama_produk: produk[i].nama_produk,
            stock_produk: produk[i].stock_produk,
            berat_produk: produk[i].berat_produk,
            diskon_produk: produk[i].diskon_produk,
        });
    }

    if (produk == "") {
        return <p>Loading..</p>;
    }

    return (
        <div>
            <CSVLink filename="Produk" data={newProduk}>
                Download CSV
            </CSVLink>
        </div>
    );
}
