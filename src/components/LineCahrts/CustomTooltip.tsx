import type { TooltipContentProps } from 'recharts';

export default function CustomTooltip({active, payload, label}: TooltipContentProps) {
    if (!active || !payload || !payload.length) {
        return null;
    }
    return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
            <p className="text-medium text-accent text-lg">
                {label}
            </p>

            <p className="text-sm text-blue-400">
                Product 1:
                <span className="ml-2">${payload[0].value}</span>
            </p>
        </div>
    );
}