import { Sequelize } from "sequelize";

const sequelize = new Sequelize("cursos_online", "root", "aA123",  {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
