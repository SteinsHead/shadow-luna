import { Breadcrumb, Layout, Menu, List, Input, Avatar, Col, Row, Card, Divider, Tag  } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout;

const items = [
    { label: 'Blog', key: 'item-1' },
    { label: 'Tech', key: 'item-2' },
    { label: 'About', key: 'item-3' },
    { label: 'Diary', key: 'item-4' },
]

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];

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
                    <Col span={7}>
                        <Menu items={items} mode="horizontal" />
                    </Col>
                    <Col span={1}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                </Row>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>Content</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ margin: "0 auto", maxWidth: "100rem"}} >
                    <Tag style={{ margin: 20, width: 100 }} color="blue">every day love</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                    </div>
                    <Tag style={{ margin: 20, width: 100 }} color="blue">write and think</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                    </div>
                    <Tag style={{ margin: 20, width: 100 }} color="blue">try to do</Tag>
                    <div className="container" style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "nowrap"}}>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                        <div className="card" style={{ height: 150, width: 250, backgroundColor: '#e7efdf', borderRadius: 5, margin: 10, flexShrink: 0 }}></div>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Shadow Luna ©2022 Created by Christina</Footer>
        </Layout>
    )
}
