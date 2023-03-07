'use strict';
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookings', [
      {
        room_number: 101,
        booking_date: moment().subtract(1, 'day').format('YYYY-MM-DD'),
        booked_by: 'John Doe',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        room_number: 102,
        booking_date: moment().format('YYYY-MM-DD'),
        booked_by: 'Jane Smith',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        room_number: 103,
        booking_date: moment().add(1, 'day').format('YYYY-MM-DD'),
        booked_by: 'Mark Johnson',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bookings', null, {});
  }
};
