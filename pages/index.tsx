import { Breadcrumb, Layout, Menu, Input, Avatar, Col, Row  } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;

const items = [
    { label: 'Blog', key: 'item-1' },
    { label: 'Tech', key: 'item-2' },
    { label: 'About', key: 'item-3' },
    { label: 'Diary', key: 'item-4' },
    { label: 'Comment', key: 'item-5' },
]

export default function Home() {
  return (
      <Layout className="layout">
          <Header style={{ backgroundColor: 'whitesmoke' , flexDirection: 'row' }}>
              <Row justify="space-between">
                  <Col span={5}>
                      <h3>Shadow Luna</h3>
                  </Col>
                  <Col span={5}>
                      <Input placeholder="input here" prefix={<SearchOutlined />} />
                  </Col>
                  <Col span={5}>
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
              <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Shadow Luna ©2022 Created by Christina</Footer>
      </Layout>
  )
}
