import ReactMarkdown from "react-markdown";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Diary({post}) {
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
                <ReactMarkdown children={post === undefined ? context : post}></ReactMarkdown>
            </div>
        </div>
    )
}

// 此函数在构建时被调用
export async function getStaticPaths() {
    // // 调用外部 API 获取博文列表
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    //
    // // 据博文列表生成所有需要预渲染的路径
    // const paths = posts.map((post) => ({
    //     params: { id: post.id },
    // }))
    //
    // // We'll pre-render only these paths at build time.
    // // { fallback: false } means other routes should 404.
    // return { paths, fallback: false }
    const res = await axios.get(`http://localhost:3001/books`);
    const books = res.data;
    const paths = books.forEach((book) => {
        params: {id: book.substring(0, 3)}
    })

    console.log(paths);

    return { paths, fallback: false}
}

// 在构建时也会被调用
export async function getStaticProps({ params }) {
    // params 包含此片博文的 `id` 信息。
    // 如果路由是 /posts/1，那么 params.id 就是 1
    const res = await axios.get(`http://localhost:3001/diary/${params.id}`);
    const post = res.data;

    // 通过 props 参数向页面传递博文的数据
    return { props: { post } }
}