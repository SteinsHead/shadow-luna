import Link from "next/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import AvatarTip from "../fragment/AvatarTip";
import {useEffect, useState} from "react";
import { Transition } from 'react-transition-group';
import styles from './Header.module.css'



export default function Header() {
    const router = useRouter();
    let [showTip, setShowTip] = useState(false);
    const [shows, setShows] = useState('');

    const enterTipHandle = () => {
        console.log("enter!")
        setShowTip(true);
    }

    const leaveTipHandle = () => {
        console.log("out!")
        setShowTip(false);
    }

    return (
        <div className="header" style={{ height: "10rem", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "10rem", paddingRight: "10rem", marginTop: "2rem"}}>
            <div className={`title`}>
                <h2 style={{ cursor: "default"}}>Shadow Luna</h2>
            </div>
            <div className="input">
                <input type="text" defaultValue="hello" />
            </div>
            <div className="context" style={{ display: "flex", flexDirection: "row", minWidth: "35rem", minHeight: "7rem"}}>
                <div className="menu" style={{ backgroundColor: "#e2e0f5", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)"}}>
                    <Link href="/Diary/diary">
                        <p style={{ margin: 0}}>Diary</p>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#e2e0f5", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)"}}>
                    <Link href="/Blog/blog">
                        <p style={{ margin: 0}}>Blog</p>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#e2e0f5", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)"}}>
                    <Link href="/About/about">
                        <p style={{ margin: 0}}>About</p>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#e2e0f5", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)"}}>
                    <Link href="/Tech/tech">
                        <p style={{ margin: 0}}>Tech</p>
                    </Link></div>
            </div>
            <div className="avatar" style={{ height: "6rem", width: "6rem", borderRadius: "6rem", position: "relative", overflow: "hidden"}} onMouseEnter={() => enterTipHandle()} onMouseLeave={() => leaveTipHandle()}>
                <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
            </div>
            <div className={`toolTip`} style={{ position: "absolute", top: "11rem", right: "3rem", zIndex: "999"}}>
                <AvatarTip isShown={showTip}></AvatarTip>
            </div>
        </div>
    )
}