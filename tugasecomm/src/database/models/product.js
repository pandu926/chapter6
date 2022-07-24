'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    product.init({
        nama_product: DataTypes.STRING,
        deskripsi: DataTypes.TEXT,
        stok: DataTypes.INTEGER,
        tersedia: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'product',
    });
    return product;
};