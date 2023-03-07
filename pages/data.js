import Head from 'next/head';
import pool from '@/database/db';

export default function Data({ bookings }) {
  return (
    <div>
      <Head>
        <title>Booking Data</title>
      </Head>
      <a></a>
      <h1>Booking Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nomor ruangan</th>
            <th>Tanggal Pinjam</th>
            <th>dipinjam oleh</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className='text-red bg-teal-600'>{booking.id}</td>
              <td>{booking.room_number}</td>
              <td>{booking.booking_date}</td>
              <td>{booking.booked_by}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const [rows] = await pool.query('SELECT * FROM bookings');

  return {
    props: {
      bookings: rows
    }
  };
}
