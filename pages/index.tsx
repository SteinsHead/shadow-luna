import { Breadcrumb, Layout, Menu, List, Input, Avatar, Col, Row, Card, Divider, Tag  } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

const items = [
    { label: 'Blog', key: 'item-1' },
    { label: 'Tech', key: 'item-2' },
    { label: 'About', key: 'item-3' },
    { label: 'Diary', key: 'item-4' },
]

export default function Home() {

    return (
        <Layout className="layout">
            <Header style={{ backgroundColor: 'whitesmoke' , flexDirection: 'row' }}>
                <Row justify="space-between">
                    <Col span={4}>
                        <h3>Shadow Luna</h3>
                    </Col>
                    <Col span={6}>
                        <Input placeholder="input here" prefix={<SearchOutlined />} />
                    </Col>
                    <Col span={7} style={{ display: "flex", flexDirection: "row"}}>
                        <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center"}}>
                            <Link href="/Diary/diary">
                                <a>Diary</a>
                            </Link></div>
                        <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center"}}>
                            <Link href="/Blog/blog">
                                <a>Blog</a>
                            </Link></div>
                        <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center"}}>
                            <Link href="/About/about">
                                <a>About</a>
                            </Link></div>
                        <div className="menu" style={{ backgroundColor: "#a1abd4", flex: 1, margin: 5, borderRadius: 5, display: "flex", justifyContent: "center"}}>
                            <Link href="/Tech/tech">
                                <a>Tech</a>
                            </Link></div>
                    </Col>
                    <Col span={1}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                </Row>
            </Header>
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
            <Footer style={{ textAlign: 'center' }}>Shadow Luna ©2022 Created by Christina</Footer>
        </Layout>
    )
}
