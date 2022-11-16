import Image from "next/legacy/image";
import {useState, useEffect} from "react";
import axios from "axios";
import ControlItem from "../../components/fragment/ControlItem";

export default function Center() {
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
            <div className="container" style={{ display: "flex", flexDirection: "row", width: "100%", height: "100vh"}}>
            {/*  左右排列基本布局  */}
                <div className="left-side" style={{ width: 250, backgroundColor: "rgb(42,148,125)", display: "flex", flexDirection: "column"}}>
                    <div className="text-center" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "2rem"}}>
                        <button></button>
                        <h1 style={{ color: "white"}}>おかえり</h1>
                        <button></button>
                    </div>
                    <div className="item-options" style={{ width: "100%", display: "flex", flexDirection: "column", paddingLeft: "1rem", alignItems: "center", height: "100%"}}>
                        <ControlItem context="仪表盘"></ControlItem>
                        <ControlItem context="博文"></ControlItem>
                        <ControlItem context="点滴"></ControlItem>
                        <ControlItem context="评论"></ControlItem>
                        <ControlItem context="页面"></ControlItem>
                        <ControlItem context="文件"></ControlItem>
                        <ControlItem context="说说"></ControlItem>
                        <ControlItem context="速记"></ControlItem>
                        <ControlItem context="项目"></ControlItem>
                        <ControlItem context="朋友们"></ControlItem>
                        <ControlItem context="数据"></ControlItem>
                        <ControlItem context="设定"></ControlItem>
                        <ControlItem context="其他"></ControlItem>
                    </div>
                    <div className="userinfo" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "1rem", overflow: "hidden", padding: "3rem"}}>
                        <div className="avatar" style={{ height: "4rem", width: "4rem", borderRadius: "4rem", position: "relative", overflow: "hidden"}}>
                            <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
                        </div>
                        <div className="user" style={{ color: "#606266", lineHeight: 1.4, textAlign: "justify", fontSize: 16, fontWeight: 700}}>
                            <p style={{ margin: 0 }}>{user}</p>
                        </div>
                    </div>
                </div>
                <div className="right-side">　ただいまー　</div>
            </div>
        </>
    )
}