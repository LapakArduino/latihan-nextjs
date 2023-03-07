const db = require("../models");

const createBooking = async (req, res) => {
  const { room_number, booking_date, booked_by } = req.body;
  try {
    const booking = await db.Booking.create({
      room_number,
      booking_date,
      booked_by,
    });
    res.status(201).json({ booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createBooking };
