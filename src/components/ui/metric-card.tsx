import React from 'react';

type MetricCardProps = {
  label: string;
  value: number;
  unit: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
};

export function MetricCard({ label, value, unit, icon, trend, className = '' }: MetricCardProps) {
  return (
    <div className={`rounded-[var(--ec-r-lg)] shadow-[var(--ec-sh-sm)] bg-[var(--ec-n-0)] p-6 border border-[var(--ec-n-200)] ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-[var(--ec-n-600)]">{label}</div>
        {icon && (
          <div className="text-[var(--ec-brand)] w-5 h-5">{icon}</div>
        )}
      </div>
      
      <div className="flex items-baseline gap-2">
        <div className="text-4xl font-semibold tabular-nums text-[var(--ec-secondary)]">
          {value.toLocaleString()}
        </div>
        <span className="text-lg text-[var(--ec-n-600)]">{unit}</span>
      </div>
      
      {trend && (
        <div className={`mt-2 text-sm font-medium ${trend.isPositive ? 'text-[var(--ec-success)]' : 'text-[var(--ec-error)]'}`}>
          {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
        </div>
      )}
    </div>
  );
}