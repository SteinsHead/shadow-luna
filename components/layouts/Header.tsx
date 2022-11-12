import Link from "next/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import AvatarTip from "../fragment/AvatarTip";
import {useEffect, useState} from "react";
import { Transition } from 'react-transition-group';
import './Header.module.css';



export default function Header() {
    const router = useRouter();
    let [showTip, setShowTip] = useState(false);

    const clickAvatarHandle = () => {
        router.push("/Manage/manage");
    }

    const enterTipHandle = () => {
        console.log("enter!")
        setShowTip(true);
    }

    const leaveTipHandle = () => {
        console.log("out!")
        setShowTip(false);
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    return (
        <div className="header" style={{ height: "10rem", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "10rem", paddingRight: "10rem"}}>
            <div className="title">
                <h3>Shadow Luna</h3>
            </div>
            <div className="input">
                <input type="text" defaultValue="hello" />
            </div>
            <div className="context" style={{ display: "flex", flexDirection: "row", minWidth: "35rem", minHeight: "7rem"}}>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/Diary/diary">
                        <p style={{ margin: 0}}>Diary</p>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/Blog/blog">
                        <p style={{ margin: 0}}>Blog</p>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/About/about">
                        <p style={{ margin: 0}}>About</p>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/Tech/tech">
                        <p style={{ margin: 0}}>Tech</p>
                    </Link></div>
            </div>
            <div className="avatar" style={{ height: "6rem", width: "6rem", borderRadius: "6rem", position: "relative", overflow: "hidden"}} onClick={() => clickAvatarHandle()} onMouseEnter={() => enterTipHandle()} onMouseLeave={() => leaveTipHandle()}>
                <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
            </div>
            {
                showTip &&
                <div className="toolTip" style={{ position: "absolute", top: "12rem", right: "5rem", zIndex: "999", opacity: showTip === true ? 1 : 0}}>
                    <AvatarTip></AvatarTip>
                </div>
            }
        </div>
    )
}