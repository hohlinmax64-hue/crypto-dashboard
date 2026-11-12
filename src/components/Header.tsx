import {Layout} from 'antd'
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {InputSearch as Input} from './Input.tsx'

export default function Header() {
    return (
        <>
            <Layout.Header
                style={{
                    backgroundColor: '#0B0F14',
                    height: 'auto',
                    padding: '0 36px',
                }}>
                <div className="flex items-center justify-between">
                    <div className='mt-[28px] mb-1'>
                        <h2 className='text-text-white text-[27px] font-bold mb-1 leading-tight'>
                            Dashboard
                        </h2>
                        <p className='text-text-muted text-sm'>
                            Your daily snapshot of the crypto market
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center gap-4'>
                            <Input />
                                <button className='flex justify-center items-center w-[40px] h-[40px] text-text-muted rounded-md border border-border hover:border-text-muted transition duration-200'>
                                    <BellOutlined className='text-lg'/>
                                </button>
                                <Avatar
                                    className=''
                                    style={{backgroundColor: 'var(--color-dark)'}}
                                    size="large" icon={<UserOutlined style={{color: 'var(--color-text-muted)'}} />}
                                />
                        </div>
                    </div>
                </div>
                <div className='border-b border-b-gray-600'></div>
            </Layout.Header>
        </>
    )
}