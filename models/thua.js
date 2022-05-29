const Sequelize = require('sequelize');

module.exports = class Thua extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type:Sequelize.STRING(15),
                allowNull:false,
            },cardId:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
            subject:{
                type:Sequelize.STRING(50),
                allowNull:true,
            },
        },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'Thua',
                tableName: 'thuas',
                paranoid: true,
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci',
            });
    }
    static associate(db) {
        db.Thua.belongsTo(db.User);
    }
};