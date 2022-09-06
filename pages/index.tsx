import Head from "next/head";
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const items = [
    { label: 'Blog', key: 'item-1' },
    { label: 'Tech', key: 'item-2' },
    { label: 'About', key: 'item-3' },
    { label: 'Diary', key: 'item-4' },
]

export default function Home() {
  return (
      <Layout className="layout">
          <Header>
              <div className="logo" />
              <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['item-1']}
                  items={items}
              />
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
