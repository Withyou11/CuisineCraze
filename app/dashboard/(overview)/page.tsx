import CardWrapper from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { CardsSkeleton } from '@/app/ui/skeletons';
import Chart from '@/components/ui/chart';
import Choropleth from '@/components/ui/choropleth';
import MonthPicker from '@/components/ui/month-picker';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className="h-full flex flex-col ">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div>
          <p className="mb-1 text-lg md:text-xl">Hello, Anna!</p>
          <p className="text-zinc-500 mb-0">
            Here is what is happening with your store today.
          </p>
        </div>
        <div>
          <MonthPicker />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="flex-grow grid gap-6 grid-cols-1 lg:grid-cols-2 h-80">
        <Chart />
        <Choropleth />
      </div>
    </main>
  );
}
