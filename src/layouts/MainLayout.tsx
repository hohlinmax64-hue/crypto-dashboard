import { Layout } from 'antd';
import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Content from "../components/Content.tsx";

export default function MainLayout() {

    return (
        <Layout className='min-h-screen'>
            <Sidebar />
            <Layout >
                <Header />
                <Content />
            </Layout>
        </Layout>
    )
}