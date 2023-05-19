import { Sequelize } from 'sequelize';
import config from '../database/config.js';

const Usuario = config.define('user', {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(80),
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    mobile: {
        type: Sequelize.INTEGER
    },
    address: {
        type: Sequelize.STRING(50)
    },
    profile: {
        type: Sequelize.STRING(50)
    }
}, {
    timestamps: false
  });

export default Usuario;
