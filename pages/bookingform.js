import React, { useState } from "react";

const BookingForm = () => {
  const [roomName, setRoomName] = useState("");
  const [date, setDate] = useState("");
  const [borrowerName, setBorrowerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data form ke server atau melakukan validasi di sini
    console.log(roomName, date, borrowerName);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-4 mx-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="roomName">
          Nama Ruangan
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="roomName"
          type="text"
          placeholder="Masukkan nama ruangan"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </div>
      <div className="mb-4 mx-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
          Tanggal
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          placeholder="Masukkan tanggal peminjaman"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-6 mx-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="borrowerName">
          Nama Peminjam
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="borrowerName"
          type="text"
          placeholder="Masukkan nama peminjam"
          value={borrowerName}
          onChange={(e) => setBorrowerName(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
