
import { format } from 'date-fns';

export const generateCalendar = (booking) => {
  const { name, date, time } = booking;
  const formattedDate = format(new Date(`${date}T${time}:00`), 'yyyyMMddTHHmmss');

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Horse Ride with ${name}
DTSTART:${formattedDate}
DTEND:${formattedDate}
DESCRIPTION:Enjoy your horse ride with ${name}.
END:VEVENT
END:VCALENDAR
  `;

  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'booking-invite.ics';
  a.click();

  URL.revokeObjectURL(url);
};
