import {Layout} from "antd";
import { Outlet } from "react-router-dom";

export default function Content() {

    return (
        <Layout.Content className='bg-dark px-9'>
            <Outlet />
        </Layout.Content>
    )
}