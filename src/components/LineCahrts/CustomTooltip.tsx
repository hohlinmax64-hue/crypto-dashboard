import type { TooltipContentProps } from 'recharts';

export default function CustomTooltip({active, payload}: TooltipContentProps) {
    if (!active || !payload || !payload.length) {
        return null;
    }

    const price = Number(payload[0].value);
    return (
        <div className="rounded-lg border border-border bg-surface/95 px-3 py-2 shadow-xl backdrop-blur-sm">
            <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs text-text-muted">
                    Price
                </span>
            </div>

            <p className="text-sm font-semibold tabular-nums text-text-white">
                Price
                <span className="ml-2">${
                    price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })
                }</span>
            </p>
        </div>
    );
}