const Sequelize = require('sequelize');
const dbConfig = require('./config');

const Token = require('../models/Token');
const Profile = require('../models/Profile');
const User = require('../models/User');
const Institute = require('../models/Institute');
const Post = require('../models/Post');
const Animal = require('../models/Animal');
const Like = require('../models/Like');
const Comment = require('../models/Comment');
const Breed = require('../models/Breed');
const InstituteAdmin = require('../models/InstituteAdmin');
const PostAnimal = require('../models/PostAnimal');

const connection = new Sequelize(dbConfig);

Token.init(connection);
Profile.init(connection);
User.init(connection);
Institute.init(connection);
Post.init(connection);
Animal.init(connection);
Like.init(connection);
Comment.init(connection);
Breed.init(connection);
InstituteAdmin.init(connection);
PostAnimal.init(connection);

module.exports = connection;
