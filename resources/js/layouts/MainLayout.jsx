import React, { useState } from 'react';
import {

  GithubFilled,
  UploadOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  { key: '1', icon: <UploadOutlined />, label: 'Upload Media' },
  { key: '2', icon: <GithubFilled />, label: 'GitHub' },

];

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="dark"
      >
        <div style={{
          height: 32,
          margin: 16,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: borderRadiusLG,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: collapsed ? '10px' : '14px'
        }}>
          {collapsed ? 'SENTUH' : 'SENTUH WEBSOCKET'}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ title: 'Media' }, { title: 'List' }]}
          />

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children || "Selamat Datang di SENTUH WEBSOCKET CMS!"}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Sentuh WebSocket ©{new Date().getFullYear()} Created by Fadhil Khusnul Hakim
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
