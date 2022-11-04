import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
        <div className="header" style={{ height: "10rem", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "5rem", paddingRight: "5rem"}}>
            <div className="title">
                <h3>Shadow Luna</h3>
            </div>
            <div className="input">
                <input type="text" defaultValue="hello" />
            </div>
            <div className="context" style={{ display: "flex", flexDirection: "row", minWidth: "35rem", minHeight: "7rem"}}>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/Diary/diary">
                        <a>Diary</a>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/Blog/blog">
                        <a>Blog</a>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/About/about">
                        <a>About</a>
                    </Link></div>
                <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="/Tech/tech">
                        <a>Tech</a>
                    </Link></div>
            </div>
            <div className="avatar" style={{ height: "6rem", width: "6rem", borderRadius: "6rem", position: "relative", overflow: "hidden"}}>
                <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
            </div>
        </div>
    )
}