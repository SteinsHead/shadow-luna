import { Breadcrumb, Layout, Menu, List, Input, Avatar, Col, Row, Card, Divider, Tag  } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

const { Content } = Layout;

const items = [
    { label: 'Blog', key: 'item-1' },
    { label: 'Tech', key: 'item-2' },
    { label: 'About', key: 'item-3' },
    { label: 'Diary', key: 'item-4' },
]

export default function Home() {

    return (
        <Layout className="layout">
            <Header />
            <Content style={{ margin: '0 50px', overflow: "hidden" }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>Content</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ margin: "0 auto", maxWidth: "100rem", backgroundColor: "#9b87e3", borderRadius: 10}} >
                    <Tag style={{ margin: 20, width: 100 }} color="blue">every day love</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                    </div>
                    <Tag style={{ margin: 20, width: 100 }} color="blue">write and think</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                    </div>
                    <Tag style={{ margin: 20, width: 100 }} color="blue">try to do</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}
