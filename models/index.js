const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const User = require('./user');
const Post = require('./post');

const Mon = require('./mon');
const Mona = require('./mona');

const Tue = require('./tue');
const Tuea = require('./tuea');

const Wed = require('./wed');
const Weda = require('./weda');

const Thu = require('./thu');
const Thua =require('./thua');

const Fri = require('./fri');
const Fria = require('./fria')
const db = {};

const sequelize = new Sequelize(
    config.database,config.username,config.password,config
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;

db.Mon = Mon;
db.Mona =Mona;

db.Tue = Tue;
db.Tuea =Tuea;

db.Wed = Wed;
db.Weda= Weda;

db.Thu = Thu;
db.Thua= Thua;

db.Fri = Fri;
db.Fria = Fria;

User.init(sequelize);
Post.init(sequelize);
Mon.init(sequelize);
Mona.init(sequelize);
Tue.init(sequelize);
Tuea.init(sequelize);
Wed.init(sequelize);
Weda.init(sequelize);
Thu.init(sequelize);
Thua.init(sequelize);
Fri.init(sequelize);
Fria.init(sequelize);

User.associate(db);
Post.associate(db);
Mon.associate(db);
Mona.associate(db);
Tue.associate(db);
Tuea.associate(db);
Wed.associate(db);
Weda.associate(db);
Thu.associate(db);
Thua.associate(db);
Fri.associate(db);
Fria.associate(db);

module.exports =db;
