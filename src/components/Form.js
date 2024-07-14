
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import horses from '../data/horses';
import { bookRide } from '../actions';
import toast from 'react-hot-toast';

const Form = () => {
  const [formData, setFormData] = useState({
    horse: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(bookRide(formData));
    toast.success(`Hey ${formData.name} your booking for ${formData.horse} is confirmed !!!`)
    navigate('/confirmation'); 
  };

  return (
    <div className=" bg-gradient-to-t from-blue-950 via-black to-blue-950 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-sky-100 p-4 px-8 rounded shadow-md my-7 w-full max-w-md">
        <div className='bg-gradient-to-b from-blue-500 to-black bg-clip-text hover:from-sky-500 hover:to-sky-500 hover:via-black'>
          <h1 className="text-2xl text-transparent font-bold mb-2">Book Your Ride</h1>
        </div>
        <div className="bg-blue-950 p-[0.5px] mb-2"></div>
        <div className="mb-2">
          <label className="font-semibold font-serif">Horse</label>
          <select
            name="horse"
            value={formData.horse}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          >
            <option value="" disabled>Select a horse</option>
            {horses.map((horse) => (
              <option key={horse.id} value={horse.name}>{horse.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="font-semibold font-serif">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold font-serif">Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          >
            <option value="" disabled>Select a time slot</option>
            {Array.from({ length: 9 }, (_, i) => (
              <option key={i} value={`${15 + i}:00`}>{`${15 + i}:00 - ${16 + i}:00`}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="font-semibold font-serif">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="font-semibold font-serif">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="font-semibold font-serif">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <button type="submit" className="mt-2 font-mono bg-gradient-to-tr from-blue-800 to-black hover:bg-gradient-to-tl hover:from-blue-600 hover:to-black text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Form;
