interface BarData {
  label: string;
  value: number;
}

interface SimpleBarChartProps {
  data: BarData[];
  title: string;
  maxValue?: number;
}

export const SimpleBarChart = ({ data, title, maxValue }: SimpleBarChartProps) => {
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div className="card-elevated p-6">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="flex items-end justify-between gap-2 h-48">
        {data.map((item, index) => (
          <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
            <span className="text-sm font-medium">{item.value}</span>
            <div className="w-full relative h-40 bg-muted rounded-t-lg overflow-hidden">
              <div 
                className="chart-bar absolute bottom-0 w-full"
                style={{ 
                  height: `${(item.value / max) * 100}%`,
                  animationDelay: `${index * 0.1}s`
                }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
