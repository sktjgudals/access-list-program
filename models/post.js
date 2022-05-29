const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type:Sequelize.STRING(15),
                allowNull:true,
            },cardId:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },subject:{
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            temp: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },date:{
                type:Sequelize.DATEONLY,
                defaultValue: Sequelize.NOW
            }
        },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'Post',
                tableName: 'posts',
                paranoid: true,
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci',
            });
    }
    static associate(db) {
        db.Post.belongsTo(db.User);
    }
};