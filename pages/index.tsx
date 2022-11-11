import { Breadcrumb, Layout, Tag  } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {useEffect, useState} from "react";
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Card from '../components/content/Card';
import axios from "axios";

const { Content } = Layout;


export default function Home() {

    const [picArr, setPicArr] = useState({});
    const [thinkArr, setThinkArr] = useState({});
    const [doArr, setDoArr] = useState({});

    useEffect(() => {
        const fetchLove = async () => {
            const message = await axios.get('http://localhost:3001/think')
            setPicArr(message.data);
        };
        const fetchThink = async () => {
            const message = await axios.get('http://localhost:3001/think')
            setThinkArr(message.data);
        };
        const fetchDo = async () => {
            const message = await axios.get('http://localhost:3001/think')
            setDoArr(message.data);
        };
        fetchLove();
        fetchThink();
        fetchDo();
    }, [])

    return (
        <Layout className="layout" style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.35)"}}>
            <Header />
            <Content style={{ margin: '0 10rem', overflow: "hidden" }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Content</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ margin: "0 auto", maxWidth: "100rem", backgroundColor: "#9b87e3", borderRadius: 10}} >
                    <Tag style={{ marginTop: 30, width: 100, marginBottom: 30, marginLeft: 10 }} color="blue">every day love</Tag>
                        <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        {picArr &&
                            Object.keys(picArr).map((key) => <Card key={key} picture={picArr[key]}></Card>)
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
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}
