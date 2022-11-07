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
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0, overflow: "hidden" }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#12dfe3', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#7cabd7', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#ecda4a', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tag style={{ marginTop: 30, width: 100, marginBottom: 30, marginLeft: 10 }} color="blue">write and think</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0, overflow: "hidden" }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#12dfe3', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#7cabd7', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#ecda4a', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tag style={{ marginTop: 30, width: 100, marginBottom: 30, marginLeft: 10 }} color="blue">try to do</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#bdaac1', borderRadius: 5, margin: 10, flexShrink: 0, overflow: "hidden" }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#12dfe3', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#7cabd7', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#ecda4a', borderRadius: 5, margin: 10, flexShrink: 0 }}>
                            <div className="shader" style={{ background: "linear-gradient(rgba(38,69,61,.333),#26453da8)", paddingTop: 10, paddingLeft: 25, paddingRight: 25, backdropFilter: "saturate(180%) blur(15px)", height: 40, position: "relative", top: 110}}>
                                <div className="mask" style={{ textOverflow: "clip", width: "100%", overflow: "hidden", position: "relative", whiteSpace: "nowrap", color: "hsla(0,0%,100%,.719)"}}>
                                    <span>开发 shadow 的设计与交互测测试文字</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}
