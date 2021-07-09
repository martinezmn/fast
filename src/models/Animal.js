const { Model, DataTypes, Sequelize } = require('sequelize');
const PostAnimal = require('./PostAnimal');
const Breed = require('./Breed');

class animal extends Model {
    static init(sequelize) {
        super.init({
            institute_id: {
                type: DataTypes.BIGINT,
                references: { model: 'profiles', key: 'id' }
            },
            name: {
                type: DataTypes.STRING,
                validate: {
                    is: /^[-\w ]+$/,
                    min: 4,
                    max: 40
                }
            },
            birthdate: {
                type: DataTypes.DATEONLY
            },
            profile_picture: {
                type: DataTypes.STRING,
                validate: {
                    max: 250
                }
            },
            breed_id: {
                type: DataTypes.STRING,
                references: { model: 'breeds', key: 'id' }
            },
            posts_count: {
                type: DataTypes.INTEGER
            },
        }, {
            updatedAt: 'updated_at',
            createdAt: 'created_at',
            sequelize
        });
    }

    static async findAllByPostId(post_id) {
        PostAnimal.belongsTo(this);
        this.belongsTo(Breed);

        return await PostAnimal.findAll({
            include: [{ model: this, include: [{ model: Breed, attributes: [] }], attributes: [] }],
            attributes: [
                [Sequelize.col('animal.id'), 'id'],
                [Sequelize.col('animal.name'), 'name'],
                [Sequelize.col('animal.profile_picture'), 'profile_picture'],
                [Sequelize.col('animal.breed.specie'), 'specie'],
                [Sequelize.col('animal.breed.breed'), 'breed']
            ],
            raw: true,
            where: { post_id }
        });
    }
}

module.exports = animal;
