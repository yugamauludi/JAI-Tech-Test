'use strict';

const {
  hashPassword
} = require('../helpers/password');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let data = require('../data/user.json')
    data.forEach((item) => {
      item.createdAt = new Date()
      item.updatedAt = new Date()
      item.password = hashPassword(item.password)
    })
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null)
  }
};