'use client';
import React, { useEffect, useState } from 'react';

function MonthPicker() {
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();
    // Format it to YYYY-MM
    const formattedMonth = currentDate.toISOString().slice(0, 7);
    setSelectedMonth(formattedMonth); // Set the default selected month to the current month
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const month = e.target.value;
    setSelectedMonth(month);
  };

  return (
    <div className="max-w-sm space-y-3">
      <div>
        <label htmlFor="month-picker" className="sr-only">
          Select Month
        </label>
        <div className="flex rounded-lg shadow-sm ">
          <input
            type="month"
            id="month-picker"
            name="month-picker"
            value={selectedMonth}
            onChange={handleInputChange}
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 appearance-none"
            onFocus={(e) => e.target.showPicker()}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthPicker;
