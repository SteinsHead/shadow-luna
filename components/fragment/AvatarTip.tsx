import Image from "next/legacy/image";
import {useState, useEffect} from "react";
import axios from "axios";

export default function AvatarTip() {
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchMsg = async () => {
            const message = await axios.get('http://localhost:3001/')
            return message
        };
        fetchMsg().then((res) => {
            setUser(res.data);
        })
    }, []);
    return (
        <>
            <div className="box" style={{ minWidth: "20rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="arrow" style={{ width: 0, height: 0, borderWidth: "0 1rem 1rem",borderStyle: "solid", borderColor: "transparent transparent #7472e7 transparent"}}>
                </div>
                <div className="container" style={{ display: "flex", backgroundColor: "#7472e7", borderRadius: 5, padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <div className="avatar" style={{ height: "4rem", width: "4rem", borderRadius: "4rem", position: "relative", overflow: "hidden"}}>
                        <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
                    </div>
                    <div className="user">
                        <h3 style={{ margin: 0}}>{user}</h3>
                    </div>
                </div>
            </div>

        </>
    )
}