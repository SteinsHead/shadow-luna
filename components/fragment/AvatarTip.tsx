import Image from "next/image";

export default function AvatarTip() {
    return (
        <div className="container" style={{ minWidth: 250, backgroundColor: "#7472e7", borderRadius: 5, padding: 20 }}>
            <div className="info" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div className="avatar" style={{ height: "6rem", width: "6rem", borderRadius: "6rem", position: "relative", overflow: "hidden"}}>
                    <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
                </div>
                <div className="user">
                    <h2>SteinsHead</h2>
                </div>
            </div>
        </div>
    )
}