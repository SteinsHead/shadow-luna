import ReactMarkdown from "react-markdown";
import { useRouter } from 'next/router'
import Header from '../../components/layouts/Header';
import React, {useState, useEffect} from "react";
import axios from "axios";
import remarkGfm from 'remark-gfm'
import styles from './diary.module.css'
import localFont from '@next/font/local'

const myFont = localFont({ src: '../../components/layouts/RocknRollOne-Regular.ttf', weight: '700' })

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
        <div className={myFont.className} style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.35)", display: "flex", justifyContent: "center", alignItems: "center", margin: '3rem 8rem', overflow: "hidden", padding: "2rem"}}>
            <div className="box" style={{ margin: "0 auto", maxWidth: "100rem", backgroundColor: "rgba(255, 255, 255, 0.4)", borderRadius: 10, boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 12px 0px", padding: 30}}>
                <ReactMarkdown components={{
                    h1({...props}) {
                        return (
                            <h2 {...props} style={{ textAlign: "center"}}></h2>
                        )
                    }
                }}>{ `# ${title}`}</ReactMarkdown>
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]} children={context} components={{
                    img({alt, src,...props}) {
                        console.log({...props});
                        return (
                            <div style={{ display: "flex", justifyContent: "center"}}>
                                <img
                                    alt={alt}
                                    src={src}
                                    style={{ maxWidth: "100%"}}
                                    />
                            </div>

                        )
                    }
                }}/>
                <section className={styles.footer}>
                    <p>文章标题: {title}</p>
                    <p>文章作者: Christina</p>
                    <p>最后修改时间: 默认没有最后修改时间</p>'
                    <hr className={styles.sectionLine}/>
                    <div>
                        <p>
                            商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。
                            <br/>
                            本文采用
                            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">创作共用保留署名-非商业-禁止演绎4.0国际许可证</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

DiaryPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Header>{ page }</Header>
    )
}