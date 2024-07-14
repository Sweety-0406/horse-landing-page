
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { generateCalendar } from '../utils/calendar';

const ConfirmationDetail = () => {
  const booking = useSelector(state => state.booking);
  const navigate = useNavigate();
  const id = 

  useEffect(() => {
    if (booking) {
      const invite = generateCalendar(booking);
      const blob = new Blob([invite], { type: 'text/calendar' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      // link.download = 'booking.ics';
      link.click();
    } else {
      navigate('/booking');
    }
  }, [booking, navigate]);

  if (!booking) {
    return null;
  }

  return (
    <div className="  bg-gradient-to-t  from-blue-950 via-black to-blue-950 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg shadow-blue-200 p-6 py-4 rounded-lg  w-full max-w-lg text-center">
        <div className="bg-blue-100 p-3 rounded-t-lg">
          <h1 className="text-2xl font-bold">Booking Confirmation</h1>
        </div>
        <div className="border-t-2 border-gray-200 pt-2">
          <p className="text-lg mb-2">Thank you, <span className='font-bold'>{booking.formData.name}</span>, for booking a ride with us.</p>
          <p className="text-sm mb-2"><strong>Horse: </strong> {booking.formData.horse}</p>
          <p className="text-sm mb-2"><strong>Date: </strong> {booking.formData.date}</p>
          <p className="text-sm mb-2"><strong>Time: </strong> {booking.formData.time}</p>
          <p className="text-sm mb-2"><strong>Email: </strong> {booking.formData.email}</p>
          <p className="text-sm mb-2"><strong>Phone: </strong> {booking.formData.phone}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 py-2 rounded-b-lg mt-4">
          <div className="text-center">
            <p className="text-lg font-semibold">{new Date(booking.formData.date).getDate()}</p>
            <p className="text-sm">{new Date(booking.formData.date).toLocaleString('default', { month: 'long' })}</p>
            <p className="text-xs">{booking.formData.time}</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Booking ID</p>
            <p className="text-lg font-semibold">{booking.id}</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 mt-4 rounded-lg">
          <p className="text-lg font-bold">CONGRATULATIONS!</p>
          <p className="text-sm">Your Ride with us</p>
          <p className="text-md font-bold">10% OFF</p>
          <p className="text-sm">on your next ride</p>
          <p className="text-md font-bold mt-2">{booking.id}</p>
        </div>
        <div className="mt-2">
          <button
            onClick={() => navigate('/')}
            className="mt-2 hover:shadow-lg hover:shadow-black font-mono bg-gradient-to-tr from-blue-800 to-black hover:bg-gradient-to-tl hover:from-blue-600 hover:to-black text-white px-4 py-2 rounded"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDetail;
