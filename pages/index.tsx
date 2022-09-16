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
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" >
                    <Tag style={{ margin: 10 }} color="blue">every day love</Tag>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    style={{ borderRadius: 10, margin: 10 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                >
                                    <Meta
                                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                        title={item.title}
                                        description="This is the description"
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                    <Tag style={{ margin: 10 }} color="blue">write and think</Tag>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    style={{ borderRadius: 10, margin: 10 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                >
                                    <Meta
                                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                        title={item.title}
                                        description="This is the description"
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Shadow Luna ©2022 Created by Christina</Footer>
        </Layout>
    )
}
