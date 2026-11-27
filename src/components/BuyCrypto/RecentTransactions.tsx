import { Space, Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Asset',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Type',
        dataIndex: 'age',
        key: 'age',
        render: () => <p className='text-accent font-semibold'>Purchase</p>,
    },
    {
        title: 'Data',
        dataIndex: 'address',
        key: 'address',
        render: () => <p className='text-text-muted font-semibold'>{new Date(Date.now()).toLocaleString('ru-RU')}</p>,
    },
    {
        title: 'Amount',
        key: 'action',
        render: () => (
            <div className='flex gap-2' >
                <p>0.0007546$</p>
                <p className='text-text-muted'>($500.00)</p>
            </div>
        ),
    },
    {
        title: 'Status',
        key: 'action',
        render: () => (
            <Space size="medium">
                <span className="inline-flex items-center gap-2 w-fit px-2 py-1 rounded-sm text-xs text-slate-200 bg-emerald-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Completed
                    </span>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
];

export default function RecentTransactions() {

    return (
        <div className="bg-surface p-4 border border-border rounded-xl">
            <div className='flex justify-between items-center'>
                <h2 className='text-text-white text-xl font-semibold'>Reacent Transactions</h2>
                <button className='text-accent'>View All</button>
            </div>
            <Table
                className='table-transactions'
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    )
}