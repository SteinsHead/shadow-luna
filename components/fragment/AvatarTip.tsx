import Image from "next/legacy/image";
import {useState, useEffect} from "react";
import axios from "axios";
import styles from './AvatarTip.module.css'

function AvatarTip({ isShown }: AvatarProps) {
    const [user, setUser] = useState('');
    const [classes, setClasses] = useState(styles.enter); // 动效的class

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
            {
                <div className={ `modal ${ isShown ? styles.active : styles.enter}` } style={{ minWidth: "20rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className="arrow" style={{ width: 0, height: 0, borderWidth: "0 0.5em 0.5rem",borderStyle: "solid", borderColor: "transparent transparent #ffb769 transparent"}}>
                    </div>
                    <div className="container" style={{ display: "flex", backgroundColor: "#ffb769", borderRadius: 5, padding: 20, flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "100%", boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)" }}>
                        <div className="userinfo" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "3rem", overflow: "hidden"}}>
                            <div className="avatar" style={{ height: "4rem", width: "4rem", borderRadius: "4rem", position: "relative", overflow: "hidden"}}>
                                <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
                            </div>
                            <div className="user" style={{ color: "#606266", lineHeight: 1.4, textAlign: "justify", fontSize: 16, fontWeight: 700}}>
                                <p style={{ margin: 0 }}>{user}</p>
                            </div>
                        </div>
                        <div className="line" style={{ width: "100%", height: "0.14rem", backgroundColor: "#606266", marginBottom: "3rem"}}></div>
                        <div className="control" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                            <div className="center" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="12" r="8" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span style={{ marginTop: "1rem"}}>个人中心</span>
                            </div>
                            <div className="logout" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="16" r="6" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 36C36 29.3726 30.6274 24 24 24C17.3726 24 12 29.3726 12 36" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 4H44V12" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4H4V12" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 44H44V36" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 44H4V36" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span style={{ marginTop: "1rem"}}>登出</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

interface AvatarProps {
    isShown?: boolean;
}

export default AvatarTip;