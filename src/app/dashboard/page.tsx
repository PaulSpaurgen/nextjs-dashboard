import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DashboardPageComponent = dynamic(
  () => import('@/lib/page-components/DashboardPageComponent'),
);

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className='flex items-center justify-center h-screen bg-black absolute top-0 left-0 z-50'>Loading...</div>}>
      <DashboardPageComponent />
    </Suspense>
  );
}

