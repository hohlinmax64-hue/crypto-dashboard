import MenuApp from "./MenuApp.tsx";
import { Layout } from "antd";

export default function Sidebar() {
    return (
        <Layout.Sider trigger={null} collapsible>
            <div className="demo-logo-vertical "/>
            <div className='bg-sidbar text-white '>
                <div className='px-5 pt-5'>
                    <span className='flex items-center gap-1 mb-5'>
                        <p className='text-dark text-xl text-center font-bold w-6 h-1/2 bg-accent border border-accent rounded-md'>C</p>
                        <h2 className='text-lg font-bold'>CryptoView</h2>
                    </span>
                    <p className='font-semibold text-xs text-text-muted mb-13'>MARKET INTELLIGENCE</p>
                </div>
                <MenuApp />
            </div>
        </Layout.Sider>
    )
}