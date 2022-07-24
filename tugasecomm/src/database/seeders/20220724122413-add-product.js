'use strict';

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
        await queryInterface.bulkInsert('products', [{
            nama_product: "laptopya",
            deskripsi: "ini adalah laptop",
            stok: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
            tersedia: false,
        }, {
            nama_product: "laptopi",
            deskripsi: "ini adalah laptop",
            stok: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
            tersedia: false,
        }, {
            nama_product: "laptopi",
            deskripsi: "ini adalah laptop",
            stok: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
            tersedia: false,
        }, {
            nama_product: "laptopi",
            deskripsi: "ini adalah laptop",
            stok: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
            tersedia: false,
        }, {
            nama_product: "laptopi",
            deskripsi: "ini adalah laptop",
            stok: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
            tersedia: false,
        }]);

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};