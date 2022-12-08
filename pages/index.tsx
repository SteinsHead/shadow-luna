import { Breadcrumb, Layout, Tag  } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {useEffect, useState} from "react";
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Card from '../components/content/Card';
import axios from "axios";
import styles from './index.module.css'

const { Content } = Layout;

interface SayingType {
    id: number,
    uuid: string,
    hitokoto: string,
    type: string,
    from: string,
    from_who: string,
    creator: string,
    creator_uid: number,
    reviewer: number,
    commit_from: string,
    created_at: string,
    length: number,
}


export default function Home() {

    const [picArr, setPicArr] = useState({});
    const [thinkArr, setThinkArr] = useState({});
    const [doArr, setDoArr] = useState({});
    const [bookArr, setBookArr] = useState([]);
    const [saying, setSaying] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            const message_book = await axios.get('http://localhost:3001/books');
            setBookArr(message_book.data);
            const message_pic = await axios.get(`http://localhost:3001/think?number=${message_book.data.length}`);
            setPicArr(message_pic.data);
        }
        fetchBooks();
    }, []);

    useEffect(() => {
        const fetchThink = async () => {
            const message = await axios.get('http://localhost:3001/think')
            setThinkArr(message.data);
        };
        fetchThink();
    }, []);

    useEffect(() => {
        const fetchDo = async () => {
            const message = await axios.get('http://localhost:3001/think')
            setDoArr(message.data);
        };
        fetchDo();
    }, []);

    useEffect(() => {
        const fetchSaying = async () => {
            const message = await axios.get('https://v1.hitokoto.cn/?c=a');
            const says = `${message.data.hitokoto} ${message.data.from_who === null ? '' : "    —— " + message.data.from_who} 《${message.data.from}》`
            setSaying(says);
        }
        fetchSaying();
    }, [])

    return (
        <Layout className="layout" style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.35)"}}>
            <Header />
            <Content style={{ margin: '5rem 10rem', overflow: "hidden" }}>
                <div className="site-layout-content" style={{ margin: "0 auto", maxWidth: "100rem", backgroundColor: "#5a9aec", borderRadius: 10, boxShadow: "0 0 10 4 rgb(0 0 0 / 10%)"}} >
                    <Tag style={{ marginTop: 30, width: 100, marginBottom: 30, marginLeft: 10 }} color="blue">every day love</Tag>
                        <div className={styles.container}>
                        {picArr &&
                            Object.keys(picArr).map((key) => <Card key={key} picture={picArr[key]} cardTitle={bookArr[key]}></Card>)
                        }
                        </div>
                    <Tag style={{ marginTop: 30, width: 100, marginBottom: 30, marginLeft: 10 }} color="blue">write and think</Tag>
                        <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                            {thinkArr &&
                                Object.keys(thinkArr).map((key) => <Card key={key} picture={thinkArr[key]}></Card>)
                            }
                        </div>
                    <Tag style={{ marginTop: 30, width: 100, marginBottom: 30, marginLeft: 10 }} color="blue">try to do</Tag>
                        <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                            {doArr &&
                                Object.keys(doArr).map((key) => <Card key={key} picture={doArr[key]}></Card>)
                            }
                        </div>
                    <div className="context" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10rem", fontSize: "1.5rem", fontWeight: 600}}>
                        <p>{saying}</p>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}
