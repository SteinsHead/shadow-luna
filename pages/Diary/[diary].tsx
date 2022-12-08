import ReactMarkdown from "react-markdown";
import { useRouter } from 'next/router'
import {useState, useEffect} from "react";
import axios from "axios";
import remarkGfm from 'remark-gfm'

export default function DiaryPage() {
    const [context, setContext] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchMsg = async () => {

            const id = router.query.diary as string;
            console.log(id);
            const message = await axios.get(`http://localhost:3001/diary/${id}`)
            return message
        };
        fetchMsg().then((res) => {
            setContext(res.data);
        })
    }, []);

    return (
        <div className="container" style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.35)", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="box" style={{ maxWidth: "100rem", backgroundColor: "rgba(255, 255, 255, 0.35)", borderRadius: 10, padding: 30}}>
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]} children={context}></ReactMarkdown>
            </div>
        </div>
    )
}