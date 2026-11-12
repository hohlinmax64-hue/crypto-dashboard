import { SearchOutlined } from "@ant-design/icons";

export function InputSearch() {

    return (
        <div className="relative">
            <SearchOutlined className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted w-[14px] h-[14px]" />

            <input
                className="w-[250px] bg-surface border border-border rounded-[8px] text-text-muted text-sm py-3.5 pl-10 pr-3.5 outline-none"
                placeholder="Search assets..."
            />
        </div>
    )
}