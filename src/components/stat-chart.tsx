import { cn } from '@/lib/utils';
import React from 'react';

export type StatDatum = {
  label: string;
  value: number;
};

interface StatChartProps {
  title?: string;
  data: StatDatum[];
  maxValue?: number;
  className?: string;
}

// Accessible, lightweight bar chart using pure CSS (no external libs)
export function StatChart({ title, data, maxValue, className }: StatChartProps) {
  const computedMax = maxValue ?? Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={cn('bg-white rounded-lg shadow-sm border border-njcpGold/20 p-4', className)}>
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-njcpBlack" aria-label={title}>
          {title}
        </h3>
      )}
      <ul role="list" className="space-y-3">
        {data.map((d) => {
          const pct = Math.round((d.value / computedMax) * 100);
          return (
            <li key={d.label} className="flex items-center gap-3">
              <span className="w-24 text-sm text-gray-600" aria-hidden>
                {d.label}
              </span>
              <div className="flex-1 h-3 bg-gray-200 rounded" aria-hidden>
                <div
                  className="h-3 bg-njcpGold rounded"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-12 text-right text-sm font-medium text-njcpBlack" aria-label={`${d.label} value`}>
                {d.value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}