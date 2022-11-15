import Image from "next/legacy/image";
import {useState, useEffect} from "react";
import axios from "axios";

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
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>仪表盘</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>博文</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>点滴</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>评论</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>页面</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>文件</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>说说</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>速记</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>项目</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>朋友们</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>数据</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>仪表盘</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>设定</div>
                        <div className="item" style={{ flex: 1, backgroundColor: "#75ad9b", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}}>其他</div>
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