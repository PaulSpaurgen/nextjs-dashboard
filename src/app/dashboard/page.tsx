import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { DashboardProvider } from '@/lib/context/DashboardContext';

const DashboardPageComponent = dynamic(
  () => import('@/lib/page-components/DashboardPageComponent'),
);

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardProvider>
        <DashboardPageComponent />
      </DashboardProvider>
    </Suspense>
  );
}

