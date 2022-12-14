import ReactMarkdown from "react-markdown";
import { useRouter } from 'next/router'
import Header from '../../components/layouts/Header';
import React, {useState, useEffect} from "react";
import axios from "axios";
import remarkGfm from 'remark-gfm'
import Diary from "./diary";

export default function DiaryPage() {
    const [context, setContext] = useState('');
    const [title, setTitle] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchMsg = async () => {

            const id = router.query.diary as string;
            setTitle(id);
            const type = router.query.type as string;
            console.log(type);
            const message = await axios.get(`http://localhost:3001/${type}/${id}`)
            return message
        };
        fetchMsg().then((res) => {
            setContext(res.data);
        })
    }, []);

    return (
        <div className="container" style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.35)", display: "flex", justifyContent: "center", alignItems: "center", margin: '3rem 8rem', overflow: "hidden", padding: "2rem"}}>
            <div className="box" style={{ margin: "0 auto", maxWidth: "100rem", backgroundColor: "rgba(255, 255, 255, 0.4)", borderRadius: 10, boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 12px 0px", padding: 30}}>
                <ReactMarkdown>{ `# ${title}`}</ReactMarkdown>
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]} children={context} components={{
                    img({...props}) {
                        return (
                            <div style={{ display: "flex", justifyContent: "center"}}>
                                <img {...props} alt="" style={{ maxWidth: '100%' }}/>
                            </div>

                        )
                    }
                }}/>
            </div>
        </div>
    )
}

DiaryPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Header>{ page }</Header>
    )
}