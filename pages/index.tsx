import Head from "next/head";
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
      <Layout className="layout">
          <Header>
              <div className="logo" />
              <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  items={new Array(4).fill(null).map((_, index) => {
                      const key = index + 1;
                      return {
                          key,
                          label: `nav ${key}`,
                      };
                  })}
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
