const { Model, DataTypes } = require('sequelize');
const uniqidHelper = require('../helpers/uniqid.helper');

class Post extends Model {
    static init(sequelize) {
        super.init({
            institute_id: {
                type: DataTypes.STRING,
                references: { model: 'profiles', key: 'id' }
            },
            animal_id: {
                type: DataTypes.STRING,
                references: { model: 'animals', key: 'id' }
            },
            description: {
                type: DataTypes.STRING,
                validate: {
                    max: 250
                }
            },
            content: {
                type: DataTypes.JSON
            },
            likes_count: {
                type: DataTypes.INTEGER
            },
            comments_count: {
                type: DataTypes.INTEGER
            },
        }, {
            hooks: {
                beforeCreate: (post, options) => {
                    post.id = uniqidHelper.generate();
                }
            },
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = Post;
