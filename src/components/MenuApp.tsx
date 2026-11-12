import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import {Link} from "react-router-dom";

export default function MenuApp() {
    return (
            <Menu
                className="h-screen"
                style={{backgroundColor: 'var(--color-sidbar)'}}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: <Link to='dashboard'>dashboard</Link>,
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: <Link to='coindetails'>Coin details</Link>,
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: <Link to='markets'>Markets</Link>,
                    },
                    {
                        key: '4',
                        icon: <UploadOutlined />,
                        label: <Link to='portfolio'>Portfolio</Link>,
                    },
                    {
                        key: '5',
                        icon: <UploadOutlined />,
                        label: <Link to='watchlist'>Watchlist</Link>,
                    },
                ]}
            />
    )
}