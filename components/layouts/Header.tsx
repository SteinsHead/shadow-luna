import Link from "next/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import AvatarTip from "../fragment/AvatarTip";
import MenuBlock from "../fragment/MenuBlock";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useEffect, useState } from "react";
import localFont from '@next/font/local'
import styles from './Header.module.css'

const myFont = localFont({ src: './RocknRollOne-Regular.ttf', weight: '700' })

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

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
            <div className={myFont.className}>
                <h2 style={{ cursor: "default", fontSize: "3rem"}}>Shadow Luna</h2>
            </div>
            <div className="input">
                <Search placeholder="input search text" allowClear onSearch={onSearch} size="large" style={{ width: "35rem" }} />
            </div>
            <div className="context" style={{ display: "flex", flexDirection: "row", minWidth: "35rem", minHeight: "7rem"}}>
                {
                    [["/Diary/diary", "Diary"], ["/Blog/blog", "Blog"], ["/About/about", "About"], ["/Tech/tech", "Tech"]].map((item) => {
                        return (
                            <MenuBlock key={item[1]} blockLink={item[0]} blockName={item[1]}></MenuBlock>
                        )
                    })
                }
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