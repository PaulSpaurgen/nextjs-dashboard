import { Suspense } from 'react';

export default function ChartWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="animate-pulse bg-gray-200 rounded-md" style={{
        width: '100%',
        height: '100%',
        minHeight: '200px'
      }}>
      </div>
    }>
      {children}
    </Suspense>
  );
} 