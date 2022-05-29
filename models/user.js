const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },cardId:{
                type:Sequelize.STRING(30),
                allowNull:true,
                unique:true
            },
            subject:{
                type:Sequelize.STRING(50),
                allowNull:true,
            }
         } ,{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:true,
            charset:'utf8mb4',
            collate:'utf8mb4_general_ci',
        });
    }
    static associate(db){
      db.User.hasMany(db.Post);
      db.User.hasMany(db.Mon);
      db.User.hasMany(db.Mona);
      db.User.hasMany(db.Tue);
      db.User.hasMany(db.Tuea);
      db.User.hasMany(db.Wed);
      db.User.hasMany(db.Weda);
      db.User.hasMany(db.Thu);
      db.User.hasMany(db.Thua);
      db.User.hasMany(db.Fri);
      db.User.hasMany(db.Fria);
    }
}