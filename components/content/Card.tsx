import Image from "next/legacy/image";

function Card(props: cardTypes) {
    return (
        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0, overflow: "hidden", position: "relative", boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)" }}>
            {
                props.picture &&
                <div className="picture" style={{ height: "100%", width: "100%"}}>
                    <img src={`http://localhost:3001/${props.picture}`} style={{ objectFit: "cover", height: "100%"}}></img>
                </div>
            }
            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "absolute", top: 110}}>
                <div className="mask" style={{ textOverflow: "clip", width: "80%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                    <span>开发 shadow 的设计与交互测测试文字</span>
                </div>
            </div>
        </div>
    )
}

interface cardTypes {
    picture?: String;
}

export default Card