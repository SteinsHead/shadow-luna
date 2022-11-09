import ReactMarkdown from "react-markdown";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Diary() {
    const [context, setContext] = useState('');

    useEffect(() => {
        const fetchMsg = async () => {
            const message = await axios.get('http://localhost:3001/diary')
            return message
        };
        fetchMsg().then((res) => {
            setContext(res.data);
        })
    }, []);

    return (
        <div className="container" style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.35)", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="box" style={{ maxWidth: "100rem", backgroundColor: "rgba(255, 255, 255, 0.35)", borderRadius: 10, padding: 30}}>
                <ReactMarkdown children={context}></ReactMarkdown>
            </div>
        </div>
    )
}