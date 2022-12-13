import localFont from '@next/font/local'

const myFont = localFont({ src: './RocknRollOne-Regular.ttf', weight: '700' })

export default function Footer() {
    return(
        <div className={myFont.className} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10rem", fontSize: "1.5rem"}}>
            <p style={{ marginBottom: 0}}>Shadow Luna ©2022 Created by Christina</p>
        </div>
    );
}
