import { cn } from '@/lib/utils';
import React from 'react';

export type CalendarEvent = {
  id: string;
  title: string;
  date: string; // ISO date
  location?: string;
};

interface EventCalendarProps {
  title?: string;
  events: CalendarEvent[];
  className?: string;
}

// Minimal calendar list for upcoming events; API-ready for Google Calendar
export function EventCalendar({ title, events, className }: EventCalendarProps) {
  const sorted = [...events].sort((a, b) => +new Date(a.date) - +new Date(b.date));

  return (
    <section className={cn('bg-white rounded-lg shadow-sm border border-njcpGold/20', className)}>
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold text-njcpBlack">{title}</h3>}
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {sorted.map((evt) => {
          const dt = new Date(evt.date);
          const formatted = dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
          return (
            <li key={evt.id} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-njcpBlack">{evt.title}</p>
                <p className="text-sm text-gray-600">{formatted}{evt.location ? ` • ${evt.location}` : ''}</p>
              </div>
              <div className="text-xs px-2 py-1 rounded bg-njcpGold/20 text-njcpBlack border border-njcpGold/40">Upcoming</div>
            </li>
          );
        })}
        {events.length === 0 && (
          <li className="p-4 text-sm text-gray-600">No upcoming events</li>
        )}
      </ul>
    </section>
  );
}