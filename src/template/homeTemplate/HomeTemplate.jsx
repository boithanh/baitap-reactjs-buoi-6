import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const items = new Array(1).fill(null).map((_, index) => ({
    key: index + 1,
    label: `Home`,
}));
const HomeTemplate = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="min-h-screen">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    width: '100%',
                    top: '0',
                    background: 'rgba(0,0,0,0.8)'
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        background: 'rgba(0,0,0,0.8)'
                    }}
                />
            </Header>
            <Content
            // style={{
            //     padding: '0 48px',
            // }}
            >
                <div
                    style={{
                        background: colorBgContainer,
                        // minHeight: "100vh",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            {/* <Footer
                style={{
                    textAlign: 'center',
                    background: "rgba(0,0,0,0.8)",
                    color: "white",
                    position: "absolute",
                    width: "100%",
                    bottom: 0
                }}
            >
                Ticket movie project by Bối Thạnh
            </Footer> */}
        </Layout>
    );
};
export default HomeTemplate;